---
title: "audio_emitter_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_position.htm"
converted: "2025-09-14T03:59:31.130Z"
---

# audio\_emitter\_position

With this function you can change the position of an audio emitter within the 3D audio space. The position will affect the sound in different ways depending on where the _listener_ is positioned within the audio space too (default position is (0, 0, 0). See [audio\_listener\_position()](../Audio_Listeners/audio_listener_position.md) for more information), so for example if the emitter position is set to (100, 0, 0) and the current listener is at (200, 0, 0) the audio streamed from the emitter will appear to be on the left of the audio field. The image below shows a visual representation of emitters and their relative positions to the listener:

![Audio Position Diagram](../../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Emitters.png)

#### Syntax:

audio\_emitter\_position(emitter, x, y, z);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to change. |
| x | Real | The x position. |
| y | Real | The y position. |
| z | Real | The z position. |

#### Returns:

N/A

#### Example:

if (speed > 0)
{
    audio\_emitter\_position(s\_emit, x, y, 0);
}

The above code checks to see if the instance speed is over 0 and if it is it updates the audio emitter indexed in the variable "s\_emit" to the current x/y position.