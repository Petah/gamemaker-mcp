---
title: "audio_emitter_get_gain"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_get_gain.htm"
converted: "2025-09-14T03:59:30.947Z"
---

# audio\_emitter\_get\_gain

This function returns the current gain (volume) set for the given audio emitter, normally between 0 and 1, where 0 is silent and 1 is full volume. Note that on some platforms you can have a gain of greater than 1, although a value of 1 is considered "full volume" and anything greater may introduce audio clipping.

#### Syntax:

audio\_emitter\_get\_gain(emitter);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to use. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (audio\_emitter\_get\_gain(emitter\_player) < 1)
{
    audio\_emitter\_gain(emitter\_player, 1);
}

The above code checks the current gain of a given emitter and if it is less than 1 it is set to 1.