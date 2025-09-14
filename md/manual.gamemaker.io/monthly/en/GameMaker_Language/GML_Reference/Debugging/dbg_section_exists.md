---
title: "dbg_section_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_section_exists.htm"
converted: "2025-09-14T03:59:48.526Z"
---

# dbg\_section\_exists

This function returns whether the given custom debug section, created with [dbg\_section](dbg_section.md), still exists.

#### Syntax:

dbg\_section\_exists(section)

| Argument | Type | Description |
| --- | --- | --- |
| section | Debug Section Pointer | A pointer to a debug section returned by a call to dbg_section. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)



#### Example:

section = dbg\_section("Section 1", true);
show\_debug\_message(dbg\_section\_exists(section));
dbg\_section\_delete(section);
show\_debug\_message(dbg\_section\_exists(section));

The above code first creates a new debug section using [dbg\_section](dbg_section.md) and stores the pointer to it in a variable section. dbg\_section\_exists is called a first time to check if the debug section stored in section exists and the result is output using [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md). The section is then deleted with a call to [dbg\_section\_delete](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_section_delete.md). At this point, the variable section still holds a pointer to a debug section, but the debug section doesn't exist anymore and the pointer has become invalid. dbg\_section\_exists is called a second time and its return value output in a debug message.