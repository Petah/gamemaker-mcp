---
title: "audio_sound_pitch"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_sound_pitch.htm"
converted: "2025-09-14T03:59:32.518Z"
---

# audio\_sound\_pitch

This function changes the pitch of the given sound asset or instance.

The sound can either be one referenced from an index for an individual sound being played which has been stored in a variable when using the [audio\_play\_sound()](audio_play_sound.md) or [audio\_play\_sound\_at()](audio_play_sound_at.md) functions, or an actual sound asset from the Asset Browser. If it is an index of a playing sound, that sound instance's pitch will be changed. When using a sound asset from the Asset Browser, however, the sound asset's pitch is changed which will give an audible change in the pitch of all instances of that sound asset being played.

The pitch argument is a _pitch multiplier_, in that the input value multiplies the current pitch by that amount, so the default value of 1 is no pitch change, while a value of less than 1 will lower the pitch and greater than 1 will raise the pitch. It is best to use small increments for this function as any value under 0 or over 5 may not be audible anyway. It is worth noting that the total pitch change permitted is clamped to (1/256) - 256 octaves, so any value over or under this will not be registered.

**NOTE** The clamped value given above is what GameMaker attempts to clamp the range to, but this value is **not** guaranteed on all target platforms. iOS, for example, clamps to (1/256) - 8, so you may need to experiment on each target platform and have different versions of a sound resource, each one pre-shifted, should you require higher or lower octave values.

IMPORTANT As the pitch argument is a _pitch multiplier_, the sound instance's pitch will be multiplied by the sound asset's pitch and also by the sound emitter's pitch in case the sound was played on an emitter using [audio\_play\_sound\_on](Audio_Emitters/audio_play_sound_on.md). The final _source_ pitch that will be heard is the original pitch of the sound multiplied by the three pitch multipliers:

final\_pitch = original sound pitch \* sound asset pitch \* emitter pitch \* sound instance pitch.

By default the three pitch multipliers are equal to 1 so that the final pitch that is heard is equal to the original sound's pitch. The final pitch is clipped between a minimum value and a maximum value that depend on the compression type of the sound. See [Pitch](Audio_Properties.htm#pitch).

#### Syntax:

audio\_sound\_pitch(index, pitch);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID or Audio Queue ID | The index of the sound to change. |
| pitch | Real | The pitch multiplier. A positive number. Values less than or equal to zero are clipped to the lowest positive number. The default is 1. |

#### Returns:

N/A

#### Example:

var s\_engine = audio\_play\_sound(snd\_CarEngine, 10, false);
switch (gear)
{
    case 1: audio\_sound\_pitch(s\_engine, 0.8); break;
    case 2: audio\_sound\_pitch(s\_engine, 0.9); break;
    case 3: audio\_sound\_pitch(s\_engine, 0.95); break;
    case 4: audio\_sound\_pitch(s\_engine, 1); break;
    case 5: audio\_sound\_pitch(s\_engine, 1.2); break;
}

The above code will change the pitch of the audio played from the sound indexed in the variable "s\_engine" based on the value of the variable "gear".