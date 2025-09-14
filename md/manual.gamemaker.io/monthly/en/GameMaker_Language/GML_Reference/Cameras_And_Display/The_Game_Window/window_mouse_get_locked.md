---
title: "window_mouse_get_locked"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_mouse_get_locked.htm"
converted: "2025-09-14T03:59:45.238Z"
---

# window\_mouse\_get\_locked

This function returns if the mouse is [locked](window_mouse_set_locked.md) (true) or not (false).

#### Syntax:

window\_mouse\_get\_locked();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

 Step Event

if (window\_mouse\_get\_locked())
{
    x += window\_mouse\_get\_delta\_x();
    y += window\_mouse\_get\_delta\_y();
}

Global Left Pressed Event

window\_mouse\_set\_locked(true);

Global Left Released Event

window\_mouse\_set\_locked(false);

The above code adds the _change_ in mouse position to the instance's position while the left mouse button is held down.

In the Global Left Pressed and Global Left Released events, the mouse is set to locked and unlocked respectively, using [window\_mouse\_set\_locked](window_mouse_set_locked.md).

In the Step event, the locked state of the mouse is checked using [window\_mouse\_get\_locked](window_mouse_get_locked.md). If it is locked, the delta x ([window\_mouse\_get\_delta\_x](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_mouse_get_delta_x.md)) and y ([window\_mouse\_get\_delta\_y](window_mouse_get_delta_y.md)) are added to the instance's x and y.