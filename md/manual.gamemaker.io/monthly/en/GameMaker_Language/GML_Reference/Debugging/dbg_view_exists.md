---
title: "dbg_view_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_view_exists.htm"
converted: "2025-09-14T03:59:48.730Z"
---

# dbg\_view\_exists

This function returns whether the given custom debug view, created with [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md), still exists.

#### Syntax:

dbg\_view\_exists(view)

| Argument | Type | Description |
| --- | --- | --- |
| view | Debug View Pointer | A pointer to a debug view returned by a call to dbg_view. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

view = dbg\_view("View 1", true);
show\_debug\_message(dbg\_view\_exists(view));
dbg\_view\_delete(view);
show\_debug\_message(dbg\_view\_exists(view));

The above code first creates a new debug view using [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md) and stores the pointer to it in a variable view. dbg\_view\_exists is called a first time to check if the debug view stored in view exists and the result is output using [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md). The view is then deleted with a call to [dbg\_view\_delete](dbg_view_delete.md). At this point, the variable view still holds a pointer to a debug view, but the debug view doesn't exist anymore and the pointer has become invalid. dbg\_view\_exists is called a second time and its return value output in a debug message.