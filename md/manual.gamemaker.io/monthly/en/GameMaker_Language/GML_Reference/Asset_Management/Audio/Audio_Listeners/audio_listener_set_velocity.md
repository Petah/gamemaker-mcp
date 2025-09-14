---
title: "audio_listener_set_velocity"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Listeners/audio_listener_set_velocity.htm"
converted: "2025-09-14T03:59:31.576Z"
---

# audio\_listener\_set\_velocity

This function can be used to give the given listener _Doppler_ effects and simulate audio motion based on the vector that is resolved from the given relative x, y and z positions. The default listener index is 0, but you can use the function [audio\_get\_listener\_info()](audio_get_listener_info.md) to get the different indices available for the target platform.

If the given listener is not ever going to move, or the movement is not a constant motion, you would normally not need to set these values, but, for example, if you are making a scrolling game where the player has a constant bottom to top movement and the enemies a constant top to bottom movement, you would set the listener _and_ emitter velocities (for emitters you would use [audio\_emitter\_velocity()](../Audio_Emitters/audio_emitter_velocity.md)) to the appropriate vectors to simulate the correct Doppler effect as they move past the player instance.

The image below shows how this could be setup for the example game given above:

![Audio Listener Set Velocity Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Listener_Velocity.png)

#### Syntax:

audio\_listener\_set\_velocity(index, x, y, z);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real or Audio Listener ID | The listener to change the velocity of (default 0). |
| x | Real | The x velocity of the listener (default 0). |
| y | Real | The y velocity of the listener (default 0). |
| z | Real | The z velocity of the listener (default 0). |

#### Returns:

N/A

#### Example:

var num = audio\_get\_listener\_count();
for(var i = 0; i < num; ++i;)
{
    var info = audio\_get\_listener\_info(i);
    var data = audio\_listener\_get\_data(info\[? "index"\]);
    if data\[? "vx"\] != 0
    {
        audio\_listener\_set\_velocity(info\[? "index"\], 0, 0, 0);
    }
    ds\_map\_destroy(info);
    ds\_map\_destroy(data);
}

The above code checks the number of listeners available then loops through them and if their x velocity is not 0, it sets their velocity values to 0, 0, 0.