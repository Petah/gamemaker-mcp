---
title: "audio_is_paused"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_is_paused.htm"
converted: "2025-09-14T03:59:32.187Z"
---

# audio\_is\_paused

This function will check the given sound to see if it is currently paused. The sound can either be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the [audio\_play\_sound()](audio_play_sound.md) or [audio\_play\_sound\_at()](audio_play_sound_at.md) functions) or a sound asset, in which case _all_ instances of the given sound will be checked and if any of them are paused the function will return true otherwise it will return false.

#### Syntax:

audio\_is\_paused(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID | The index of the sound to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if audio\_is\_paused(snd\_Waterfall)
{
    audio\_resume\_sound(snd\_Waterfall);
}

The above code checks to see if the sound indexed in the variable "snd\_Waterfall" is currently paused and if it returns true then the playing of the sound will be resumed.