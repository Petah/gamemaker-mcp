---
title: "timeline_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_size.htm"
converted: "2025-09-14T03:59:42.675Z"
---

# timeline\_size

With this function you can get the total number of active moments for a timeline (an "active" moment is one which has code or GML Visual added to it). This can be handy when creating dynamic timelines using the [timeline\_moment\_add\_script](timeline_moment_add_script.md) and [timeline\_moment\_clear](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_moment_clear.md) functions, as you can check to see if a given timeline has the correct number of active moments or none at all.

#### Syntax:

timeline\_size(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Timeline Asset | The index of the timeline get the information from. |

#### Returns:

N/A

#### Example:

if timeline\_size(global.tl) == 0
{
    var \_gamespeed = game\_get\_speed(gamespeed\_fps);
    timeline\_moment\_add\_script(global.tl, \_gamespeed + irandom(\_gamespeed), spawn\_enemy);
}

The above code check the given timeline size, and if it returns 0 (ie: the timeline has no active moments) it will add a script function to be used at a random moment within the timeline indexed in the global variable tl.