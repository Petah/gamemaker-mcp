---
title: "time_source_get_parent"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_get_parent.htm"
converted: "2025-09-14T04:00:08.224Z"
---

# time\_source\_get\_parent

This function returns the [Time Source](time_source_create.md) of the given Time Source's parent.

The returned value may be a custom Time Source, or one of the [Built-In Time Sources](Built_In_Time_Sources.md), depending on how the given Time Source was [created](time_source_create.md).

#### Syntax:

time\_source\_get\_parent(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | Time Source | The Time Source to get the parent of |

#### Returns:

[Time Source](time_source_create.md)

#### Example:

var \_parent = time\_source\_get\_parent(time\_source);

This code gets the parent of a Time Source and stores it in a local variable.