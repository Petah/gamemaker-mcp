---
title: "ds_list_replace"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_replace.htm"
converted: "2025-09-14T03:59:46.918Z"
---

# ds\_list\_replace

This function will replace the value at the given position for another one.

WARNING Attempting to replace an item at a position out of bounds results in an error, e.g. ds\_list\_replace :: Trying to access an out-of-bounds index \[| 4\].

#### Syntax:

ds\_list\_replace(id, pos, val);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the list to change. |
| pos | Real | The position to replace the value, where 0 corresponds to the very beginning of the list and the final position is ds_list_size(id)-1. |
| val | Any | The new value to replace the given value with. |

#### Returns:

N/A

#### Example:

ds\_list\_replace(n\_list, 3, name);

The above code will replace the value stored at position 3 in the list for that stored in the variable "name".