---
title: "audio_sync_group_is_paused"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Synchronisation/audio_sync_group_is_paused.htm"
converted: "2025-09-14T03:59:31.974Z"
---

# audio\_sync\_group\_is\_paused

This function can be used to check if audio in a synchronised group is paused.

The function takes in a sync group ID as returned by the function [audio\_create\_sync\_group](audio_create_sync_group.md).

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

audio\_sync\_group\_is\_paused(group\_index);

| Argument | Type | Description |
| --- | --- | --- |
| group_index | Audio Sync Group ID | The group index to check. |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if !audio\_sync\_group\_is\_paused(sync\_group)
{
    audio\_resume\_sync\_group(sync\_group);
}

The above code first checks to see if the audio sync group sync\_group is paused. If that is the case, it resumes playing the sync group using [audio\_resume\_sync\_group](audio_resume_sync_group.md).