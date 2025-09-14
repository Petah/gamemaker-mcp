---
title: "scheduler_resolution_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/scheduler_resolution_get.htm"
converted: "2025-09-14T04:00:04.772Z"
---

# scheduler\_resolution\_get

This function is used to retrieve the resolution of the Windows thread scheduler in milliseconds. If the scheduler's resolution is set to the default value (as set by Windows), the function will return -1.

For information on the thread scheduler, see the page for [scheduler\_resolution\_set()](scheduler_resolution_set.md).

**NOTE**: This function is for **Windows** only.

#### Syntax:

scheduler\_resolution\_get();

#### Returns:

[Real](../../GML_Overview/Data_Types.md) (or -1 for default)

#### Example:

scheduler\_resolution = scheduler\_resolution\_get();

This example retrieves the resolution of the Windows thread scheduler, and stores it in the "scheduler\_resolution" variable.