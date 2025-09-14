---
title: "audio_listener_velocity"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Listeners/audio_listener_velocity.htm"
converted: "2025-09-14T03:59:31.595Z"
---

# audio\_listener\_velocity

This function can be used to give the listener _Doppler_ effects and simulate audio motion based on the vector that is resolved from the given relative x, y and z positions. If the listener itself is not ever going to move, or the movement is not a constant motion, you would normally not need to set these values, but, for example, if you are making a scrolling game where the player has a constant bottom to top movement and the enemies a constant top to bottom movement, you would set the listener _and_ emitter velocities (for emitters you would use [audio\_emitter\_velocity()](../Audio_Emitters/audio_emitter_velocity.md)) to the appropriate vectors to simulate the correct Doppler effect as they move past the player instance.

**NOTE** if you have multiple listeners you should use the function [audio\_listener\_set\_velocity()](audio_listener_set_velocity.md).

The image below shows how this could be setup for the example game given above:

![Audio Listener Velocity Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Listener_Velocity.png)

#### Syntax:

audio\_listener\_velocity(vx, vy, vz);

| Argument | Type | Description |
| --- | --- | --- |
| vx | Real | The x velocity component of the listener (default 0). |
| vy | Real | The y velocity component of the listener (default 0). |
| vz | Real | The z velocity component of the listener (default 0). |

#### Returns:

N/A

#### Example:

if (speed > 0)
{
    audio\_listener\_velocity(abs(hspeed), abs(vspeed), 0);
}

The above code checks to see if the player instance speed is over 0 and if it is it then uses the appropriate absolute hspeed and vspeed components to set the listener velocity.