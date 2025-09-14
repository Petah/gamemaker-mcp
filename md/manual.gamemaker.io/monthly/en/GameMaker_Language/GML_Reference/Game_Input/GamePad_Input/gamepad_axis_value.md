---
title: "gamepad_axis_value"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_axis_value.htm"
converted: "2025-09-14T03:59:58.427Z"
---

# gamepad\_axis\_value

You can use this function to get the value of the different axes from a given gamepad slot. You supply the gamepad slot index to check, along with either an axis index constant (as listed [here](Gamepad_Input.md)), or an integer value between 0 and [gamepad\_axis\_count()](gamepad_axis_count.md)\-1. The returned value will be between \-1 and 1 for each of the available horizontal and vertical axes.

Note that the returned value is normalised to take into consideration the value set for the axis deadzone (using the function [gamepad\_set\_axis\_deadzone()](gamepad_set_axis_deadzone.md)), and so will always be between -1 and 0, and 0 and 1. For example, setting the deadzone to 0.2 will mean that pushing the stick right will only start returning a value from 0 - 1 when the _raw_ axis value is over 0.2 - so for example, when the raw value is 0.2, the return value will be 0, when the raw value is at 0.5, the return value will be 0.375, or if the raw value is 0.9, then the return value would be 0.875.

#### Syntax:

gamepad\_axis\_value(device, axisIndex);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to check. |
| axisIndex | Gamepad Axis Constant | The axis index to check (see the constants list). |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var haxis = gamepad\_axis\_value(0, gp\_axislh);
var vaxis = gamepad\_axis\_value(0, gp\_axislv);
direction = point\_direction(0, 0, haxis, vaxis);
speed = point\_distance(0 ,0, haxis, vaxis) \* 5;

The above code sets the speed and direction of the instance based on the returned values of the left analog controller of the gamepad plugged into device "slot" 0.