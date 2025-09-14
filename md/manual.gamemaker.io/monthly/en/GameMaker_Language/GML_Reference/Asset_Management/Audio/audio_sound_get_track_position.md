---
title: "audio_sound_get_track_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_sound_get_track_position.htm"
converted: "2025-09-14T03:59:32.470Z"
---

# audio\_sound\_get\_track\_position

This function gets the position (in seconds) within the sound file for the sound to play from.

The function can take a [Sound Asset](../../../../The_Asset_Editors/Sounds.md) or a [Sound Instance ID](audio_play_sound.md). It returns:

-   For sound assets: the starting position (or offset) which is used when this sound is played using any of the audio\_play\_sound\_\* functions. This asset-level offset can be changed using [audio\_sound\_set\_track\_position](audio_sound_set_track_position.md).
-   For currently playing sounds (as returned by audio\_play\_sound\_\*): the current track position.

#### Syntax:

audio\_sound\_get\_track\_position(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Instance ID or Sound Asset | The sound asset or instance to get the play position of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example 1:

if audio\_sound\_get\_track\_position(global.Music) != 0
{
    audio\_sound\_set\_track\_position(global.Music, 0);
}

The above code checks a track to get its start position and if it's not 0 seconds it sets it to 0 seconds.