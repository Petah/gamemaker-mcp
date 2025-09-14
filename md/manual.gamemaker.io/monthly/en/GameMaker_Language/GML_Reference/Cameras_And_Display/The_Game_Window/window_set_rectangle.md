---
title: "window_set_rectangle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_set_rectangle.htm"
converted: "2025-09-14T03:59:45.501Z"
---

# window\_set\_rectangle

With this function you can set the position of the game window within the browser (HTML5) or display (Windows, Ubuntu (Linux) or macOS) _and_ set the scale of the window too. For more information on window position and window size, see [window\_set\_position()](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_set_position.md) and [window\_set\_size()](window_set_size.md).

#### Syntax:

window\_set\_rectangle(x, y, w, h);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The new x coordinate of the window. |
| y | Real | The new y coordinate of the window. |
| w | Real | The new width of the window. |
| h | Real | The new height of the window. |

#### Returns:

N/A

#### Example:

window\_set\_rectangle(0, 0, display\_get\_width(), display\_get\_height());

The above code will set the game window to occupy the whole display area (either the browser or the screen, depending on the target platform).