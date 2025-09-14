---
title: "timeline_add"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Timelines/timeline_add.htm"
converted: "2025-09-14T03:59:42.510Z"
---

# timeline\_add

With this function you can add a new (empty) timeline asset into your game. the function returns the index of this new time line which should be stored in a variable for use in all further function calls that involve this new time line. You should also be sure to use the function [timeline\_delete()](timeline_delete.md) whenever you no longer wish to use the time line (like at the end of the room) so as to prevent any possible memory leaks that could slow down or crash your game. To add moments to a timeline created in this way, see the function [timeline\_moment\_add\_script()](timeline_moment_add_script.md).

#### Syntax:

timeline\_add();

#### Returns:

[Timeline Asset](../../../../The_Asset_Editors/Timelines.md)

#### Example:

global.tl = timeline\_add();

The above code creates a new time line and stores its index in the variable "global.tl".