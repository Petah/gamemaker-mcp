---
title: "keyboard_key_release"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_key_release.htm"
converted: "2025-09-14T03:59:59.483Z"
---

# keyboard\_key\_release

With this function you can simulate the release of any key on the keyboard. The function will take a keycode value as returned by the function [ord()](../../Strings/ord.md) (only _capital_ letters from A-Z or numbers from 0-9), or any of the vk\_\* constants listed on the main [Keyboard Input](Keyboard_Input.md) page.

#### **Syntax:**

keyboard\_key\_release(key);

| Argument | Type | Description |
| --- | --- | --- |
| key | Virtual Key Constant (vk_*) | The key to simulate a release of. |

#### **Returns:**

N/A

#### **Example:**

keyboard\_key\_release(vk\_space);

This will simulate a spacebar release.