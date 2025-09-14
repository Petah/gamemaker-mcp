---
title: "window_view_mouse_get_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_view_mouse_get_y.htm"
converted: "2025-09-14T03:59:45.559Z"
---

# window\_view\_mouse\_get\_y

This function will return the mouse y position relative to the view selected.

**NOTE** For regular mouse functions see the section on [Mouse Input](../../Game_Input/Mouse_Input/Mouse_Input.md).

#### Syntax:

window\_view\_mouse\_get\_y( id );

| Argument | Type | Description |
| --- | --- | --- |
| id | Real | The id of the view to compare the mouse position to. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (mouse\_check\_button\_pressed(mb\_left))
{
    var xx, yy;
    xx = window\_view\_mouse\_get\_x(0);
    yy = window\_view\_mouse\_get\_y(0);

    if (xx > 0 && xx < 32 && yy > 0 && yy < 32)
    {
        b\_press\[0\] = true;
    }
}

The above code will check for a mouse button being pressed, and if it is it then gets the mouse position relative to the view\[0\] and compares it to see if a variable should be set to true.