---
title: "Audio Synchronisation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Synchronisation/Audio_Synchronisation.htm"
converted: "2025-09-14T03:59:31.799Z"
---

# Audio Synchronisation

The audio sync group functions let you play multiple sounds that start at exactly the same time and stay in sync (on a per sample level). This enables you to (for example) add various tracks for a single song and then fade in and out sections without having to worry about whether there will be any delay between them.

All sounds in sync groups are played at the highest [priority](../audio_play_sound.md).

NOTE This functionality is not available for the HTML5 target platform.

The following functions exist to deal with synchronising audio tracks:

-   [audio\_create\_sync\_group](audio_create_sync_group.md)
-   [audio\_play\_in\_sync\_group](audio_play_in_sync_group.md)
-   [audio\_start\_sync\_group](audio_start_sync_group.md)
-   [audio\_stop\_sync\_group](audio_stop_sync_group.md)
-   [audio\_pause\_sync\_group](audio_pause_sync_group.md)
-   [audio\_resume\_sync\_group](audio_resume_sync_group.md)
-   [audio\_sync\_group\_get\_track\_pos](audio_sync_group_get_track_pos.md)
-   [audio\_destroy\_sync\_group](audio_destroy_sync_group.md)
-   [audio\_sync\_group\_debug](audio_sync_group_debug.md) OBSOLETE
-   [audio\_sync\_group\_is\_playing](audio_sync_group_is_playing.md)
-   [audio\_sync\_group\_is\_paused](audio_sync_group_is_paused.md)