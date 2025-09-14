---
title: "dbg_view_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_view_delete.htm"
converted: "2025-09-14T03:59:48.714Z"
---

# dbg\_view\_delete

This function deletes an existing debug view created using [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md).

#### Syntax:

dbg\_view\_delete(view);

| Argument | Type | Description |
| --- | --- | --- |
| view | Debug View Pointer | A pointer to a debug view |

#### Returns:

N/A

#### Example:

Create Event

debug\_view = dbg\_view("View", true);

Key Pressed Event - Space

dbg\_view\_delete(debug\_view);

The above code first creates a debug view using [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md) named "View" in the Create event and stores the pointer to it in an instance variable debug\_view.

In the Space Key Pressed event, the debug view is deleted using dbg\_view\_delete.