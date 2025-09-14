---
title: "dbg_section"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_section.htm"
converted: "2025-09-14T03:59:48.405Z"
---

# dbg\_section

This function creates a section in the debug view last added with [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md) and shows it in [The Debug Overlay](The_Debug_Overlay.md).

NOTE If no debug view is active then the section is added to a new debug view named "Default".

### Usage Notes

-   A debug section groups together multiple debug controls inside a debug view.
-   Most controls span two columns, others only a single one ([dbg\_text](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_text.md) and [dbg\_button](dbg_button.md)).
-   Two single-column controls can be placed on the same row by calling [dbg\_same\_line](dbg_same_line.md).
-   A debug section's contents can be copy-pasted to and from the clipboard as JSON using the **Copy** and **Paste** buttons.

#### Syntax:

dbg\_section(name \[, open\]);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name of the new debug section |
| open | Boolean | OPTIONAL true if the section should be open when it's created, false if not (default is true) |

#### Returns:

[Debug Section Pointer](dbg_section.md)

#### Example:

dbg\_view("CustomDebugView");
dbg\_section("Player Variables");

The code above creates a new debug view using [dbg\_view](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_view.md) named "CustomDebugView" and adds a new section "Player Variables" to it using dbg\_section.