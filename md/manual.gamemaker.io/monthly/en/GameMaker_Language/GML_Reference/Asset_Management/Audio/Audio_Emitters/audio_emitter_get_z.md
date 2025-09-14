---
title: "audio_emitter_get_z"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_get_z.htm"
converted: "2025-09-14T03:59:31.093Z"
---

# audio\_emitter\_get\_z

This function returns the current z position of the given audio emitter.

#### Syntax:

audio\_emitter\_get\_z(emitter);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to use. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (audio\_emitter\_get\_z(emitter\_player) != 0)
{
    var ex = audio\_emitter\_get\_x(emitter\_player);
    var ey = audio\_emitter\_get\_y(emitter\_player);
    audio\_emitter\_position(emitter\_player, ex, ey, 0);
}

The above code checks the current z position of a given emitter and if it is not equal to 0, it is set to 0.