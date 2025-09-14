---
title: "mouse_check_button_released"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_check_button_released.htm"
converted: "2025-09-14T03:59:59.737Z"
---

# mouse\_check\_button\_released

This function will return true if the mouse button being checked has been released or false if it has not.

This function will only return true _once_ for any mouse button when it is released and in order for it to return true again the button will need to have been pressed and released again. Note that it will be considered released for the duration of the step, and for all instances that have any mouse events or that use this same function.

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

mouse\_check\_button\_released(numb);

| Argument | Type | Description |
| --- | --- | --- |
| numb | Mouse Button Constant | Which mouse button constant to check for. |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if mouse\_check\_button\_released(mb\_right)
{
    speed = point\_distance(x, y, mouse\_x, mouse\_y) / 10;
}

The above code will check to see if the right mouse button has been released and if it has it will set the speed of the instance to a tenth of the distance between the current x/y position and the mouse x/y position.