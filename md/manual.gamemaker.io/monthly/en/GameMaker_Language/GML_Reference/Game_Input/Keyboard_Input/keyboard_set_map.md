---
title: "keyboard_set_map"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_set_map.htm"
converted: "2025-09-14T03:59:59.527Z"
---

# keyboard\_set\_map

Sometimes when making a game you may wish one key to do the same as another. For example many people use the keys WASD for movement, but then many people _also_ use the arrow keys! So, what to do? Well, you _could_ code the movement system twice, but that is a bit complicated and thankfully redundant as this function permits you to "map" one key to another and so any input from either key will be interpreted as the same. To do this you choose a key that you want to map (key2 - this will be the key that you write the code for) and a key that you want it to be mapped _to_ (key1). After that, keypresses to either key will be interpreted by GameMaker as coming from key2. You can also use this function to design a system where the user can define their own keys for playing by simply mapping the user input key to the key that you have coded into the game.

The function takes a keycode value as returned by the function [ord](../../Strings/ord.md) (only _capital_ letters from A-Z or numbers from 0-9), or any of the vk\_\* constants listed on the main [Keyboard Input](Keyboard_Input.md) page.

IMPORTANT The key you are mapping to (key1) will no longer be usable as it's actual key symbol once you use this function. For example, if you map the up-arrow to "W" then you will no longer be able to detect the press of the "W" key as a "W", it will always be considered as the up arrow. To undo this, either map the key to itself - so both key1 and key2 would be ord("W") - or use the function [keyboard\_unset\_map](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_unset_map.md).

#### **Syntax:**

keyboard\_set\_map(key1, key2);

| Argument | Type | Description |
| --- | --- | --- |
| key1 | Virtual Key Constant (vk_*) | This is the key that key1 is to be mapped to |
| key2 | Virtual Key Constant (vk_*) | This is the key that is to be mapped |

#### **Returns:**

[Boolean](../../../GML_Overview/Data_Types.md)

#### **Example:**

keyboard\_set\_map(ord("A"), vk\_left);

The above example code will map the "A" key to the left arrow key. This means that the player can use either the "A" _or_ the left arrow key, and that all code written for the left arrow will also respond to the "A" key being used instead.