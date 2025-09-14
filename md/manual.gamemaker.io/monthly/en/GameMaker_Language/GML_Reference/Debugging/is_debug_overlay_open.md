---
title: "is_debug_overlay_open"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/is_debug_overlay_open.htm"
converted: "2025-09-14T03:59:48.935Z"
---

# is\_debug\_overlay\_open

This function returns whether [The Debug Overlay](The_Debug_Overlay.md) is currently open or not.

#### Syntax:

is\_debug\_overlay\_open();

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

var \_open = is\_debug\_overlay\_open();
show\_debug\_overlay(!\_open);

The above code first calls is\_debug\_overlay\_open and assigns the result to a temporary variable \_open. It then toggles the debug overlay by passing the negated value to [show\_debug\_overlay](show_debug_overlay.md).