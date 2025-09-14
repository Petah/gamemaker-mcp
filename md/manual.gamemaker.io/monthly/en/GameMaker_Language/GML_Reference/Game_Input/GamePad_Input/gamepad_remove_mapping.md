---
title: "gamepad_remove_mapping"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_remove_mapping.htm"
converted: "2025-09-14T03:59:58.700Z"
---

# gamepad\_remove\_mapping

This function can be used to remove the current device mapping from the given gamepad slot index. Once called, the slot index will need to be remapped using the [gamepad\_test\_mapping](gamepad_test_mapping.md) function if you want to be able to use the gamepad constants to detect input correctly (direct input can always be retrieved using the [gamepad\_axis\_count](gamepad_axis_count.md)/[gamepad\_button\_count](gamepad_button_count.md)/[gamepad\_hat\_count](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_hat_count.md) and [gamepad\_axis\_value](gamepad_axis_value.md)/[gamepad\_button\_value](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_button_value.md)/[gamepad\_hat\_value](gamepad_hat_value.md) functions together).

#### Syntax:

gamepad\_remove\_mapping(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | The gamepad index "slot" to remove the mapping from |

#### Returns:

N/A

#### Example:

if (remap == true)
{
    gamepad\_remove\_mapping(global.PadIndex);
}

The above code will remove the mapping from the given gamepad index slot based on the value of a variable.