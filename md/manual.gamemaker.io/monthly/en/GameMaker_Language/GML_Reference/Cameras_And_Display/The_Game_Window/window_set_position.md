---
title: "window_set_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_set_position.htm"
converted: "2025-09-14T03:59:45.484Z"
---

# window\_set\_position

With this function you can set the game window to a specific position within the display (on macOS, Ubuntu and Windows) or within the browser (HTML5).

**NOTE** Calling this function on the same frame as a call to [window\_set\_size](window_set_size.md) might make it fail to set the window position correctly. Call this function in a different frame (e.g. by setting an alarm for a few frames later to set the position of the window) to prevent issues.

**NOTE** If your HTML5 game uses a custom index.html and that sets the canvas to a fixed position then this function will have no effect on the window position.

#### Syntax:

window\_set\_position(x, y);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of where to position the window. |
| y | Real | The y coordinate of where to position the window. |

#### Returns:

N/A

#### Example:

window\_set\_position(0, 0);

The above code will position the game window in the upper left corner of the browser or display (depending on the target module being used).