---
title: "audio_play_sound"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_play_sound.htm"
converted: "2025-09-14T03:59:32.281Z"
---

# audio\_play\_sound

This function plays any [Sound Asset](../../../../The_Asset_Editors/Sounds.md) in your game.

NOTE An [Audio Playback Ended](../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback_Ended.md) event is triggered for the sound when it stops playing.

You provide the sound asset and assign it a priority, which is then used to determine how sounds are dealt with when the number of sounds playing is over the limit set by the function [audio\_channel\_num()](audio_channel_num.md). Lower priority sounds will be stopped in favour of higher priority sounds, and the priority value can be any real number (the actual value is arbitrary, and can be from 0 to 1 or 0 to 100, as GameMaker will prioritise them the same). The _higher_ the number the _higher_ the priority, so a sound with priority 100 will be favoured over a sound with priority 1.

The third argument is for making the sound loop and setting it to true will make the sound repeat until it's stopped manually, and setting it to false will play the sound once only.

This function will also return a unique index for the sound being played, which can be stored in a variable so you can later [pause it](audio_pause_sound.md) or [stop it](audio_stop_sound.md). This means that if you have multiple instances of the same sound playing at any one time, you can target just one instance of that sound using the [audio functions](Audio.md).

## Optional Properties

There are four optional arguments that allow you to change the [Audio Properties](Audio.htm#h) of the sound being played at the instance/voice level:

... \[gain\], \[offset\], \[pitch\], \[listener\_mask\]

They are applied to the sound immediately. This fixes the issues you would face when calling a separate function to change any of these values, which could cause an undesired delay in the change.

These properties are multiplied by their corresponding value of the sound asset. See [Audio Properties Overview](Audio_Properties.md) for a full overview.

NOTE To change the value of any of these properties after playback of a sound has been started, see [audio\_sound\_gain](audio_sound_gain.md) for gain, [audio\_sound\_set\_track\_position](audio_sound_set_track_position.md) for offset, [audio\_sound\_pitch](audio_sound_pitch.md) for pitch and [audio\_sound\_set\_listener\_mask](audio_sound_set_listener_mask.md) for listener mask.

#### Syntax:

audio\_play\_sound(index, priority, loop, \[gain\], \[offset\], \[pitch\], \[listener\_mask\]);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Audio Queue ID | The index of the sound to play. |
| priority | Real | Set the channel priority for the sound. |
| loop | Boolean | Sets the sound to loop or not. |
| gain | Real | OPTIONAL The gain of the sound instance (defaults to 1). |
| offset | Real | OPTIONAL The time (in seconds) to start playing. Values beyond the end of the sound are clamped to its length. The default value is the asset-level offset. |
| pitch | Real | OPTIONAL The pitch multiplier. A positive number. Values less than or equal to zero are clipped to the lowest positive number. The default is 1. |
| listener_mask | Real | OPTIONAL The bitmask data to set for the sound. On the HTML5 target  this will have no effect as the target does not support more than one listener. |

#### Returns:

[Sound Instance ID](audio_play_sound.md) (or -1 if the sound could not be played)

#### Example 1: Basic Use

if (health <= 0)
{
    lives -= 1;
    audio\_play\_sound(snd\_PlayerDead, 10, false);
}

The above code checks the "health" global variable and if it is less than or equal to 0, it will remove 1 from the "lives" global variable and play a sound.

#### Example 2: Optional Properties

if (bbox\_left > room\_width)
{
    audio\_play\_sound(snd\_Goodbye, 10, false, 1.1, 0, 2);
}

The above code checks if the instance is past the right bound of the room and plays a sound with a gain of 1.1 and a pitch of 2 (twice the normal pitch).

#### Example 3: Asset & Instance Properties

audio\_sound\_gain(snd\_Explosion, 0.7);
audio\_sound\_set\_track\_position(snd\_Explosion, 2);
audio\_play\_sound(snd\_Explosion, 10, false, 0.5);
audio\_play\_sound(snd\_Explosion, 20, false, 1, 0);

The above code plays the same sound multiple times.

First, the gain for the sound asset snd\_Explosion is set to 0.7. Next, its track position (the position from which to start playing) is set to 2 seconds.

After that, two instances of the sound are played. The first gets an instance-level gain of 0.5 and no offset. This sound instance starts playing at 2 seconds and will be heard with a gain of 0.5 \* 0.7 = 0.35. The second instance keeps the instance-level gain at 1 and will be heard with a gain of 0.7 \* 1 = 0.7. Its offset is provided, which overrides the 2-second offset set for the asset. This instance plays from the start.