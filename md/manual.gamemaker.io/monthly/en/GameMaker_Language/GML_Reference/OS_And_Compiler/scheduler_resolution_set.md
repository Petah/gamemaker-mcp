---
title: "scheduler_resolution_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/scheduler_resolution_set.htm"
converted: "2025-09-14T04:00:04.785Z"
---

# scheduler\_resolution\_set

This function is used to change the resolution of the Windows thread scheduler. The resolution value supplied in the argument needs to be in **milliseconds**.

By default, GameMaker uses a resolution of 1 millisecond, which is the smallest resolution allowed and gives the best performance. Changing the resolution to a higher value may affect performance negatively, but it may also reduce power consumption.

You can supply -1 as the argument to revert the resolution to its default value (as set by Windows). Note that changing the scheduler's resolution will impact all processes running at the same time as your game.

**NOTE**: This function is for **Windows** only.

#### Syntax:

scheduler\_resolution\_set(milliseconds);

| Argument | Type | Description |
| --- | --- | --- |
| milliseconds | Real | The new resolution value (in milliseconds) or -1 for default |

#### Returns:

N/A

#### Example:

scheduler\_resolution\_set(2);

This example sets the resolution of the Windows thread scheduler to 2 milliseconds.