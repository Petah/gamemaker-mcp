---
title: "gc_get_stats"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Garbage_Collection/gc_get_stats.htm"
converted: "2025-09-14T04:00:00.041Z"
---

# gc\_get\_stats

With this function you can retrieve information about the current state of the garbage collector. The function will return a [struct](../../GML_Overview/Structs.md) which will have the following member variables (note that "objects" here refers to anything that can be garbage collected and _not_ general object instances as defined in the Asset Browser):

| GC Stats Struct |
| --- |
| Variable | Type | Description |
| objects_touched | Real | This is the number of active objects the garbage collector found in the previous frame. This will vary depending on which generation was collected. |
| objects_collected | Real | The number of objects which the garbage collector determined weren't active in the previous frame, and which could therefore be deleted. |
| traversal_time | Real | This is the time in microseconds (on the main thread) which the garbage collector took to figure out which objects were active. |
| collection_time | Real | This is the time in microseconds (on a separate thread) which the garbage collector took to clean up the objects deemed inactive. |
| gc_frame | Real | This is a counter which is incremented every time a garbage collection pass occurs. If garbage collection is disabled this will not increase. |
| generation_collected | Real | This is the index of the generation that was collected last. 0 is the youngest generation and 3 is currently the oldest. |
| num_generations | Real | This is the total number of garbage collection generations. |
| num_objects_in_generation | Array of Reals | This is an array (of size num_generations) containing the number of objects in each generation. |

**NOTE**: On the HTML5 target platform garbage collection is handled by the JavaScript engine and therefore the member variables in the above struct will all return 0 if this function is used on that platform.

When using this function, please note that the information shown for the objects _is only updated when a full generation is finished processing_, which may take several frames depending on frame time setting (see [here](gc_target_frame_time.md) for more information on frame timing).

#### Syntax:

gc\_get\_stats();

#### Returns:

[GC Stats Struct](gc_get_stats.md)

#### Example:

if (global.debug == true)
{
    var \_s = gc\_get\_stats();
    var \_t = \_s.traversal\_time;
    var \_c = \_s.collection\_time;
    show\_debug\_message("Traversal time = " + string(\_t))
    show\_debug\_message("Collection time = " + string(\_c))
}

The above code checks a global variable and if it is true it gets information from the garabge collector and outputs it to the console as debug messages.