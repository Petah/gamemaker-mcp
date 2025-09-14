---
title: "gc_collect"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Garbage_Collection/gc_collect.htm"
converted: "2025-09-14T04:00:00.007Z"
---

# gc\_collect

With this function you can trigger the garbage collector, forcing it to run at the end of the current frame (step). It is worth noting that the garbage collector does _not_ need to be active for this to work. Calling this function after disabling the garbage collector (using the function [gc\_enable()](gc_enable.md)) will enable the garbage collector for one frame in which all objects that have been flagged for collection will be removed from memory before the garbage collector is disabled again.

#### Syntax:

gc\_collect();

#### Returns:

N/A

#### Example:

if (global.debug == true && keyboard\_check\_pressed(vk\_f1))
{
    gc\_collect();
}

The above code checks a global variable and a key being pressed and if those are true then garbage collection is triggered for the end of the frame (step).