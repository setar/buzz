import assert from "node:assert/strict";
import test from "node:test";

import {
  addedByActionPrefix,
  describeChannelTextFieldChange,
  toInlineName,
} from "./systemEventCopy.ts";

// Minimal EN translation mock for pure-function tests.
const enMessages = {
  "messages.cleared_field": "cleared the {{field}}",
  "messages.changed_field_to": `changed the {{field}} to “{{value}}”`,
  "messages.you_inline": "you",
};

function t(key, opts) {
  let str = enMessages[key] ?? key;
  if (opts) {
    for (const [k, v] of Object.entries(opts)) {
      str = str.replaceAll(`{{${k}}}`, v);
    }
  }
  return str;
}

test("an add to the reader uses passive wording", () => {
  assert.equal(addedByActionPrefix(true), "were added by");
  assert.equal(addedByActionPrefix(false), "added by");
});

test("a set topic is quoted verbatim", () => {
  assert.equal(
    describeChannelTextFieldChange("topic", "Release planning", t),
    "changed the topic to “Release planning”",
  );
});

test("a set purpose names the purpose, not the topic", () => {
  assert.equal(
    describeChannelTextFieldChange("purpose", "Where we ship from", t),
    "changed the purpose to “Where we ship from”",
  );
});

// The relay reports a clear as a change carrying an empty string, so without
// this branch the timeline reads: changed the topic to "".
test("an empty value reads as cleared, not as a change to empty quotes", () => {
  for (const blank of ["", undefined, null]) {
    assert.equal(
      describeChannelTextFieldChange("topic", blank, t),
      "cleared the topic",
    );
    assert.equal(
      describeChannelTextFieldChange("purpose", blank, t),
      "cleared the purpose",
    );
  }
});

test("a whitespace-only value reads as cleared", () => {
  assert.equal(
    describeChannelTextFieldChange("topic", "   \n\t ", t),
    "cleared the topic",
  );
});

test("surrounding whitespace is trimmed out of the quotes", () => {
  assert.equal(
    describeChannelTextFieldChange("topic", "  Release planning  ", t),
    "changed the topic to “Release planning”",
  );
});

test("no caption announces empty quotes", () => {
  for (const value of ["", " ", null, undefined, "Real topic"]) {
    for (const field of ["topic", "purpose"]) {
      assert.doesNotMatch(
        describeChannelTextFieldChange(field, value, t),
        /“”|“”/,
        `${field} with ${JSON.stringify(value)} must not render empty quotes`,
      );
    }
  }
});

test("the reader's own name is lowercase mid-sentence", () => {
  // "added by You" next to an agent's "managed by you" was the inconsistency.
  assert.equal(toInlineName("You", true, t), "you");
});

test("cleared and changed captions use the same noun", () => {
  // Not "cleared the channel topic" against "changed the topic to …".
  assert.match(describeChannelTextFieldChange("topic", "", t), /\bthe topic\b/);
  assert.match(
    describeChannelTextFieldChange("topic", "Ship it", t),
    /\bthe topic\b/,
  );
  for (const value of ["", "Ship it"]) {
    assert.doesNotMatch(
      describeChannelTextFieldChange("topic", value, t),
      /channel topic/,
    );
  }
});

test("every other name keeps its own capitalization", () => {
  for (const name of [
    "Alice Chen",
    "you-know-who",
    "Someone",
    "npub1abc…def",
  ]) {
    assert.equal(toInlineName(name, false, t), name);
  }
});

test("someone else whose display name is literally You is left alone", () => {
  // The decisive case: the label is user-controlled, identity is not. Matching
  // on the string would rewrite this person's name as if they were the reader.
  assert.equal(toInlineName("You", false, t), "You");
  assert.equal(toInlineName("Youssef", false, t), "Youssef");
  assert.equal(toInlineName("You Know Who", false, t), "You Know Who");
});

test("the reader is lowercased whatever their profile name says", () => {
  // Self resolution never consults the profile, but the rule keys on identity,
  // so it does not matter what the label happens to be.
  assert.equal(toInlineName("Alice Chen", true, t), "you");
});
