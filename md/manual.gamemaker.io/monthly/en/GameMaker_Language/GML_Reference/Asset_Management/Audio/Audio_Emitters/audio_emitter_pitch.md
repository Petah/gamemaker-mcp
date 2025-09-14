---
title: "audio_emitter_pitch"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_pitch.htm"
converted: "2025-09-14T03:59:31.110Z"
---

# audio\_emitter\_pitch

This function changes the pitch of the given emitter, affecting the pitch of all sounds played on this emitter.

The emitter pitch is a _pitch multiplier_, in that the input value multiplies the current pitch by that amount, so the default value of 1 is no pitch change, while a value of less than 1 will lower the pitch and greater than 1 will raise the pitch. It is best to use small increments for this function as any value under 0 or over 5 may not be audible anyway.

**NOTE** Sounds already playing on the audio emitter do not have to be restarted in order for the change in pitch to be audible. The change in pitch is **applied immediately**.

IMPORTANT As the pitch argument is a _pitch multiplier_, the sound instance's pitch will be multiplied by the sound asset's pitch and also by the sound emitter's pitch in case the sound was played on an emitter using [audio\_play\_sound\_on](audio_play_sound_on.md). The final _source_ pitch that will be heard is the original pitch of the sound multiplied by the three pitch multipliers:

final\_pitch = original sound pitch \* sound asset pitch \* emitter pitch \* sound instance pitch.

By default the three pitch multipliers are equal to 1 so that the final pitch that is heard is equal to the original sound's pitch. The final pitch is clipped between a minimum value and a maximum value that depend on the compression type of the sound. See [Pitch](../Audio_Properties.htm#pitch).

#### Syntax:

audio\_emitter\_pitch(emitter, pitch);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to change. |
| pitch | Real | The pitch multiplier. A positive number. Values less than or equal to zero are clipped to the lowest positive number. The default is 1. |

#### Returns:

N/A

#### Example:

switch (gear)
{
    case 1: audio\_emitter\_pitch(s\_emit, 0.8); break;
    case 2: audio\_emitter\_pitch(s\_emit, 0.9); break;
    case 3: audio\_emitter\_pitch(s\_emit, 0.95); break;
    case 4: audio\_emitter\_pitch(s\_emit, 1); break;
    case 5: audio\_emitter\_pitch(s\_emit, 1.2); break;
}

The above code will change the pitch of the audio played from the emitter indexed in the variable "s\_emit" based on the value of the variable "gear".