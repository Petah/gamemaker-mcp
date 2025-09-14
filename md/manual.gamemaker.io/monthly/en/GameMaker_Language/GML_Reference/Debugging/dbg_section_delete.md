---
title: "dbg_section_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_section_delete.htm"
converted: "2025-09-14T03:59:48.419Z"
---

# dbg\_section\_delete

This function deletes a debug section that was previously added with [dbg\_section](dbg_section.md).

#### Syntax:

dbg\_section\_delete(section);

| Argument | Type | Description |
| --- | --- | --- |
| section | Debug Section Pointer | A pointer to a debug section returned by dbg_section |

#### Returns:

N/A

#### Example:

Create Event

config\_section = dbg\_section("Config");

Key Pressed Event - Space

dbg\_section\_delete(config\_section);

The above code first creates a new debug section using [dbg\_section](dbg_section.md) named "Config" in the Create event. Because no call to [dbg\_view](dbg_view.md) was made before, the section is added to a debug view named "Default".

In the Space Key Pressed Event, the debug section is deleted using dbg\_section\_delete.