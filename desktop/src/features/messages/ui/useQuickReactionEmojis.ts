import * as React from "react";

import {
  loadActiveCommunityId,
  loadCommunities,
} from "@/features/communities/communityStorage";
import type { CustomEmoji } from "@/shared/lib/remarkCustomEmoji";

const QUICK_REACTION_STORAGE_KEY = "buzz.quick-reaction-emojis.v1";
const PINNED_REACTION_STORAGE_KEY = "buzz.pinned-reaction-emojis.v1";
const DEFAULT_QUICK_REACTIONS = ["👍", "❤️", "😂", "🎉"] as const;
const MAX_STORED_REACTIONS = 24;
const MAX_PINNED_REACTIONS = 16;
const sessionQuickReactionEmojis = new Map<string, string[]>();

type QuickReactionEntry = {
  count: number;
  emoji: string;
  lastUsedAt: number;
};

function canUseLocalStorage() {
  if (typeof window === "undefined") return false;

  try {
    return Boolean(window.localStorage);
  } catch {
    return false;
  }
}

function getActiveCommunityScope() {
  if (!canUseLocalStorage()) return null;

  try {
    return loadActiveCommunityId() ?? loadCommunities()[0]?.id ?? null;
  } catch {
    return null;
  }
}

function pinnedReactionStorageKey(communityScope: string | null): string {
  return communityScope
    ? `${PINNED_REACTION_STORAGE_KEY}:${communityScope}`
    : PINNED_REACTION_STORAGE_KEY;
}

export function getPinnedReactionEmojis(
  communityScope?: string | null,
): string[] {
  if (!canUseLocalStorage()) return [];
  const scope =
    communityScope !== undefined ? communityScope : getActiveCommunityScope();
  try {
    const raw = window.localStorage.getItem(pinnedReactionStorageKey(scope));
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is string => typeof e === "string" && e.trim().length > 0,
    );
  } catch {
    return [];
  }
}

export function pinReactionEmoji(emoji: string): void {
  const trimmed = emoji.trim();
  if (!trimmed) return;
  const communityScope = getActiveCommunityScope();
  const storageKey = pinnedReactionStorageKey(communityScope);
  const pinned = getPinnedReactionEmojis(communityScope);
  if (pinned.includes(trimmed)) return;
  const next = [...pinned, trimmed].slice(0, MAX_PINNED_REACTIONS);
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    // Invalidate session cache so hooks re-read on next access
    sessionQuickReactionEmojis.clear();
  } catch {}
}

export function unpinReactionEmoji(emoji: string): void {
  const trimmed = emoji.trim();
  if (!trimmed) return;
  const communityScope = getActiveCommunityScope();
  const storageKey = pinnedReactionStorageKey(communityScope);
  const next = getPinnedReactionEmojis(communityScope).filter(
    (e) => e !== trimmed,
  );
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    sessionQuickReactionEmojis.clear();
  } catch {}
}

export function isReactionEmojiPinned(emoji: string): boolean {
  return getPinnedReactionEmojis().includes(emoji.trim());
}

/** Reset module-level session cache (call on community switch). */
export function resetQuickReactionSessionCache(): void {
  sessionQuickReactionEmojis.clear();
}

function quickReactionStorageKey(communityScope: string | null) {
  return communityScope
    ? `${QUICK_REACTION_STORAGE_KEY}:${communityScope}`
    : QUICK_REACTION_STORAGE_KEY;
}

function quickReactionSessionKey(
  limit: number,
  communityScope: string | null,
  customEmojiSignature: string,
) {
  return `${communityScope ?? "global"}:${customEmojiSignature}:${limit}`;
}

function normalizeEntry(entry: unknown): QuickReactionEntry | null {
  if (!entry || typeof entry !== "object") return null;

  const candidate = entry as Partial<QuickReactionEntry>;
  if (
    typeof candidate.emoji !== "string" ||
    candidate.emoji.trim().length === 0
  ) {
    return null;
  }

  return {
    count: Math.max(1, Math.floor(Number(candidate.count) || 1)),
    emoji: candidate.emoji,
    lastUsedAt: Math.max(0, Number(candidate.lastUsedAt) || 0),
  };
}

function sortEntries(entries: QuickReactionEntry[]) {
  return [...entries].sort((left, right) => {
    const countDelta = right.count - left.count;
    if (countDelta !== 0) return countDelta;
    return right.lastUsedAt - left.lastUsedAt;
  });
}

function readQuickReactionEntries(storageKey: string) {
  if (!canUseLocalStorage()) return [];

  try {
    const raw = window.localStorage.getItem(storageKey);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return sortEntries(
      parsed
        .map((entry) => normalizeEntry(entry))
        .filter((entry): entry is QuickReactionEntry => entry !== null),
    );
  } catch {
    return [];
  }
}

function writeQuickReactionEntries(
  entries: QuickReactionEntry[],
  storageKey: string,
) {
  if (!canUseLocalStorage()) return;

  try {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify(sortEntries(entries).slice(0, MAX_STORED_REACTIONS)),
    );
  } catch {
    // Ignore storage failures; the reaction itself should still work.
  }
}

function customEmojiSignature(customEmoji: ReadonlyArray<CustomEmoji>) {
  return customEmoji
    .map((emoji) => emoji.shortcode.toLowerCase())
    .sort()
    .join(",");
}

function customEmojiShortcodesFromSignature(signature: string) {
  return new Set(signature ? signature.split(",") : []);
}

function isCustomEmojiShortcode(emoji: string) {
  return emoji.startsWith(":") && emoji.endsWith(":");
}

function canRenderQuickReactionEmoji(
  emoji: string,
  customEmojiShortcodes: ReadonlySet<string>,
) {
  if (!isCustomEmojiShortcode(emoji)) return true;
  return customEmojiShortcodes.has(emoji.slice(1, -1).toLowerCase());
}

function resolveQuickReactionEmojisWithShortcodes(
  pinnedEmojis: ReadonlyArray<string>,
  entries: ReadonlyArray<Pick<QuickReactionEntry, "emoji">>,
  limit: number,
  customEmojiShortcodes: ReadonlySet<string>,
) {
  const seen = new Set<string>();
  const next: string[] = [];

  // Pinned emojis come first.
  for (const emoji of pinnedEmojis) {
    if (seen.has(emoji)) continue;
    if (!canRenderQuickReactionEmoji(emoji, customEmojiShortcodes)) continue;
    seen.add(emoji);
    next.push(emoji);
    if (next.length >= limit) return next;
  }

  // Then frequently used.
  for (const entry of entries) {
    if (seen.has(entry.emoji)) continue;
    if (!canRenderQuickReactionEmoji(entry.emoji, customEmojiShortcodes)) {
      continue;
    }
    seen.add(entry.emoji);
    next.push(entry.emoji);
    if (next.length >= limit) return next;
  }

  // Finally defaults as fallback.
  for (const emoji of DEFAULT_QUICK_REACTIONS) {
    if (seen.has(emoji)) continue;
    seen.add(emoji);
    next.push(emoji);
    if (next.length >= limit) return next;
  }

  return next;
}

export function resolveQuickReactionEmojis(
  entries: ReadonlyArray<Pick<QuickReactionEntry, "emoji">>,
  limit: number,
  customEmoji: ReadonlyArray<CustomEmoji> = [],
  pinnedEmojis: ReadonlyArray<string> = [],
) {
  return resolveQuickReactionEmojisWithShortcodes(
    pinnedEmojis,
    entries,
    limit,
    customEmojiShortcodesFromSignature(customEmojiSignature(customEmoji)),
  );
}

function getQuickReactionEmojis(
  limit: number,
  communityScope: string | null,
  customEmojiSignature: string,
) {
  return resolveQuickReactionEmojisWithShortcodes(
    getPinnedReactionEmojis(communityScope),
    readQuickReactionEntries(quickReactionStorageKey(communityScope)),
    limit,
    customEmojiShortcodesFromSignature(customEmojiSignature),
  );
}

function getSessionQuickReactionEmojis(
  limit: number,
  communityScope: string | null,
  customEmojiSignature: string,
) {
  const sessionKey = quickReactionSessionKey(
    limit,
    communityScope,
    customEmojiSignature,
  );
  const cached = sessionQuickReactionEmojis.get(sessionKey);
  if (cached) return cached;

  const emojis = getQuickReactionEmojis(
    limit,
    communityScope,
    customEmojiSignature,
  );
  sessionQuickReactionEmojis.set(sessionKey, emojis);
  return emojis;
}

export function recordQuickReactionEmoji(emoji: string) {
  const trimmed = emoji.trim();
  if (!trimmed) return;

  const communityScope = getActiveCommunityScope();
  const storageKey = quickReactionStorageKey(communityScope);
  const entries = readQuickReactionEntries(storageKey);
  const existing = entries.find((entry) => entry.emoji === trimmed);
  if (existing) {
    existing.count += 1;
    existing.lastUsedAt = Date.now();
  } else {
    entries.push({
      count: 1,
      emoji: trimmed,
      lastUsedAt: Date.now(),
    });
  }

  // Keep the current hover tray stable; the stored recents apply on reload or
  // when another tab updates this community's quick reactions.
  writeQuickReactionEntries(entries, storageKey);
}

export function useQuickReactionEmojis(
  limit = 4,
  customEmoji: ReadonlyArray<CustomEmoji> = [],
) {
  const communityScope = getActiveCommunityScope();
  const customEmojiCacheKey = customEmojiSignature(customEmoji);
  const [emojis, setEmojis] = React.useState(() =>
    getSessionQuickReactionEmojis(limit, communityScope, customEmojiCacheKey),
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const storageKey = quickReactionStorageKey(communityScope);
    const sessionKey = quickReactionSessionKey(
      limit,
      communityScope,
      customEmojiCacheKey,
    );
    const handleStorage = (event: StorageEvent) => {
      if (event.key === storageKey) {
        sessionQuickReactionEmojis.delete(sessionKey);
        setEmojis(
          getSessionQuickReactionEmojis(
            limit,
            communityScope,
            customEmojiCacheKey,
          ),
        );
      }
    };

    window.addEventListener("storage", handleStorage);
    setEmojis(
      getSessionQuickReactionEmojis(limit, communityScope, customEmojiCacheKey),
    );

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [customEmojiCacheKey, limit, communityScope]);

  return emojis;
}

/**
 * Reactive list of pinned reaction emojis for the active community.
 * Updates when localStorage changes (e.g. pin/unpin from another component).
 */
export function usePinnedReactionEmojis(): string[] {
  const communityScope = getActiveCommunityScope();
  const [pinned, setPinned] = React.useState(() =>
    getPinnedReactionEmojis(communityScope),
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const storageKey = pinnedReactionStorageKey(communityScope);
    const handleStorage = (event: StorageEvent) => {
      if (event.key === storageKey) {
        setPinned(getPinnedReactionEmojis(communityScope));
      }
    };
    // Sync on mount in case another component changed pinned state
    setPinned(getPinnedReactionEmojis(communityScope));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [communityScope]);

  return pinned;
}
