---
title: "window_mouse_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_mouse_set.htm"
converted: "2025-09-14T03:59:45.280Z"
---

# window\_mouse\_set

With this function you can change or set the position of the mouse within the game window which can be useful for FPS games, for example. The function will only work while the game is in focus and using alt + tab will unlock the mouse.

NOTE This function can only be used on the desktop platforms (**Windows**, **Ubuntu** and **macOS**) and browser platforms (**GX.games** and **HTML5**).

NOTE For regular mouse functions see the section on [Mouse Input](../../Game_Input/Mouse_Input/Mouse_Input.md).

WARNING This function doesn't work on Ubuntu if Wayland is enabled. For more information see [this article](https://linuxconfig.org/how-to-enable-disable-wayland-on-ubuntu-22-04-desktop).

TIP  You can lock the mouse within the window by calling [window\_mouse\_set\_locked](window_mouse_set_locked.md) which removes the need to set the mouse position manually.

#### Syntax:

window\_mouse\_set(x, y);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate in the window. |
| y | Real | The y coordinate in the window. |

#### Returns:

N/A

#### Example:

window\_mouse\_set(window\_get\_width() / 2, window\_get\_height() / 2);

The above code centers the mouse in the game window.