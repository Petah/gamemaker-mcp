---
title: "mouse_wheel_down"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_wheel_down.htm"
converted: "2025-09-14T03:59:59.779Z"
---

# mouse\_wheel\_down

This function returns true if the mouse wheel is being rotated downwards and false otherwise.

#### Syntax:

mouse\_wheel\_down();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (mouse\_wheel\_down())
{
    y += 10;
}

This moves the current instance down the screen if the mouse wheel is rotated upwards.