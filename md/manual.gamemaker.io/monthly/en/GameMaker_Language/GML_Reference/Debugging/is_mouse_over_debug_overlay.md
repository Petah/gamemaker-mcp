---
title: "is_mouse_over_debug_overlay"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/is_mouse_over_debug_overlay.htm"
converted: "2025-09-14T03:59:48.964Z"
---

# is\_mouse\_over\_debug\_overlay

This function returns true if the mouse is over a debug overlay window or gadget, or is being used by the debug overlay in any other way (i.e. when dragging windows).

The mouse is over [The Debug Overlay](The_Debug_Overlay.md) whenever it's over a menu or window.

#### Syntax:

is\_mouse\_over\_debug\_overlay();

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

Step Event

if (!is\_mouse\_over\_debug\_overlay())
{
    if (keyboard\_check\_pressed(vk\_control))
    {
        instance\_create\_layer(mouse\_x, mouse\_y, layer, obj\_enemy);
    }
}

The code example above first uses is\_mouse\_over\_debug\_overlay to check if the mouse is over any menu or window of [The Debug Overlay](The_Debug_Overlay.md). If it's not, [keyboard\_check\_pressed](../Game_Input/Keyboard_Input/keyboard_check_pressed.md) is used to check if the Ctrl key was pressed. If that's the case, an instance of an object obj\_enemy is created at the mouse position.