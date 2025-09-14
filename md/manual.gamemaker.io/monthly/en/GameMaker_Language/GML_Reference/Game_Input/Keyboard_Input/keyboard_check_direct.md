---
title: "keyboard_check_direct"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_check_direct.htm"
converted: "2025-09-14T03:59:59.295Z"
---

# keyboard\_check\_direct

This function will return true if the key with the particular keycode is pressed, or false if it is not, by checking the hardware directly.

The function will take a keycode value as returned by the function [ord](../../Strings/ord.md) (only _capital_ letters from A-Z or numbers from 0-9), or any of the vk\_\* constants listed on the main [Keyboard Input](Keyboard_Input.md) page.

NOTE This function is only available for the standard Windows target and the result is independent of which application has focus. On all other platforms it behaves the same as [keyboard\_check](keyboard_check.md).

#### **Syntax:**

keyboard\_check\_direct(key);

| Argument | Type | Description |
| --- | --- | --- |
| key | Virtual Key Constant (vk_*) | The key to check the down state of. |

#### **Returns:**

[Boolean](../../../GML_Overview/Data_Types.md)

#### **Example:**

if keyboard\_check\_direct(vk\_ralt) || keyboard\_check\_direct(vk\_lalt)
{
    crouch = true;
}

The above code will check to see if either the left or right alt keys have been pressed, and if they have it sets the variable crouch to true.