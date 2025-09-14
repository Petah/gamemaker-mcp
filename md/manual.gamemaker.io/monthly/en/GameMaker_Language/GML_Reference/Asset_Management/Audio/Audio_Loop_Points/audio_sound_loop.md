---
title: "audio_sound_loop"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Loop_Points/audio_sound_loop.htm"
converted: "2025-09-14T03:59:31.715Z"
---

# audio\_sound\_loop

This function enables or disables looping for a playing sound instance (returned by any of the audio\_play\_sound\_ functions).

NOTE This function will set the loop state of a playing sound but the sound will not loop if the track position is already past the loop end point. Set the track position to a position before the loop end point using [audio\_sound\_set\_track\_position](../audio_sound_set_track_position.md) or set the loop end point past the track position so the end point can be reached.

#### Syntax:

audio\_sound\_loop(index, state);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Instance ID | The index of the sound instance |
| state | Boolean | Whether to loop the sound between the loop start and end or not |

#### Returns:

N/A

#### Example:

snd\_car1 = audio\_play\_sound(snd\_car, 100, false);
audio\_sound\_loop(snd\_car1, true);

The above example calls [audio\_play\_sound](../audio_play_sound.md) to play a sound snd\_car, not looping. The new sound instance is stored in a variable snd\_car1. Then [audio\_sound\_loop](audio_sound_loop.md) is called to enable looping for the sound.