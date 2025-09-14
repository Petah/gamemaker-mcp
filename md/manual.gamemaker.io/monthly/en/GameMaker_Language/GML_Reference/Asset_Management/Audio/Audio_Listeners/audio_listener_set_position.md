---
title: "audio_listener_set_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Listeners/audio_listener_set_position.htm"
converted: "2025-09-14T03:59:31.521Z"
---

# audio\_listener\_set\_position

With this function you can change the position of a given _listener_ within the 3D audio space. The default listener index is 0, but you can use the function [audio\_get\_listener\_info()](audio_get_listener_info.md) to get the different indices available for the target platform. The example image below shows the default position for the listener in the audio space:

![Audio Listener Spacial Position Diagram](../../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Listener.png)As you can see, the default position is (0, 0, 0) but you would normally use this function to move the listener around with the player object within your game and so change the way audio created by emitters is heard by the player, for example, in the image below of a top down game, the player instance sets the listener which will cause the audio from the various emitters to "change" as the player moves around the level:

![Audio Listener Game Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Game.png)

#### Syntax:

audio\_listener\_set\_position(index, x, y, z);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real or Audio Listener ID | The listener to set the position of (default 0). |
| x | Real | The x position of the listener (default 0). |
| y | Real | The y position of the listener (default 0). |
| z | Real | The z position of the listener (default 0). |

#### Returns:

N/A

#### Example:

var \_vmat = camera\_get\_view\_mat(view\_camera\[0\]);
audio\_listener\_set\_position(global.Player\_Listener, \_vmat\[0\], \_vmat\[1\], \_vmat\[2\]);
audio\_listener\_set\_orientation(info\[? "index"\], \_vmat\[3\], \_vmat\[4\], \_vmat\[5\], \_vmat\[6\], \_vmat\[7\], \_vmat\[8\]);

The above code retrieves the view matrix for camera view \[0\] and then uses it to set the audio listener position and orientation for the listener with the ID stored in the global variable "Player\_Listener".