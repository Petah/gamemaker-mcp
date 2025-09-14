---
title: "timeline_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_index.htm"
converted: "2025-09-14T03:59:42.581Z"
---

# timeline\_index

This variable holds the index of the timeline currently associated with the instance.

You can set this to a particular timeline to use that one, or set it to \-1 to stop using a timeline for the instance (if no timeline is defined for the instance, an invalid handle (holding \-1) is returned too). Note that this does _not_ start the timeline - for that use the variable [timeline\_running](timeline_running.md).

#### Syntax:

timeline\_index

#### Returns:

[Timeline Asset](../../../../The_Asset_Editors/Timelines.md)

#### Example:

if (timeline\_exists(global.tl))
{
    timeline\_index = global.tl;
}

The above code will assign the instance running the code a time line indexed in the variable global.tl if that timeline exists.