---
title: "audio_play_sound_on"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_play_sound_on.htm"
converted: "2025-09-14T03:59:31.191Z"
---

# audio\_play\_sound\_on

This function plays any sound asset through an emitter, with any changes to the emitter's gain, position, pitch or velocity affecting how the user hears the final sound being played.

NOTE An [Audio Playback Ended](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback_Ended.md) event is triggered for the sound when it stops playing.

You provide the emitter index to use, the [Sound Asset](../../../../../The_Asset_Editors/Sounds.md) to be played and then specify whether the sound is to loop or not. Next you can assign a priority, which is then used to determine how sounds are dealt with when the number of sounds playing is over the limit set by the function [audio\_channel\_num()](../audio_channel_num.md). Lower priority sounds will be stopped in favour of higher priority sounds, and the priority value can be any real number (the actual value is arbitrary, and can be from 0 to 1 or 0 to 100, as GameMaker will prioritise them the same). Note that when dealing with priority, the _higher_ the number the _higher_ the priority, such that a sound with priority 100 will be favoured over a sound with priority 1.

This function will also return a unique index for the sound being played, which can be stored in a variable so you can later [pause it](../audio_pause_sound.md) or [stop it](../audio_stop_sound.md). This means that if you have multiple instances of the same sound playing at any one time, you can target just one instance of that sound using the [audio functions](../Audio.md).

## Optional Properties

There are four optional arguments that allow you to change the [Audio Properties](../Audio.htm#h) of the sound being played at the instance/voice level:

... \[gain\], \[offset\], \[pitch\], \[listener\_mask\]

They are applied to the sound immediately. This fixes the issues you would face when calling a separate function to change any of these values, which could cause an undesired delay in the change.

These properties are multiplied by their corresponding value of the sound asset. See [Audio Properties Overview](../Audio_Properties.md) for a full overview.

NOTE To change the value of any of these properties after playback of a sound has been started, see [audio\_sound\_gain](../audio_sound_gain.md) for gain, [audio\_sound\_set\_track\_position](../audio_sound_set_track_position.md) for offset, [audio\_sound\_pitch](../audio_sound_pitch.md) for pitch and [audio\_sound\_set\_listener\_mask](../audio_sound_set_listener_mask.md) for listener mask.

#### Syntax:

audio\_play\_sound\_on(emitter, sound, loop, priority, \[gain\], \[offset\], \[pitch\], \[listener\_mask\]);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to use. |
| sound | Sound Asset | The index of the sound to use. |
| loop | Boolean | Flags the sound as looping or not. |
| priority | Real | Set the channel priority for the sound. |
| gain | Real | OPTIONAL The gain of the sound instance (defaults to 1). |
| offset | Real | OPTIONAL The time (in seconds) to start playing. Values beyond the end of the sound are clamped to its length. The default value is the asset-level offset. |
| pitch | Real | OPTIONAL The pitch multiplier. A positive number. Values less than or equal to zero are clipped to the lowest positive number. The default is 1. |
| listener_mask | Real | OPTIONAL The bitmask data to set for the sound. On the HTML5 target this will have no effect as the target does not support more than one listener. |

#### Returns:

[Sound Instance ID](../audio_play_sound.md) (or -1 if the sound could not be played)

#### Example 1:

if (global.SFX)
{
    audio\_play\_sound\_on(s\_emit, snd\_Explode, false, 1);
}

The above code checks the global variable "SFX" and if it returns true then the sound indexed in the variable "snd\_Explode" will be played through the emitter indexed in the variable "s\_emit" with a low priority and no looping.

#### Example 2:

if (hit == true)
{
    audio\_play\_sound\_on(s\_emit, snd\_Hit, false, 1, 1.3);
}

The above code checks if the instance executing the code was hit. If true it plays the sound "snd\_Hit" through the emitter "s\_emit" with a slightly higher gain of 1.3. The gain set here is multiplied by the emitter's gain to get the final gain at which the sound is played.