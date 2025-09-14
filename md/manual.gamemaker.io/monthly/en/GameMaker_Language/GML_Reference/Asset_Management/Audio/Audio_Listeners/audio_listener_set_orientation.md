---
title: "audio_listener_set_orientation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Listeners/audio_listener_set_orientation.htm"
converted: "2025-09-14T03:59:31.499Z"
---

# audio\_listener\_set\_orientation

With this function you can change the orientation of the given _listener_ within the 3D audio space. The default listener index is 0, but you can use the function [audio\_get\_listener\_info()](audio_get_listener_info.md) to get the different indices available for the target platform.

The **look at** vector and **up** vector are based on the values that are resolved from the given relative x, y and z positions, and default to (0, 0, 1) for the look at vector and (0, 1, 0) for the up vector, as shown in the illustration below:

![Listener Orientation Diagram](../../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Orientation_Base.png)

Changing the given listener orientation with this function will change how sound created by audio emitters around the game room are perceived by the player of your game. In the example below, sounds created by the emitter when the listener is at the default position would appear to be coming from below and to the right of the listener, but with the new position and orientation of the listener they will now be perceived as coming from _above_ and to the right.

![Listener Orientation Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Orientation_Example.png)

#### Syntax:

audio\_listener\_set\_orientation(index, lookat\_x, lookat\_y, lookat\_z, up\_x, up\_y, up\_z);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real or Audio Listener ID | The listener to set the orientation of. |
| lookat_x | Real | The x look vector (default 0). |
| lookat_y | Real | The y look vector (default 0). |
| lookat_z | Real | The z look vector (default 1). |
| up_x | Real | The x up vector (default 0). |
| up_y | Real | The y up vector (default 1). |
| up_z | Real | The z up vector (default 0). |

#### Returns:

N/A

#### Example:

var \_m = camera\_get\_view\_mat(view\_camera\[0\]);
audio\_listener\_set\_position(global.Player\_Listener, \_m\[0\], \_m\[1\], \_m\[2\]);
audio\_listener\_set\_orientation(info\[? "index"\], \_m\[3\], \_m\[4\], \_m\[5\], \_m\[6\], \_m\[7\], \_m\[8\]);

The above code retrieves the view matrix for camera view \[0\] and then uses it to set the audio listener position and orientation for the listener with the ID stored in the global variable "Player\_Listener".