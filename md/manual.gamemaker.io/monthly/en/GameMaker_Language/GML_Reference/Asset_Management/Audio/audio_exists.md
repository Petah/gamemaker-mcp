---
title: "audio_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_exists.htm"
converted: "2025-09-14T03:59:32.089Z"
---

# audio\_exists

This function returns whether a [Sound Asset](../../../../The_Asset_Editors/Sounds.md) exists.

The sound to check can either be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the [audio\_play\_sound](audio_play_sound.md) or [audio\_play\_sound\_at](audio_play_sound_at.md) functions) or a sound asset.

NOTE If the index you search for has not been initialised previously, this function will cause an error as it is searching for non-existent asset indices.

#### Syntax:

audio\_exists(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset | The index of the sound to check the existence of. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if audio\_exists(global.Music)
{
    audio\_play\_sound(global.Music, 0, true);
}

The above code checks to see if a sound exists. If it does it is set to play in a loop.