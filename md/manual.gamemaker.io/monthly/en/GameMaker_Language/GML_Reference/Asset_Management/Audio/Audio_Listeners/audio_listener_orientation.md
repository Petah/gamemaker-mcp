---
title: "audio_listener_orientation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Listeners/audio_listener_orientation.htm"
converted: "2025-09-14T03:59:31.446Z"
---

# audio\_listener\_orientation

With this function you can change the orientation of the _listener_ within the 3D audio space. The **look at** direction and **up** direction are based on the vectors that are resolved from the given relative x, y and z positions, and default to (0, 0, 1) for the look at direction and (0, 1, 0) for the up direction, as shown in the illustration below:

![Listener Orientation Diagram](../../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Orientation_Base.png)

**NOTE** if you have multiple listeners you should use the function [audio\_listener\_set\_orientation()](audio_listener_set_orientation.md).

Changing the listener orientation with this function will change how sound created by audio emitters around the game room are perceived by the player of your game. In the example below, sounds created by the emitter when the listener is at the default position would appear to be coming from below and to the right of the listener, but with the new position and orientation of the listener they will now be perceived as coming from _above_ and to the right.

![Listener Orientation Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Orientation_Example.png)

#### Syntax:

audio\_listener\_orientation(lookat\_x, lookat\_y, lookat\_z, up\_x, up\_y, up\_z);

| Argument | Type | Description |
| --- | --- | --- |
| lookat_x | Real | The x look vector (default 0). |
| lookat_y | Real | The y look vector (default 0). |
| lookat_z | Real | The z look vector (default 1). |
| up_x | Real | The x up vector (default 0). |
| up_y | Real | The y up vector (default 1). |
| up_z | Real | The z up vector (default 0). |

#### Returns:

N/A

#### Example:

dx = dcos(direction);
dy = - dsin(direction);
dz = - dsin(zdirection);
audio\_listener\_position(x, y, z);
audio\_listener\_orientation(dx, dy, dz, 0, 0, 1);

The above code sets the 3D audio listener position to an instance's x and y [variables](../../Instances/Instance_Variables/Instance_Variables.md) and an extra z variable. It then sets the audio listener's orientation to three variables calculated from the instance's [direction](../../Instances/Instance_Variables/direction.md) and an extra zdirection variable.