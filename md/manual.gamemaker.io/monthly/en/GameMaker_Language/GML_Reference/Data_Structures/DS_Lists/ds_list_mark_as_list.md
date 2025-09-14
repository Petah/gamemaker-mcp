---
title: "ds_list_mark_as_list"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_mark_as_list.htm"
converted: "2025-09-14T03:59:46.865Z"
---

# ds\_list\_mark\_as\_list

This function will "mark" (or "flag") a given position within a previously created DS list as holding another DS list.

This functionality is required when encoding JSON strings (which you can create using [json\_encode](../../File_Handling/Encoding_And_Hashing/json_encode.md)), but can also be useful when nesting data structures, as items marked in this way will automatically be garbage collected (destroyed) when the parent DS list is destroyed. This means that you do not have to manually go through the list contents and destroy the marked data structures individually before destroying the "parent" list. However, if you delete the list position individually, the DS list it contained will _not_ be garbage collected and you should call the appropriate DS list destroy function before deleting the item from the parent list position. Also note that if you call the function [ds\_list\_clear](ds_list_clear.md) on a list, any items flagged as lists will be destroyed as well when the list is cleared.

NOTE If the position that has been marked changes within the list, the "mark" will move with it, so if you have marked position 3 in the list (for example) and then insert 2 more items below it so it moves up to position 5, it will _still_ be marked as a list.

#### Syntax:

ds\_list\_mark\_as\_list(id, pos);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the list to mark. |
| pos | Real | The position within the list to mark. |

#### Returns:

[DS List](ds_list_create.md) or -1 (if it fails)

#### Example:

var j\_list = ds\_list\_create();
var sub\_list = ds\_list\_create();
ds\_list\_add(sub\_list, health);
ds\_list\_add(sub\_list, lives);
ds\_list\_add(sub\_list, score);
ds\_list\_add(j\_list, sub\_list);
ds\_list\_mark\_as\_list(j\_list, 0);

The above code creates two DS lists, then populates one with various values from global variables. This list is then added into the second list, and the position "marked" as such so that it can be correctly encoded later.