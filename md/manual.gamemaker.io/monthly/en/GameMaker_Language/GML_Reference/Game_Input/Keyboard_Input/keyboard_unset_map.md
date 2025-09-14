---
title: "keyboard_unset_map"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Keyboard_Input/keyboard_unset_map.htm"
converted: "2025-09-14T03:59:59.570Z"
---

# keyboard\_unset\_map

With his function you can clear all remapped keys so that they return to their default state, i.e.: all keys map to themselves.

#### **Syntax:**

keyboard\_unset\_map();

#### **Returns:**

N/A

#### **Example:**

if (keyboard\_check\_pressed(vk\_escape))
{
    keyboard\_unset\_map();
}

The above example code will reset all mapped keys to their default settings if the user presses the "escape" key.