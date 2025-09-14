---
title: "audio_is_playing"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_is_playing.htm"
converted: "2025-09-14T03:59:32.202Z"
---

# audio\_is\_playing

This function will check the given sound to see if it is currently playing.

The sound can either be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the [audio\_play\_sound](audio_play_sound.md), [audio\_play\_sound\_at](audio_play_sound_at.md), [audio\_play\_sound\_on](Audio_Emitters/audio_play_sound_on.md) and [audio\_play\_sound\_ext](audio_play_sound_ext.md) functions) or a sound asset, in which case _all_ instances of the given sound will be checked and if any of them are playing the function will return true otherwise it will return false.

NOTE This function will still return true if the sound being checked has previously been paused using the [audio\_pause\_sound](audio_pause_sound.md) function.

#### Syntax:

audio\_is\_playing(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID | The index of the sound to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if !audio\_is\_playing(snd\_Waterfall)
{
    audio\_play\_sound\_at(snd\_Waterfall, x, y, 0, 300, true, 1);
}

The above code checks to see if the sound indexed in the variable "snd\_Waterfall" is currently playing and if it returns false then the sound will be looped at its room position, with a fall-off distance of 300 and a low priority.