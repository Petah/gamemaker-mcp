---
title: "window_views_mouse_get_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_views_mouse_get_y.htm"
converted: "2025-09-14T03:59:45.586Z"
---

# window\_views\_mouse\_get\_y

This function returns the y-coordinate of the mouse with respect to all the active views and returns the same value [mouse\_y](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_y.md).

**NOTE** For regular mouse functions see the section on [Mouse Input](../../Game_Input/Mouse_Input/Mouse_Input.md).

#### Syntax:

window\_views\_mouse\_get\_y();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

myy = window\_views\_mouse\_get\_y();

This would set myy to the y coordinate of the mouse in the window relative to all active views.