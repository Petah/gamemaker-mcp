---
title: "mouse_check_button"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_check_button.htm"
converted: "2025-09-14T03:59:59.680Z"
---

# mouse\_check\_button

This function will return true if the mouse button being checked is held down or false if it is not.

You supply the mouse button to check from one of the following constants:

| Mouse Button Constant |
| --- |
| Constant | Description |
| mb_left | The left mouse button |
| mb_middle | The middle mouse button (this may not be valid for all target platforms) |
| mb_right | The right mouse button |
| mb_side1* | Mouse side button 1 |
| mb_side2* | Mouse side button 2 |
| mb_any | Any of the mouse buttons |
| mb_none | No mouse button |

\* NOTE The **mb\_side1** and **mb\_side2** buttons are only for use on Windows, macOS, Ubuntu and HTML5.

#### Syntax:

mouse\_check\_button(numb);

| Argument | Type | Description |
| --- | --- | --- |
| numb | Mouse Button Constant | Which mouse button constant to check for. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if mouse\_check\_button(mb\_left)
{
    instance\_create\_layer(mouse\_x, mouse\_y, "Effects", obj\_Star);
}

The above code will check for the left mouse button and every step that it is held down will create an instance of the object indexed in obj\_Star.