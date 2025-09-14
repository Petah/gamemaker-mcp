---
title: "keyboard_key_press"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_key_press.htm"
converted: "2025-09-14T03:59:59.470Z"
---

# keyboard\_key\_press

With this function you can simulate the press of any key on the keyboard. When used, the key will be flagged as being pressed until the corresponding release function is called (see [keyboard\_key\_release()](keyboard_key_release.md)). The function will take a keycode value as returned by the function [ord()](../../Strings/ord.md) (only _capital_ letters from A-Z or numbers from 0-9), or any of the vk\_\* constants listed on the main [Keyboard Input](Keyboard_Input.md) page.

Note that after calling this function, if the key is _physically_ pressed on the keyboard, this press event will _not_ be registered again until the key has been physically released (triggering the release event and stopping this function), or the corresponding release key function has been called, and the key pressed again.

#### **Syntax:**

keyboard\_key\_press(key);

| Argument | Type | Description |
| --- | --- | --- |
| key | Virtual Key Constant (vk_*) | The key to simulate a press of. |

#### **Returns:**

N/A

#### **Example:**

keyboard\_key\_press(vk\_space);

This will simulate a spacebar press.