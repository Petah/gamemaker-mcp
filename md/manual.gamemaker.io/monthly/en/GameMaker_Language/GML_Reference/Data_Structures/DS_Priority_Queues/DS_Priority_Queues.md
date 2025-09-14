---
title: "DS Priority Queues"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Priority_Queues/DS_Priority_Queues.htm"
converted: "2025-09-14T03:59:47.514Z"
---

# DS Priority Queues

A DS priority queue is a special data structure similar to a [DS queue](../DS_Queues/DS_Queues.md), only here the queue of values is ordered by the priorities (always real numbers) that the values have been assigned. This structure can be very useful for constructing leaderboards or information lists where the importance of each entry can be weighted.

NOTE As with all dynamic resources, data structures take up memory and so should **always** be destroyed when no longer needed to prevent memory leaks which will slow down and eventually crash your game.

NOTE If you need to check if a data structure exists, you can use the [ds\_exists](../ds_exists.md) function.

## Function Reference

### General

-   [ds\_priority\_create](ds_priority_create.md)
-   [ds\_priority\_destroy](ds_priority_destroy.md)
-   [ds\_priority\_clear](ds_priority_clear.md)
-   [ds\_priority\_empty](ds_priority_empty.md)
-   [ds\_priority\_size](ds_priority_size.md)
-   [ds\_priority\_add](ds_priority_add.md)
-   [ds\_priority\_change\_priority](ds_priority_change_priority.md)
-   [ds\_priority\_delete\_max](ds_priority_delete_max.md)
-   [ds\_priority\_delete\_min](ds_priority_delete_min.md)
-   [ds\_priority\_delete\_value](ds_priority_delete_value.md)
-   [ds\_priority\_find\_max](ds_priority_find_max.md)
-   [ds\_priority\_find\_min](ds_priority_find_min.md)
-   [ds\_priority\_find\_priority](ds_priority_find_priority.md)
-   [ds\_priority\_copy](ds_priority_copy.md)

### Serialisation

-   [ds\_priority\_read](ds_priority_read.md)
-   [ds\_priority\_write](ds_priority_write.md)