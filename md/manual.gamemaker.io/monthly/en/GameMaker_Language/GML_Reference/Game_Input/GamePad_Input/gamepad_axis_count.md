---
title: "gamepad_axis_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_axis_count.htm"
converted: "2025-09-14T03:59:58.414Z"
---

# gamepad\_axis\_count

This function will return the number of "axis" controls on the device being checked. These controls are the analogue direction "thumbsticks" on most controllers.

#### Syntax:

gamepad\_axis\_count(device);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

axis = gamepad\_axis\_count(0))

The above code stores the number of axes available for the gamepad connected to device "slot" 0 in the variable "axis".