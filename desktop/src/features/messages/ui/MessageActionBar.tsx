import {
  BellOff,
  BellRing,
  Clock,
  Copy,
  CornerUpLeft,
  EllipsisVertical,
  Flag,
  Link2,
  MailCheck,
  MailOpen,
  Pencil,
  SmilePlus,
  Star,
  Trash2,
} from "lucide-react";
import * as React from "react";
import { useTranslation } from "react-i18next";

import { buildMessageLink } from "@/features/messages/lib/messageLink";
import { EmojiPicker } from "@/features/custom-emoji/ui/EmojiPicker";
import { useCustomEmoji } from "@/features/custom-emoji/hooks";
import { getThreadReference } from "@/features/messages/lib/threading";
import { ReportMessageDialog } from "@/features/moderation/ui/ReportMessageDialog";
import { MessageModerationMenuItems } from "@/features/moderation/ui/MessageModerationMenuItems";
import type {
  TimelineMessage,
  TimelineReaction,
} from "@/features/messages/types";
import {
  isReactionEmojiPinned,
  pinReactionEmoji,
  recordQuickReactionEmoji,
  unpinReactionEmoji,
  usePinnedReactionEmojis,
  useQuickReactionEmojis,
} from "@/features/messages/ui/useQuickReactionEmojis";
import { reactionEmojiUrl } from "@/shared/api/customEmoji";
import { cn } from "@/shared/lib/cn";
import { copyTextToClipboard } from "@/shared/lib/clipboard";
import { emojiDisplayName } from "@/shared/lib/emojiName";
import { rewriteRelayUrl } from "@/shared/lib/mediaUrl";
import { KIND_HUDDLE_STARTED } from "@/shared/constants/kinds";
import { Button } from "@/shared/ui/button";
import { DeleteMessageConfirmDialog } from "./DeleteMessageConfirmDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { isPositiveEmojiParticle } from "@/shared/ui/EmojiBurstProvider";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";

const ACTION_BUTTON_CLASS = "h-8 w-8 rounded-full p-0";
const ACTION_ICON_CLASS = "!h-4 !w-4";

function MoreActionsMenu({
  channelId,
  message,
  onDelete,
  onEdit,
  onFollowThread,
  onMarkUnread,
  onMarkRead,
  onOpenChange,
  onRemindLater,
  onUnfollowThread,
  open,
  isFollowingThread,
  isUnread,
}: {
  /** Channel UUID for the t("messages.copy_link") action. When null/undefined, the
   *  Copy link entry is hidden (e.g. inbox preview rows that don't have it). */
  channelId?: string | null;
  message: TimelineMessage;
  onDelete?: (message: TimelineMessage) => void;
  onEdit?: (message: TimelineMessage) => void;
  onFollowThread?: (message: TimelineMessage) => void;
  onMarkUnread?: (message: TimelineMessage) => void;
  onMarkRead?: (message: TimelineMessage) => void;
  onOpenChange: (open: boolean) => void;
  onRemindLater?: (message: TimelineMessage) => void;
  onUnfollowThread?: (message: TimelineMessage) => void;
  open: boolean;
  isFollowingThread?: boolean;
  isUnread?: boolean;
}) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = React.useState(false);
  const { t } = useTranslation();
  // Set true the moment the user picks t("messages.edit_message"). The
  // `onCloseAutoFocus` handler on `DropdownMenuContent` reads it to
  // suppress Radix's default focus-restoration (which would yank focus
  // back to the trigger and steal it from the composer's editor — the
  // composer schedules its own focus on RAF, but Radix's restoration
  // runs in a setTimeout that fires after our RAF and wins the race).
  // Reset to false inside the handler so Escape / non-Edit closes still
  // get default trigger-restoration (a11y intact for keyboard users).
  const editJustSelectedRef = React.useRef(false);

  const hasCopyActions =
    !message.pending && message.kind !== KIND_HUDDLE_STARTED;

  // A report needs a real, delivered event to target and a known author to
  // name in the NIP-56 `p` tag. Pending sends and system huddle rows have
  // neither, so the entry is hidden for them.
  const canReport =
    !message.pending &&
    message.kind !== KIND_HUDDLE_STARTED &&
    Boolean(message.pubkey);

  return (
    <>
      <DropdownMenu modal={false} open={open} onOpenChange={onOpenChange}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label={t("messages.more_actions")}
                className={ACTION_BUTTON_CLASS}
                data-testid={`more-actions-${message.id}`}
                size="sm"
                type="button"
                variant={open ? "secondary" : "ghost"}
              >
                <EllipsisVertical className={ACTION_ICON_CLASS} />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>{t("messages.more_actions")}</TooltipContent>
        </Tooltip>
        <DropdownMenuContent
          align="end"
          side="top"
          sideOffset={6}
          onCloseAutoFocus={(event) => {
            if (editJustSelectedRef.current) {
              event.preventDefault();
              editJustSelectedRef.current = false;
            }
          }}
        >
          {onEdit ? (
            <DropdownMenuItem
              data-testid={`edit-message-${message.id}`}
              onClick={() => {
                editJustSelectedRef.current = true;
                onEdit(message);
              }}
            >
              <Pencil className="h-4 w-4" />
              Edit message
            </DropdownMenuItem>
          ) : null}

          {onMarkRead || onMarkUnread ? (
            <DropdownMenuItem
              data-testid={`mark-read-toggle-${message.id}`}
              onClick={() => {
                if (isUnread) {
                  onMarkRead?.(message);
                } else {
                  onMarkUnread?.(message);
                }
              }}
            >
              {isUnread ? (
                <MailCheck className="h-4 w-4" />
              ) : (
                <MailOpen className="h-4 w-4" />
              )}
              {isUnread ? t("messages.mark_read") : t("messages.mark_unread")}
            </DropdownMenuItem>
          ) : null}

          {onFollowThread || onUnfollowThread ? (
            <DropdownMenuItem
              onClick={() => {
                if (isFollowingThread) {
                  onUnfollowThread?.(message);
                } else {
                  onFollowThread?.(message);
                }
              }}
            >
              {isFollowingThread ? (
                <BellOff className="h-4 w-4" />
              ) : (
                <BellRing className="h-4 w-4" />
              )}
              {isFollowingThread
                ? t("messages.unfollow_thread")
                : t("messages.follow_thread")}
            </DropdownMenuItem>
          ) : null}

          {hasCopyActions ? (
            <DropdownMenuItem
              onClick={() => {
                copyTextToClipboard(message.body, t("messages.copied"));
              }}
            >
              <Copy className="h-4 w-4" />
              Copy message
            </DropdownMenuItem>
          ) : null}

          {onRemindLater ? (
            <DropdownMenuItem
              onClick={() => {
                onRemindLater(message);
              }}
            >
              <Clock className="h-4 w-4" />
              Remind me later
            </DropdownMenuItem>
          ) : null}

          {hasCopyActions && channelId ? (
            <DropdownMenuItem
              data-testid={`copy-message-link-${message.id}`}
              onClick={() => {
                const { rootId } = getThreadReference(message.tags ?? []);
                const link = buildMessageLink({
                  channelId,
                  messageId: message.id,
                  threadRootId: rootId,
                });
                copyTextToClipboard(link, t("messages.link_copied"));
              }}
            >
              <Link2 className="h-4 w-4" />
              Copy link
            </DropdownMenuItem>
          ) : null}

          {canReport || onDelete ? <DropdownMenuSeparator /> : null}

          {canReport ? (
            <DropdownMenuItem
              data-testid={`report-message-${message.id}`}
              onClick={() => {
                setIsReportDialogOpen(true);
              }}
            >
              <Flag className="h-4 w-4" />
              Report message
            </DropdownMenuItem>
          ) : null}

          {onDelete ? (
            <DropdownMenuItem
              className="text-destructive focus:text-destructive"
              data-testid={`delete-message-${message.id}`}
              onClick={() => {
                setIsDeleteDialogOpen(true);
              }}
            >
              <Trash2 className="h-4 w-4" />
              Delete message
            </DropdownMenuItem>
          ) : null}

          {canReport ? (
            <MessageModerationMenuItems
              channelId={channelId}
              message={message}
            />
          ) : null}
        </DropdownMenuContent>
      </DropdownMenu>

      {onDelete ? (
        <DeleteMessageConfirmDialog
          onConfirm={() => onDelete(message)}
          onOpenChange={setIsDeleteDialogOpen}
          open={isDeleteDialogOpen}
        />
      ) : null}

      {canReport ? (
        <ReportMessageDialog
          open={isReportDialogOpen}
          onOpenChange={setIsReportDialogOpen}
          authorPubkey={message.pubkey ?? ""}
          eventId={message.id}
        />
      ) : null}
    </>
  );
}

function QuickReactionButton({
  customEmojiUrl,
  emoji,
  isPinned,
  onPin,
  onSelect,
}: {
  customEmojiUrl?: string;
  emoji: string;
  isPinned: boolean;
  onPin: (emoji: string) => void;
  onSelect: (emoji: string) => void;
}) {
  const displayName = emojiDisplayName(emoji);
  const mediaUrl = customEmojiUrl ? rewriteRelayUrl(customEmojiUrl) : null;

  return (
    <div className="group/qr relative">
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label={`React with ${displayName}`}
            className="flex h-8 w-8 items-center justify-center rounded-full text-base leading-none text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"
            onClick={() => onSelect(emoji)}
            title={displayName}
            type="button"
          >
            {mediaUrl ? (
              <img
                alt={emoji}
                className="h-5 w-5 object-contain"
                draggable={false}
                src={mediaUrl}
              />
            ) : (
              <span aria-hidden="true" className="translate-y-px">
                {emoji}
              </span>
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>{displayName}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label={
              isPinned ? `Unpin ${displayName}` : `Pin ${displayName}`
            }
            className={cn(
              "absolute right-0.5 top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-border bg-background text-muted-foreground opacity-0 transition-opacity group-hover/qr:opacity-100 focus-visible:opacity-100 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring",
              isPinned && "opacity-100 text-amber-400",
            )}
            onClick={(e) => {
              e.stopPropagation();
              onPin(emoji);
            }}
            type="button"
          >
            <Star className={cn("h-2 w-2", isPinned && "fill-amber-400")} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          {isPinned ? "Unpin from quick reactions" : "Pin to quick reactions"}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

function PinnedEmojiManageStrip({
  onSelectPinned,
}: {
  onSelectPinned: (emoji: string) => void;
}) {
  const pinned = usePinnedReactionEmojis();
  const [isAdding, setIsAdding] = React.useState(false);

  if (pinned.length === 0 && !isAdding) {
    return (
      <div className="flex items-center gap-2 border-b border-border/50 px-3 py-2">
        <Star className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
        <span className="text-xs text-muted-foreground">
          No pinned reactions.{" "}
          <button
            className="text-foreground underline-offset-2 hover:underline focus-visible:outline-hidden"
            onClick={() => setIsAdding(true)}
            type="button"
          >
            Add one
          </button>
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-border/50 px-2 py-1.5">
      <Star className="mr-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
      {pinned.map((emoji) => (
        <div key={emoji} className="group/pin relative">
          <button
            aria-label={`React with pinned ${emojiDisplayName(emoji)}`}
            className="flex h-7 w-7 items-center justify-center rounded-md text-sm transition-colors hover:bg-muted"
            onClick={() => onSelectPinned(emoji)}
            type="button"
          >
            {emoji}
          </button>
          <button
            aria-label={`Unpin ${emojiDisplayName(emoji)}`}
            className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-border bg-background text-muted-foreground opacity-0 transition-opacity group-hover/pin:opacity-100 focus-visible:opacity-100"
            onClick={() => unpinReactionEmoji(emoji)}
            type="button"
          >
            <span className="text-[9px] leading-none">×</span>
          </button>
        </div>
      ))}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label="Add pinned reaction"
            className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"
            onClick={() => setIsAdding(true)}
            type="button"
          >
            <SmilePlus className="h-3.5 w-3.5" />
          </button>
        </TooltipTrigger>
        <TooltipContent>Add to pinned reactions</TooltipContent>
      </Tooltip>
      {isAdding ? (
        <EmojiPicker
          onSelect={(emoji) => {
            pinReactionEmoji(emoji);
            setIsAdding(false);
          }}
        />
      ) : null}
    </div>
  );
}

function isCustomEmojiShortcode(emoji: string) {
  return emoji.startsWith(":") && emoji.endsWith(":");
}

export const MessageActionBar = React.memo(function MessageActionBar({
  channelId,
  message,
  onDelete,
  onEdit,
  onFollowThread,
  onMarkUnread,
  onMarkRead,
  onReactionBadgeBurstRequest,
  onReactionSelect,
  onRemindLater,
  onReply,
  onUnfollowThread,
  reactionErrorMessage = null,
  reactions,
  isFollowingThread,
  isUnread,
}: {
  /** Channel UUID — required for the t("messages.copy_link") action; when omitted the
   *  action is hidden (callers like the home inbox that lack the context). */
  channelId?: string | null;
  message: TimelineMessage;
  onDelete?: (message: TimelineMessage) => void;
  onEdit?: (message: TimelineMessage) => void;
  onFollowThread?: (message: TimelineMessage) => void;
  onMarkUnread?: (message: TimelineMessage) => void;
  onMarkRead?: (message: TimelineMessage) => void;
  onReactionBadgeBurstRequest?: (emoji: string) => void;
  onReactionSelect?: (emoji: string) => Promise<void>;
  onRemindLater?: (message: TimelineMessage) => void;
  onReply?: (message: TimelineMessage) => void;
  onUnfollowThread?: (message: TimelineMessage) => void;
  reactionErrorMessage?: string | null;
  reactions: TimelineReaction[];
  isFollowingThread?: boolean;
  /** Current read state of the clicked message, from the same predicate the
   *  unread badge uses. Drives the single mark-read/unread toggle label. */
  isUnread?: boolean;
}) {
  const [isReactionPickerOpen, setIsReactionPickerOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const { t } = useTranslation();
  const customEmoji = useCustomEmoji();
  const quickReactionEmojis = useQuickReactionEmojis(4, customEmoji);
  const quickReactionItems = React.useMemo(
    () =>
      quickReactionEmojis
        .map((emoji) => ({
          customEmojiUrl: reactionEmojiUrl(emoji, customEmoji),
          emoji,
        }))
        .filter(
          (item) => !isCustomEmojiShortcode(item.emoji) || item.customEmojiUrl,
        ),
    [customEmoji, quickReactionEmojis],
  );
  const hasReplyAction = Boolean(onReply);
  const hasReactionAction = Boolean(onReactionSelect);

  const hasMoreMenuActions =
    Boolean(onEdit) ||
    Boolean(onDelete) ||
    Boolean(onMarkUnread) ||
    Boolean(onMarkRead) ||
    Boolean(onFollowThread) ||
    Boolean(onUnfollowThread) ||
    Boolean(onRemindLater) ||
    !message.pending;

  const wouldAddReaction = React.useCallback(
    (emoji: string) =>
      !reactions.some(
        (reaction) => reaction.emoji === emoji && reaction.reactedByCurrentUser,
      ),
    [reactions],
  );
  const handleReactionSelection = React.useCallback(
    (emoji: string, closePicker = false) => {
      if (!onReactionSelect) {
        return;
      }

      if (wouldAddReaction(emoji) && isPositiveEmojiParticle(emoji)) {
        onReactionBadgeBurstRequest?.(emoji);
      }

      void onReactionSelect(emoji)
        .then(() => {
          recordQuickReactionEmoji(emoji);
        })
        .catch(() => {})
        .finally(() => {
          if (closePicker) {
            setIsReactionPickerOpen(false);
          }
        });
    },
    [onReactionBadgeBurstRequest, onReactionSelect, wouldAddReaction],
  );

  if (!hasReplyAction && !hasReactionAction && !hasMoreMenuActions) {
    return null;
  }

  return (
    <div
      className={cn(
        "-m-1 p-1 transition-opacity duration-150 ease-out",
        "opacity-100 sm:pointer-events-none sm:opacity-0",
        "sm:group-hover/message:pointer-events-auto sm:group-hover/message:opacity-100",
        "sm:group-focus-within/message:pointer-events-auto sm:group-focus-within/message:opacity-100",
        isReactionPickerOpen || isDropdownOpen
          ? "sm:pointer-events-auto sm:opacity-100"
          : "",
      )}
      data-testid={`message-action-bar-${message.id}`}
    >
      <div className="overflow-hidden rounded-full border border-border/70 bg-background/95 shadow-xs backdrop-blur-sm supports-[backdrop-filter]:bg-background/85">
        <div className="flex items-center gap-0.5 p-1">
          {hasReactionAction && quickReactionItems.length > 0 ? (
            <>
              <div className="hidden items-center gap-0.5 sm:flex">
                {quickReactionItems.map(({ customEmojiUrl, emoji }) => (
                  <QuickReactionButton
                    customEmojiUrl={customEmojiUrl}
                    emoji={emoji}
                    isPinned={isReactionEmojiPinned(emoji)}
                    key={emoji}
                    onPin={(e) => {
                      if (isReactionEmojiPinned(e)) {
                        unpinReactionEmoji(e);
                      } else {
                        pinReactionEmoji(e);
                      }
                    }}
                    onSelect={handleReactionSelection}
                  />
                ))}
              </div>
              <div className="mx-0.5 hidden h-4 w-px bg-border/70 sm:block" />
            </>
          ) : null}

          {hasReactionAction ? (
            <Popover
              onOpenChange={setIsReactionPickerOpen}
              open={isReactionPickerOpen}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <PopoverTrigger asChild>
                    <Button
                      aria-label={t("messages.open_reactions")}
                      className={ACTION_BUTTON_CLASS}
                      data-testid={`react-message-${message.id}`}
                      size="sm"
                      type="button"
                      variant={isReactionPickerOpen ? "secondary" : "ghost"}
                    >
                      <SmilePlus className={ACTION_ICON_CLASS} />
                    </Button>
                  </PopoverTrigger>
                </TooltipTrigger>
                <TooltipContent>{t("messages.react")}</TooltipContent>
              </Tooltip>
              <PopoverContent
                align="end"
                className="w-auto p-0 rounded-2xl overflow-hidden border border-border bg-background shadow-md"
                side="top"
                sideOffset={10}
              >
                {reactionErrorMessage ? (
                  <div className="px-3 pt-3 pb-0">
                    <p className="text-xs text-destructive">
                      {reactionErrorMessage}
                    </p>
                  </div>
                ) : null}
                <PinnedEmojiManageStrip
                  onSelectPinned={(value) => {
                    handleReactionSelection(value, true);
                  }}
                />
                <EmojiPicker
                  autoFocus
                  onSelect={(value) => {
                    // `value` is already a `native` glyph or a `:shortcode:` for
                    // custom emoji; the toggle mutation resolves the URL.
                    handleReactionSelection(value, true);
                  }}
                />
              </PopoverContent>
            </Popover>
          ) : null}

          {hasReplyAction ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  aria-label={t("messages.reply")}
                  className={ACTION_BUTTON_CLASS}
                  data-testid={`reply-message-${message.id}`}
                  onClick={() => {
                    onReply?.(message);
                  }}
                  size="sm"
                  type="button"
                  variant="ghost"
                >
                  <CornerUpLeft className={ACTION_ICON_CLASS} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{t("messages.reply")}</TooltipContent>
            </Tooltip>
          ) : null}

          {hasMoreMenuActions ? (
            <MoreActionsMenu
              channelId={channelId}
              message={message}
              onDelete={onDelete}
              onEdit={onEdit}
              onFollowThread={onFollowThread}
              onMarkUnread={onMarkUnread}
              onMarkRead={onMarkRead}
              onOpenChange={setIsDropdownOpen}
              onRemindLater={onRemindLater}
              onUnfollowThread={onUnfollowThread}
              open={isDropdownOpen}
              isFollowingThread={isFollowingThread}
              isUnread={isUnread}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
});

MessageActionBar.displayName = "MessageActionBar";
