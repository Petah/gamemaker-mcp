---
title: "audio_destroy_sync_group"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Synchronisation/audio_destroy_sync_group.htm"
converted: "2025-09-14T03:59:31.837Z"
---

# audio\_destroy\_sync\_group

Audio sync groups need to be destroyed when not in use to free up the memory and sound resources associated with them using this function. It takes the group index as returned when the group was created using the function [audio\_create\_sync\_group()](audio_create_sync_group.md), and frees all resources used by the group.

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

audio\_destroy\_sync\_group(group\_index);

| Argument | Type | Description |
| --- | --- | --- |
| group_index | Audio Sync Group ID | The group index to be destroyed. |

#### Returns:

N/A

#### Example:

audio\_destroy\_sync\_group(sg);

The above code destroys the sync group indexed in the variable "sg", and would probably be used in the **destroy** or **Room End** events.