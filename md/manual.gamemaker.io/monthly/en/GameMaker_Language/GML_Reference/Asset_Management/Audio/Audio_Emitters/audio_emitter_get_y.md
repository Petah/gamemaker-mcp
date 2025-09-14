---
title: "audio_emitter_get_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_get_y.htm"
converted: "2025-09-14T03:59:31.074Z"
---

# audio\_emitter\_get\_y

This function returns the current y position of the given audio emitter.

#### Syntax:

audio\_emitter\_get\_y(emitter);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to use. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (audio\_emitter\_get\_y(emitter\_player) != x)
{
    audio\_emitter\_position(emitter\_player, x, y, 0);
}

The above code checks the current y position of a given emitter and if it is not equal to the instance y position, it is set to the instance position.