---
title: "gamepad_hat_value"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_hat_value.htm"
converted: "2025-09-14T03:59:58.658Z"
---

# gamepad\_hat\_value

With this function you can get the current value of a gamepad "hat". The returned hat value is a bitmask for the different directions where:

-   Up = 1 (binary 0b0001)
-   Right = 2 (binary 0b0010)
-   Down = 4 (binary 0b0100)
-   Left = 8 (binary 0b1000)

Note that these can be combined; e.g. a hat value of 3 would be checking up and right (the sum of 1 and 2). You can also use the [bitwise operator](../../../../Additional_Information/Bitwise_Operators.md) |to combine the values of various directions to get the same result, e.g. 0b0001 | 0b0010. A value of 0 means no direction is set.

NOTE Only values where _at most 2 bits_ are set can be returned (e.g. a value of 7 will never be returned because it is impossible to press up (1), right (2) and down (4) all at the same time).

NOTE This function also returns a bitmask for gamepads that support analog input for hats.

#### Syntax:

gamepad\_hat\_value(device, hatindex);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to check. |
| hatindex | Real | Which gamepad hat (or hats) to check for (a value from 0 to gamepad_hat_count(device) - 1) |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (hat value as a bitmask)

#### Example:

var \_dir = gamepad\_hat\_value(global.PadIndex, 0);
switch (\_dir)
{
    case 1: y -= 3; break;
    case 2: x += 3; break;
    case 3: y -= 3; x += 3; break;
    case 4: x -= 3; break;
    case 6: y += 3; x += 3; break;
    case 8: y += 3; break;
    case 9: y -= 3; x -= 3; break;
    case 12: y += 3; x -= 3; break;
}

The above code stores the state of the hat with index 0 on gamepad device slot global.PadIndex in a local variable \_dir, then checks to see what the returned hat value is and acts accordingly.