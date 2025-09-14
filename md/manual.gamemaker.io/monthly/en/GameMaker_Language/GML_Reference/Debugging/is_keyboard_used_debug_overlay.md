---
title: "is_keyboard_used_debug_overlay"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/is_keyboard_used_debug_overlay.htm"
converted: "2025-09-14T03:59:48.951Z"
---

# is\_keyboard\_used\_debug\_overlay

This function returns true if the keyboard is used by the Debug Overlay, or false if it isn't.

The keyboard is used by [The Debug Overlay](The_Debug_Overlay.md) when the cursor is active in a control (a [dbg\_text\_input](dbg_text_input.md), for example) or when you drag a window around by left-clicking and holding the mouse button.

#### Syntax:

is\_keyboard\_used\_debug\_overlay();

#### Returns:

[Boolean](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

Step Event

if (!is\_keyboard\_used\_debug\_overlay())
{
    x += keyboard\_check(vk\_right) - keyboard\_check(vk\_left);
    y += keyboard\_check(vk\_down) - keyboard\_check(vk\_up);
}

The code example above updates the [x](../Asset_Management/Instances/Instance_Variables/x.md) and [y](../Asset_Management/Instances/Instance_Variables/y.md) of the instance based on the keyboard input, only if the Debug Overlay isn't receiving keyboard input (as checked using is\_keyboard\_used\_debug\_overlay).