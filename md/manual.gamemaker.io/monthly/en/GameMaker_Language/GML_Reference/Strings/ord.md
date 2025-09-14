---
title: "ord"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/ord.htm"
converted: "2025-09-14T04:00:07.282Z"
---

# ord

This function takes a single character input string and returns the Unicode (UTF-8) value for that character. Note that when used with the [keyboard\_check\*](../Game_Input/Keyboard_Input/Keyboard_Input.md) functions, the input string can only be one character in length and can only be a number from 0 to 9 or a _capitalised_ Roman character from A to Z.

#### Syntax:

ord(string)

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string of which to find the Unicode value. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

if (keyboard\_check(ord("W")))
{
    y -= 4;
}

This will move the calling instance four pixels upwards if the key W is held down.