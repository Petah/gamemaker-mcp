---
title: "window_get_fullscreen"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_get_fullscreen.htm"
converted: "2025-09-14T03:59:45.074Z"
---

# window\_get\_fullscreen

This function returns whether the game window is in fullscreen mode (true) or not (false).

#### Syntax:

window\_get\_fullscreen();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (window\_get\_fullscreen())
{
    draw\_text(32, 32, "Fullscreen is ON");
}
else
{
    draw\_text(32, 32, "Fullscreen is OFF");
}

The above code will check to see if the window is in fullscreen mode or not and draw a text message depending on the returned value.