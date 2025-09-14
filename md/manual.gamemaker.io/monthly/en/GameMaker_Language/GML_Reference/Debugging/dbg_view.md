---
title: "dbg_view"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_view.htm"
converted: "2025-09-14T03:59:48.698Z"
---

# dbg\_view

This function creates a custom debug view and shows it in [The Debug Overlay](The_Debug_Overlay.md).

A debug view is a custom window in this overlay that contains sections that you can add controls to. The controls can change the value of the variable they reference.

References to variables can be created using [ref\_create](../Variable_Functions/ref_create.md).

### Usage Notes

-   The function returns a pointer to the debug view that can be used with [dbg\_view\_delete](dbg_view_delete.md) to delete it again.
-   A debug view contains one or more debug sections, that you add using [dbg\_section](dbg_section.md).
-   All custom debug views are listed under the [Views](The_Debug_Overlay.htm#debug_views) menu and can have their visibility changed there.

#### Syntax:

dbg\_view(name, visible\[, x, y, width, height\]);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name of the debug view |
| visible | Boolean | Whether the debug view should be visible when the debug overlay is opened |
| x | Real | OPTIONAL The x position of the debug view, the default -1 indicates it can be placed anywhere |
| y | Real | OPTIONAL The y position of the debug view, the default -1 indicates it can be placed anywhere |
| width | Real | OPTIONAL The width of the debug view (default is 500) |
| height | Real | OPTIONAL The height of the debug view (default is 400) |

#### Returns:

[Debug View Pointer](dbg_view.md)

#### Example:

dbg\_view("CustomDebugView", true);

The above code creates a new debug view named "CustomDebugView" and brings up [The Debug Overlay](The_Debug_Overlay.md) with the debug view visible.