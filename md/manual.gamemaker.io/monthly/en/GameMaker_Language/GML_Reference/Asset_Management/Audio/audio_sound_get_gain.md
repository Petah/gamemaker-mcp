---
title: "audio_sound_get_gain"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_sound_get_gain.htm"
converted: "2025-09-14T03:59:32.427Z"
---

# audio\_sound\_get\_gain

This function will return the current gain value for the given sound. The sound can either be one referenced from an index for an individual sound being played which has been stored in a variable when using the [audio\_play\_sound()](audio_play_sound.md) or [audio\_play\_sound\_at()](audio_play_sound_at.md) functions, or an actual sound asset from the Asset Browser.

Gain is usually calculated as a value from 0 to 1, but on some platforms you can have a gain of greater than 1, although a value of 1 is considered "full volume" and anything greater may introduce audio clipping.

NOTE Use [db\_to\_lin](db_to_lin.md) and [lin\_to\_db](lin_to_db.md) to convert back and forth between linear gains and gains expressed in decibels (dB).

#### Syntax:

audio\_sound\_get\_gain(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID or Audio Queue ID | The index of the sound to get the gain of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if audio\_sound\_get\_gain(snd\_Music) != 1
{
    audio\_sound\_gain(snd\_Music, 1, 0);
}

The above code will change the gain of the audio played from the sound indexed as "snd\_Music" if its gain is not equal to 1.