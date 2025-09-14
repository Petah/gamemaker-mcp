---
title: "mouse_wheel_up"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/Mouse_Input/mouse_wheel_up.htm"
converted: "2025-09-14T03:59:59.792Z"
---

# mouse\_wheel\_up

This function returns true if the mouse wheel is being rotated upwards and false otherwise.

#### Syntax:

mouse\_wheel\_up();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (mouse\_wheel\_up())
{
    y -= 10;
}

This moves the current instance up the screen if the mouse wheel is rotated upwards.