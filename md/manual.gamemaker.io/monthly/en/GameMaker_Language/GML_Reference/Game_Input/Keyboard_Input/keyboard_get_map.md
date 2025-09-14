---
title: "keyboard_get_map"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_get_map.htm"
converted: "2025-09-14T03:59:59.429Z"
---

# keyboard\_get\_map

Sometimes you may wish to get the ASCII code for a mapped key (to see if it is already mapped, for example) which is what this function returns.

The function will take a keycode value as returned by the function [ord](../../Strings/ord.md) (only _capital_ letters from A-Z or numbers from 0-9), or any of the vk\_\* constants listed on the main [Keyboard Input](Keyboard_Input.md) page.

#### **Syntax:**

keyboard\_get\_map(key);

| Argument | Type | Description |
| --- | --- | --- |
| key | Virtual Key Constant (vk_*) | This is the key that you wish to get the mapped value from |

#### **Returns:**

[Real](../../../GML_Overview/Data_Types.md)

#### **Example:**

var \_keycode = ord("A");
if (keyboard\_get\_map(\_keycode) == \_keycode)
{
    keyboard\_set\_map(\_keycode, keyboard\_lastkey);
}

The above example code will first check and see if "A" has been mapped to another key, and if it hasn't it will map it to the last key that the user has pressed.