---
title: "audio_play_sound_at"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_play_sound_at.htm"
converted: "2025-09-14T03:59:32.313Z"
---

# audio\_play\_sound\_at

With this function you can play any sound asset at a given position within the audio space.

NOTE An [Audio Playback Ended](../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback_Ended.md) event is triggered for the sound when it stops playing.

You provide the sound index and then assign it a position within the 3D space. The default listener position is (0, 0, 0) so this means that if the listener has not been moved and you want the sound to come from the left (for example), you should set the x position to a negative value (for more information on setting the listener position see [audio\_listener\_position()](Audio_Listeners/audio_listener_position.md)).

You can also set a fall-off distance (0 will make the sound silent, default is 100) which will make the sound fade out as it gets further from the listener position. How the fade itself is heard will depend on the falloff reference (which is the distance under which the volume for the source would normally drop by half) and the roll off factor (which affects the sound past the falloff reference distance only). The default factor is normally 1, and the effect of the different falloff values will depend on the model chosen (for a complete guide to the different falloff models and how these values are used, please see the function [audio\_falloff\_set\_model()](audio_falloff_set_model.md)).

The next two arguments are to set the sound is to loop or not and for assigning a priority to the sound. This priority is then used to determine how sounds are dealt with when the number of sounds playing is over the limit set by the function [audio\_channel\_num()](audio_channel_num.md). Lower priority sounds will be stopped in favour of higher priority sounds, and the priority value can be any real number (the actual value is arbitrary, and can be from 0 to 1 or 0 to 100, as GameMaker will prioritise them the same). Note that when dealing with priority, the _higher_ the number the _higher_ the priority, such that a sound with priority 100 will be favoured over a sound with priority 1.

This function will also return a unique index for the sound being played, which can be stored in a variable so you can later [pause it](audio_pause_sound.md) or [stop it](audio_stop_sound.md). This means that if you have multiple instances of the same sound playing at any one time, you can target just one instance of that sound using the [audio functions](Audio.md).

## Optional Properties

There are four optional arguments that allow you to change the [Audio Properties](Audio.htm#h) of the sound being played at the instance/voice level:

... \[gain\], \[offset\], \[pitch\], \[listener\_mask\]

They are applied to the sound immediately. This fixes the issues you would face when calling a separate function to change any of these values, which could cause an undesired delay in the change.

These properties are multiplied by their corresponding value of the sound asset. See [Audio Properties Overview](Audio_Properties.md) for a full overview.

NOTE To change the value of any of these properties after playback of a sound has been started, see [audio\_sound\_gain](audio_sound_gain.md) for gain, [audio\_sound\_set\_track\_position](audio_sound_set_track_position.md) for offset, [audio\_sound\_pitch](audio_sound_pitch.md) for pitch and [audio\_sound\_set\_listener\_mask](audio_sound_set_listener_mask.md) for listener mask.

#### Syntax:

audio\_play\_sound\_at(index, x, y, z, falloff\_ref, falloff\_max, falloff\_factor, loop, priority, \[gain\], \[offset\], \[pitch\], \[listener\_mask\]);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Audio Queue ID | The index of the sound to play. |
| x | Real | The x position. |
| y | Real | The y position. |
| z | Real | The z position. |
| falloff_ref | Real | The falloff reference relative to the listener (clamp). |
| falloff_max | Real | The maximum falloff distance relative to the listener. |
| falloff_factor | Real | The falloff factor (default 1). |
| loop | Boolean | Flags the sound as looping or not. |
| priority | Real | Set the channel priority for the sound. |
| gain | Real | OPTIONAL The gain of the sound instance (defaults to 1). |
| offset | Real | OPTIONAL The time (in seconds) to start playing. Values beyond the end of the sound are clamped to its length. The default value is the asset-level offset. |
| pitch | Real | OPTIONAL The pitch multiplier. A positive number. Values less than or equal to zero are clipped to the lowest positive number. The default is 1. |
| listener_mask | Real | OPTIONAL The bitmask data to set for the sound. On the HTML5 target  this will have no effect as the target does not support more than one listener. |

#### Returns:

[Sound Instance ID](audio_play_sound.md) (or -1 if the sound could not be played)

#### Example 1:

if (global.SFX)
{
    audio\_play\_sound\_at(snd\_Waterfall, x, y, 0, 100, 300, 1, true, 1);
}

The above code checks the global variable "SFX" and if it returns true then the sound indexed in the variable "snd\_Waterfall" will be looped at its room position, with a fall-off reference of 100, a falloff distance of 300, a falloff factor of 1 and a low priority.

#### Example 2:

if (global.SFX)
{
    audio\_play\_sound\_at(snd\_Waterfall, x, y, 0, 100, 300, 1, true, 1, 1, 2);
}

The above code checks the global variable "SFX" and if it returns true then the sound indexed in the variable "snd\_Waterfall" will be looped at its room position using the given falloff settings and no change in gain. The sound immediately starts playing from second 2.