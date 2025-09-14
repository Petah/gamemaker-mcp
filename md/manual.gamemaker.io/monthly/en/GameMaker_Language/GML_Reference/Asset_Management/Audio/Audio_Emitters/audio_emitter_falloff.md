---
title: "audio_emitter_falloff"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_falloff.htm"
converted: "2025-09-14T03:59:30.856Z"
---

# audio\_emitter\_falloff

With this function you can set the fall-off distance for an emitter. This is the distance from the _listener_ the emitter has to be before the sound will have "fallen off" to a volume of 0. The default value for this is 100, but beware of setting this to any value lower than 1 as that will make any sound played through this emitter inaudible to the _listener_, however any other value will cause the sound to fade away the further that the emitter is from the _listener_.

How the sound itself is heard will depend on the falloff reference (which is the distance under which the volume for the source would normally drop by half) and the roll off factor (which affects the sound past the falloff reference distance only). The default factor is normally 1, and the effect of the different falloff values will depend on the model chosen.

For a complete guide to the different falloff models and how these values are used, please see the function [audio\_falloff\_set\_model()](../audio_falloff_set_model.md).

#### Syntax:

audio\_emitter\_falloff(emitter, falloff\_ref, falloff\_max, falloff\_factor);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to change. |
| falloff_ref | Real | The falloff reference relative to the listener (clamp). |
| falloff_max | Real | The maximum falloff distance relative to the listener. |
| falloff_factor | Real | The falloff factor (default 1). |

#### Returns:

N/A

#### Example:

s\_emit = audio\_emitter\_create();
audio\_emitter\_position(s\_emit, x, y, 0);
audio\_emitter\_falloff(s\_emit, 100, 300, 1);

The above code creates an audio emitter and assigns its index to the variable "s\_emit". This emitter is then placed at the position of the instance creating it and is given a fall-off distance of 300, meaning that when the emitter is further than 300 pixels from the _listener_ position it will be silent. Its falloff factor is the default 1 and the falloff reference is 100, so at 100 pixels from the listener the falloff will start.