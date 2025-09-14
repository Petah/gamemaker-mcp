---
title: "audio_emitter_get_pitch"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_get_pitch.htm"
converted: "2025-09-14T03:59:30.993Z"
---

# audio\_emitter\_get\_pitch

This function returns the current pitch value set for the given audio emitter.

#### Syntax:

audio\_emitter\_get\_pitch(emitter);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to use. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (audio\_emitter\_get\_pitch(emitter\_player) != 1)
{
    audio\_emitter\_pitch(emitter\_player, 1);
}

The above code checks the current pitch of a given emitter and if it is not equal to 1 it is set to 1.