import * as React from "react";
import { useTranslation } from "react-i18next";

import {
  resolveUserLabel,
  type UserProfileLookup,
} from "@/features/profile/lib/identity";
import { ProfileAvatar } from "@/features/profile/ui/ProfileAvatar";
import type { Channel } from "@/shared/api/types";
import { cn } from "@/shared/lib/cn";
import { Shimmer } from "@/shared/ui/Shimmer";
import { truncatePubkey } from "@/shared/lib/pubkey";

type TypingIndicatorRowProps = {
  channel: Channel | null;
  className?: string;
  currentPubkey?: string;
  profiles?: UserProfileLookup;
  typingPubkeys: string[];
  variant?: "default" | "activity";
};

function resolveFallbackName(channel: Channel | null, pubkey: string) {
  if (channel?.channelType !== "dm") {
    return null;
  }

  const participantIndex = channel.participantPubkeys.findIndex(
    (candidate) => candidate.toLowerCase() === pubkey.toLowerCase(),
  );

  if (participantIndex < 0) {
    return null;
  }

  return channel.participants[participantIndex] ?? null;
}

export function TypingIndicatorRow({
  channel,
  className,
  currentPubkey,
  profiles,
  typingPubkeys,
  variant = "default",
}: TypingIndicatorRowProps) {
  const isActivityVariant = variant === "activity";
  const { t } = useTranslation();
  const labels = React.useMemo(
    () =>
      typingPubkeys.map((pubkey) =>
        resolveUserLabel({
          pubkey,
          currentPubkey,
          fallbackName: resolveFallbackName(channel, pubkey),
          profiles,
          preferResolvedSelfLabel: true,
        }),
      ),
    [channel, currentPubkey, profiles, typingPubkeys],
  );
  const typingLabel = React.useMemo(() => {
    if (labels.length === 0) return "";
    if (labels.length === 1)
      return t("messages.typing_one", { name: labels[0] });
    if (labels.length === 2)
      return t("messages.typing_two", { name1: labels[0], name2: labels[1] });
    if (labels.length === 3)
      return t("messages.typing_three", {
        name1: labels[0],
        name2: labels[1],
        name3: labels[2],
      });
    return t("messages.typing_many", {
      name1: labels[0],
      name2: labels[1],
      count: labels.length - 2,
    });
  }, [labels, t]);

  return (
    <div
      aria-live="polite"
      className={cn(
        "shrink-0 bg-transparent",
        isActivityVariant ? "flex items-center px-0 py-0" : "px-4 py-2 sm:px-6",
        className,
      )}
      {...(labels.length > 0
        ? { "data-testid": "message-typing-indicator" }
        : {})}
    >
      {labels.length > 0 && (
        <div
          className={cn(
            "flex min-w-0 w-full items-center",
            isActivityVariant ? "h-full gap-1.5" : "gap-2",
          )}
        >
          <div className="flex shrink-0 items-center">
            {typingPubkeys.map((pubkey, index) => {
              const profile = profiles?.[pubkey.toLowerCase()];
              const label = labels[index] ?? truncatePubkey(pubkey);
              return (
                <div
                  key={pubkey}
                  className={cn(
                    "relative shrink-0 rounded-lg ring-1 ring-background",
                    isActivityVariant ? "h-4 w-4" : "h-5 w-5",
                    index > 0 && "-ml-1.5",
                  )}
                  data-testid="message-typing-avatar"
                >
                  <ProfileAvatar
                    avatarUrl={profile?.avatarUrl ?? null}
                    label={label}
                    className={cn(
                      isActivityVariant
                        ? "h-4 w-4 text-3xs"
                        : "h-5 w-5 text-3xs",
                    )}
                    iconClassName={
                      isActivityVariant ? "h-2.5 w-2.5" : "h-4 w-4"
                    }
                  />
                </div>
              );
            })}
          </div>
          <p
            className={cn(
              "min-w-0 translate-y-px truncate text-muted-foreground",
              isActivityVariant
                ? "text-2xs font-medium leading-3"
                : "text-xs font-medium leading-4",
            )}
            data-testid="message-typing-indicator-label"
          >
            <Shimmer>{typingLabel}</Shimmer>
          </p>
        </div>
      )}
    </div>
  );
}
