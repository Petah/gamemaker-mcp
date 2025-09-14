---
title: "window_get_cursor"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_get_cursor.htm"
converted: "2025-09-14T03:59:45.062Z"
---

# window\_get\_cursor

With this function you can get the current cursor being used in the game window, with the return value being any one of the constants listed below (to set the current cursor being used you can use the function [window\_set\_cursor()](window_set_cursor.md) which also takes these constants):

| Cursor Constant |
| --- |
| Constant | Cursor |
| cr_none |  |
| cr_default |  |
| cr_arrow |  |
| cr_cross |  |
| cr_beam |  |
| cr_size_nesw |  |
| cr_size_ns |  |
| cr_size_nwse |  |
| cr_size_we |  |
| cr_uparrow |  |
| cr_hourglass |  |
| cr_drag |  |
| cr_appstart |  |
| cr_handpoint |  |
| cr_size_all |  |

#### Syntax:

window\_get\_cursor();

#### Returns:

[Cursor Constant](window_get_cursor.md)

#### Example:

if (mouse\_check\_button\_pressed(mb\_left))
{
    if (window\_get\_cursor() != cr\_drag) window\_set\_cursor(cr\_drag);
}

The above code will change the window cursor to the standard windows drag cursor if the left mouse button has been pressed and it has not already been changed previously.