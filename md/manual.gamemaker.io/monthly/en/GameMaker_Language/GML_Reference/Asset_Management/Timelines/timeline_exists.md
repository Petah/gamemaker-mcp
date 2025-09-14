---
title: "timeline_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_exists.htm"
converted: "2025-09-14T03:59:42.553Z"
---

# timeline\_exists

With this function you can check and see whether a time line exists (returns true) or not (returns false). This is particularly useful when creating Timelines dynamically using the [timeline\_add()](timeline_add.md) function, but you should note that if you search for an uninitialised variable (that would otherwise be assigned to a time line's index) an error will be thrown.

#### Syntax:

timeline\_exists(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Timeline Asset | The index of the time line to check for. |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (timeline\_exists(global.tl))
{
    timeline\_delete(global.tl);
}

The above code checks to see if a time line exists and is indexed in the global variable "tl" and if so it then deletes that time line.