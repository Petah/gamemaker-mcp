---
title: "audio_emitter_gain"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_gain.htm"
converted: "2025-09-14T03:59:30.910Z"
---

# audio\_emitter\_gain

This function sets the maximum gain (volume) for the sound.

The perceived volume for a sound can change depending on the [fall-off value](audio_emitter_falloff.md) and the position it has relative to the _listener_, but by setting the gain with this function, the full volume will never exceed the specified gain value. The image below illustrates how gain affects the volume of the emitter when fall-off is greater than 0:

![Audio Gain Diagram](../../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Gain.png)This function will change the volume of the sound while it is being played as well all subsequent sounds played through the given emitter. Note that on some platforms you can have a gain of greater than 1, although a value of 1 is considered "full volume" and anything greater may introduce audio clipping or distortion.

NOTE The final volume will also be influenced by the global audio gain that has been set by the function [audio\_master\_gain](../audio_master_gain.md).

NOTE Audio devices and/or operating systems can sometimes attempt to change the audio's amplitude in order to protect the user from what would otherwise be very loud sounds, for example by normalising the audio stream or by clipping the amplitude to 1. How this is handled is specific to the audio device or OS that's handling your game's audio. As a result, increasing gains might have an inconsistent effect.

#### Syntax:

audio\_emitter\_gain(emitter, gain);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to change. |
| gain | Real | The maximum gain (default 1). |

#### Returns:

N/A

#### Example:

if (up)
{
    gain += 0.05;
    if gain >= 1 up = false;
}
else
{
    gain += 0.05;
    if gain <= 0 up = true;
}

audio\_emitter\_gain(s\_emit, gain);

The above code sets the variable "gain" to different values and then uses that same variable to set the gain of the emitter indexed in the variable "s\_emit".