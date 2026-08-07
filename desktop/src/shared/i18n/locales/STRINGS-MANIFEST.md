# STRINGS-MANIFEST

Translation key catalogue for `desktop/src/shared/i18n/locales/`.
Every key is listed with its English source string and a one-line UI context.
Use this file as a handoff for translators — no need to read component code.

Locale files follow the same flat namespace hierarchy: `namespace.key`.
Nested keys (e.g. `onboarding.welcome.title`) map to JSON paths.
Plurals use the `_one` / `_few` / `_other` suffix convention (react-i18next).

## `common`
_Shared labels used across many surfaces_

| Key | English | Notes |
|---|---|---|
| `common.cancel` | Cancel | |
| `common.copied_to_clipboard` | Copied to clipboard | |
| `common.skip_for_now` | Skip for now | |
| `common.save` | Save | |
| `common.close` | Close | |
| `common.delete` | Delete | |
| `common.edit` | Edit | |
| `common.send` | Send | |
| `common.add` | Add | |
| `common.remove` | Remove | |
| `common.copy` | Copy | |
| `common.copied` | Copied | |
| `common.back` | Back | |
| `common.next` | Next | |
| `common.done` | Done | |
| `common.continue` | Continue | |
| `common.confirm` | Confirm | |
| `common.loading` | Loading… | |
| `common.saving` | Saving… | |
| `common.optional` | optional | |
| `common.required` | required | |
| `common.search` | Search | |
| `common.create` | Create | |
| `common.update` | Update | |
| `common.leave` | Leave | |
| `common.join` | Join | |
| `common.invite` | Invite | |
| `common.members` | Members | |
| `common.settings` | Settings | |
| `common.profile` | Profile | |
| `common.today` | Today | |
| `common.yesterday` | Yesterday | |
| `common.just_now` | just now | |
| `common.ago` | ago | |
| `common.on_date` | on {{date}} | |
| `common.minute_one` | {{count}} minute | |
| `common.minute_other` | {{count}} minutes | |
| `common.hour_one` | {{count}} hour | |
| `common.hour_other` | {{count}} hours | |
| `common.day_one` | {{count}} day | |
| `common.day_other` | {{count}} days | |
| `common.sr_close` | Close | |
| `common.sr_toggle_sidebar` | Toggle Sidebar | |
| `common.creating` | Creating... | |
| `common.approver` | Approver | |
| `common.expires` | Expires | |

## `onboarding`
_First-run setup and sign-in screens_

| Key | English | Notes |
|---|---|---|
| `onboarding.welcome.title` | Welcome to Buzz | |
| `onboarding.welcome.create_community` | Create a community | |
| `onboarding.welcome.have_community` | I already have a community | |
| `onboarding.welcome.join_community` | Join a community | |
| `onboarding.key_import.title` | Sign in with your key | |
| `onboarding.key_import.private_key_label` | Private key | |
| `onboarding.key_import.placeholder` | Enter your key here | |
| `onboarding.key_import.placeholder_nsec` | nsec1... | |
| `onboarding.key_import.choose_file` | Choose a backup file | |
| `onboarding.key_import.drop_key` | Drop a key here | |
| `onboarding.key_import.backup_password_label` | Backup password | |
| `onboarding.key_import.backup_password_placeholder` | Backup password | |
| `onboarding.key_import.identity_found` | Nostr identity found | |
| `onboarding.key_import.will_use_identity` | This will use this Nostr identity: | |
| `onboarding.key_import.waiting_ncryptsec` | Waiting for a complete ncryptsec backup | |
| `onboarding.key_import.waiting_nsec` | Waiting for a valid nsec1 key | |
| `onboarding.key_import.importing` | Importing key | |
| `onboarding.key_import.continue_with_key` | Continue with this key | |
| `onboarding.key_import.reveal_key` | Reveal private key | |
| `onboarding.key_import.hide_key` | Hide private key | |
| `onboarding.key_import.reveal_password` | Reveal password | |
| `onboarding.key_import.hide_password` | Hide password | |
| `onboarding.key_import.error_file_too_large` | That file is too large to be a key backup or private key. Choose another file. | |
| `onboarding.key_import.error_file_read` | Couldn't read that file. | |
| `onboarding.key_import.error_enter_password` | Enter the password for this key backup. | |
| `onboarding.key_import.error_ncryptsec` | That doesn't look like a complete ncryptsec backup. | |
| `onboarding.key_import.error_invalid_nsec` | That doesn't look like a valid nsec. Paste an nsec1 key. | |
| `onboarding.key_import.error_import_failed` | Couldn't import this key. | |
| `onboarding.invite.invite_label` | Invite link or code | |
| `onboarding.invite.community_url_label` | Community URL or invite link | |
| `onboarding.invite.relay_url_label` | Relay URL | |
| `onboarding.invite.api_token_label` | API token | |
| `onboarding.invite.placeholder_invite` | https://relay.example.com/invite/abc123 or paste a code | |
| `onboarding.invite.placeholder_community` | https://community.example.com or paste an invite link | |
| `onboarding.invite.placeholder_relay` | wss://relay.example.com | |
| `onboarding.invite.use_api_token` | Use an API token | |
| `onboarding.invite.api_token_remove` | Remove | |
| `onboarding.invite.redeeming` | Redeeming invite | |
| `onboarding.invite.loading_policy` | Loading policy | |
| `onboarding.invite.btn_next` | Next | |
| `onboarding.invite.btn_redeem` | Redeem invite | |
| `onboarding.invite.btn_accept_redeem` | Accept and redeem invite | |
| `onboarding.invite.btn_join` | Join community | |
| `onboarding.invite.btn_accept_join` | Accept and join | |
| `onboarding.invite.invalid_invite` | Please enter a valid invite link or community URL | |
| `onboarding.invite.error_confirm_age` | Confirm that you are at least 18 years old. | |
| `onboarding.invite.error_agree_terms` | Agree to the Terms of Service and Privacy Policy. | |
| `onboarding.profile.title` | Set up your profile | |
| `onboarding.profile.display_name_label` | Display name | |
| `onboarding.profile.display_name_placeholder` | Your name | |
| `onboarding.profile.about_label` | About | |
| `onboarding.profile.about_placeholder` | Tell people a little about yourself | |
| `onboarding.profile.website_label` | Website | |
| `onboarding.profile.skip` | Skip for now | |
| `onboarding.backup.title` | Back up your key | |
| `onboarding.backup.download_key` | Download key file | |
| `onboarding.backup.copy_key` | Copy key | |
| `onboarding.backup.i_saved_it` | I've saved my key | |
| `onboarding.backup.warning` | Your key is the only way to access your account. Save it somewhere safe. | |
| `onboarding.pending.title` | Membership pending | |
| `onboarding.pending.description` | Your request to join has been sent. You'll be notified when an admin approves it. | |
| `onboarding.pending.cancel_request` | Cancel request | |
| `onboarding.denied.title` | Membership denied | |
| `onboarding.denied.description` | Your request to join was denied. | |
| `onboarding.denied.try_another` | Try another community | |
| `onboarding.checking` | Checking sign-in | |
| `onboarding.avatar.your_avatar` | Your avatar | |
| `onboarding.avatar.title` | Next, add a display image | |
| `onboarding.avatar.subtitle` | Choose an image or emoji as your avatar | |
| `onboarding.avatar.saving` | Saving profile | |
| `onboarding.avatar.uploading` | Uploading avatar | |
| `onboarding.avatar.skip_for_now` | Skip for now | |
| `onboarding.avatar.continue_without_saving` | Continue without saving | |
| `onboarding.backup_step.title_created` | Your unique identity key has been created | |
| `onboarding.backup_step.title_creating` | Creating your identity key | |
| `onboarding.backup_step.creating_aria` | Creating your identity key | |
| `onboarding.backup_step.review_options_link` | review backup options | |
| `onboarding.backup_step.never_share` | Never share your private key. Anyone with this key can impersonate you and access everything in your account. | |
| `onboarding.backup_step.reveal_key` | Reveal private key | |
| `onboarding.backup_step.hide_key` | Hide private key | |
| `onboarding.backup_step.error_retrieve` | Failed to retrieve private key. | |
| `onboarding.backup_step.options_title` | Backup options | |
| `onboarding.backup_step.options_description` | Your identity key works like a password for your Buzz account. Keep a copy somewhere safe. You can create a backup file and lock it with a password you can remember. | |
| `onboarding.backup_step.storage_keyring_title` | Protected by your system keychain | |
| `onboarding.backup_step.storage_file_title` | Stored in private device storage | |
| `onboarding.backup_step.storage_device_title` | Protected in private device storage | |
| `onboarding.backup_step.storage_keyring_description` | Buzz keeps your identity key in your system keychain. Your computer may ask for your password when Buzz needs to read the key. | |
| `onboarding.backup_step.storage_file_description` | Your system keychain wasn't available, so Buzz keeps your identity key in a private file on this device. | |
| `onboarding.backup_step.storage_device_description` | Buzz keeps your identity key protected on this device. Make a separate backup in case you lose access. | |
| `onboarding.backup_step.storage_keyring_intro` | Buzz keeps your identity key in your system keychain. | |
| `onboarding.backup_step.storage_file_intro` | Buzz keeps your identity key in a private file on this device because the system keychain wasn't available. | |
| `onboarding.backup_step.storage_device_intro` | Your identity key is protected on this device. | |
| `onboarding.backup_step.pm_title` | Saved in your password manager | |
| `onboarding.backup_step.pm_description` | Copy your identity key, then save it in a password manager like 1Password. | |
| `onboarding.backup_step.copy_copying` | Copying… | |
| `onboarding.backup_step.copy_copied` | Copied to clipboard | |
| `onboarding.backup_step.copy_to_clipboard` | Copy to clipboard | |
| `onboarding.backup_step.locked_file_title` | Locked in a backup file | |
| `onboarding.backup_step.locked_file_description` | Create a backup file and choose a password you can remember. You'll need both to restore your account. | |
| `onboarding.backup_step.create_locked` | Create locked backup | |
| `onboarding.backup_step.error_copy_detail` | Could not retrieve your private key: {{error}}. You can continue and find it later in Settings > Profile > Identity. | |
| `onboarding.backup_step.error_copy` | Could not copy your key: {{error}} | |
| `onboarding.backup_step.aria_copy_key` | Copy private key | |
| `onboarding.backup_step.aria_key_actions` | Private key actions | |
| `onboarding.backup_test.error_read_file` | Could not read that file. | |
| `onboarding.backup_test.error_wrong_backup` | That doesn't look like your key backup. Choose the file you just downloaded. | |
| `onboarding.backup_test.error_not_backup` | That doesn't look like a key backup file. | |
| `onboarding.backup_test.error_different_backup` | That's a key backup, but not the one you just downloaded. | |
| `onboarding.backup_test.error_verify` | Could not verify this backup. | |
| `onboarding.backup_test.error_retrieve_key` | Could not retrieve your key. | |
| `onboarding.backup_test.success_title` | Your backup works! | |
| `onboarding.backup_test.success_description` | File and password verified. Keep them both somewhere safe — that's all you need to restore your identity. | |
| `onboarding.backup_test.reveal_unlocked_key` | Reveal unlocked private key | |
| `onboarding.backup_test.hide_unlocked_key` | Hide unlocked private key | |
| `onboarding.backup_test.general_success_title` | This backup works | |
| `onboarding.backup_test.matches_current` | It restores your current Buzz identity. | |
| `onboarding.backup_test.matches_other` | It restores a different identity than the one signed in here. | |
| `onboarding.backup_test.test_another` | Test another backup | |
| `onboarding.backup_test.select_file` | Select your backup file | |
| `onboarding.backup_test.drop_file` | Drop your backup file here | |
| `onboarding.backup_test.redownload` | Re-download backup | |
| `onboarding.backup_test.password_label` | Backup password | |
| `onboarding.backup_test.password_placeholder` | Your backup password | |
| `onboarding.backup_test.reveal_password` | Reveal password | |
| `onboarding.backup_test.hide_password` | Hide password | |
| `onboarding.backup_test.unlock_hint` | Enter the password to prove you can unlock this backup. | |
| `onboarding.backup_test.checking` | Checking… | |
| `onboarding.backup_test.verify` | Verify backup | |
| `onboarding.community_flow.joining` | Joining {{name}} | |
| `onboarding.community_flow.accepting_invite` | Accepting your invite… | |
| `onboarding.community_flow.connecting` | Connecting securely… | |
| `onboarding.community_flow.build_profile_title` | Build your profile | |
| `onboarding.community_flow.build_profile_description` | Add a name and avatar. They'll show up on your messages, reactions, and agent handoffs. | |
| `onboarding.community_flow.username_label` | Your username | |
| `onboarding.community_flow.username_aria` | Community username | |
| `onboarding.community_flow.username_placeholder` | Enter your username here | |
| `onboarding.community_flow.edit_avatar_title` | Edit your avatar | |
| `onboarding.community_flow.team_title` | Meet your starter team | |
| `onboarding.community_flow.team_description` | Buzz lets you bring multiple agents into the same workspace. Your team will help you get started using Buzz. | |
| `onboarding.community_flow.preparing` | Preparing Welcome | |
| `onboarding.community_flow.skip_for_now` | Skip for now | |
| `onboarding.community_flow.take_to_buzz` | Take me to Buzz | |
| `onboarding.community_flow.change_avatar` | Change your avatar | |
| `onboarding.community_flow.add_avatar` | Add an avatar | |
| `onboarding.community_flow.retry` | Retry | |
| `onboarding.download.title_verified` | Your backup is verified | |
| `onboarding.download.title_selected` | That's your backup file | |
| `onboarding.download.title_created` | Optionally, test your backup | |
| `onboarding.download.title_create` | Backup your key with a password | |
| `onboarding.download.desc_verified` | Your file and password can restore your identity. | |
| `onboarding.download.desc_selected` | Now enter your password to prove you can unlock it. | |
| `onboarding.download.desc_created` | Learn how your backup works. Drop the file you just saved and unlock it with your password. | |
| `onboarding.download.desc_create` | Keep the downloaded file private — you need both it and your password to restore your identity. Save the backup password somewhere safe; Buzz cannot reset it if lost. | |
| `onboarding.download.finish` | Finish | |
| `onboarding.encrypted_backup.ticker_downloading` | Downloading once finished | |
| `onboarding.encrypted_backup.ticker_encrypting` | Encrypting your password | |
| `onboarding.encrypted_backup.ticker_longer` | Just a bit longer... | |
| `onboarding.encrypted_backup.password_placeholder` | Password (min {{min}} characters) | |
| `onboarding.encrypted_backup.password_saved_sr` | Backup password saved; hidden for security. | |
| `onboarding.encrypted_backup.change_password` | Change saved backup password | |
| `onboarding.encrypted_backup.hide_password` | Hide password | |
| `onboarding.encrypted_backup.reveal_password` | Reveal password | |
| `onboarding.encrypted_backup.saved_hint` | Your password isn't kept — download another copy anytime, or start over to choose a new password. | |
| `onboarding.encrypted_backup.encrypting_aria` | Encrypting your key | |
| `onboarding.encrypted_backup.download_again` | Download backup again | |
| `onboarding.encrypted_backup.backup_key` | Backup key | |
| `onboarding.encrypted_backup.dialog_title` | Create a new backup password? | |
| `onboarding.encrypted_backup.dialog_description` | Starting over lets you pick a new password and download a fresh backup file. Backups you saved earlier will still work — just use the password you created them with. | |
| `onboarding.encrypted_backup.keep_current` | Keep current backup | |
| `onboarding.encrypted_backup.start_new` | Start with a new password | |
| `onboarding.encrypted_backup.saved_path` | Backup saved to {{path}} | |
| `onboarding.keyring.title` | Unlock your system keyring | |
| `onboarding.keyring.description` | Your identity is safe in the OS keyring, but it's unreachable this session. Unlock your keyring or sign into your desktop session, then relaunch Buzz. | |
| `onboarding.keyring.relaunch` | Relaunch Buzz | |
| `onboarding.keyring.reimport` | Re-import your key instead | |
| `onboarding.machine.error_load` | Failed to load identity | |
| `onboarding.machine.error_save` | Failed to save identity | |
| `onboarding.machine.loading` | Loading identity… | |
| `onboarding.machine.continue_setup` | Continue setup | |
| `onboarding.machine.create_key` | Create a new identity key | |
| `onboarding.machine.use_different_key` | Use a different key instead | |
| `onboarding.machine.use_existing` | Use an existing key | |
| `onboarding.machine.tagline` | Your people, your agents, your projects — all in one place. | |
| `onboarding.machine.heading_unlock` | Unlock your account | |
| `onboarding.machine.heading_reimport` | Re-import your key | |
| `onboarding.machine.heading_enter_key` | Enter your private key | |
| `onboarding.machine.desc_unlock` | Enter your backup password to unlock your key and restore your identity. | |
| `onboarding.machine.desc_reimport` | Your identity is no longer in the system keyring. Re-import your nsec to restore it. | |
| `onboarding.machine.desc_enter_key` | If you already have a Buzz account, enter your private key below to get started. | |
| `onboarding.machine.back_start_new` | Start new identity | |
| `onboarding.machine.return_to_onboarding` | Return to onboarding | |
| `onboarding.membership_denied.unknown_pubkey` | Unknown public key | |
| `onboarding.membership_denied.error_invalid_nsec` | That doesn't look like a valid nsec. Paste an nsec1 key. | |
| `onboarding.membership_denied.error_import_failed` | Failed to import key. | |
| `onboarding.membership_denied.badge` | Membership required | |
| `onboarding.membership_denied.title` | Not a member yet | |
| `onboarding.membership_denied.description` | This relay requires an invitation. Ask a relay admin to add you as a member, then come back and try again. | |
| `onboarding.membership_denied.npub_label` | Your public key (npub) | |
| `onboarding.membership_denied.copy_npub` | Copy npub | |
| `onboarding.membership_denied.share_hint` | This is your public identity — it's safe to share. Send it to the relay admin so they can invite you. | |
| `onboarding.membership_denied.key_label` | Private key | |
| `onboarding.membership_denied.importing` | Importing key | |
| `onboarding.membership_denied.import_key` | Import key | |
| `onboarding.membership_denied.try_again` | Try again | |
| `onboarding.membership_denied.change_community` | Change community | |
| `onboarding.membership_denied.have_invite` | Have an invite? | |
| `onboarding.membership_denied.use_different_key` | Use a different key | |
| `onboarding.flow.error_server` | Server error — try again | |
| `onboarding.flow.error_create_identity` | Failed to create a new identity. Please try again. | |
| `onboarding.flow.start_new_identity` | Start new identity | |
| `onboarding.flow.relay_unreachable_title` | Can't reach this relay | |
| `onboarding.flow.relay_unreachable_desc` | Check your connection or change your community. | |
| `onboarding.flow.relay_error_desc` | The relay returned an error. Try again. | |
| `onboarding.flow.error_generic` | Something went wrong | |
| `onboarding.flow.change_community` | Change community | |
| `onboarding.flow.reimport_title` | Re-import your key | |
| `onboarding.flow.reimport_desc` | Your identity is no longer in the system keyring. Re-import your nsec to restore it — Buzz will restart to finish recovery. Or go back to start a new identity with a fresh key. | |
| `onboarding.flow.use_existing_title` | Use your existing key | |
| `onboarding.flow.use_existing_desc` | Import your Nostr private key to use that identity with Buzz. If this key already has a profile on the relay, your name and avatar are restored automatically. | |
| `onboarding.flow.reconnect_error` | Could not reconnect to the relay. {{detail}} | |
| `onboarding.profile_step.title` | What should we call you? | |
| `onboarding.profile_step.description` | Pick the name people and agents will see in Buzz. You can change it anytime. | |
| `onboarding.profile_step.name_label` | Name | |
| `onboarding.profile_step.name_placeholder` | Enter your name | |
| `onboarding.profile_step.saving` | Saving profile | |
| `onboarding.profile_step.create_key` | Create an identity key | |
| `onboarding.profile_step.have_key` | I already have a key | |
| `onboarding.profile_step.continue_without_saving` | Continue without saving | |
| `onboarding.profile_step.skip_for_now` | Skip for now | |
| `onboarding.relaunch.title` | Restart Buzz to finish recovery | |
| `onboarding.relaunch.body` | Your identity was updated. Buzz needs to restart so syncing and agents run under it. | |
| `onboarding.reset_failed.title` | Sign out could not complete | |
| `onboarding.reset_failed.body` | Buzz was unable to fully clear your local data. Try relaunching — the reset will resume automatically. If this persists, contact support. | |
| `onboarding.setup.title` | Set up your agent harnesses | |
| `onboarding.setup.description` | Buzz checks for command-line harnesses on this machine. Install the CLI or sign in to at least one to continue. | |
| `onboarding.setup.finding_providers` | Finding your providers... | |
| `onboarding.setup.no_harnesses` | No supported command-line harnesses were detected yet. Install a supported CLI, then check again. | |
| `onboarding.setup.skip_for_now` | Skip for now | |
| `onboarding.setup.more_harnesses_hint` | More harnesses (Cursor, Grok, Amp…) | |
| `onboarding.setup.settings_agents` | Settings → Agents | |
| `onboarding.setup.after_setup` | after setup. | |
| `onboarding.setup.checking` | CHECKING… | |
| `onboarding.setup.check_again` | CHECK AGAIN | |
| `onboarding.setup.sign_in` | SIGN IN | |
| `onboarding.setup.installing` | INSTALLING | |
| `onboarding.setup.ready` | READY | |
| `onboarding.setup.install` | INSTALL | |
| `onboarding.setup.retry_install` | RETRY INSTALL | |
| `onboarding.setup.error_install_fallback` | Install failed. | |
| `onboarding.setup.signin_unavailable_label` | Sign-in unavailable | |
| `onboarding.setup.signin_unavailable_detail` | Couldn't load sign-in options. | |
| `onboarding.setup.signin_failed_label` | Sign-in failed | |
| `onboarding.setup.signin_failed_detail` | Couldn't start sign-in. Try again. | |
| `onboarding.setup.config_invalid_label` | Configuration invalid | |
| `onboarding.setup.config_invalid_detail` | Check this runtime's configuration and try again. | |
| `onboarding.setup.status_unavailable_label` | Status unavailable | |
| `onboarding.setup.status_unavailable_detail` | Couldn't verify authentication. | |
| `onboarding.setup.installation_failed_label` | Installation failed | |
| `onboarding.setup.detail_adapter_missing` | CLI detected; ACP adapter missing. | |
| `onboarding.setup.detail_adapter_outdated` | ACP adapter detected but outdated — reinstall required. | |
| `onboarding.setup.detail_cli_missing` | ACP adapter detected; CLI missing. | |
| `onboarding.setup.detail_not_installed` | Not installed yet. | |
| `onboarding.setup.sign_in_aria` | Sign in to {{label}} | |
| `onboarding.setup.check_again_aria` | Check {{label}} again | |
| `onboarding.setup.install_aria` | Install {{label}} | |
| `onboarding.setup.retry_install_aria` | Retry installing {{label}} | |
| `onboarding.setup.instructions_aria` | View {{label}} install instructions | |
| `onboarding.setup.installing_aria` | Installing {{label}} | |
| `onboarding.setup.detail_cli_not_detected` | CLI not detected. | |
| `onboarding.config.select_harness` | Select a harness | |
| `onboarding.config.error_save` | Couldn't save your default harness. Try again. | |
| `onboarding.config.loading_error` | Couldn't load harness settings. Go back and try again. | |
| `onboarding.config.harness_label` | Default harness | |
| `onboarding.config.title` | Configure your default model settings | |
| `onboarding.config.description` | This will be set as your default model configuration across Buzz. You can always change this in your Settings or give specific agents a different configuration. | |
| `onboarding.add_display_image` | Add a display image | |
| `onboarding.choose_backup_file` | Choose a backup file | |
| `onboarding.configure_default_model` | Configure your default model settings | |
| `onboarding.copy_private_key` | Copy private key | |
| `onboarding.creating_identity_key` | Creating your identity key | |
| `onboarding.download_backup` | Download backup | |
| `onboarding.encryption_password` | Encryption password | |
| `onboarding.failed_encrypt` | Failed to encrypt your key. | |
| `onboarding.failed_generate_password` | Failed to generate a password. | |
| `onboarding.failed_save_key` | Failed to save your key. | |
| `onboarding.generate_password` | Generate a password | |
| `onboarding.hide_private_key` | Hide private key | |
| `onboarding.reimport_confirm` | Importing a different nsec replaces the identity currently locked in the keyring for this install. The previous identity will no longer be accessible. Continue? | |
| `onboarding.meet_starter_team` | Meet your starter team | |
| `onboarding.private_key_actions` | Private key actions | |
| `onboarding.reveal_private_key` | Reveal private key | |
| `onboarding.skip_for_now` | Skip for now | |
| `onboarding.test_your_backup` | Test your backup | |

## `sidebar`
_Left navigation sidebar_

| Key | English | Notes |
|---|---|---|
| `sidebar.add_community` | Add a community | |
| `sidebar.create_channel` | Create channel | |
| `sidebar.new_dm` | New message | |
| `sidebar.mark_all_read` | Mark all as read | |
| `sidebar.threads` | Threads | |
| `sidebar.agents` | Agents | |
| `sidebar.section_toggle` | Toggle section | |
| `sidebar.inbox` | Inbox | |
| `sidebar.pulse` | Pulse | |
| `sidebar.projects` | Projects | |
| `sidebar.workflows` | Workflows | |
| `sidebar.forums` | Forums | |
| `sidebar.new_forum` | New forum | |
| `sidebar.browse_channels` | Browse channels | |
| `sidebar.recent` | Recent | |
| `sidebar.back_to_app` | Back to app | |
| `sidebar.personal` | Personal | |
| `sidebar.communities` | Communities | |
| `sidebar.app` | App | |
| `sidebar.checking_permissions` | Checking invite permissions… | |
| `sidebar.invite_check_failed` | Invite settings could not be checked. | |
| `sidebar.invite_snapshot_missing` | Invite settings are unavailable. Relay recovery may still be in progress. | |
| `sidebar.try_again` | Try again | |
| `sidebar.no_community` | No community | |
| `sidebar.add_channel` | Add channel | |
| `sidebar.choose_section_icon` | Choose section icon | |
| `sidebar.clear_section_icon` | Clear section icon | |
| `sidebar.click_to_connect` | Click to connect | |
| `sidebar.close_dm` | Close direct message | |
| `sidebar.reconnect_prompts` | Complete any prompts opened by the reconnect helper to continue. | |
| `sidebar.connect_to_relay` | Connect to relay | |
| `sidebar.create_section` | Create section | |
| `sidebar.current_identity` | Current identity | |
| `sidebar.dismiss_relay_notice` | Dismiss relay notification | |
| `sidebar.section_name_prompt` | Enter a new name for this section. | |
| `sidebar.rename_section` | Rename section | |
| `sidebar.section_name` | Section name | |
| `sidebar.sections_desc` | Sections let you group related channels in the sidebar. | |
| `sidebar.waiting_to_reconnect` | Waiting to reconnect | |

## `channel`
_Channel list, context menus, channel management_

| Key | English | Notes |
|---|---|---|
| `channel.create.title` | Create a channel | |
| `channel.create.title_forum` | Create a new forum | |
| `channel.create.description_channel` | Channels are real-time streams for team conversation. | |
| `channel.create.description_forum` | Forums organize threaded discussions around a topic. | |
| `channel.create.name_label` | Channel name | |
| `channel.create.name_placeholder` | e.g. announcements | |
| `channel.create.name_field` | Name | |
| `channel.create.description_field` | Description | |
| `channel.create.optional` | Optional | |
| `channel.create.template_field` | Template | |
| `channel.create.no_template` | No template | |
| `channel.create.creating` | Creating... | |
| `channel.create.submit` | Create channel | |
| `channel.create.submit_forum` | Create forum | |
| `channel.create.topic_label` | Topic | |
| `channel.create.topic_placeholder` | What is this channel about? | |
| `channel.create.private_label` | Private channel | |
| `channel.create.private_description` | Only invited members can see this channel | |
| `channel.no_channels` | No channels available | |
| `channel.archived` | Archived | |
| `channel.muted` | Muted | |
| `channel.leave` | Leave channel | |
| `channel.copy_link` | Copy link | |
| `channel.settings` | Channel settings | |
| `channel.move_to_section` | Move to section | |
| `channel.new_section` | New section... | |
| `channel.remove_from_section` | Remove from section | |
| `channel.copy_submenu` | Copy | |
| `channel.copy_name` | Copy channel name | |
| `channel.copy_id` | Copy channel ID | |
| `channel.mark_read` | Mark as read | |
| `channel.mark_unread` | Mark unread | |
| `channel.mute_channel` | Mute channel | |
| `channel.unmute_channel` | Unmute channel | |
| `channel.star_channel` | Star channel | |
| `channel.unstar_channel` | Unstar channel | |
| `channel.archive_channel` | Archive channel | |
| `channel.delete_channel` | Delete channel | |
| `channel.loading_actions` | Loading channel actions... | |
| `channel.actions_unavailable` | Channel actions unavailable | |
| `channel.name_copied` | Channel name copied to clipboard | |
| `channel.id_copied` | Channel ID copied to clipboard | |
| `channel.activity_settings` | Activity settings | |
| `channel.add_forum` | Add a forum | |
| `channel.add_agent` | Add agent | |
| `channel.add_agents` | Add agents | |
| `channel.add_agent_here` | Add an agent here. | |
| `channel.add_members` | Add members | |
| `channel.add_people_agents` | Add people and agents | |
| `channel.add_people` | Add people | |
| `channel.all_channels` | All channels | |
| `channel.all_forums` | All forums | |
| `channel.all_in_channel` | All in channel | |
| `channel.animate_rows_desc` | Animate new activity rows as they arrive. | |
| `channel.archived_read_only` | Archived channels are read-only. | |
| `channel.archiving_channel` | Archiving channel | |
| `channel.available_while_working` | Available while the agent is working. | |
| `channel.back_from_activity` | Back from activity | |
| `channel.back_to_channel` | Back to channel | |
| `channel.back_to_search` | Back to search | |
| `channel.browse_channels` | Browse channels | |
| `channel.canvas_content` | Canvas content | |
| `channel.channel_actions` | Channel actions | |
| `channel.channel_id` | Channel ID | |
| `channel.messages_and_composer` | Channel messages and composer | |
| `channel.choose_or_create_agent` | Choose from your agents, or create a new one. | |
| `channel.copied_channel_id` | Copied channel ID | |
| `channel.create_channel_title` | Create a channel | |
| `channel.create_agent` | Create agent | |
| `channel.create_an_agent` | Create an agent | |
| `channel.create_canvas` | Create canvas | |
| `channel.delete_message_confirm` | Delete message? | |
| `channel.drag_resize_reset` | Drag to resize. Double-click to reset width. | |
| `channel.drag_resize` | Drag to resize. | |
| `channel.edit_canvas` | Edit canvas | |
| `channel.expand_thread` | Expand thread | |
| `channel.expires_after` | Expires after | |
| `channel.failed_add_agent` | Failed to add agent. | |
| `channel.failed_start_huddle` | Failed to start huddle: | |
| `channel.forums_are_next` | Forum channels are next | |
| `channel.forum_not_wired` | Forum posting is not wired in this pass. | |
| `channel.forum_posts` | Forum posts | |
| `channel.hide_row_timestamps` | Hide per-row activity timestamps. | |
| `channel.hide_raw_payloads` | Hide raw JSON-RPC payloads. | |
| `channel.interrupt_turn_desc` | Interrupt the current ACP turn without stopping the agent process. | |
| `channel.invite_members` | Invite members. | |
| `channel.join_to_participate` | Join to participate | |
| `channel.last_updated` | Last updated | |
| `channel.loading_members` | Loading members... | |
| `channel.manage_channel` | Manage channel | |
| `channel.no_history_hint` | Messages and sub-replies will appear here once the relay has history for this channel. | |
| `channel.most_members` | Most members | |
| `channel.no_channel_selected_dot` | No channel selected. | |
| `channel.no_channel_selected` | No channel selected | |
| `channel.no_members_found` | No members found. | |
| `channel.no_members_match` | No members match your search. | |
| `channel.no_messages_yet` | No messages yet | |
| `channel.no_updates_yet` | No updates yet | |
| `channel.ongoing_channel` | Ongoing channel | |
| `channel.local_agents_only` | Only available for locally managed agents. | |
| `channel.interrupt_local_only` | Only locally managed agents can be interrupted from this community. | |
| `channel.only_me` | Only me | |
| `channel.open_activity_settings` | Open activity settings | |
| `channel.quick_add_bots` | Quick add bots | |
| `channel.raw_acp_activity` | Raw ACP activity | |
| `channel.raw_rows_no_animate` | Raw activity rows don't animate in. | |
| `channel.resize_panel` | Resize panel | |
| `channel.restoring_channel` | Restoring channel | |
| `channel.save_access` | Save access | |
| `channel.save_canvas` | Save canvas | |
| `channel.save_changes` | Save changes | |
| `channel.search_channels_hint` | Search channels by name or description | |
| `channel.search_forums_hint` | Search forums by name or description | |
| `channel.search_or_create_channel` | Search or create a channel | |
| `channel.search_or_create_forum` | Search or create a forum | |
| `channel.search_people_agents` | Search people and agents | |
| `channel.search_people_or_paste` | Search people, or paste a public key | |
| `channel.select_channel` | Select a channel | |
| `channel.select_stream_hint` | Select a stream or DM to load real message history in this first integration pass. | |
| `channel.show_row_timestamp` | Show a timestamp under each activity row. | |
| `channel.show_raw_for_agent` | Show raw JSON-RPC payloads for this agent. | |
| `channel.show_raw_for_channel` | Show raw JSON-RPC payloads for this channel. | |
| `channel.show_thread_beside` | Show thread beside channel | |
| `channel.stop_animating_rows` | Stop animating new activity rows. | |
| `channel.temporary_channel` | Temporary channel | |
| `channel.read_only_channel` | This channel is read-only. | |
| `channel.try_different_name` | Try a different name or keyword. | |
| `channel.unarchive_channel` | Unarchive channel | |
| `channel.updating_visibility` | Updating visibility | |
| `channel.agent_help_question` | What should this agent help with in the channel? | |
| `channel.canvas_markdown_placeholder` | Write your canvas content in Markdown... | |
| `channel.anyone` | Anyone | |
| `channel.selected_people` | Selected people ({{count}}) | |
| `channel.sort_alpha` | Alphabetical | |
| `channel.sort_recent` | Recent | |

## `messages`
_Message composer, message actions, thread view_

| Key | English | Notes |
|---|---|---|
| `messages.placeholder` | Message {{channel}} | |
| `messages.placeholder_dm` | Message | |
| `messages.edit_placeholder` | Edit message | |
| `messages.reply_to` | Reply to {{name}} | |
| `messages.thread` | Thread | |
| `messages.reply` | Reply | |
| `messages.reply_in_thread` | Reply in thread | |
| `messages.edit` | Edit | |
| `messages.delete` | Delete | |
| `messages.copy_text` | Copy text | |
| `messages.copy_link` | Copy link | |
| `messages.react` | React | |
| `messages.reactions` | Reactions | |
| `messages.pin` | Pin message | |
| `messages.unpin` | Unpin message | |
| `messages.forward` | Forward | |
| `messages.more_actions` | More actions | |
| `messages.formatting` | Formatting | |
| `messages.remove_attachment` | Remove attachment | |
| `messages.stopping` | Stopping… | |
| `messages.just_now` | just now | |
| `messages.edited` | edited | |
| `messages.edited_label` | (edited) | |
| `messages.edited_tooltip` | This message has been edited | |
| `messages.deleted` | Message deleted | |
| `messages.jump_to_latest` | Jump to latest | |
| `messages.no_messages` | No messages yet | |
| `messages.send_first` | Send the first message | |
| `messages.send_first_thread` | Send the first message to start the thread. | |
| `messages.mark_read` | Mark read | |
| `messages.mark_unread` | Mark unread | |
| `messages.follow_thread` | Follow thread | |
| `messages.unfollow_thread` | Unfollow thread | |
| `messages.copied` | Message copied to clipboard | |
| `messages.link_copied` | Link copied to clipboard | |
| `messages.open_reactions` | Open reactions | |
| `messages.confirm_delete_title` | Delete message? | |
| `messages.confirm_delete_description` | This will permanently delete this message and cannot be undone. | |
| `messages.typing_one` | {{name}} is typing... | |
| `messages.typing_two` | {{name1}} and {{name2}} are typing... | |
| `messages.typing_three` | {{name1}}, {{name2}}, and {{name3}} are typing... | |
| `messages.typing_many` | {{name1}}, {{name2}}, and {{count}} others are typing... | |
| `messages.collapse_replies` | Collapse replies to this message | |
| `messages.add_link` | Add link | |
| `messages.add_reaction` | Add reaction | |
| `messages.agent_managed_by` | Agent managed by | |
| `messages.agent_owner_unavailable` | Agent; owner unavailable | |
| `messages.already_added` | Already added | |
| `messages.anyone_can_send` | Anyone can send instructions to this agent | |
| `messages.attach_image` | Attach image | |
| `messages.back_to_conversation` | Back to conversation | |
| `messages.back_to_drafts` | Back to drafts list | |
| `messages.bullet_list` | Bullet list | |
| `messages.cancel_edit` | Cancel edit | |
| `messages.cancel_reply` | Cancel reply | |
| `messages.cancel_upload` | Cancel upload | |
| `messages.choose_recipient` | Choose a recipient to start a message | |
| `messages.choose_recipient_first` | Choose at least one recipient first. | |
| `messages.close_formatting` | Close formatting | |
| `messages.close_lightbox` | Close lightbox | |
| `messages.code_block` | Code block | |
| `messages.collapse_thread` | Collapse thread | |
| `messages.could_not_save_drawing` | Could not save the drawing. Please try again. | |
| `messages.delete_draft` | Delete draft | |
| `messages.delete_message_confirm` | Delete message? | |
| `messages.diff_viewer` | Diff Viewer | |
| `messages.drawing_canvas` | Drawing canvas | |
| `messages.edit_link` | Edit link | |
| `messages.edit_message` | Edit message | |
| `messages.edit_your_message` | Edit your message | |
| `messages.editing_message` | Editing message | |
| `messages.empty_draft` | Empty draft | |
| `messages.enter_url` | Enter URL: | |
| `messages.expand_diff` | Expand diff | |
| `messages.failed_open_dm` | Failed to open direct message. | |
| `messages.failed_send` | Failed to send message. | |
| `messages.insert_emoji` | Insert emoji | |
| `messages.is_pubkey_agent` | Is this pubkey an agent | |
| `messages.link_text` | Link text: | |
| `messages.loading_people` | Loading people and agents | |
| `messages.mark_spoiler` | Mark as spoiler | |
| `messages.mention_someone` | Mention someone | |
| `messages.new_messages` | New messages | |
| `messages.no_channel_link` | No channel link | |
| `messages.no_matching_users` | No matching users. | |
| `messages.no_recipients` | No people or agents available to message. | |
| `messages.no_replies` | No replies | |
| `messages.open_draft` | Open draft | |
| `messages.ordered_list` | Ordered list | |
| `messages.png_encoding_failed` | PNG encoding failed | |
| `messages.redo_stroke` | Redo stroke | |
| `messages.remove_spoiler` | Remove spoiler | |
| `messages.removed_by_moderators` | Removed by community moderators | |
| `messages.selected_can_send` | Selected people can send instructions to this agent | |
| `messages.selection_formatting` | Selection formatting | |
| `messages.send_message` | Send message | |
| `messages.stroke_width` | Stroke width | |
| `messages.text_to_display` | Text to display | |
| `messages.thread_deleted` | Thread deleted | |
| `messages.toggle_formatting` | Toggle formatting | |
| `messages.undo_stroke` | Undo last stroke | |
| `messages.unknown_channel` | Unknown channel | |
| `messages.unknown_time` | Unknown time | |
| `messages.full_diff_hint` | View the full diff at the source repository. | |
| `messages.you_click_to_remove` | You (click to remove) | |
| `messages.joined_the_channel` | joined the channel | |
| `messages.joined_with_others` | joined the channel along with | |
| `messages.added_by` | added by | |
| `messages.along_with` | along with | |
| `messages.left_the_channel` | left the channel | |
| `messages.removed_from_channel` | removed {{name}} from the channel | |
| `messages.created_this_channel` | created this channel | |
| `messages.archived_this_channel` | archived this channel | |
| `messages.unarchived_this_channel` | unarchived this channel | |
| `messages.removed_a_message` | removed a message | |
| `messages.cleared_field` | cleared the {{field}} | |
| `messages.changed_field_to` | changed the {{field}} to “{{value}}” | |
| `messages.you_inline` | you | |
| `messages.removed_before_name` | removed | |
| `messages.removed_after_name` | from the channel | |
| `messages.managed_by` | managed by | |
| `messages.managed_by_owner` | managed by {{owner}} | |
| `messages.managed_by_not_in_channel` | managed by {{owner}} · not in channel | |
| `messages.not_in_channel` | not in channel | |
| `messages.owner_unavailable` | owner unavailable | |
| `messages.view_thread` | View thread | |
| `messages.last_reply` | last reply | |
| `messages.replies_one` | reply | |
| `messages.replies_other` | replies | |
| `messages.thread_summary` | View thread with {{count}} {{label}} | |
| `messages.thread_summary_with_last_reply` | View thread with {{count}} {{label}}, last reply {{time}} | |
| `messages.no_replies_yet` | No replies in this branch yet | |
| `messages.reply_to_continue` | Reply in the thread to continue this branch. | |
| `messages.reply_in_thread_to` | Reply in thread to {{author}} | |
| `messages.message_the_huddle` | Message the huddle | |
| `messages.new` | new | |

## `settings`
_Settings panels (appearance, profile, agents, etc.)_

| Key | English | Notes |
|---|---|---|
| `settings.title` | Settings | |
| `settings.general` | General | |
| `settings.appearance` | Appearance | |
| `settings.appearance_description` | Choose a theme for Buzz. | |
| `settings.notifications.all_messages` | All messages | |
| `settings.notifications.mentions_only` | Mentions only | |
| `settings.notifications.nothing` | Nothing | |
| `settings.notifications.mute` | Mute | |
| `settings.notifications.unmute` | Unmute | |
| `settings.notifications_section` | Notifications | |
| `settings.agents` | Agents | |
| `settings.privacy` | Privacy | |
| `settings.account` | Account | |
| `settings.language` | Language | |
| `settings.language_description` | Choose the language for the interface. | |
| `settings.language_en` | English | |
| `settings.language_ru` | Русский | |
| `settings.theme` | Theme | |
| `settings.theme_light` | Light | |
| `settings.theme_dark` | Dark | |
| `settings.theme_system` | System | |
| `settings.zoom` | Text size | |
| `settings.sign_out` | Sign out | |
| `settings.sign_out_confirm` | Are you sure you want to sign out? | |
| `settings.danger_zone` | Danger zone | |
| `settings.delete_data` | Delete all local data | |
| `settings.profile_section` | Profile | |
| `settings.profile_description` | Update how your name, avatar, and bio appear across Buzz. | |
| `settings.done_editing` | Done editing {{label}} | |
| `settings.edit_label` | Edit {{label}} | |
| `settings.copy_label` | Copy {{label}} | |
| `settings.your_profile` | Your profile | |
| `settings.not_set` | Not set | |
| `settings.unavailable` | Unavailable | |
| `settings.profile_saved` | Profile saved | |
| `settings.saving_profile_photo` | Saving profile photo | |
| `settings.edit_profile_photo` | Edit profile photo | |
| `settings.saving_avatar` | Saving avatar | |
| `settings.display_name_placeholder` | Display name | |
| `settings.profile_description_placeholder` | Profile description | |
| `settings.public_key` | Public key | |
| `settings.nip05_handle` | NIP-05 handle | |
| `settings.experiments` | Experiments | |
| `settings.templates` | Templates | |
| `settings.compute` | Compute | |
| `settings.shortcuts` | Shortcuts | |
| `settings.hosted_communities` | Hosted communities | |
| `settings.voice` | Voice | |
| `settings.invites` | Invites | |
| `settings.moderation` | Moderation | |
| `settings.custom_emoji` | Custom emoji | |
| `settings.local_archive` | Local archive | |
| `settings.mobile` | Mobile | |
| `settings.updates_section` | Updates | |
| `settings.thread_layout` | Thread layout | |
| `settings.thread_focus_label` | Focus | |
| `settings.thread_focus_desc` | Threads open over the channel, full width | |
| `settings.thread_split_label` | Split | |
| `settings.thread_split_desc` | Threads open in a side panel next to the channel | |
| `settings.update.title` | Software Updates | |
| `settings.update.description` | Keep Buzz up to date with the latest features and fixes. | |
| `settings.update.status_label` | Update status | |
| `settings.update.check_desc` | Check if a new version is available. | |
| `settings.update.check_btn` | Check for Updates | |
| `settings.update.checking` | Checking for updates... | |
| `settings.update.up_to_date` | You're on the latest version. | |
| `settings.update.check_again` | Check Again | |
| `settings.update.unavailable` | Automatic updates aren't available on this build. Download the latest release manually. | |
| `settings.update.manual_available` | Update available — v{{version}} | |
| `settings.update.manual_linux` | In-app updates aren't supported on this Linux package. Download the new version from GitHub. | |
| `settings.update.manual_linux_hint` | Switch to the AppImage build for automatic updates. | |
| `settings.update.download_btn` | Download Update | |
| `settings.update.preparing` | Preparing update... | |
| `settings.update.downloading` | Downloading update... | |
| `settings.update.installing` | Installing update... | |
| `settings.update.ready` | Update downloaded. Click to apply. | |
| `settings.update.install_btn` | Update Now | |
| `settings.update.failed` | Update failed: {{message}} | |
| `settings.update.retry_btn` | Retry | |
| `settings.signout.title` | Sign out | |
| `settings.signout.description` | Removes your identity key and all local app data from this device. Before signing out, create and test a password-protected key backup above — this cannot be undone. | |
| `settings.signout.btn_delete` | Delete my data | |
| `settings.signout.btn_signing_out` | Signing out… | |
| `settings.signout.dialog_title` | Sign out and wipe all data? | |
| `settings.signout.dialog_description` | This will delete your identity key, all agent settings, and cached data from this device, then relaunch Buzz into first-run setup. This cannot be undone. | |
| `settings.signout.step1_title` | 1. Confirm you can restore your identity | |
| `settings.signout.nsec_loading` | Loading… | |
| `settings.signout.backup_confirm_label` | I have tested a key backup or saved this private key somewhere safe. | |
| `settings.signout.step2_title` | 2. Type | |
| `settings.signout.step2_phrase_display` | "wipe all my data" | |
| `settings.signout.step2_suffix` | to confirm | |
| `settings.signout.btn_cancel` | Cancel | |
| `settings.signout.btn_confirm_delete` | Delete my data | |
| `settings.signout.sign_out_failed` | Sign out failed. | |
| `settings.signout.key_retrieve_failed` | Failed to retrieve private key. | |
| `settings.community.title` | Community | |
| `settings.community.name` | Name | |
| `settings.community.description` | Description | |
| `settings.community.icon` | Icon | |
| `settings.community.change_icon` | Change icon | |
| `settings.community.remove_icon` | Remove icon | |
| `settings.community.members` | Members | |
| `settings.community.invite_link` | Invite link | |
| `settings.community.copy_invite` | Copy invite link | |
| `settings.community.new_invite` | New invite link | |
| `settings.community.admin_only` | Admins only | |
| `settings.community.require_approval` | Require approval to join | |
| `settings.profile.title` | Your profile | |
| `settings.profile.display_name` | Display name | |
| `settings.profile.about` | About | |
| `settings.profile.website` | Website | |
| `settings.profile.save` | Save profile | |
| `settings.action_needed` | Action needed | |
| `settings.adapter_install_guide` | Adapter install guide | |
| `settings.add_custom_harness` | Add custom harness | |
| `settings.add_runtimes` | Add runtimes | |
| `settings.agent_defaults` | Agent defaults | |
| `settings.agent_runtimes` | Agent runtimes | |
| `settings.shortcuts_description` | All available keyboard shortcuts. Shortcuts are read-only. | |
| `settings.community_connect_busy` | Another community is already being connected. Finish it before connecting this one. | |
| `settings.attach_image` | Attach image | |
| `settings.backup_password` | Backup password | |
| `settings.backup_ready` | Backup ready to download | |
| `settings.ban_author` | Ban author | |
| `settings.ban_author_desc` | Block the author from the community. | |
| `settings.builderlab_account` | Builderlab account | |
| `settings.bundled_preset` | Bundled preset | |
| `settings.canvas_placeholder` | Canvas content here... | |
| `settings.channel_templates` | Channel templates | |
| `settings.check_again` | Check again | |
| `settings.agent_tools_desc` | Choose which agent tools Buzz can use on this device. | |
| `settings.cli_setup_guide` | CLI setup guide | |
| `settings.click_to_update` | Click to update | |
| `settings.community_address` | Community address | |
| `settings.connect_identity` | Connect Buzz identity | |
| `settings.connection_failed` | Connection failed. | |
| `settings.agent_defaults_desc` | Control how agents behave in conversations and run on this machine. | |
| `settings.copied_to_clipboard` | Copied to clipboard | |
| `settings.could_not_archive` | Could not archive the community. | |
| `settings.could_not_connect_identity` | Could not connect the Buzz identity. | |
| `settings.could_not_connect_device_identity` | Could not connect this device's Buzz identity. | |
| `settings.could_not_create_community` | Could not create the community. | |
| `settings.could_not_load_communities` | Could not load communities. | |
| `settings.could_not_load_identity` | Could not load the connected Buzz identity. | |
| `settings.could_not_read_file` | Could not read that file. | |
| `settings.could_not_release_identity` | Could not release the previously connected Buzz identity. | |
| `settings.could_not_resolve_author` | Could not resolve the message author. | |
| `settings.could_not_transfer` | Could not transfer ownership. | |
| `settings.could_not_unarchive` | Could not unarchive the community. | |
| `settings.could_not_unpair` | Could not unpair the Buzz identity. | |
| `settings.could_not_verify_backup` | Could not verify this backup. | |
| `settings.create_and_connect` | Create and connect | |
| `settings.create_backup` | Create backup | |
| `settings.create_template` | Create template | |
| `settings.delete_content` | Delete content | |
| `settings.delete_my_data` | Delete my data | |
| `settings.alerts_default_desc` | Desktop alerts are on by default. Fine-tune what gets through below. | |
| `settings.desktop_alerts` | Desktop alerts | |
| `settings.notifications_blocked` | Desktop notifications are blocked. Enable them in your system settings. | |
| `settings.notifications_unsupported` | Desktop notifications are not supported in this environment. | |
| `settings.dismiss_update` | Dismiss update notification | |
| `settings.download_page` | Download page | |
| `settings.download_update_github` | Download update from GitHub | |
| `settings.edit_harness` | Edit harness | |
| `settings.edit_template` | Edit template | |
| `settings.encrypting_key` | Encrypting your key | |
| `settings.encryption_password` | Encryption password | |
| `settings.failed_apply_profiles` | Failed to apply agent-managed profiles setting: | |
| `settings.failed_attach_image` | Failed to attach image. | |
| `settings.failed_create` | Failed to create | |
| `settings.failed_delete` | Failed to delete | |
| `settings.failed_duplicate` | Failed to duplicate | |
| `settings.failed_encrypt` | Failed to encrypt your key. | |
| `settings.failed_generate_password` | Failed to generate a password. | |
| `settings.failed_resolve_report` | Failed to resolve the report | |
| `settings.failed_retrieve_key` | Failed to retrieve private key. | |
| `settings.failed_save_key` | Failed to save your key. | |
| `settings.failed_send_feedback` | Failed to send feedback. | |
| `settings.failed_update` | Failed to update | |
| `settings.found_on_path` | Found on PATH | |
| `settings.generate_password` | Generate a password | |
| `settings.hide` | Hide | |
| `settings.reveal` | Reveal | |
| `settings.hide_password` | Hide password | |
| `settings.hide_private_key` | Hide private key | |
| `settings.hosted_community` | Hosted community | |
| `settings.install_failed` | Install failed. | |
| `settings.backup_different_identity` | It restores a different identity than the one signed in here. | |
| `settings.backup_current_identity` | It restores your current Buzz identity. | |
| `settings.keyboard_shortcuts` | Keyboard shortcuts | |
| `settings.kick_author` | Kick author | |
| `settings.loading_runtime_details` | Loading runtime details | |
| `settings.loading_runtimes` | Loading runtimes | |
| `settings.pairing_qr` | Mobile pairing QR code | |
| `settings.my_runtime` | My Runtime | |
| `settings.native_alerts_desc` | Native desktop alerts are enabled for the categories you have armed below. | |
| `settings.needs_work` | Needs work | |
| `settings.not_found_on_path` | Not found on PATH | |
| `settings.open_settings` | Open settings | |
| `settings.pairing_ended` | Pairing session ended. | |
| `settings.pairing_timeout` | Pairing took too long. Try again. | |
| `settings.pairing_canceled` | Pairing was canceled. | |
| `settings.ready_to_update` | Ready to update! | |
| `settings.recipient_npub` | Recipient npub | |
| `settings.remove_argument` | Remove argument | |
| `settings.remove_attachment` | Remove attachment | |
| `settings.remove_env_var` | Remove env var | |
| `settings.kick_author_desc` | Remove the author from the community. | |
| `settings.resolve_remove_content` | Remove the reported content and resolve. | |
| `settings.report_dismissed` | Report dismissed | |
| `settings.report_no_channel` | Report has no channel. | |
| `settings.report_resolved` | Report resolved | |
| `settings.request_failed` | Request failed. | |
| `settings.request_os_permission_desc` | Request OS permission and surface new mentions or needs-action items outside the app. | |
| `settings.reveal_password` | Reveal password | |
| `settings.reveal_private_key` | Reveal private key | |
| `settings.moderation_queue_desc` | Review reported content and take action. Visible to community moderators only. | |
| `settings.route_platform_safety` | Route to the platform-safety lane. | |
| `settings.templates_desc` | Save a reusable channel configuration. | |
| `settings.search_runtimes` | Search runtimes | |
| `settings.sending_identity` | Securely sending your identity to the mobile app. | |
| `settings.send_feedback` | Send feedback | |
| `settings.sign_in_builderlab` | Sign in with Builderlab | |
| `settings.sprint_planning` | Sprint Planning | |
| `settings.switch_to_device_identity` | Switch to this device's identity | |
| `settings.feedback_desc` | Tell us what went wrong, or share general feedback. | |
| `settings.timeout_author_desc` | Temporarily mute the author. | |
| `settings.test_backup` | Test backup | |
| `settings.test_your_backup` | Test your backup | |
| `settings.address_taken` | That Buzz address is already taken. | |
| `settings.not_key_backup` | That doesn't look like a key backup file. | |
| `settings.codes_mismatch` | The codes didn't match. Pairing was canceled. | |
| `settings.no_relay_address` | The new community did not return a relay address. | |
| `settings.identity_reserved` | This device's Buzz identity is already reserved by another Builderlab account, so it can't be connected here. Sign in with that account, or transfer the identity there first. | |
| `settings.timeout_author` | Time out author | |
| `settings.timeout_unavailable` | Timeout is not available from the queue yet. | |
| `settings.underlying_cli` | Underlying CLI | |
| `settings.update_available` | Update available | |
| `settings.update_now` | Update now | |
| `settings.edit_template_desc` | Update this channel template configuration. | |
| `settings.use_different_file` | Use a different file | |
| `settings.verify_backup` | Verify backup | |
| `settings.verify_security_code` | Verify the security code matches your mobile device. | |
| `settings.view_attached_image` | View attached image | |
| `settings.could_not_send_identity` | We couldn't send your identity. Try again. | |
| `settings.could_not_start_pairing` | We couldn't start pairing. Try again. | |
| `settings.template_purpose` | What this template is for | |
| `settings.close_while_finishing` | You can close this window while Buzz finishes. | |
| `settings.your_backup_password` | Your backup password | |
| `settings.device_paired` | Your mobile device is now paired. | |
| `settings.your_runtimes` | Your runtimes | |
| `settings.word_sep_spaces` | Spaces | |
| `settings.word_sep_hyphens` | Hyphens | |
| `settings.word_sep_periods` | Periods | |
| `settings.word_sep_commas` | Commas | |
| `settings.create_key_backup` | Create a key backup | |
| `settings.test_key_backup` | Test a key backup | |
| `settings.select_backup_file` | Select your backup file | |
| `settings.drop_backup_file` | Drop your backup file here | |
| `settings.private_key` | Private key | |
| `settings.download_backup` | Download backup | |
| `settings.backup_keep_safe` | Keep the file private and save its password somewhere safe — Buzz cannot reset it. Once ready, the backup remains available to download for 5 minutes. | |
| `settings.backup_that_s_the_one` | That's the one. Now enter your password to prove you can unlock it. | |
| `settings.test_backup_description` | Confirm that a backup file and its password can unlock an identity. | |
| `settings.test_nip49_note` | Backups use the standard NIP-49 format, so this works for backups from compatible Nostr apps too. | |
| `settings.backup_this_works` | This backup works | |
| `settings.backup_test_another` | Test another backup | |
| `settings.backup_checking` | Checking… | |

## `community`
_Community connection and switching UI_

| Key | English | Notes |
|---|---|---|
| `community.connecting` | Connecting… | |
| `community.connection_failed` | Community connection failed | |
| `community.retry` | Retry | |
| `community.relay_url` | Relay URL | |
| `community.switch` | Switch community | |
| `community.add` | Add community | |

## `profile`
_User / agent profile panel and avatar editor_

| Key | English | Notes |
|---|---|---|
| `profile.online` | Online | |
| `profile.offline` | Offline | |
| `profile.away` | Away | |
| `profile.update_status` | Update status | |
| `profile.clear_status` | Clear status | |
| `profile.status_placeholder` | What's your status? | |
| `profile.copy_key` | Copy public key | |
| `profile.view_profile` | View profile | |
| `profile.send_dm` | Send message | |
| `profile.role_admin` | Admin | |
| `profile.role_member` | Member | |
| `profile.role_owner` | Owner | |
| `profile.acp_command` | ACP command | |
| `profile.activity_log` | Activity log | |
| `profile.add_agent_to_channel` | Add this agent to a channel | |
| `profile.add_to_channel` | Add to channel | |
| `profile.adjust_circle` | Adjust the circle | |
| `profile.agent_profile` | Agent profile | |
| `profile.agent_type` | Agent type | |
| `profile.archive_agent` | Archive agent | |
| `profile.archive_identity` | Archive identity | |
| `profile.archive_agent_confirm` | Archive this agent? | |
| `profile.archive_identity_confirm` | Archive this identity? | |
| `profile.avatar_size` | Avatar size | |
| `profile.avatar_type` | Avatar type | |
| `profile.avatar_upload_pending` | Avatar upload pending | |
| `profile.back_to_profile` | Back to profile | |
| `profile.bg_removal_unavailable` | Background removal model couldn't be loaded, so the background was kept. Retake while online to remove it. | |
| `profile.clipboard_unavailable` | Buzz couldn't access the clipboard. Try again. | |
| `profile.browser_opened` | Buzz opened your browser to finish verification. | |
| `profile.channels_appear_here` | Channels appear here | |
| `profile.choose_channel_hint` | Choose a channel above so it can join the conversation. | |
| `profile.choose_channel_feed` | Choose active channel feed | |
| `profile.emoji_before_color` | Choose an emoji before custom avatar color | |
| `profile.avatar_color_hue` | Choose custom avatar color hue | |
| `profile.avatar_color` | Choose custom avatar color | |
| `profile.backdrop_color` | Choose custom backdrop color | |
| `profile.choose_still_frame` | Choose still frame | |
| `profile.claude_code` | Claude Code | |
| `profile.continue_in_browser` | Continue in your browser | |
| `profile.copy_log` | Copy log | |
| `profile.copy_response` | Copy response | |
| `profile.copy_response_hint` | Copy the response below, then paste it into the Buzz website to finish verification. | |
| `profile.camera_denied` | Could not access the camera. Check Buzz's camera permission and try again. | |
| `profile.continuity_camera_missing` | Could not find an iPhone camera. Make sure Continuity Camera is available, then try again. | |
| `profile.could_not_load_identity` | Could not load the current Buzz identity. | |
| `profile.could_not_open_browser` | Could not open the browser. Copy the response below to finish manually. | |
| `profile.could_not_upload_animated` | Could not upload the animated avatar. | |
| `profile.cutting_out` | Cutting you out of the background... | |
| `profile.declared_owner_verified` | Declared owner verified | |
| `profile.delete_agent` | Delete agent | |
| `profile.drag_or_browse` | Drag or browse | |
| `profile.drop_image` | Drop image here | |
| `profile.failed_delete_agent` | Failed to delete agent. | |
| `profile.failed_export_snapshot` | Failed to export agent snapshot. | |
| `profile.failed_open_dm` | Failed to open direct message. | |
| `profile.failed_send_wave` | Failed to send wave. | |
| `profile.failed_sign_binding` | Failed to sign binding response. | |
| `profile.failed_start_agent` | Failed to start agent. | |
| `profile.failed_update_startup` | Failed to update startup preference. | |
| `profile.finish_on_website` | Finish on the Buzz website | |
| `profile.generating_frames` | Generating frame thumbnails | |
| `profile.harness_log` | Harness Log | |
| `profile.hover_to_play` | Hover to play | |
| `profile.just_now` | Just now | |
| `profile.last_error` | Last error | |
| `profile.line_up_shot` | Line up your shot. | |
| `profile.live_activity_hint` | Live activity will appear here. | |
| `profile.managed_by` | Managed by | |
| `profile.mcp_command` | MCP command | |
| `profile.no_activity_yet` | No activity yet | |
| `profile.no_frames` | No frames were recorded. | |
| `profile.no_identity` | No identity available for sending messages. | |
| `profile.not_deployed` | Not deployed | |
| `profile.only_owner` | Only the owner | |
| `profile.open_profile_settings` | Open profile settings | |
| `profile.outline_off` | Outline off | |
| `profile.outline_on` | Outline on | |
| `profile.paste_url_hint` | Paste a URL (Slack profile, etc.) | |
| `profile.paste_url` | Paste a URL | |
| `profile.still_frame_hint` | Pick the still shown before hover. | |
| `profile.position_yourself` | Position yourself | |
| `profile.presence_status` | Presence status | |
| `profile.preview_identity` | Preview identity | |
| `profile.preview_copied` | Preview response copied. | |
| `profile.processing_recording` | Processing recording | |
| `profile.profile_menu` | Profile menu | |
| `profile.profile_sections` | Profile sections | |
| `profile.public_key` | Public key | |
| `profile.recording_failed` | Recording failed. Try again. | |
| `profile.remove_photo` | Remove photo | |
| `profile.reset_avatar_size` | Reset avatar size | |
| `profile.resize_profile_panel` | Resize profile panel | |
| `profile.retake_recording` | Retake the recording | |
| `profile.saving_avatar` | Saving avatar | |
| `profile.selected_people` | Selected people | |
| `profile.signed_copied` | Signed response copied. Paste it into the Buzz admin console. | |
| `profile.start_agent` | Start agent | |
| `profile.start_on_launch` | Start on launch | |
| `profile.starting_camera` | Starting camera | |
| `profile.still_frame` | Still frame | |
| `profile.stops_agent_hint` | Stops any local agent process before deleting the record | |
| `profile.code_mismatch` | That code doesn't match. Check the code and try again. | |
| `profile.relay_rejected_recording` | The relay rejected the recording. Try again. | |
| `profile.managed_by_team` | This agent is managed by a team. | |
| `profile.binding_expired` | This binding link has expired. Request a new one from the requesting app. | |
| `profile.turn_outline_off` | Turn outline off | |
| `profile.turn_outline_on` | Turn outline on | |
| `profile.unarchive_agent` | Unarchive agent | |
| `profile.unarchive_identity` | Unarchive identity | |
| `profile.uploading_animated` | Uploading animated avatar | |
| `profile.use_as_avatar` | Use as avatar | |
| `profile.use_iphone` | Use iPhone | |
| `profile.use_this_computer` | Use this computer | |
| `profile.view_activity_log` | View activity log | |
| `profile.visible_memberships_hint` | Visible memberships appear as this agent joins channels. | |
| `profile.what_archived_means` | What archived means | |
| `profile.who_can_send` | Who can send instructions | |
| `profile.you` | You | |
| `profile.circle` | Circle | |
| `profile.background` | Background | |
| `profile.frame` | Frame | |
| `profile.retake` | Retake | |
| `profile.copied` | Copied | |
| `profile.signing` | Signing… | |
| `profile.continue` | Continue | |
| `profile.m_ago` | m ago | |
| `profile.h_ago` | h ago | |
| `profile.d_ago` | d ago | |
| `profile.w_ago` | w ago | |
| `profile.open_activity_feed` | Open activity feed. Last live {{time}}. | |
| `profile.follow` | Follow | |
| `profile.unfollow` | Unfollow | |
| `profile.follow_error` | {{action}} failed: {{error}} | |
| `profile.message_action` | Message | |
| `profile.edit` | Edit | |
| `profile.restart` | Restart | |
| `profile.create_card` | Create card | |

## `search`
_Global search bar and results_

| Key | English | Notes |
|---|---|---|
| `search.placeholder` | Search… | |
| `search.no_results` | No results found | |
| `search.searching` | Searching… | |
| `search.results_for` | Results for "{{query}}" | |
| `search.agent_job` | Agent job | |
| `search.agent_update` | Agent update | |
| `search.approval_request` | Approval request | |
| `search.browse_channels` | Browse channels | |
| `search.close_find_bar` | Close find bar | |
| `search.create_agent` | Create a new agent | |
| `search.create_channel` | Create a new channel | |
| `search.direct_message` | Direct message | |
| `search.direct_messages` | Direct messages | |
| `search.find_in_channel` | Find in channel | |
| `search.forum_post` | Forum post | |
| `search.forum_reply` | Forum reply | |
| `search.most_relevant` | Most relevant | |
| `search.next_match` | Next match | |
| `search.previous_match` | Previous match | |
| `search.recent_activity` | Recent activity | |
| `search.search_everything` | Search everything | |
| `search.search_members` | Search members | |
| `search.people_or_npub` | Search people or paste an npub | |
| `search.unknown_channel` | Unknown channel | |
| `search.thread` | Thread | |
| `search.message` | Message | |
| `search.in` | in | |

## `moderation`
_Moderation queue and report actions_

| Key | English | Notes |
|---|---|---|
| `moderation.ban` | Ban | |
| `moderation.unban` | Unban | |
| `moderation.kick` | Kick | |
| `moderation.report` | Report | |
| `moderation.queue` | Moderation queue | |
| `moderation.approve` | Approve | |
| `moderation.reject` | Reject | |
| `moderation.add_help` | Add anything that helps moderators... | |
| `moderation.author_banned` | Author banned | |
| `moderation.author_removed` | Author removed from channel | |
| `moderation.author_timed_out` | Author timed out | |
| `moderation.ban_lifted` | Ban lifted | |
| `moderation.failed_report` | Failed to submit report | |
| `moderation.illegal` | Illegal content | |
| `moderation.malware` | Malware or scam | |
| `moderation.action_failed` | Moderation action failed | |
| `moderation.nudity` | Nudity or sexual content | |
| `moderation.hate` | Profanity or hate speech | |
| `moderation.report_submitted` | Report submitted to community moderators | |
| `moderation.time_out` | Time out | |
| `moderation.timeout_lifted` | Timeout lifted | |
| `moderation.spam` | Spam | |
| `moderation.impersonation` | Impersonation | |
| `moderation.other` | Other | |

## `errors`
_Generic error messages_

| Key | English | Notes |
|---|---|---|
| `errors.generic` | Something went wrong. Please try again. | |
| `errors.network` | Network error. Check your connection. | |
| `errors.auth` | Authentication failed. | |
| `errors.not_found` | Not found. | |
| `errors.permission_denied` | Permission denied. | |

## `mobile_pairing`
_Mobile app QR pairing screen_

| Key | English | Notes |
|---|---|---|
| `mobile_pairing.title` | Mobile | |
| `mobile_pairing.description` | Connect the Buzz mobile app to this relay by scanning a QR code. | |
| `mobile_pairing.scan_qr` | Scan QR code | |
| `mobile_pairing.generating` | Generating QR code… | |
| `mobile_pairing.connection_failed` | WebSocket connection failed | |
| `mobile_pairing.verify_code` | Verification code | |
| `mobile_pairing.verify_hint` | Check the code matches what you see on your phone | |

## `agents`
_Agent management, configuration, and model selection_

| Key | English | Notes |
|---|---|---|
| `agents.default_model` | Default model | |
| `agents.provider_relay_mesh` | Buzz shared compute | |
| `agents.select_provider` | Select a provider… | |
| `agents.use_agent_defaults` | Use agent defaults ({{label}}) | |
| `agents.loading_harnesses` | Loading harnesses... | |
| `agents.choose_harness` | Choose a harness | |
| `agents.no_preference_default` | No preference (use app default) | |
| `agents.suffix_adapter_missing` |  (adapter missing) | |
| `agents.suffix_adapter_outdated` |  (adapter outdated) | |
| `agents.suffix_cli_missing` |  (CLI missing) | |
| `agents.suffix_not_installed` |  (not installed) | |
| `agents.suffix_default` |  (default) | |
| `agents.suffix_current` |  (current) | |
| `agents.no_models_found` | No models found | |
| `agents.loading_models` | Loading models... | |
| `agents.saved_changes_next_start` | Saved changes take effect on the next start. | |
| `agents.no_options_available` | No options available | |
| `agents.select` | Select | |
| `agents.search_models` | Search models | |
| `agents.search_models_placeholder` | Search models… | |
| `agents.no_matches` | No matches | |
| `agents.auto_collective_when_available` | Auto (collective when available) | |
| `agents.custom_model` | Custom model... | |
| `agents.couldnt_load_models` | Couldn't load models | |
| `agents.select_model` | Select model | |
| `agents.custom_model_id` | Custom model ID | |
| `agents.model` | Model | |
| `agents.llm_provider` | LLM provider | |
| `agents.custom_provider` | Custom provider... | |
| `agents.custom_provider_id` | Custom provider ID | |
| `agents.provider_changes_model_list` | Changing the provider updates the available model list immediately. | |
| `agents.inherit_value` | Inherit ({{value}}) | |
| `agents.inherit_default` | Inherit (default) | |
| `agents.inherit` | Inherit | |
| `agents.buzz_agent_model_tuning` | buzz-agent model tuning | |
| `agents.inherit_agent_default` | Inherit (agent default) | |
| `agents.thinking_effort` | Thinking / Effort | |
| `agents.thinking_effort_help` | Controls how much reasoning effort the LLM applies per turn. Leave blank to inherit from the global or persona default. | |
| `agents.max_rounds` | Max rounds | |
| `agents.max_rounds_help` | Maximum LLM + tool-call rounds per turn. 0 = unlimited. Leave blank to inherit. | |
| `agents.max_output_tokens` | Max output tokens | |
| `agents.max_output_tokens_help` | Maximum tokens the LLM may generate per response. Leave blank to inherit. | |
| `agents.context_limit` | Context limit | |
| `agents.context_limit_help` | Maximum context window tokens buzz-agent tracks before a handoff. Leave blank to inherit. | |
| `agents.respond_only_me_default` | Only me (default) | |
| `agents.respond_anyone` | Anyone | |
| `agents.respond_selected_people` | Selected people | |
| `agents.who_can_send_instructions` | Who can send instructions | |
| `agents.only_you_can_send_instructions` | Only you can send instructions. | |
| `agents.selected_count_one` | {{count}} selected | |
| `agents.selected_count_other` | {{count}} selected | |
| `agents.owner_pubkey_note` | You ({{pubkey}}) can always use this agent. You don't need to add yourself. | |
| `agents.you_can_always_use_agent` | You can always use this agent. | |
| `agents.search_people` | Search people | |
| `agents.search_by_name_or_nip05` | Search by name or NIP-05. | |
| `agents.remove_pubkey` | Remove {{pubkey}} | |
| `agents.add_pubkey_directly` | Add pubkey directly | |
| `agents.no_matching_users` | No matching users. | |
| `agents.paste_pubkeys` | Paste pubkeys | |
| `agents.paste_pubkeys_help` | One per line, or comma/space-separated. 64-char lowercase hex only — npub decoding is not yet supported here. | |
| `agents.invalid_paste_entries_one` | {{count}} entry is not 64-char hex and will be ignored. | |
| `agents.invalid_paste_entries_other` | {{count}} entries are not 64-char hex and will be ignored. | |
| `agents.valid_pubkeys_ready_one` | {{count}} valid pubkey ready. | |
| `agents.valid_pubkeys_ready_other` | {{count}} valid pubkeys ready. | |
| `agents.no_valid_pubkeys` | No valid pubkeys yet. | |
| `agents.add_people` | Add people | |
| `agents.updated_team` | Updated team "{{name}}". | |
| `agents.created_team` | Created team "{{name}}". | |
| `agents.failed_save_team` | Failed to save team. | |
| `agents.deleted_team` | Deleted team "{{name}}". | |
| `agents.failed_delete_team` | Failed to delete team. | |
| `agents.deployed_agents_one` | Deployed {{count}} agent to {{channel}}. | |
| `agents.deployed_agents_other` | Deployed {{count}} agents to {{channel}}. | |
| `agents.deploy_failed_count_one` | {{count}} failed. | |
| `agents.deploy_failed_count_other` | {{count}} failed. | |
| `agents.create_team` | Create team | |
| `agents.create_team_description` | Group agents together for quick deployment to channels. | |
| `agents.duplicate_team` | Duplicate {{name}} | |
| `agents.duplicate_team_description` | Create a new team by copying this one. | |
| `agents.copy_suffix` | copy | |
| `agents.edit_team` | Edit team | |
| `agents.exported_team` | Exported {{name}}. | |
| `agents.failed_export_team_snapshot` | Failed to export team snapshot. | |
| `agents.failed_read_team_snapshot` | Failed to read team snapshot file. | |
| `agents.failed_import_team_snapshot` | Failed to import team snapshot. | |
| `agents.choose_available_provider` | Choose an available provider for this agent. | |
| `agents.created_persona` | Created {{name}}. | |
| `agents.created_not_started` | {{name}} was created, but it did not start: {{error}} | |
| `agents.created_and_started` | Created and started {{name}}. | |
| `agents.created_profile_sync_failed` | {{name}} was created, but profile sync failed: {{error}} | |
| `agents.created_instance_failed_with_error` | {{name}} was created, but the agent instance could not be created: {{error}} | |
| `agents.created_instance_failed` | {{name}} was created, but the agent instance could not be created. | |
| `agents.failed_save_agent` | Failed to save agent. | |
| `agents.deleted_persona` | Deleted {{name}}. | |
| `agents.failed_delete_agent` | Failed to delete agent. | |
| `agents.selected_for_my_agents` | Selected {{name}} for My Agents. | |
| `agents.deselected_from_my_agents` | Deselected {{name}} from My Agents. | |
| `agents.failed_select_agent` | Failed to select agent for My Agents. | |
| `agents.failed_deselect_agent` | Failed to deselect agent from My Agents. | |
| `agents.failed_read_agent_snapshot` | Failed to read agent snapshot file. | |
| `agents.import_memory_errors_one` | {{name}} imported, but {{count}} memory entry failed to restore. | |
| `agents.import_memory_errors_other` | {{name}} imported, but {{count}} memory entries failed to restore. | |
| `agents.imported_persona` | Imported {{name}}. | |
| `agents.failed_import_agent_snapshot` | Failed to import agent snapshot. | |
| `agents.exported_persona` | Exported {{name}}. | |
| `agents.failed_export_agent_snapshot` | Failed to export agent snapshot. | |
| `agents.sharing_queued` | Sharing {{name}} is queued. It will appear after the relay accepts the update. | |
| `agents.removing_queued` | Removing {{name}} is queued. It may remain discoverable until the relay accepts the update. | |
| `agents.no_longer_discoverable` | {{name}} is no longer discoverable in the community catalog. | |
| `agents.published_to_catalog` | Published {{name}} to the community catalog. | |
| `agents.failed_update_catalog_sharing` | Failed to update catalog sharing. | |
| `agents.create_agent` | Create agent | |
| `agents.create_agent_description` | Create an agent and start it immediately. | |
| `agents.duplicate_agent` | Duplicate {{name}} | |
| `agents.duplicate_agent_description` | Create a new agent by copying this profile and adjusting it as needed. | |
| `agents.edit_agent` | Edit agent | |
| `agents.inherited_from_agent_profile` | Inherited from agent profile | |
| `agents.inherited_from_global_config` | Inherited from global config | |
| `agents.inherited_from_build` | Inherited from build | |
| `agents.set_in_runtime_config` | Set in runtime config | |
| `agents.unknown_model_discovery_error` | Unknown model discovery error | |
| `agents.this_provider` | this provider | |
| `agents.discovery_waiting_roster` | Buzz is waiting for the relay's member roster. Try again shortly; if this persists, check the relay's membership configuration. | |
| `agents.discovery_no_members_sharing` | No members are sharing compute right now. On a member machine, open Settings > Compute, choose a model, and turn on Share this machine. | |
| `agents.discovery_shared_compute_unavailable` | This version of Buzz cannot use shared compute. Update Buzz or choose another provider. | |
| `agents.discovery_invalid_shared_compute_status` | Buzz received an invalid shared compute status. Check the member machine, then try again. | |
| `agents.discovery_couldnt_check_shared_compute` | Buzz couldn't check shared compute through the relay. Check your relay connection and try again. | |
| `agents.discovery_requires_sign_in` | {{label}} requires sign-in before models can load. Sign in with the {{label}} CLI in a terminal, then try again. | |
| `agents.discovery_anthropic_key` | Enter an Anthropic API key to load Anthropic models. | |
| `agents.discovery_openai_key` | Enter an OpenAI API key to load OpenAI models. | |
| `agents.discovery_builtin_fallback` | Using built-in model options. Could not load live models for {{provider}}. | |
| `agents.default_auto` | Default (auto) | |
| `agents.default_model_with_name` | Default model ({{model}}) | |
| `agents.discovery_no_models_reported` | {{agent}} reported no models. Check that the CLI is installed and signed in, then reopen this screen. | |
| `agents.add_agent_to_channel` | Add agent to channel | |
| `agents.add_agent_to_channel_description` | Add {{name}} to a channel so desktop chat can `@mention` it. Running agents pick up new channels automatically via membership notifications. | |
| `agents.this_agent` | this agent | |
| `agents.channel` | Channel | |
| `agents.only_accessible_channels` | Only channels accessible to the current desktop user are shown here. | |
| `agents.already_member_of_channel` | Already a member of this channel | |
| `agents.role` | Role | |
| `agents.role_bot` | Bot | |
| `agents.role_member` | Member | |
| `agents.role_guest` | Guest | |
| `agents.role_admin` | Admin | |
| `agents.agent_pubkey` | Agent pubkey | |
| `agents.no_agent_selected` | No agent selected | |
| `agents.copy_pubkey` | Copy pubkey | |
| `agents.adding` | Adding... | |
| `agents.readd_to_channel` | Re-add to channel | |
| `agents.add_to_channel` | Add to channel | |
| `agents.add_custom_harness` | Add custom harness | |
| `agents.register_harness_help` | Register any ACP-speaking agent tool as a selectable harness. | |
| `agents.suffix_inherited_from_build` | ? Inherited from build | |
| `agents.provider` | Provider | |
| `agents.provided_by_build` | : Provided by this build | |
| `agents.anthropic_api_key` | ? Anthropic API Key | |
| `agents.openai_api_key` | : OpenAI API Key | |
| `agents.default_model_value` | Use app default | |
| `agents.select_effort_level` | ? Select effort level | |
| `agents.default_value` | Use app default | |
| `agents.effort` | Effort | |
| `agents.advanced` | Advanced | |
| `agents.environment_variables` | Environment variables | |
| `agents.read_only` | Read-only | |
| `agents.set_in_buzz` | Set in Buzz | |
| `agents.inherited_from_template` | Inherited from template | |
| `agents.live_override` | Live override (this session only) | |
| `agents.locked_by_harness` | Locked by harness | |
| `agents.from_env_var_value` | From environment variable | |
| `agents.from_env_var` | From environment variable | |
| `agents.from_config_file_value` | From config file | |
| `agents.from_config_file` | From config file | |
| `agents.from_acp_session` | From ACP session | |
| `agents.inherited_from_global_defaults` | Inherited from global defaults | |
| `agents.mode` | Mode | |
| `agents.system_prompt` | System prompt | |
| `agents.available_after_start` | Available after agent starts | |
| `agents.copy_label` | Copy {{label}} | |
| `agents.copied_label` | Copied | |
| `agents.loading_config` | Loading config… | |
| `agents.failed_to_load_config` | Failed to load agent config. | |
| `agents.no_config_fields` | No config fields available. | |
| `agents.advanced_count.one` | {{count}} advanced | |
| `agents.advanced_count.other` | {{count}} advanced | |
| `agents.could_not_use_asset` | Could not use that asset. | |
| `agents.asset_picker` | {{label}} picker | |
| `agents.image_tab` | Image | |
| `agents.emoji_tab` | Emoji | |
| `agents.uploading` | Uploading... | |
| `agents.drop_or_browse` | Drop or browse | |
| `agents.paste_url` | Paste a URL | |
| `agents.apply` | Apply | |
| `agents.remove_asset` | Remove {{label}} | |
| `agents.choose_custom_color` | Choose custom color | |
| `agents.choose_emoji_first` | Choose an emoji first | |
| `agents.use_swatch_background` | Use {{label}} background | |
| `agents.label_asset` | {{label}} — {{assetLabel}} | |
| `agents.asset_preview` | {{label}} preview | |
| `agents.edit_asset` | Edit | |
| `agents.uploading_asset` | Uploading… | |
| `agents.add_asset` | Add asset | |
| `agents.couldnt_save` | Couldn't save | |
| `agents.not_configured` | Not configured | |
| `agents.automatic` | Automatic | |
| `agents.agent_name` | Agent name | |
| `agents.visit_settings_agents` | Visit Settings → Agents to set it up. | |
| `agents.agent_instructions` | Agent instructions | |
| `agents.describe_agent_placeholder` | Describe what this agent should do. | |
| `agents.choose_provider` | Choose a provider | |
| `agents.provider_api_key` | {{provider}} API key | |
| `agents.catalog_publish_notice` | Published {{name}} to the community catalog. | |
| `agents.save_and_publish` | Save and publish | |
| `agents.type` | Type | |
| `agents.built_in_agent` | Built-in agent | |
| `agents.custom_agent` | Custom agent | |
| `agents.preferred_model` | Preferred model | |
| `agents.use_app_default` | Use app default | |
| `agents.preferred_runtime` | Preferred runtime | |
| `agents.custom_command` | Custom command | |
| `agents.saved_while_stopped` | {{name}} saved while stopped. | |
| `agents.start_now` | Start now | |
| `agents.started` | Created and started {{name}}. | |
| `agents.failed_to_start_with_error` | {{name}} failed to start: {{error}} | |
| `agents.failed_to_start` | {{name}} failed to start. | |
| `agents.save_changes` | Save changes | |
| `agents.edit_avatar` | Edit avatar | |
| `agents.avatar_is_shared_identity` | Avatar is shared identity | |
| `agents.detected_at` | Detected at {{time}} | |
| `agents.agent_command` | Agent command | |
| `agents.full_path_or_shell_command` | placeholder=Full path or shell command | |
| `agents.open_profile` | Open profile | |
| `agents.message_content_unavailable` | Message content unavailable | |
| `agents.show_sent_message_context` | Show sent message context | |
| `agents.sent_message_context` | Sent message context | |
| `agents.message` | Message | |
| `agents.tool` | Tool | |
| `agents.parameters` | Parameters | |
| `agents.error` | Error | |
| `agents.result` | Result | |
| `agents.status` | Status | |
| `agents.waiting_for_tool_details` | Waiting for tool details. | |
| `agents.no_metadata` | No metadata. | |
| `agents.viewed_image` | Viewed image | |
| `agents.waiting_for_acp_activity` | Waiting for ACP activity | |
| `agents.no_acp_activity_yet` | No ACP activity yet | |
| `agents.live_acp_transcript` | Live ACP transcript | |
| `agents.acp_wire_source` | ACP wire source | |
| `agents.prompt_context` | Prompt context | |
| `agents.hide_prompt_context` | Hide prompt context | |
| `agents.show_prompt_context` | Show prompt context | |
| `agents.latest_live_observed_session` | Latest live-observed session | |
| `agents.most_recent_observed_session` | Most recent observed session | |
| `agents.earlier_observed_session` | Earlier observed session | |
| `agents.memory_level_agent_only` | Agent only | |
| `agents.memory_level_core_memory` | Agent + core memory | |
| `agents.memory_level_all_memories` | Agent + all memories | |
| `agents.export_agent` | Export {{name}} | |
| `agents.memories` | Memories | |
| `agents.file_format` | File format | |
| `agents.export_memory_warning_before` | Memory is stored as | |
| `agents.plaintext` | plaintext | |
| `agents.export_memory_warning_after` |  in the snapshot. Only share it with people you trust. | |
| `agents.export` | Export | |
| `agents.memory_level_core` | core | |
| `agents.memory_level_all` | all | |
| `agents.memory_level_none` | none | |
| `agents.agent_imported` | Agent imported | |
| `agents.import_agent_snapshot` | Import agent snapshot | |
| `agents.import` | Import | |
| `agents.creating_agent` | Creating agent… | |
| `agents.import_independent_note` | A new agent will be created with a fresh keypair. The imported agent is independent of the source — identity never travels. | |
| `agents.import_memory_includes` | This snapshot includes | |
| `agents.memory_entries.one` | {{count}} memory entry | |
| `agents.memory_entries.other` | {{count}} memory entries | |
| `agents.import_memory_after` | . Memory is stored as plaintext in the file and will be restored under the new agent's identity. | |
| `agents.no_memory_included` | No memory included — config only. | |
| `agents.allowlist_count.one` | {{count}} allowlisted pubkey | |
| `agents.allowlist_count.other` | {{count}} allowlisted pubkeys | |
| `agents.import_allowlist_note` | This snapshot includes a source-environment pubkey allowlist. Those identities are not meaningful on your relay. | |
| `agents.allowlist_clear` | Clear | |
| `agents.allowlist_clear_after` |  — start with an empty allowlist (safer) | |
| `agents.allowlist_keep` | Keep | |
| `agents.allowlist_keep_after` |  — copy source allowlist to the new agent | |
| `agents.was_created_successfully` | was created successfully. | |
| `agents.memory_partially_restored.one` | {{name}} imported, but {{count}} memory entry failed to restore. | |
| `agents.memory_partially_restored.other` | {{name}} imported, but {{count}} memory entries failed to restore. | |
| `agents.memory_restored.one` | {{name}} imported with {{count}} memory entry. | |
| `agents.memory_restored.other` | {{name}} imported with {{count}} memory entries. | |
| `agents.profile_sync` | Profile sync: {{error}} | |
| `agents.agent_defaults` | ? Agent defaults | |
| `agents.set_agent_defaults` | Set agent defaults | |
| `agents.stop_running_agents` | Stop running agents | |
| `agents.agent_actions` | Agent actions | |
| `agents.set_up_and_manage_agents` | Set up and manage your agents. | |
| `agents.inherit_runtime_from_template` | Inherit runtime from template | |
| `agents.inherit_runtime_help_active` | Inherits the runtime ({{runtime}}) from {{name}}. Changes here override the template's runtime. | |
| `agents.pins_agent_to_runtime` | Pins this agent to a specific runtime command, overriding the template's runtime. | |
| `agents.auto_restart_on_config_change` | Auto-restart on config change | |
| `agents.auto_restart_help_active` | Restarts this agent automatically when its configuration changes, once it is idle and connected. | |
| `agents.auto_restart_help_inactive` | Restarts this agent automatically when its configuration changes. | |
| `agents.agent_runtime_args` | Agent runtime args | |
| `agents.comma_separated` | Comma-separated | |
| `agents.parallelism` | Parallelism | |
| `agents.acp_command` | ACP command | |
| `agents.system_prompt_override` | System prompt override | |
| `agents.leave_blank_no_acp_system_prompt` | Leave blank to send no ACP system prompt | |
| `agents.per_agent_env_vars` | Per-agent env vars. Override the template's vars on collision. | |
| `agents.template_global_defaults` | Template / global defaults | |
| `agents.value_for_env_key` | Value for {{key}} | |
| `agents.value_placeholder` | Value | |
| `agents.overrides_source_value` | Overrides the {{source}} value | |
| `agents.inherited_from_source_value` | Inherited from {{source}} | |
| `agents.set_in_goose_config` | Set in goose config | |
| `agents.inherited_from_source` | Inherited from source | |
| `agents.no_variables_set` | No variables set. | |
| `agents.variable_name` | aria-label=Variable name | |
| `agents.variable_value` | aria-label=Variable value | |
| `agents.remove_variable` | aria-label=Remove variable | |
| `agents.overrides_source_default` | Overrides the {{source}} default | |
| `agents.add_variable` | Add variable | |
| `agents.remote_provider` | Remote ({{provider}}) | |
| `agents.process_pid` | PID {{pid}} | |
| `agents.process_exit` | Exit {{code}} | |
| `agents.ready_to_launch` | ? Ready to launch | |
| `agents.managed_remotely` | : Managed remotely; | |
| `agents.manage` | Manage | |
| `agents.configuration` | Configuration | |
| `agents.configuration_missing` | Configuration missing | |
| `agents.restart_required` | Restart required | |
| `agents.out_of_date` | Out of date | |
| `agents.auto_start` | Auto-start | |
| `agents.manual_start` | Manual start | |
| `agents.remote_deployment` | Remote deployment | |
| `agents.auto` | Auto | |
| `agents.origin_from_acp` | From ACP session | |
| `agents.origin_from_acp_config` | From ACP config | |
| `agents.origin_from_env` | From environment variable | |
| `agents.origin_from_config_file` | From config file | |
| `agents.origin_template_default` | Template default | |
| `agents.origin_live_override` | Live override | |
| `agents.model_not_available` | That model isn't available for this agent. | |
| `agents.model_switched_session` | Model switched for this session. | |
| `agents.failed_to_load_models` | Failed to load models. | |
| `agents.open_to_load_models` | Open to load available models. | |
| `agents.runtime_no_model_switching` | This runtime doesn't support switching models. | |
| `agents.uses_runtime_default_model` | This agent uses the runtime's default model. | |
| `agents.restart_to_apply` | Restart to apply | |
| `agents.added_by` | Added by {{name}} | |
| `agents.you` | You | |
| `agents.parallelism_help` | How many conversations each running instance handles at once (1–32). | |
| `agents.instance_name_pool` | Instance name pool | |
| `agents.already_in_my_agents` | {{name}} is already in My Agents | |
| `agents.add_from_catalog` | Add {{name}} from Agent Catalog | |
| `agents.community_member` | Community member | |
| `agents.agent_instruction` | Agent instruction | |
| `agents.delete_this_agent` | Delete this agent? | |
| `agents.delete_named_agent` | Delete {{name}}? | |
| `agents.delete_cascade.one` | This will also stop {{count}} running instance. | |
| `agents.delete_cascade.other` | This will also stop {{count}} running instances. | |
| `agents.delete_agent_title` | Delete agent | |
| `agents.no_models_match` | No models match | |
| `agents.choose_a_model` | Choose a model | |
| `agents.auto_mesh_hint` | Auto uses Mesh collective intelligence when two or more models stay in sync. | |
| `agents.paste_api_key` | Paste API key | |
| `agents.hide_api_key` | Hide API key | |
| `agents.show_api_key` | Show API key | |
| `agents.share_level_team_only` | Team only | |
| `agents.share_level_agent_only` | Agent only | |
| `agents.share_level_team_core` | Team + core memory | |
| `agents.share_level_agent_core` | Agent + core memory | |
| `agents.share_level_team_all` | Team + all memories | |
| `agents.share_level_agent_all` | Agent + all memories | |
| `agents.core_memory` | Agent + core memory | |
| `agents.all_memories` | Agent + all memories | |
| `agents.the_people_you_selected` | The people you selected | |
| `agents.the_person_you_selected` | The person you selected | |
| `agents.and_two` | {{name1}} and {{name2}} | |
| `agents.and_many` | {{names}}, and {{last}} | |
| `agents.anyone_with_link` | Anyone with the link can view it. | |
| `agents.recipients_with_file_link` | —and anyone with the file link—can view it. | |
| `agents.share_memories` | Share memories? | |
| `agents.only_share_with_trust` | Only share with people you trust. | |
| `agents.copying` | Copying… | |
| `agents.copied` | Copied | |
| `agents.couldnt_copy_link` | Couldn't copy link | |
| `agents.sent_copy` | Sent a copy of {{name}} | |
| `agents.share_title` | Share {{displayName}} | |
| `agents.sending` | Sending… | |
| `agents.share_settings` | Share settings | |
| `agents.whats_included` | What's included | |
| `agents.what_to_include` | What to include | |
| `agents.memory_warning_strong` | Memories | |
| `agents.memory_warning_rest` | are included in this share. Only share with people you trust. | |
| `agents.share_to_catalog` | Share to catalog | |
| `agents.share_to_catalog_description` | Publish this agent to the community catalog so others can use it. | |
| `agents.share_with` | Share with | |
| `agents.recipient_limit_reached` | Recipient limit reached | |
| `agents.loading_people` | Loading people | |
| `agents.add_recipient` | Add recipient | |
| `agents.no_people_found` | No people found. | |
| `agents.selected_count.one` | {{count}} selected | |
| `agents.selected_count.other` | {{count}} selected | |
| `agents.invalid_paste_entries` | Some pasted entries aren't valid pubkeys. | |
| `agents.valid_pubkeys_ready` | No valid pubkeys yet. | |
| `agents.agent_created` | Agent created | |
| `agents.save_private_key_now` | Save the private key now. The app can keep running the harness locally, but this secret is only revealed here. | |
| `agents.private_key_nsec` | Private key (nsec) | |
| `agents.private_key_identity_help` | This is the agent identity used by `buzz-acp`. | |
| `agents.copy_private_key` | Copy key | |
| `agents.attach_failed` | {{name}} was created, but couldn't be added to #{{channel}}. | |
| `agents.agent_ready_running` | {{name}} is ready and running. | |
| `agents.agent_ready_deployed` | {{name}} is ready and deployed. | |
| `agents.agent_ready` | {{name}} is ready. | |
| `agents.trying_again` | Trying again… | |
| `agents.try_again` | Try again | |
| `agents.delete_team_confirm_title` | Delete team | |
| `agents.delete_team_confirm_named` | Delete {{name}}? | |
| `agents.delete_team_confirm` | Delete this team? | |
| `agents.team_name_placeholder` | Team name | |
| `agents.team_description_placeholder` | Optional description for this team. | |
| `agents.team_instructions` | Team instructions | |
| `agents.team_instructions_placeholder` | Optional instructions applied to every deployed team member. | |
| `agents.agents` | Agents | |
| `agents.team_personas_description` | Group agents that you can add to a channel together. | |
| `agents.team_missing_personas` | This team has no agents yet. | |
| `agents.team_empty_state` | No teams yet. Create one to group agents. | |
| `agents.built_in` | Built-in | |
| `agents.memory_team_only` | Team only | |
| `agents.memory_team_core` | Team + core memory | |
| `agents.memory_team_all` | Team + all memories | |
| `agents.export_team` | Export team | |
| `agents.agent_turn_in_progress` | Agent turn in progress | |
| `agents.drop_agent_file_to_import` | Drop .agent.json or .agent.png to import | |
| `agents.unknown_agents` | Unknown agents | |
| `agents.custom_agents` | Custom agents | |
| `agents.agent_profile` | {{name}} — profile | |
| `agents.new_agent` | New agent | |
| `agents.discover_agents` | Discover agents | |
| `agents.run_on` | Run on | |
| `agents.import_memory_errors.one` | {{name}} imported, but {{count}} memory entry failed to restore. | |
| `agents.import_memory_errors.other` | {{name}} imported, but {{count}} memory entries failed to restore. | |
| `agents.deployed_agents` | Deployed agents | |
| `agents.deploy_failed_count.one` | Deployed {{count}} agent. {{failed}} failed. | |
| `agents.deploy_failed_count.other` | Deployed {{count}} agents. {{failed}} failed. | |
| `agents.allowlist_clear_desc` | start with empty allowlists (safer) | |
| `agents.allowlist_keep_desc` | copy source allowlists to new members | |
| `agents.profile_sync_failed` | Profile sync failed for: | |
| `agents.harness_default` | Harness default | |
| `agents.use_harness_defaults` | Use harness defaults | |
| `agents.deploy_team_to_channel` | Deploy team to channel | |
| `agents.deploying` | Deploying... | |
| `agents.working` | Working | |
| `agents.starting` | Starting… | |
| `agents.no_log_output` | No log output yet. | |
| `agents.copy_log` | Copy log | |
| `agents.linked_from` | Linked from {{path}} | |
| `agents.mixed_models` | Mixed models | |
| `agents.agent_teams` | Agent teams | |
| `agents.new_team` | New team | |
| `agents.updated` | Updated | |
| `agents.no_plan_details` | No plan details. | |
| `agents.user` | User | |
| `agents.edited` | Edited | |
| `agents.encode_failed` | Encode failed: {{message}} | |
| `agents.encode_failed_plain` | Encode failed. | |
| `agents.upload_failed` | Upload failed: {{message}} | |
| `agents.upload_failed_plain` | Upload failed. | |
| `agents.send_failed` | Send failed: {{message}} | |
| `agents.send_failed_plain` | Send failed. | |
| `agents.couldnt_open_conversation` | Couldn't open the conversation: {{message}} | |
| `agents.couldnt_open_conversation_plain` | Couldn't open the conversation. | |
| `agents.failed_start_agent` | Failed to start agent. | |
| `agents.failed_stop_agent` | Failed to stop agent. | |
| `agents.no_skill_content` | No skill content returned. | |
| `agents.no_file_content` | No file content returned. | |
| `agents.harness` | Harness | |
| `agents.global_defaults_not_set` | Global defaults not set | |
| `agents.set` | Set | |
| `agents.my_agents` | My agents | |
| `agents.my_agents_description` | The agents you have chosen for this app. Use them to create teams and launch agents. | |
| `agents.choose_from_catalog` | Choose from catalog | |
| `agents.import_snapshot` | Import snapshot | |
| `agents.no_agents_yet` | No agents yet | |
| `agents.no_agents_description` | Choose one from Agent Catalog, create your own, or import one to get started. | |
| `agents.drop_snapshot_hint` | Or drop an .agent.json or .agent.png snapshot here to import. | |
| `agents.agent_catalog` | Agent Catalog | |
| `agents.agent_catalog_description` | Browse agents shared to this relay. | |
| `agents.catalog_empty_title` | You're all set | |
| `agents.catalog_empty_description` | Everything in Agent Catalog is already in My Agents. | |
| `agents.catalog_empty_catalog_description` | Shared agents will appear here. | |
| `agents.catalog_empty_catalog_title` | No agents are being shared | |
| `agents.view_details` | View details | |
| `agents.choose` | Choose | |
| `agents.deselect` | Deselect | |
| `agents.selected` | Selected | |
| `agents.available` | Available | |
| `agents.detail_selected_title` | Selected for My Agents | |
| `agents.detail_selected_description` | Turn this off to remove the agent from teams and agent creation in this app. | |
| `agents.detail_available_title` | Available in Agent Catalog | |
| `agents.detail_available_description` | Turn this on to make the agent available for teams and agent creation. | |
| `agents.add_agent` | Add agent | |
| `agents.added_to_my_agents` | Added to My Agents | |
| `agents.select_in_my_agents` | {{action}} {{name}} in My Agents | |
| `agents.import_short` | Import | |
| `agents.team_imported` | Team imported | |
| `agents.import_team_snapshot` | Import team snapshot | |
| `agents.creating_team` | Creating team… | |
| `agents.import_team_fresh_keypairs` | A new team will be created with fresh keypairs for all members. The imported team is independent of the source — identity never travels. | |
| `agents.respond_to_allowlist` | Respond-to allowlist | |
| `agents.allowlist_source_not_meaningful` | This snapshot includes source-environment pubkey allowlists for one or more members. Those identities are not meaningful on your relay. | |
| `agents.members_count_one` | Members ({{count}}) | |
| `agents.members_count_other` | Members ({{count}}) | |
| `agents.team_imported_success_one` | was created successfully with {{count}} member. | |
| `agents.team_imported_success_other` | was created successfully with {{count}} members. | |
| `agents.team_imported_with_failures_one` | was created, but {{count}} member failed to publish a profile. | |
| `agents.team_imported_with_failures_other` | was created, but {{count}} members failed to publish profiles. | |
| `agents.harness_log` | Harness Log | |
| `agents.select_agent_to_inspect` | Select a local agent to inspect recent output. | |
| `agents.no_local_agent_selected` | No local agent selected | |
| `agents.pick_managed_agent` | Pick a managed agent to view the latest ACP log output. | |
| `agents.duplicate` | Duplicate | |
| `agents.share` | Share | |
| `agents.missing_personas_in_team_one` | {{count}} agent in this team is no longer in your agents. Edit the team to fix it before deploying or sharing. | |
| `agents.missing_personas_in_team_other` | {{count}} agents in this team are no longer in your agents. Edit the team to fix it before deploying or sharing. | |
| `agents.timed_out_cannot_send` | You are currently timed out and cannot send messages. | |
| `agents.destination_unavailable` | The selected destination is no longer available. Please pick another. | |
| `agents.this_computer` | This computer | |
| `agents.approved_ellipsis` | Approved (...) | |
| `agents.auto_collective` | Auto (collective when available) | |
| `agents.buzz_shared_compute` | Buzz shared compute | |
| `agents.default_medium` | Default (medium) | |
| `agents.denied_ellipsis` | Denied (...) | |
| `agents.inherit_high` | Inherit (high) | |
| `agents.inherit_runtime_template` | Inherit runtime from template | |
| `agents.inherited_from` | Inherited from | |
| `agents.mention_to_watch` | Mention this agent in a channel to watch the next turn. | |
| `agents.no_preference_app_default` | No preference (use app default) | |
| `agents.no_preference` | No preference | |
| `agents.overrides_build_default` | Overrides build default | |
| `agents.restart_to_attach` | Restart this local agent to attach the observer feed. | |
| `agents.saved_next_start` | Saved changes take effect on the next start. | |
| `agents.select_harness` | Select a harness | |
| `agents.set_in_config` | Set in config | |
| `agents.waiting_next_turn` | Waiting for the next agent turn. | |
| `agents.where_to_run` | Where to run | |
| `agents.snapshot_instructions_title` | Agent instructions | |
| `agents.snapshot_instructions_subtitle` | Review the instructions this agent will follow after import. | |
| `agents.snapshot_no_system_prompt` | No system prompt included. | |
| `agents.card_agent_only` | Agent only | |
| `agents.card_agent_memory` | Agent + core memory | |
| `agents.card_agent_all_memories` | Agent + all memories | |
| `agents.card_api_key_saved` | API key saved to your agent defaults. Running agents pick it up on their next restart. | |
| `agents.card_api_key_save_error` | Couldn't save the key. | |
| `agents.card_open_link_error` | Failed to open link | |
| `agents.card_api_key_placeholder` | sk-… | |
| `agents.card_style_placeholder` | Optional style notes for the art and card text | |
| `agents.card_memory_tooltip` | Choose how much memory to include in the card | |
| `agents.card_memory_needs_instance` | Including memory needs a linked agent instance | |
| `agents.card_lock_needs_instance` | Locking needs a linked agent instance | |
| `agents.card_save_key_continue` | Save key & continue | |
| `agents.card_viewer_download` | Download card | |
| `agents.card_viewer_sending` | Sending… | |
| `agents.card_viewer_send` | Send | |
| `agents.card_viewer_retrying` | Retrying… | |
| `agents.card_viewer_retry` | Retry | |
| `agents.card_dismiss_failed_mint` | Dismiss failed mint | |
| `agents.card_minting` | Minting {{name}}'s card… (takes a few minutes) | |
| `agents.card_ready` | {{name}}'s card is ready — view it | |
| `agents.card_failed` | Minting {{name}}'s card failed | |

## `projects`

| Key | English | Notes |
|---|---|---|
| `projects.add_context_for_reviewers` | Add context for reviewers | |
| `projects.issue_body_placeholder` | Add context, expected behavior, or reproduction steps | |
| `projects.add_line_comment` | Add line comment | |
| `projects.pr_already_compares` | An open pull request already compares these branches. | |
| `projects.approval_summary` | Approval summary | |
| `projects.prompt_release_cut` | Are we safe to cut a release this week? | |
| `projects.prompt_release_week` | Are we safe to release this week? | |
| `projects.changes_requested_dot` | Changes requested. | |
| `projects.changes_requested` | Changes requested | |
| `projects.check_remote_changes` | Check for remote changes | |
| `projects.choose_base_branch` | Choose a base branch. | |
| `projects.choose_compare_branch` | Choose a compare branch. | |
| `projects.choose_repo_and_branches` | Choose a repository and branches to compare. | |
| `projects.choose_repo_for_issue` | Choose a repository for this issue. | |
| `projects.choose_repository` | Choose a repository. | |
| `projects.collapse_review_history` | Collapse review history | |
| `projects.comment_posted` | Comment posted. | |
| `projects.converted_to_draft` | Converted to draft. | |
| `projects.copy_commit_hash` | Copy commit hash | |
| `projects.could_not_fetch_repo` | Could not fetch repository. | |
| `projects.could_not_load_issues` | Could not load issues for this repository. | |
| `projects.could_not_load_prs` | Could not load pull requests for this repository. | |
| `projects.could_not_load_activity` | Could not load repository activity from git. | |
| `projects.could_not_load_file_tree` | Could not load the repository file tree. | |
| `projects.create_new_project` | Create a new project | |
| `projects.create_remote_branch` | Create a remote branch | |
| `projects.create_issue` | Create an issue | |
| `projects.create_branch` | Create branch | |
| `projects.create_project_item` | Create project item | |
| `projects.create_project` | Create project | |
| `projects.delete_branch` | Delete branch | |
| `projects.delete_project` | Delete project | |
| `projects.delete_remote_branch` | Delete this remote branch | |
| `projects.describe_change` | Describe the change | |
| `projects.describe_issue` | Describe the issue | |
| `projects.failed_approve` | Failed to approve. | |
| `projects.failed_clone` | Failed to clone repository | |
| `projects.failed_create_branch` | Failed to create branch. | |
| `projects.failed_create_project` | Failed to create project. | |
| `projects.failed_delete_branch` | Failed to delete branch. | |
| `projects.failed_delete_project` | Failed to delete project | |
| `projects.failed_merge_pr` | Failed to merge pull request. | |
| `projects.failed_post_comment` | Failed to post comment. | |
| `projects.failed_post_line_comment` | Failed to post line comment. | |
| `projects.failed_prepare_recovery` | Failed to prepare merge recovery. | |
| `projects.failed_publish_merged` | Failed to publish merged pull request status. | |
| `projects.failed_pull` | Failed to pull repository | |
| `projects.failed_push` | Failed to push repository | |
| `projects.failed_reach_agent` | Failed to reach the agent | |
| `projects.failed_request_review` | Failed to request review. | |
| `projects.failed_update_pr` | Failed to update pull request | |
| `projects.failed_update_status` | Failed to update status. | |
| `projects.filter_issues` | Filter issues | |
| `projects.filter_prs` | Filter pull requests | |
| `projects.filter_repos` | Filter repositories | |
| `projects.git_contributor` | Git contributor | |
| `projects.grid_layout` | Grid layout | |
| `projects.in_review` | In Review | |
| `projects.issue_created` | Issue created. | |
| `projects.line_comment_posted` | Line comment posted. | |
| `projects.list_layout` | List layout | |
| `projects.local_checking` | Local checking | |
| `projects.local_missing` | Local missing | |
| `projects.marked_ready_review` | Marked as ready for review. | |
| `projects.merge_pr` | Merge pull request | |
| `projects.more_pr_actions` | More pull request actions | |
| `projects.my_issues` | My Issues | |
| `projects.my_pull_requests` | My Pull Requests | |
| `projects.my_repositories` | My Repositories | |
| `projects.no_activity` | No activity | |
| `projects.no_agents_available` | No agents available | |
| `projects.no_commits_yet` | No commits are available yet. | |
| `projects.no_files_pushed` | No files have been pushed yet. | |
| `projects.no_git_commits` | No git commits | |
| `projects.no_issues_yet` | No issues yet. | |
| `projects.no_project_selected` | No project selected. | |
| `projects.no_pr_selected` | No pull request selected. | |
| `projects.no_prs_yet` | No pull requests yet. | |
| `projects.open_pr` | Open a pull request | |
| `projects.open_issue` | Open issue | |
| `projects.open_project_web` | Open project web page | |
| `projects.open_terminal` | Open terminal | |
| `projects.pr_review` | PR review | |
| `projects.project_breadcrumb` | Project breadcrumb | |
| `projects.project_deleted` | Project deleted | |
| `projects.projects_are_repos` | Projects are repositories published to this workspace's relay. | |
| `projects.publish_merged_status` | Publish merged status | |
| `projects.publish_pushed_commit` | Publish the pushed commit to this pull request | |
| `projects.published_merged_status` | Published merged pull request status. | |
| `projects.pull_remote_commits` | Pull remote commits | |
| `projects.pr_approved` | Pull request approved. | |
| `projects.pr_branches_incomplete` | Pull request branches are incomplete. | |
| `projects.pr_closed` | Pull request closed. | |
| `projects.pr_created` | Pull request created. | |
| `projects.pr_already_current` | Pull request is already current. | |
| `projects.pr_reopened` | Pull request reopened. | |
| `projects.pr_updated` | Pull request updated. | |
| `projects.pull_request` | Pull Request | |
| `projects.pull_requests` | Pull requests | |
| `projects.pull_requests_title` | Pull Requests | |
| `projects.push_local_commits` | Push local commits | |
| `projects.recovery_commands_copied` | Recovery commands copied | |
| `projects.recovery_commit_fetched` | Recovery commit fetched and terminal opened. | |
| `projects.release_check` | Release check | |
| `projects.remote_checking` | Remote checking | |
| `projects.remote_state_refreshed` | Remote state refreshed. | |
| `projects.request_changes` | Request changes | |
| `projects.resolve_in_terminal` | Resolve in Terminal | |
| `projects.review_issue` | Review issue | |
| `projects.review_pr` | Review PR | |
| `projects.review_requested` | Review requested. | |
| `projects.search_people_agents` | Search people and agents | |
| `projects.projects_description` | Set up and manage your projects. | |
| `projects.source_channel_not_verified` | Source channel is claimed by the pull request author and is not relay-verified. | |
| `projects.prompt_summarize_activity` | Summarize recent repository activity. | |
| `projects.prompt_summarize_issues` | Summarize the open issues and flag anything urgent. | |
| `projects.branches_must_differ` | The base and compare branches must be different. | |
| `projects.compare_branch_must_be_pushed` | The compare branch must be pushed before opening a pull request. | |
| `projects.git_fetch_failed` | The Git fetch failed. | |
| `projects.relay_request_failed` | The relay request failed. | |
| `projects.toggle_formatting` | Toggle formatting | |
| `projects.top_languages` | Top Languages | |
| `projects.triage_issue` | Triage issue | |
| `projects.unknown_author` | Unknown author | |
| `projects.unknown_contributor` | Unknown contributor | |
| `projects.update_pr` | Update PR | |
| `projects.updated_pr_branch` | Updated pull request branch | |
| `projects.view_closed` | View closed | |
| `projects.view_draft` | View draft | |
| `projects.view_issue` | View issue | |
| `projects.view_merge` | View merge | |
| `projects.view_pr` | View pull request | |
| `projects.prompt_what_looks_good` | What looks good? | |
| `projects.project_about_placeholder` | What this project is about | |
| `projects.prompt_pr_attention` | Which pull requests need attention today? | |
| `projects.workspace_repositories` | Workspace repositories: | |
| `projects.local` | Local | |
| `projects.remote` | Remote | |
| `projects.approved` | Approved | |
| `projects.issues` | Issues | |
| `projects.activity` | Activity | |
| `projects.prompt_release_cut_named` | Are we safe to cut a release of {{repo}} this week? | |
| `projects.prompt_summarize_activity_named` | Summarize recent activity in {{repo}}. | |
| `projects.tab_overview` | Overview | |
| `projects.tab_readme` | README | |
| `projects.files` | Files | |
| `projects.commits` | Commits | |
| `projects.contributors` | Contributors | |
| `projects.all` | All | |
| `projects.projects` | Projects | |
| `projects.events_1_2` | 1–2 events | |
| `projects.events_3_5` | 3–5 events | |
| `projects.events_6_9` | 6–9 events | |
| `projects.events_10_plus` | 10+ events | |
| `projects.delete_project_confirm` | Delete project? | |
| `projects.branch_name` | Branch name | |
| `projects.delete_branch_confirm` | Delete branch? | |
| `projects.recent_activity` | Recent activity | |
| `projects.created_date` | Created date | |
| `projects.approve_pr` | Approve pull request | |
| `projects.merge_pr_confirm` | Merge pull request? | |
| `projects.could_not_load_changed_files` | Could not load changed files for this {{label}}. | |
| `projects.add_reviewer` | Add reviewer | |

## `workflows`

| Key | English | Notes |
|---|---|---|
| `workflows.approval_note` | Approval note | |
| `workflows.approval_request_message` | Approval request message | |
| `workflows.back_to_form` | Back to form | |
| `workflows.channel_uuid` | Channel UUID | |
| `workflows.close_detail_panel` | Close detail panel | |
| `workflows.copy_secret` | Copy Secret | |
| `workflows.copy_url` | Copy URL | |
| `workflows.create_scoped_hint` | Create a workflow scoped to this channel. | |
| `workflows.create_copy` | Create Copy | |
| `workflows.create_workflow` | Create Workflow | |
| `workflows.define_assign_hint` | Define a workflow and assign it to a channel. | |
| `workflows.delete_this` | Delete this workflow. | |
| `workflows.dm_content` | DM content | |
| `workflows.duplicate_workflow` | Duplicate Workflow | |
| `workflows.edit_as_yaml` | Edit as YAML | |
| `workflows.edit_workflow` | Edit Workflow | |
| `workflows.editing_in` | Editing workflow in | |
| `workflows.header_name` | Header name | |
| `workflows.header_value` | Header value | |
| `workflows.join_or_create_hint` | Join or create a channel before adding a workflow. | |
| `workflows.modify_definition` | Modify the workflow definition. | |
| `workflows.new_channel_topic` | New channel topic | |
| `workflows.optional_note` | Optional note... | |
| `workflows.pubkey_or_role` | Pubkey or role | |
| `workflows.refresh_workflows` | Refresh workflows | |
| `workflows.remove_header` | Remove header | |
| `workflows.remove_step` | Remove step | |
| `workflows.search_channels` | Search channels... | |
| `workflows.select_channel` | Select a channel... | |
| `workflows.created_in` | This workflow will be created in | |
| `workflows.what_does_it_do` | What does this workflow do? | |
| `workflows.workflow_actions` | Workflow actions | |
| `workflows.workflows_title` | Workflows | |
| `workflows.no_workflows_yet` | No workflows yet | |
| `workflows.create_workflow_btn` | Create workflow | |
| `workflows.workflow_created` | Workflow created | |
| `workflows.failed_create` | Failed to create workflow | |
| `workflows.workflow_updated` | Workflow updated | |
| `workflows.failed_update` | Failed to update workflow | |
| `workflows.workflow_deleted` | Workflow deleted | |
| `workflows.failed_delete` | Failed to delete workflow | |
| `workflows.delete_workflow` | Delete workflow | |
| `workflows.approved` | Approved | |
| `workflows.denied` | Denied | |
| `workflows.step` | Step | |
| `workflows.triggers` | Triggers | |
| `workflows.steps` | Steps | |
| `workflows.step_number_one` | Step {{count}} | |
| `workflows.step_number_other` | Step {{count}} | |

## `home`

| Key | English | Notes |
|---|---|---|
| `home.agent_update` | Agent update | |
| `home.approval_requested` | Approval requested | |
| `home.back_to_inbox_list` | Back to inbox list | |
| `home.back_to_inbox` | Back to Inbox | |
| `home.cannot_remind` | Cannot remind without a channel | |
| `home.channel_update` | Channel update | |
| `home.copy_link` | Copy link | |
| `home.could_not_load_project` | Could not load this project item. | |
| `home.drag_resize_reset` | Drag to resize. Double-click to reset width. | |
| `home.drag_resize` | Drag to resize. | |
| `home.forum_post` | Forum post | |
| `home.forum_reply` | Forum reply | |
| `home.inbox_options` | Inbox options | |
| `home.is_pubkey_agent` | Is this pubkey an agent | |
| `home.job_accepted` | Job accepted | |
| `home.job_cancelled` | Job cancelled | |
| `home.job_failed` | Job failed | |
| `home.job_requested` | Job requested | |
| `home.job_result` | Job result | |
| `home.mark_as_read` | Mark as read | |
| `home.mark_done` | Mark done | |
| `home.mark_unread` | Mark unread | |
| `home.merge_recovery_pr_only` | Merge recovery is only available for pull requests. | |
| `home.more_actions` | More actions | |
| `home.needs_action` | Needs action | |
| `home.new_activity_hint` | New activity will appear here. | |
| `home.no_activity_yet` | No activity yet | |
| `home.no_details` | No additional details were attached to this event. | |
| `home.no_agent_updates` | No agent updates found | |
| `home.no_channel_link` | No channel link | |
| `home.reminder` | Reminder | |
| `home.progress_update` | Progress update | |
| `home.mention` | Mention | |
| `home.not_connected` | Not connected | |
| `home.connecting` | Connecting… | |
| `home.connected` | Connected | |
| `home.reconnecting` | Reconnecting to relay… | |
| `home.connection_lost` | Connection lost — relay is not responding | |
| `home.all` | All | |
| `home.projects` | Projects | |
| `home.mentions` | Mentions | |
| `home.threads` | Threads | |
| `home.agents` | Agents | |
| `home.reminders` | Reminders | |
| `home.drafts` | Drafts | |
| `home.no_project_work` | No project work found | |
| `home.no_mentions` | No mentions found | |
| `home.no_threads` | No threads found | |
| `home.nothing_needs_action` | Nothing needs action | |
| `home.no_reminders` | No reminders | |
| `home.no_drafts` | No drafts | |
| `home.workflow_waiting_approval` | A workflow is waiting for approval. | |
| `home.reminder_waiting` | A reminder is waiting for you. | |
| `home.no_unread_activity` | No unread activity | |
| `home.no_unread_agent_updates` | No unread agent updates | |
| `home.no_unread_drafts` | No unread drafts | |
| `home.no_unread_needs_action` | No unread items needing action | |
| `home.no_unread_mentions` | No unread mentions | |
| `home.no_unread_project` | No unread project work | |
| `home.no_unread_reminders` | No unread reminders | |
| `home.no_unread_threads` | No unread threads | |
| `home.open_conversation` | Open conversation | |
| `home.open_full_thread` | Open full thread | |
| `home.open_in_channel` | Open in channel | |
| `home.open_project` | Open project | |
| `home.remind_later` | Remind me later | |
| `home.reminder_due` | Reminder due | |
| `home.reminder_soon` | Reminder in less than a minute | |
| `home.reminder_set` | Reminder set | |
| `home.no_replies_available` | Replies are not available for this item. | |
| `home.resize_inbox` | Resize inbox list | |

## `communities`

| Key | English | Notes |
|---|---|---|
| `communities.add_community` | Add community | |
| `communities.agree_terms` | Agree to the Terms of Service and Privacy Policy. | |
| `communities.relay_in_use` | Another community already uses this relay URL. | |
| `communities.back_to_options` | Back to add community options | |
| `communities.checking_relay` | Checking relay | |
| `communities.choose_community` | Choose a community | |
| `communities.claim_address` | Claim a Buzz address to get started. | |
| `communities.actions` | Community actions | |
| `communities.address_status` | Community address status | |
| `communities.name_placeholder` | Community name here | |
| `communities.name` | Community name | |
| `communities.not_found` | Community not found. | |
| `communities.connect_continue` | Connect and continue | |
| `communities.connect_or_start` | Connect one you own, or start something new. | |
| `communities.continue_builderlab` | Continue to Builderlab | |
| `communities.copy_public_id` | Copy public ID | |
| `communities.could_not_connect` | Could not connect the Buzz identity. | |
| `communities.could_not_connect_device` | Could not connect this device's Buzz identity. | |
| `communities.could_not_create` | Could not create the community. | |
| `communities.could_not_disconnect` | Could not disconnect the account's previous Buzz identity. | |
| `communities.could_not_load_key` | Could not load your public key. | |
| `communities.create_community` | Create a community | |
| `communities.create_or_join` | Create a new community or join one you already have. | |
| `communities.create_new` | Create a new community | |
| `communities.create_btn` | Create community | |
| `communities.design_team` | Design team | |
| `communities.disconnected` | Disconnected from relay | |
| `communities.enter_url_restore` | Enter the community URL or an invite link. Your role will be restored when you connect. | |
| `communities.enter_invite` | Enter the invite link or community URL you received. | |
| `communities.finish_connecting` | Finish connecting the community already in progress, then try again. | |
| `communities.not_connected` | Not connected | |
| `communities.connecting` | Connecting… | |
| `communities.connected` | Connected | |
| `communities.reconnecting` | Reconnecting to relay… | |
| `communities.connection_lost` | Connection lost — relay is not responding | |
| `communities.hosted_community` | Hosted community | |
| `communities.invite_link_or_url` | Invite link or community URL | |
| `communities.join_or_create` | Join or create a community | |
| `communities.join_or_create_subtitle` | Join with an invite, create your own community, or reconnect one you already have. | |
| `communities.join_community` | Join a community | |
| `communities.join_existing` | Join an existing community | |
| `communities.already_have` | I already have a community | |
| `communities.tell_us_role` | Tell us your role so we can find the fastest way back in. | |
| `communities.own_community` | I own the community | |
| `communities.member_or_admin` | I'm a member or admin | |
| `communities.joining_private` | Joining a private community? | |
| `communities.joining_private_hint` | Some communities need the owner to add you before you can join. Copy your public ID and send it to the community owner. | |
| `communities.my_community` | My Community | |
| `communities.opens_builderlab` | Opens Builderlab in your browser. | |
| `communities.enter_name` | Please enter a community name. | |
| `communities.reconnect` | Reconnect to your community | |
| `communities.save_changes` | Save changes | |
| `communities.switch_community` | Switch community | |
| `communities.address_taken` | That address is already taken. | |
| `communities.address_available` | That address is available. | |
| `communities.buzz_address_taken` | That Buzz address is already taken. | |
| `communities.created_but` | The community was created, but  | |
| `communities.created_no_url` | The community was created, but Builderlab did not return its community URL. Try connecting it again from settings. | |
| `communities.identity_other_account_locked` | This device's Buzz identity belongs to a different Builderlab account and can't be moved from here. Sign out, then sign in with the account that already owns this identity. | |
| `communities.identity_other_account` | This device's Buzz identity belongs to a different Builderlab account. Sign in with the account that already owns this identity. | |

## `huddle`

| Key | English | Notes |
|---|---|---|
| `huddle.add_agent` | Add agent to huddle | |
| `huddle.all_agents_in` | All running agents are already in this huddle. | |
| `huddle.audio_settings` | Audio settings | |
| `huddle.could_not_load` | Could not load agents. | |
| `huddle.dismiss_error` | Dismiss error | |
| `huddle.emoji_reactions` | Emoji reactions | |
| `huddle.failed_add` | Failed to add agent to huddle: | |
| `huddle.failed_join` | Failed to join huddle: | |
| `huddle.failed_leave` | Failed to leave huddle: | |
| `huddle.failed_load` | Failed to load agents: | |
| `huddle.failed_remove` | Failed to remove agent from huddle: | |
| `huddle.failed_reaction` | Failed to send huddle reaction. | |
| `huddle.failed_start` | Failed to start huddle: | |
| `huddle.failed_transcript` | Failed to toggle huddle transcript: | |
| `huddle.failed_tts` | Failed to toggle TTS: | |
| `huddle.force_mute` | Force mute (overrides PTT) | |
| `huddle.headphones` | Headphones recommended | |
| `huddle.mic_connected` | In huddle, microphone connected | |
| `huddle.mic_missing` | In huddle, no microphone | |
| `huddle.in_huddle` | In huddle | |
| `huddle.in_progress` | In progress | |
| `huddle.leave` | Leave huddle | |
| `huddle.mic_continuous` | Microphone is continuous. | |
| `huddle.mic_unavailable_detail` | Microphone unavailable. Check app permissions or input device. | |
| `huddle.mic_unavailable` | Microphone unavailable | |
| `huddle.mute_agent_speech` | Mute agent speech | |
| `huddle.mute_mic` | Mute microphone | |
| `huddle.no_running_agents` | No running agents found. | |
| `huddle.ptt_enabled` | Push to Talk is enabled. | |
| `huddle.reaction_failed` | Reaction failed | |

## `community_members`

| Key | English | Notes |
|---|---|---|
| `community_members.add_member` | Add member | |
| `community_members.admin_added` | Admin added | |
| `community_members.admins_added` | Admins added | |
| `community_members.choose_invite_expiry` | Choose invite expiry | |
| `community_members.choose_max_uses` | Choose maximum invite uses | |
| `community_members.choose_role` | Choose member role | |
| `community_members.owner` | Community owner | |
| `community_members.copy_link` | Copy link | |
| `community_members.failed_change_role` | Failed to change role | |
| `community_members.failed_remove` | Failed to remove member | |
| `community_members.invite_copied` | Invite link copied | |
| `community_members.made_admin` | Made community admin | |
| `community_members.made_member` | Made community member | |
| `community_members.manage_desc` | Manage members and community access. | |
| `community_members.member_added` | Member added | |
| `community_members.member_removed` | Member removed | |
| `community_members.members_added` | Members added | |
| `community_members.removed_member` | Removed community member | |
| `community_members.unnamed` | Unnamed member | |
| `community_members.one_day` | 1 day | |
| `community_members.three_days` | 3 days | |
| `community_members.seven_days` | 7 days | |
| `community_members.thirty_days` | 30 days | |
| `community_members.one_use` | 1 use | |
| `community_members.three_uses` | 3 uses | |
| `community_members.five_uses` | 5 uses | |
| `community_members.ten_uses` | 10 uses | |
| `community_members.twenty_five_uses` | 25 uses | |

## `reminders`

| Key | English | Notes |
|---|---|---|
| `reminders.add_note` | Add a note... | |
| `reminders.back` | Back to reminders | |
| `reminders.failed_cancel` | Failed to cancel reminder | |
| `reminders.failed_complete` | Failed to complete reminder | |
| `reminders.failed_create` | Failed to create reminder | |
| `reminders.failed_snooze` | Failed to snooze reminder | |
| `reminders.remind_later` | Remind me later | |
| `reminders.cancelled` | Reminder cancelled | |
| `reminders.completed` | Reminder completed | |
| `reminders.date` | Reminder date | |
| `reminders.set` | Reminder set | |
| `reminders.snoozed` | Reminder snoozed | |
| `reminders.time` | Reminder time | |
| `reminders.snooze_date` | Snooze date | |
| `reminders.snooze_time` | Snooze time | |
| `reminders.use_remind_later` | Use “Remind me later” on any message to create one. | |

## `local_archive`

| Key | English | Notes |
|---|---|---|
| `local_archive.metrics_disabled` | Agent turn metric archive disabled. | |
| `local_archive.metrics_enabled` | Agent turn metric archive enabled. | |
| `local_archive.subscription_created` | Archive subscription created. | |
| `local_archive.subscription_removed` | Archive subscription removed. | |
| `local_archive.failed_create` | Failed to create subscription. | |
| `local_archive.failed_remove` | Failed to remove subscription. | |
| `local_archive.failed_metrics` | Failed to update agent metric archive. | |
| `local_archive.failed_observer` | Failed to update observer archive. | |
| `local_archive.title` | Local archive | |
| `local_archive.my_frames` | My agent session frames | |
| `local_archive.my_metrics` | My agents' turn metrics | |
| `local_archive.observer_disabled` | Observer feed archive disabled. | |
| `local_archive.observer_enabled` | Observer feed archive enabled. | |
| `local_archive.desc` | Save copies of relay messages to a local SQLite database in your Buzz nest. Events are re-verified against the relay at archive time. | |
| `local_archive.remove_subscription` | Remove archive subscription for {{label}} | |

## `custom_emoji`

| Key | English | Notes |
|---|---|---|
| `custom_emoji.choose_image` | Choose an image file for custom emoji. | |
| `custom_emoji.choose_different` | Choose different image | |
| `custom_emoji.title` | Custom emoji | |
| `custom_emoji.failed_add` | Failed to add emoji. | |
| `custom_emoji.failed_remove` | Failed to remove emoji. | |
| `custom_emoji.failed_upload` | Failed to upload emoji image. | |
| `custom_emoji.my` | My emoji | |
| `custom_emoji.save` | Save emoji | |
| `custom_emoji.preview` | Selected custom emoji preview | |
| `custom_emoji.upload` | Upload image | |

## `mesh_compute`

| Key | English | Notes |
|---|---|---|
| `mesh_compute.already_installed` | Already installed | |
| `mesh_compute.fits_well` | Fits well | |
| `mesh_compute.hide_advanced` | Hide advanced models | |
| `mesh_compute.no_limit` | No limit | |
| `mesh_compute.share` | Share compute | |
| `mesh_compute.tight_fit` | Tight fit | |
| `mesh_compute.too_large` | Too large | |
| `mesh_compute.tradeoff` | Trade-off | |

## `forum`

| Key | English | Notes |
|---|---|---|
| `forum.join_to_post` | Join this forum to create posts. | |
| `forum.reply_placeholder` | Reply to this post... | |
| `forum.send_message` | Send message | |
| `forum.new_post_placeholder` | Start a new post... | |
| `forum.archived` | This forum is archived. | |
| `forum.write_post` | Write your post... | |

## `user_status`

| Key | English | Notes |
|---|---|---|
| `user_status.choose_emoji` | Choose status emoji | |
| `user_status.clear_emoji` | Clear status emoji | |
| `user_status.in_meeting` | In a meeting | |
| `user_status.out_sick` | Out sick | |
| `user_status.remote` | Working remotely | |
| `user_status.commuting` | Commuting | |
| `user_status.vacationing` | Vacationing | |

## `agent_memory`

| Key | English | Notes |
|---|---|---|
| `agent_memory.loading` | Loading memory | |
| `agent_memory.refresh` | Refresh memory | |
| `agent_memory.empty` | This agent has no memories yet | |
| `agent_memory.slug_missing` | This memory links to a slug that wasn't found in the loaded memory list. | |
| `agent_memory.truncated_tooltip` | This list may be incomplete — the relay returned the maximum number of memories. | |
| `agent_memory.missing_link` | Missing link | |
| `agent_memory.missing_links` | Missing links | |
| `agent_memory.couldnt_load` | Couldn't load memory | |
| `agent_memory.retrying` | Retrying… | |
| `agent_memory.retry` | Retry | |
| `agent_memory.refresh_failed` | Refresh failed. | |
| `agent_memory.build_memory` | Build this agent's memory | |
| `agent_memory.build_memory_hint` | Try telling this agent to remember something for next time. | |

## `chat`

| Key | English | Notes |
|---|---|---|
| `chat.name_copied` | Channel name copied | |
| `chat.copy_name` | Copy channel name | |
| `chat.failed_copy` | Failed to copy channel name | |
| `chat.no_body` | No message body. | |

## `shared`

| Key | English | Notes |
|---|---|---|
| `shared.add_agent` | Add agent | |
| `shared.add_team` | Add team | |
| `shared.apple_color_emoji` | Apple Color Emoji | |
| `shared.buzz_logo_animation` | Buzz logo animation | |
| `shared.buzz_logo` | Buzz logo | |
| `shared.close_lightbox` | Close lightbox | |
| `shared.close_video_review` | Close video review | |
| `shared.commenting_unavailable` | Commenting is unavailable for this video. | |
| `shared.completed_task` | Completed task | |
| `shared.copied_code` | Copied code to clipboard | |
| `shared.copied_to_clipboard` | Copied to clipboard | |
| `shared.copy_code_block` | Copy code block | |
| `shared.copy_failed` | Copy failed | |
| `shared.copy_image` | Copy image | |
| `shared.copy_link` | Copy link | |
| `shared.copy_public_key` | Copy public key | |
| `shared.custom_emoji` | Custom emoji | |
| `shared.dismiss_notification` | Dismiss notification | |
| `shared.download_failed` | Download failed | |
| `shared.download_image` | Download image | |
| `shared.download_video` | Download video | |
| `shared.drag_resize_sidebar` | Drag to resize sidebar | |
| `shared.failed_copy_code_block` | Failed to copy code block | |
| `shared.failed_copy_code` | Failed to copy code | |
| `shared.failed_load_route` | Failed to load route event | |
| `shared.failed_open_link` | Failed to open link | |
| `shared.failed_post_comment` | Failed to post comment. | |
| `shared.go_back` | Go back | |
| `shared.go_forward` | Go forward | |
| `shared.hide_comments` | Hide comments | |
| `shared.hide_spoiler` | Hide spoiler | |
| `shared.image_attachment` | Image attachment | |
| `shared.image_controls` | Image controls | |
| `shared.image_preview` | Image preview | |
| `shared.image_zoom` | Image zoom | |
| `shared.incomplete_task` | Incomplete task | |
| `shared.comment_placeholder` | Leave your comment... | |
| `shared.link_copied` | Link copied to clipboard | |
| `shared.more_reactions` | More reactions | |
| `shared.next_image` | Next image | |
| `shared.noto_color_emoji` | Noto Color Emoji | |
| `shared.open_link` | Open link | |
| `shared.open_video_review` | Open video review | |
| `shared.pause_review_video` | Pause review video | |
| `shared.pause_video` | Pause video | |
| `shared.play_review_video` | Play review video | |
| `shared.play_video` | Play video | |
| `shared.previous_image` | Previous image | |
| `shared.qr_code` | QR code | |
| `shared.resize_sidebar` | Resize sidebar | |
| `shared.retry_video` | Retry loading video | |
| `shared.reveal_spoiler` | Reveal spoiler | |
| `shared.segoe_ui_emoji` | Segoe UI Emoji | |
| `shared.segoe_ui` | Segoe UI | |
| `shared.show_comments` | Show comments | |
| `shared.show_full_public_key` | Show full public key | |
| `shared.toggle_sidebar` | Toggle Sidebar | |
| `shared.video_attachment` | Video attachment | |
| `shared.video_progress` | Video progress | |
| `shared.video_timeline` | Video timeline | |
| `shared.wait_video_send` | Wait for the video message to finish sending. | |
| `shared.zoom_image` | Zoom image | |

## `app`

| Key | English | Notes |
|---|---|---|
| `app.setting_up_ellipsis` | Setting up your community... | |
| `app.setting_up` | Setting up your community | |

## `pulse`

| Key | English | Notes |
|---|---|---|
| `pulse.failed_publish` | Failed to publish note | |
| `pulse.no_agent_notes` | No agent notes yet. Agents post here when they publish. | |
| `pulse.no_agents` | No agents registered yet. | |
| `pulse.no_notes` | No notes yet. Follow people to see their updates here. | |
| `pulse.no_public_notes` | No public notes yet. | |
| `pulse.no_text` | No text | |
| `pulse.parent_author` | Parent note author | |
| `pulse.post_reply` | Post your reply | |
| `pulse.sections` | Pulse sections | |
| `pulse.replying_unavailable` | Replying to an unavailable note | |
| `pulse.search_hint` | Search Pulse notes by author or text. | |
| `pulse.search` | Search Pulse | |
| `pulse.start_dm` | Start direct message | |
| `pulse.what_to_know` | What would you like to know? | |
| `pulse.no_my_notes` | You haven't posted any notes yet. | |
