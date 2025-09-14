---
title: "timeline_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_delete.htm"
converted: "2025-09-14T03:59:42.539Z"
---

# timeline\_delete

With this function you can delete any time line from your game. if this time line was created in the GameMaker Asset Browser, please note that it is removed completely from the game and trying to call the indexed time line again after using this function will cause an error. If the time line was created dynamically using the [timeline\_add()](timeline_add.md) function, then this function should be used the moment that the time line is no longer needed to prevent any memory leaks that could slow down (and eventually crash) your game.

#### Syntax:

timeline\_delete(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Timeline Asset | The index of the time line to delete. |

#### Returns:

N/A

#### Example:

if (timeline\_exists(global.tl))
{
    timeline\_delete(global.tl);
}

The above code checks to see if a time line exists and is indexed in the global variable "tl" and if so it then deletes that time line.