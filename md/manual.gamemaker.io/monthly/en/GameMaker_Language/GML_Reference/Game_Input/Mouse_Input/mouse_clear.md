---
title: "mouse_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_clear.htm"
converted: "2025-09-14T03:59:59.751Z"
---

# mouse\_clear

This function clears the current state of the given mouse button. This means that checks for it being held down will not return true until the player releases the button and presses it again.

NOTE This function only clears the state of the mouse button. The release will still be detected when the button is released on the mouse.

You can supply one of the mouse button constants listed on the [Mouse Input](Mouse_Input.md) page.

#### Syntax:

mouse\_clear(button);

| Argument | Type | Description |
| --- | --- | --- |
| button | Mouse Button Constant | Which mouse button constant to check for. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

mouse\_clear(mb\_any);

The above code will clear the down state of all the mouse buttons.