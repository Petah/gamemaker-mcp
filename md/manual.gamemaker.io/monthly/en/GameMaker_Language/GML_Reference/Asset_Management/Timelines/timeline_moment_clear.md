---
title: "timeline_moment_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_moment_clear.htm"
converted: "2025-09-14T03:59:42.637Z"
---

# timeline\_moment\_clear

With this function you can clear a specific moment of any previously defined time line of all codes and actions.

#### Syntax:

timeline\_moment\_clear(ind, step);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Timeline Asset | The index of the timeline to clear. |
| step | Real | The moment to clear. |

#### Returns:

N/A

#### Example:

timeline\_moment\_clear(global.tl, game\_get\_speed(gamespeed\_fps) \* 30);

The above code will clear the specified moment of the time line indexed by the variable global.tl.