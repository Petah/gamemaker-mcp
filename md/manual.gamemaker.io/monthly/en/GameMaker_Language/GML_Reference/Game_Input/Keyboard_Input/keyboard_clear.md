---
title: "keyboard_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_clear.htm"
converted: "2025-09-14T03:59:59.416Z"
---

# keyboard\_clear

With this function you can clear the current keyboard state, which essentially means that if the key is being held down, it will no longer be recognised until it is released again (which won't trigger the Keyboard Key Released event either on this occasion) and pressed again. The function will take a keycode value as returned by the function [ord()](../../Strings/ord.md) (only _capital_ letters from A-Z or numbers from 0-9), or any of the vk\_\* constants listed on the main [Keyboard Input](Keyboard_Input.md) page.

#### **Syntax:**

keyboard\_clear(key);

| Argument | Type | Description |
| --- | --- | --- |
| key | Virtual Key Constant (vk_*) | The key to clear. |

#### **Returns:**

N/A

#### **Example:**

keyboard\_clear(vk\_space);

The above code clears the state of the spacebar.