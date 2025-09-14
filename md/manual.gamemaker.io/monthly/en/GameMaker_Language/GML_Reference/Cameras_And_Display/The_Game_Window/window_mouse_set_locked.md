---
title: "window_mouse_set_locked"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_mouse_set_locked.htm"
converted: "2025-09-14T03:59:45.300Z"
---

# window\_mouse\_set\_locked

This function locks the mouse cursor in place inside the window, and makes it invisible.

Mouse movement can still be read through the functions [window\_mouse\_get\_delta\_x](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_mouse_get_delta_x.md) and [window\_mouse\_get\_delta\_y](window_mouse_get_delta_y.md).

The cursor is set back to its previous "visible" state when mouse lock is disabled again, i.e. when the function is called with enable set to false.

NOTE This function can only be used on the desktop platforms (**Windows**, **Ubuntu** and **macOS**) and browser platforms (**GX.games** and **HTML5**).

NOTE Use [window\_mouse\_get\_locked](window_mouse_get_locked.md) to get the locked state of the mouse.

NOTE On HTML5 this function cannot be used in the Create event as this platform requires that the canvas is clicked first.

WARNING This function doesn't work on Ubuntu if Wayland is enabled. For more information see [this article](https://linuxconfig.org/how-to-enable-disable-wayland-on-ubuntu-22-04-desktop).

#### Syntax:

window\_mouse\_set\_locked(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Whether to lock the mouse or not |

#### Returns:

N/A

#### Example: Basic Use

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