---
title: "window_set_cursor"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_set_cursor.htm"
converted: "2025-09-14T03:59:45.384Z"
---

# window\_set\_cursor

With this function you can set the cursor for the game window to any one of the constants listed below (to find the current cursor being used you can use the function [window\_get\_cursor()](window_get_cursor.md) which will also return one of these constants):

| Constant | Cursor |
| --- | --- |
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

window\_set\_cursor(cursor);

| Argument | Type | Description |
| --- | --- | --- |
| cursor | Cursor Constant | The cursor to set for the game window. |

#### Returns:

N/A

#### Example:

if (mouse\_check\_button\_pressed(mb\_left))
{
    window\_set\_cursor(cr\_drag);
}

The above code will change the window cursor to the standard windows drag cursor if the left mouse button has been pressed.