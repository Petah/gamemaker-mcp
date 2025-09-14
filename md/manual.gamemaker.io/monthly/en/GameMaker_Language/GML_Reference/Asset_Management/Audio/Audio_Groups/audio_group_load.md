---
title: "audio_group_load"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/audio_group_load.htm"
converted: "2025-09-14T03:59:31.266Z"
---

# audio\_group\_load

This function will load all the sounds that are flagged as belonging to the given Audio Group into memory.

The function will return true if loading is initiated and false if the group ID is invalid, or it has already been flagged for loading.

NOTE The function is asynchronous so your game will continue to run while the audio is loaded in the background. This means that it will also trigger an [Asynchronous Load/Save Event](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Save_Load.md) to inform you that the whole group has been loaded into memory and the sounds can now be used.

#### Syntax:

audio\_group\_load(groupID);

| Argument | Type | Description |
| --- | --- | --- |
| groupID | Audio Group ID | The index of the audio group to load (as defined in the Audio Groups window) |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if (!audio\_group\_is\_loaded(audiogroup\_level1))
{
    audio\_group\_load(audiogroup\_level1);
}

The above code checks to see if an audio group has been loaded and if not, it loads it.