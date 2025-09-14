---
title: "Garbage Collection"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Garbage_Collection/Garbage_Collection.htm"
converted: "2025-09-14T03:59:59.992Z"
---

# Garbage Collection

The GameMaker **Garbage Collector** exists because methods can be passed on the stack and left unreferenced, as can structs and a few other things, which in turn would cause a memory leak if they weren't "cleaned up" in some way.

This is where the garbage collector comes in and it will run in the background of the game, collecting anything that's been de-referenced and maintaining an optimal memory usage.

When we talk about something being de-referenced, we generally refer to any struct or function which isn't connected (it doesn't have to be directly, but through a chain of other variables) to a **global** variable or an **object instance variable**.

Also note that functions defined in scripts in the IDE are not collected, as they are implicitly made global.

**NOTE** Please note that things like surfaces, data structures, buffers and other dynamic resources are **not** garbage collected and have their own destroy functions to clean up the memory associated with them. As a rule of thumb, if anything you create at runtime has a destroy function then it won't be garbage collected and you will have to deal with it yourself in code. The exceptions to this are sequences, animation curves and instances, which also require the garbage collector, **but still need to have their destroy function called**.

The garbage collection which GameMaker uses is "generational". This means that, in order to reduce the work that must be done every frame, objects are divided into "generations".

New memory objects are created in generation 0 and they are moved into older generations as they themselves age. The general idea is that objects which hang around for a while don't need to be continuously tested to see if they should be deleted, but can be checked less frequently (note that "objects" here refers to anything that can be garbage collected and _not_ general object instances as defined in the Asset Browser).

Note that while the checking system is generational, the actual checks are done in an "incremental" way, such that instead of clearing up potentially thousands of objects from a generation in a single frame - causing a large spike in CPU use and potentially affecting the gameplay - each generation will be checked and if required the cleaning will be spread over multiple frames so the garbage collector runs more frequently but does less work each frame it is collecting (you can set the target time for the garbage collector to spend on each frame using the function [gc\_target\_frame\_time()](gc_target_frame_time.md)).

In general you should never need to interact with the GameMaker garbage collection system and normally the results of its operation are not visible but some GML commands are available to get information about what the collector is doing and to influence its behaviour to a limited degree.

IMPORTANT On the HTML5 target platform garbage collection is handled by the JavaScript engine and therefore none of the functions listed below will affect its operation and the function [gc\_get\_stats](gc_get_stats.md) will return 0 for all fields.

-   [gc\_enable](gc_enable.md)
-   [gc\_is\_enabled](gc_is_enabled.md)
-   [gc\_collect](gc_collect.md)
-   [gc\_target\_frame\_time](gc_target_frame_time.md)
-   [gc\_get\_target\_frame\_time](gc_get_target_frame_time.md)
-   [gc\_get\_stats](gc_get_stats.md)

To help decide what needs garbage collected and when you also have a few functions that can be used to create and check **weak references** to structs. A weak reference is a reference that does not protect the referenced object from collection by a garbage collector, and so can be used to check if a struct is still "alive" (referenced) or not somewhere in the game. The functions available for weak referencing are:

-   [weak\_ref\_create](weak_ref_create.md)
-   [weak\_ref\_alive](weak_ref_alive.md)
-   [weak\_ref\_any\_alive](weak_ref_any_alive.md)