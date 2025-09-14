---
title: "audio_group_stop_all"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/audio_group_stop_all.htm"
converted: "2025-09-14T03:59:31.318Z"
---

# audio\_group\_stop\_all

This function will stop all sounds from the given audio group that are currently playing.

#### Syntax:

audio\_group\_stop\_all(groupID);

| Argument | Type | Description |
| --- | --- | --- |
| groupID | Audio Group ID | The index of the audio group to stop (as defined in the Audio Groups window) |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(vk\_space))
{
    audio\_group\_stop\_all(audiogroup\_level1);
}

The above code checks for the "space" key and then stops all the audio playing from the given group.