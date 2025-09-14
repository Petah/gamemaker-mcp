---
title: "audio_sync_group_is_playing"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Synchronisation/audio_sync_group_is_playing.htm"
converted: "2025-09-14T03:59:31.989Z"
---

# audio\_sync\_group\_is\_playing

This function can be used to check if any audio in a synchronised group is playing. You are required to supply the sync group ID as returned by the function [audio\_create\_sync\_group()](audio_create_sync_group.md).

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

audio\_sync\_group\_is\_playing(group\_index);

| Argument | Type | Description |
| --- | --- | --- |
| group_index | Audio Sync Group ID | The group index to check. |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if audio\_sync\_group\_is\_playing(group\_one)
{
    audio\_stop\_sync\_group(group\_one);
}

The above code checks to see if the sync group group\_one is currently playing and if it is, the group is stopped.