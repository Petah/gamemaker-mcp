---
title: "window_mouse_get_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_mouse_get_x.htm"
converted: "2025-09-14T03:59:45.251Z"
---

# window\_mouse\_get\_x

With this function you can get the x position of the mouse cursor (in pixels) within the browser if it is an HTML5 game or within the game window if it is a Windows, Ubuntu (Linux) or macOS game.

**NOTE** For regular mouse functions see the section on [Mouse Input](../../Game_Input/Mouse_Input/Mouse_Input.md).

#### Syntax:

window\_mouse\_get\_x();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

wx = window\_mouse\_get\_x();

The above code stores the current x axis window position of the mouse in the variable wx.