---
title: "audio_group_set_gain"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/audio_group_set_gain.htm"
converted: "2025-09-14T03:59:31.307Z"
---

# audio\_group\_set\_gain

With this function you can fade a group of sounds in or out over a given length of time, or it can be used to set the group gain instantly.

The time is measured in milliseconds, and the function requires that you input a final level of gain for the group to have reached by the end of that time. This gain can be between 0 (silent) and 1 (full volume) and the scale is linear, such that a value of 0.5 would be half volume. To instantly change the gain, simply set the time argument to 0.

NOTE Audio devices and/or operating systems can sometimes attempt to change the audio's amplitude in order to protect the user from what would otherwise be very loud sounds, for example by normalising the audio stream or by clipping the amplitude to 1. How this is handled is specific to the audio device or OS that's handling your game's audio. As a result, increasing gains might have an inconsistent effect.

#### Syntax:

audio\_group\_set\_gain(groupID, volume, time);

| Argument | Type | Description |
| --- | --- | --- |
| groupID | Audio Group ID | The index of the audio group to set the gain for (as defined in the Audio Groups window) |
| volume | Real | The final value for the group volume. |
| time | Real | The length of the change in gain in milliseconds. |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(vk\_space))
{
    audio\_group\_set\_gain(audiogroup1, 0, 5000);
}

The above code checks for the "space" key and then fades all the audio for "audiogroup1" down to 0 over 5 seconds.