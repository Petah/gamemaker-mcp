---
title: "mouse_check_button_pressed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_check_button_pressed.htm"
converted: "2025-09-14T03:59:59.718Z"
---

# mouse\_check\_button\_pressed

This function will return true if the mouse button being checked has been pressed or false if it has not.

This function will only return true _once_ for any mouse button when it is first pressed and in order for it to return true again the button will need to have been released and pressed again. Note that it will be considered pressed for the duration of the step, and for all instances that have any mouse events or that use this same function.

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

mouse\_check\_button\_pressed(numb);

| Argument | Type | Description |
| --- | --- | --- |
| numb | Mouse Button Constant | Which mouse button constant to check for. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if mouse\_check\_button\_pressed(mb\_left)
{
    score += 50;
}

The above code will check to see if the left mouse button has been pressed and if it has it will add 50 to the score.