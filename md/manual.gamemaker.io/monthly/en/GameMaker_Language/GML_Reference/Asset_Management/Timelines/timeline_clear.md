---
title: "timeline_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_clear.htm"
converted: "2025-09-14T03:59:42.525Z"
---

# timeline\_clear

With this function you can clear a specific time line of "moments", removing all codes and actions for that time line and leaving it empty.

#### Syntax:

timeline\_clear(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Timeline Asset | The index of the timeline to clear. |

#### Returns:

N/A

#### Example:

if (timeline\_position > 200)
{
    timeline\_clear(global.tl);
    timeline\_index = -1;
}

The above code will clear the specified time line indexed by the variable "global.tl" of all moments when a specific moment has been passed.