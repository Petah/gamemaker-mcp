---
title: "DS Lists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/DS_Lists.htm"
converted: "2025-09-14T03:59:46.665Z"
---

# DS Lists

A DS list is a data structure that stores information sequentially as it is added (similar to an [array](../../../GML_Overview/Arrays.md)). DS lists are very flexible data structures that permit you to add values at the end or insert them somewhere in the middle of the list, as well as giving you the ability to shuffle the order (to randomise the values) or sort them in an ascending or descending order.

**NOTE** It is recommended to use [arrays](../../../GML_Overview/Arrays.md) over DS lists as they have similar features, are easier to use and are garbage collected automatically.

When accessing DS list data structures, you should always try to use **integer values** for the list position, and all non-integer indices will be floored by GameMaker if you do not. If that is not what you require, then you will need to do the rounding yourself previously before passing the index that you wish to check.

NOTE As with all dynamic resources, data structures take up memory and so should **always** be destroyed when no longer needed to prevent memory leaks which will slow down and eventually crash your game.

Apart from the specific functions listed below you can all use an expression (called an _accessor_) to add or modify the contents of your DS list. This accessor looks similar to a 1D array with the following syntax:

list\_index\[| index\]

You can find more information, plus examples, from the GML Overview page on [Accessors](../../../GML_Overview/Accessors.md).

## Function Reference

### General

-   [ds\_list\_create](ds_list_create.md)
-   [ds\_list\_destroy](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_destroy.md)
-   [ds\_list\_clear](ds_list_clear.md)
-   [ds\_list\_empty](ds_list_empty.md)
-   [ds\_list\_size](ds_list_size.md)
-   [ds\_list\_add](ds_list_add.md)
-   [ds\_list\_set](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_set.md)
-   [ds\_list\_delete](ds_list_delete.md)
-   [ds\_list\_find\_index](ds_list_find_index.md)
-   [ds\_list\_find\_value](ds_list_find_value.md)
-   [ds\_list\_insert](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_insert.md)
-   [ds\_list\_replace](ds_list_replace.md)
-   [ds\_list\_shuffle](ds_list_shuffle.md)
-   [ds\_list\_sort](ds_list_sort.md)
-   [ds\_list\_copy](ds_list_copy.md)

### Serialisation

-   [ds\_list\_read](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_read.md)
-   [ds\_list\_write](ds_list_write.md)

### JSON

DS lists can be used hold [DS maps](../DS_Maps/DS_Maps.md) and other DS lists too, and so we have some special functions that are used to "flag" or "mark" positions within the list as holding these data structures. In general this is not required, but it has the advantage of automatically garbage collecting (destroying) the marked data structures when the parent list is destroyed, and it's also required when used in conjunction with the [json\_encode](../../File_Handling/Encoding_And_Hashing/json_encode.md) function so that the list and its data are properly encoded. The functions for this are:

-   [ds\_list\_mark\_as\_list](ds_list_mark_as_list.md)
-   [ds\_list\_mark\_as\_map](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_mark_as_map.md)
-   [ds\_list\_is\_list](ds_list_is_list.md)
-   [ds\_list\_is\_map](ds_list_is_map.md)