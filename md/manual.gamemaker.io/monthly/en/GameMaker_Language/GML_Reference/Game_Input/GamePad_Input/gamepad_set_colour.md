---
title: "gamepad_set_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_set_colour.htm"
converted: "2025-09-14T03:59:58.757Z"
---

# gamepad\_set\_colour

This function can be used to set the colour of the LEDs within a PlayStation controller. You specify the device slot to set, and then give a colour, which can be any of the [colour constants](../../Drawing/Colour_And_Alpha/Colour_And_Alpha.md) or a colour value created using the specific colour functions or a HEX value(like $FFFFFFF).

#### Syntax:

gamepad\_set\_colour(device, colour);

| Argument | Type | Description |
| --- | --- | --- |
| device | Real | Which gamepad device "slot" to set. |
| colour | Colour | The colour to use. |

#### Returns:

N/A

#### Example:

if (health < 10)
{
    gamepad\_set\_colour(0, c\_red);
}

The above code will set the PlayStation controller LEDs to red if the health variable falls below 10.