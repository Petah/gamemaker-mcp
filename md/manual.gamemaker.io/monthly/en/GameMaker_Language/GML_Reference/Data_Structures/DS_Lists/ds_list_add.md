---
title: "ds_list_add"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_add.htm"
converted: "2025-09-14T03:59:46.682Z"
---

# ds\_list\_add

This function can be used to add a new value (real or string) to the list, which will be added on at the end. The function can take further optional arguments (as many as you require), permitting you to add multiple values consecutively to the list in a single call.

#### Syntax:

ds\_list\_add(id, val1 \[, val2, ... max\_val\]);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the list to add to. |
| val | Any | The value to add to the list. |
| [val2, ... max_val] | Any | Optional values to be added to the list. |

#### Returns:

N/A

#### Example:

ds\_list\_add(sc\_list, score);

The above code will add the value stored in the "score" variable into the list indexed in the variable "sc\_list".