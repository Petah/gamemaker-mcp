---
title: "DS Queues"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/DS_Queues.htm"
converted: "2025-09-14T03:59:47.776Z"
---

# DS Queues

A DS queue is somewhat similar to a [DS stack](../DS_Stacks/DS_Stacks.md) but it works on a first-in first-out (FIFO) basis. The value that is put into the queue _first_ is also the first to be removed from it. You can think of it like a queue in a shop for paying, where the person that is first in the queue pays first and then leaves the shop. Queues are typically used to store actions or behaviours (in the form of scripts, for example) that still need to be done by an instance but there are many other uses.

NOTE As with all dynamic resources, data structures take up memory and so should **always** be destroyed when no longer needed to prevent memory leaks which will slow down and eventually crash your game.

NOTE If you need to check if a data structure exists, you can use the [ds\_exists](../ds_exists.md) function.

## Function Reference

### General

-   [ds\_queue\_create](ds_queue_create.md)
-   [ds\_queue\_destroy](ds_queue_destroy.md)
-   [ds\_queue\_clear](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/ds_queue_clear.md)
-   [ds\_queue\_empty](ds_queue_empty.md)
-   [ds\_queue\_size](ds_queue_size.md)
-   [ds\_queue\_dequeue](ds_queue_dequeue.md)
-   [ds\_queue\_enqueue](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/ds_queue_enqueue.md)
-   [ds\_queue\_head](ds_queue_head.md)
-   [ds\_queue\_tail](ds_queue_tail.md)
-   [ds\_queue\_copy](ds_queue_copy.md)

### Serialisation

-   [ds\_queue\_read](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Queues/ds_queue_read.md)
-   [ds\_queue\_write](ds_queue_write.md)