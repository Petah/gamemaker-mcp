---
title: "audio_emitter_get_vx"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_get_vx.htm"
converted: "2025-09-14T03:59:31.008Z"
---

# audio\_emitter\_get\_vx

This function returns the current velocity along the x axis for the given audio emitter.

#### Syntax:

audio\_emitter\_get\_vx(emitter);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to use. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (audio\_emitter\_get\_vx(emitter\_player) != 0)
{
    audio\_emitter\_velocity(emitter\_player, 0, 0, 0);
}

The above code checks the current x velocity of a given emitter and if it is not equal to 0, it is set to 0.