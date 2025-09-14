---
title: "keyboard_check_pressed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_check_pressed.htm"
converted: "2025-09-14T03:59:59.389Z"
---

# keyboard\_check\_pressed

With this function you can check to see if a key has been pressed or not.

Unlike the [keyboard\_check](keyboard_check.md) function, this function will only return true in the step the key is pressed down, i.e. when it switches from not held down in the previous step to held down in the current step. So for it to return true again, the key must be first released and then pressed again. In all other steps, the function returns false.

The function will take a keycode value as returned by the function [ord](../../Strings/ord.md) (only _capital_ letters from A-Z or numbers from 0-9), or any of the vk\_\* constants listed on the main [Keyboard Input](Keyboard_Input.md) page.

#### **Syntax:**

keyboard\_check\_pressed(key);

| Argument | Type | Description |
| --- | --- | --- |
| key | Virtual Key Constant (vk_*) | The key to check the pressed state of. |

#### **Returns:**

[Boolean](../../../GML_Overview/Data_Types.md)

#### **Example:**

if keyboard\_check\_pressed(vk\_anykey)
{
    room\_goto\_next();
}

The above code will advance to the next room if the player presses any of the keyboard's keys (working like a "Press Any Key to Continue" prompt).