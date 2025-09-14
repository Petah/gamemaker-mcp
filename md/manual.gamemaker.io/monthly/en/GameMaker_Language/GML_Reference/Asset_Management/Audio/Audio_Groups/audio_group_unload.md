---
title: "audio_group_unload"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/audio_group_unload.htm"
converted: "2025-09-14T03:59:31.334Z"
---

# audio\_group\_unload

This function will unload all the sounds that are flagged as belonging to the given Audio Group.

The function will return true if unloading is initiated and false if the group ID is invalid, or it has already been flagged for unloading.

NOTE Any audio currently being played when this function is called will be stopped.

#### Syntax:

audio\_group\_unload(groupID);

| Argument | Type | Description |
| --- | --- | --- |
| groupID | Audio Group ID | The index of the audio group to unload (as defined in the Audio Groups window) |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if (audio\_group\_is\_loaded(audiogroup\_level1))
{
    audio\_group\_unload(audiogroup\_level1);
}

The above code checks to see if an audio group has been loaded and if it has it unloads it.