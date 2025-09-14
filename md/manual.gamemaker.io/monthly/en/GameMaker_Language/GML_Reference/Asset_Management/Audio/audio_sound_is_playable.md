---
title: "audio_sound_is_playable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_sound_is_playable.htm"
converted: "2025-09-14T03:59:32.482Z"
---

# audio\_sound\_is\_playable

This function can be used to check if the given sound index can be played currently. This is needed due to the different ways streamed and unstreamed sound playback is handled on the **HTML5** target platform, and will return true if the sound can be played and false if it can't. Note that on all other platforms other than HTML5, the function will always return true.

#### Syntax:

audio\_sound\_is\_playable(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset | The index of the sound to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if audio\_sound\_is\_playable(snd\_Shot)
{
    audio\_play\_sound(snd\_Shot, 10, false);
}

The above code will play the sound "snd\_Shot" if it is playable.