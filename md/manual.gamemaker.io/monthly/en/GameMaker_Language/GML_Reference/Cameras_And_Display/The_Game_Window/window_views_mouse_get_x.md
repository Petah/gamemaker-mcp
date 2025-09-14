---
title: "window_views_mouse_get_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_views_mouse_get_x.htm"
converted: "2025-09-14T03:59:45.575Z"
---

# window\_views\_mouse\_get\_x

This function returns the x-coordinate of the mouse with respect to all the active views and returns the same value [mouse\_x](../../Game_Input/Mouse_Input/mouse_x.md).

**NOTE** For regular mouse functions see the section on [Mouse Input](../../Game_Input/Mouse_Input/Mouse_Input.md).

#### Syntax:

window\_views\_mouse\_get\_x();

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

myx = window\_views\_mouse\_get\_x();

This would set myx to the x coordinate of the mouse in the window relative to all active views.