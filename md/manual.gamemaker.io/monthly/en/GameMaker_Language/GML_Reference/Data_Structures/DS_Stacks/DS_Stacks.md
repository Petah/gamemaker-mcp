---
title: "DS Stacks"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Stacks/DS_Stacks.htm"
converted: "2025-09-14T03:59:47.969Z"
---

# DS Stacks

A DS stack is a so called last-in-first-out (LIFO) data structure, similar to a [DS queue](../DS_Queues/DS_Queues.md). You can _push_ values onto a stack and then remove them again by _popping_ them from the stack, where the value that was pushed on the stack most recently is the first to be popped from it again (just think of a stack of coins, where each coin that you add has to be removed again first before you can get to the rest of the coins beneath). Stacks are often used when there are interrupts to handle, or when having recursive functions, or even when constructing a rudimentary AI for your games.

NOTE As with all dynamic resources, data structures take up memory and so should **always** be destroyed when no longer needed to prevent memory leaks which will slow down and eventually crash your game.

NOTE If you need to check if a data structure exists, you can use the [ds\_exists](../ds_exists.md) function.

## Function Reference

### General

-   [ds\_stack\_create](ds_stack_create.md)
-   [ds\_stack\_destroy](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Stacks/ds_stack_destroy.md)
-   [ds\_stack\_clear](ds_stack_clear.md)
-   [ds\_stack\_empty](ds_stack_empty.md)
-   [ds\_stack\_size](ds_stack_size.md)
-   [ds\_stack\_copy](ds_stack_copy.md)
-   [ds\_stack\_top](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Stacks/ds_stack_top.md)
-   [ds\_stack\_pop](ds_stack_pop.md)
-   [ds\_stack\_push](ds_stack_push.md)

### Serialisation

-   [ds\_stack\_read](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Stacks/ds_stack_read.md)
-   [ds\_stack\_write](ds_stack_write.md)