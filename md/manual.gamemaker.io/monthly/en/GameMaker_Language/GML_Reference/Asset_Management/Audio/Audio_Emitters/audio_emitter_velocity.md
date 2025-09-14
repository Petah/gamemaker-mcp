---
title: "audio_emitter_velocity"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_velocity.htm"
converted: "2025-09-14T03:59:31.164Z"
---

# audio\_emitter\_velocity

This function can be used to give an emitter _Doppler_ effects and simulate audio motion based on the vector that is resolved from the given relative x, y and z positions. If the emitter itself is not ever going to move you would normally not need to set these values, but, for example, if you are making a scrolling shooter game where the enemies come from the right and scroll to the left, you would set this to have a velocity of (hspeed, 0, 0) in the create event of the enemies (and update the emitter of each instance in the step event using [audio\_emitter\_position()](audio_emitter_position.md)) to give any sounds emitted by the enemy instances the correct Doppler as they pass the player instance (which in turn would be using the function [audio\_listener\_position()](../Audio_Listeners/audio_listener_position.md) to set the _listener_ to the correct position).

#### Syntax:

audio\_emitter\_velocity(emitter, vx, vy, vz);

| Argument | Type | Description |
| --- | --- | --- |
| emitter | Audio Emitter ID | The index of the emitter to change. |
| vx | Real | The x vector value (default 0). |
| vy | Real | The y vector value (default 0). |
| vz | Real | The z vector value (default 0). |

#### Returns:

N/A

#### Example:

s\_emit = audio\_emitter\_create();
audio\_emitter\_position(s\_emit, room\_width, 0, 0);
audio\_emitter\_velocity(s\_emit, -5, 0, 0);

The above code creates an audio emitter and assigns its index to the variable "s\_emit". This emitter is then placed at a position within the room and given a velocity of 5 pixels per step along the x axis (it will Doppler correctly in relation to the listener as if it had a horizontal speed of 5 pixels per step).