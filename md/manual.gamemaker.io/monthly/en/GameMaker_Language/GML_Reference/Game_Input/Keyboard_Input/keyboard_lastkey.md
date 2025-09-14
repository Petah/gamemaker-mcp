---
title: "keyboard_lastkey"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_lastkey.htm"
converted: "2025-09-14T03:59:59.512Z"
---

# keyboard\_lastkey

This variable refers to the value that [keyboard\_key](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_key.md) was in the previous frame, returning the keycode of that key (all standard keycode constants are returned).

This variable is _not_ read-only and you can change it, for example to set it to [vk\_nokey](Keyboard_Input.htm#vk_nokey) if you handled it already.

#### **Syntax:**

keyboard\_lastkey

#### **Returns:**

[Virtual Key Constant (vk\_\*)](Keyboard_Input.htm#table)

#### **Example:**

if (keyboard\_lastkey != vk\_nokey)
{
    str += keyboard\_lastchar;
    keyboard\_lastkey = vk\_nokey;
}

The above code checks to see if the keyboard\_lastkey variable is not equal to [vk\_nokey](Keyboard_Input.htm#vk_nokey), and if it is it adds whatever the last key was as a string to the variable str, then it resets the keyboard\_lastkey variable to accept further input.