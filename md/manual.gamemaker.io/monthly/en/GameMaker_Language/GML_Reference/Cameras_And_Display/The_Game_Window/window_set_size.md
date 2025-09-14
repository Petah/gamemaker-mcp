---
title: "window_set_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_set_size.htm"
converted: "2025-09-14T03:59:45.532Z"
---

# window\_set\_size

With this function you can change the size of the game window. On desktop platforms this usually refers to the client area of the window, excluding the title bar and borders:

![](../../../../assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/window_client_area.png)If you use this function to change the size of the game window, the contents of the window will be scaled to fit with a 1:1 ratio to the background canvas which will keep the image crisp and clear (although scaled, if the window is different from the room or view size). For example, if you have a 200 x 150 pixel window, and the player stretches the window by dragging the borders, the final window size may be 400 x 300 pixels, but the drawing canvas is STILL 200 x 150, which gives a blurred image as the pixel ratio is now 1:2. However, if you use this function to change the window size, the 1:1 ratio is maintained, even though the image is scaled to fit the new window size.

**NOTE** If you have changed the game window from fullscreen to windowed or vice versa in the current frame, this function should be called at least 10 steps later (for example, by using an [alarm](../../Asset_Management/Instances/Instance_Variables/alarm.md)) otherwise it may not work correctly.

#### Syntax:

window\_set\_size( w, h );

| Argument | Type | Description |
| --- | --- | --- |
| w | Real | The new width of the window. |
| h | Real | The new height of the window. |

#### Returns:

N/A

#### Example:

if (mouse\_check\_button\_pressed(mb\_left))
{
    global.scale += 1;
    window\_set\_size(200 \* global.scale, 150 \* global.scale);
}

The above code will change the size of the window based on the value of the variable "global.scale" when the mouse button is pressed.