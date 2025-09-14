---
title: "ds_list_insert"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_insert.htm"
converted: "2025-09-14T03:59:46.817Z"
---

# ds\_list\_insert

This function will add the given value into the list at the given position. if the list contains more values after the given position, their position will be shifted up one to make room making the list larger by one.

#### Syntax:

ds\_list\_insert(id, pos, val);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the list to add to. |
| pos | Real | The position to add the value, where 0 corresponds to the very beginning of the list and the final position is ds_list_size(id)-1. |
| val | Any | The value to add to the list. |

#### Returns:

N/A

#### Example:

ds\_list\_insert(list, 9, score);

The above code will add the value stored in the variable "score" into the 10th position of the list indexed by the variable "list" (lists are counted from 0, so a ten value list is numbered from 0 - 9).