---
title: "ds_list_mark_as_map"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_mark_as_map.htm"
converted: "2025-09-14T03:59:46.880Z"
---

# ds\_list\_mark\_as\_map

This function will "mark" (or "flag") a given position within a previously created DS list as holding a [DS map](../DS_Maps/DS_Maps.md).

This functionality is required when encoding JSON strings (which you can create using [json\_encode](../../File_Handling/Encoding_And_Hashing/json_encode.md)), but can also be useful when nesting data structures, as items marked in this way will automatically be garbage collected (destroyed) when the parent DS list is destroyed. This means that you do not have to manually go through the list contents and destroy the marked data structures individually before destroying the "parent" list. However, if you delete the list position individually, the data structure it contained will _not_ be garbage collected and you should call the appropriate DS map destroy function before deleting the parent list position. Also note that if you call the function [ds\_list\_clear](ds_list_clear.md) on a list, any items flagged as maps will be destroyed as well when the list is cleared.

NOTE If the position that has been marked changes within the list, the "mark" will move with it, so if you have marked position 3 in the list (for example) and then insert 2 more items below it so it moves up to position 5, it will _still_ be marked as a list.

#### Syntax:

ds\_list\_mark\_as\_map(id, pos);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the list to mark. |
| pos | Real | The position within the list to mark. |

#### Returns:

[DS Map](../DS_Maps/ds_map_create.md) or -1 (if it fails)

#### Example:

var sub\_map = ds\_map\_create();
ds\_map\_add(sub\_map, "player", player\_array);
ds\_map\_add(sub\_map, "enemy", enemy\_array);
ds\_list\_add(j\_list, sub\_map);
ds\_list\_mark\_as\_map(j\_list, 0);

The above code creates a DS map and then populates it with two keys, each containing an array of values. This map is then added to the given DS list , and the position "marked" as such so that it can be correctly encoded later.