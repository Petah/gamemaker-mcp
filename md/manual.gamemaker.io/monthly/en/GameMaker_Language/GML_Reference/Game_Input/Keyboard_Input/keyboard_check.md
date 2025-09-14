---
title: "keyboard_check"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_check.htm"
converted: "2025-09-14T03:59:59.274Z"
---

# keyboard\_check

With this function you can check to see if a key is held down or not.

The function will take a keycode value as returned by the function [ord](../../Strings/ord.md) (only _capital_ letters from A-Z or numbers from 0-9), or any of the vk\_\* constants listed on the main [Keyboard Input](Keyboard_Input.md) page.

Unlike the [keyboard\_check\_pressed](keyboard_check_pressed.md) or [keyboard\_check\_released](keyboard_check_released.md) functions which are only triggered once when the key is pressed or released, this function is triggered every step that the key is held down for.

#### **Syntax:**

keyboard\_check(key);

| Argument | Type | Description |
| --- | --- | --- |
| key | Virtual Key Constant (vk_*) | The key to check the down state of. |

#### **Returns:**

[Boolean](../../../GML_Overview/Data_Types.md)

#### ****Example:****

if keyboard\_check(vk\_left)
{
    x -= 5;
}

The above code will check to see if the arrow key is being pressed and move the instance 5 pixels left every step that it returns true.