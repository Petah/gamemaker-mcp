---
title: "display_mouse_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_mouse_set.htm"
converted: "2025-09-14T03:59:45.768Z"
---

# display\_mouse\_set

With this function you can change or set the position of the mouse within the game display which can be useful for FPS games, for example. The function will only work while the game is in focus and using ALT + Tab will unlock the mouse.

NOTE This function is usable on the desktop platforms **Windows**, **Ubuntu** and **macOS**.

WARNING This function doesn't work on Ubuntu if Wayland is enabled. For more information see [this article](https://linuxconfig.org/how-to-enable-disable-wayland-on-ubuntu-22-04-desktop).

TIP  You can lock the mouse within the window by calling [window\_mouse\_set\_locked](The_Game_Window/window_mouse_set_locked.md) which removes the need to set the mouse position manually.

#### Syntax:

display\_mouse\_set(x, y);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate in the display. |
| y | Real | The y coordinate in the display. |

#### Returns:

N/A

#### Example:

display\_mouse\_set(display\_get\_width() / 2, display\_get\_height() / 2);

The above code centers the mouse in the game display.