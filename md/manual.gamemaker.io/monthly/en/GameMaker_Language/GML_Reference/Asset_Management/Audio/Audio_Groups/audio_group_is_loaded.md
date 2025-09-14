---
title: "audio_group_is_loaded"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/audio_group_is_loaded.htm"
converted: "2025-09-14T03:59:31.253Z"
---

# audio\_group\_is\_loaded

This function will check a specific audio group to see if it has been loaded into memory, ready for use.

#### Syntax:

audio\_group\_is\_loaded(groupID);

| Argument | Type | Description |
| --- | --- | --- |
| groupID | Audio Group ID | The index of the audio group to check (as defined in the Audio Groups window) |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if audio\_group\_is\_loaded(audiogroup\_level1)
{
    audio\_group\_unload(audiogroup\_level1);
}

The above code checks to see if an audio group has been loaded and if it has it unloads it.