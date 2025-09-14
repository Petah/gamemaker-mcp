---
title: "time_source_get_children"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/time_source_get_children.htm"
converted: "2025-09-14T04:00:08.207Z"
---

# time\_source\_get\_children

For the given Time Source, this function returns an array containing the [Time Source](time_source_create.md)s of its children.

#### Syntax:

time\_source\_get\_children(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | Time Source | The Time Source to get the children of |

#### Returns:

[Array](../../GML_Overview/Arrays.md) of [Time Source](time_source_create.md)

#### Example:

var \_children = time\_source\_get\_children(time\_source);
var \_count = array\_length(\_children);

for (var i = 0; i < \_count; i ++)
{
    time\_source\_destroy(\_children\[i\]);
}

time\_source\_destroy(time\_source);

This code goes through all the children of a Time Source, and destroys them one-by-one.

At the end, it destroys the parent Time Source.