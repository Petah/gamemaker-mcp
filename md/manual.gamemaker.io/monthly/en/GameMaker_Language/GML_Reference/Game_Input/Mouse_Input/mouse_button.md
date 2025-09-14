---
title: "mouse_button"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_button.htm"
converted: "2025-09-14T03:59:59.602Z"
---

# mouse\_button

This **read-only** variable returns the mouse button that is currently being pressed (currently, as in, this step) and can return any of the special [mouse constants](Mouse_Input.md) except mb\_any.

#### Syntax:

mouse\_button

#### Returns:

[Mouse Button Constant](mouse_check_button.md) (except mb\_any)

#### **Example:**

if (mouse\_button == mb\_left)
{
    x -= 1;
}

This code moves the current instance left if the left mouse button is down.