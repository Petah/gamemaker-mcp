---
title: "ds_list_find_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_find_index.htm"
converted: "2025-09-14T03:59:46.786Z"
---

# ds\_list\_find\_index

With this function you can check the given list for a value and the position within the list for that value will be returned. Note that if there are more than one entries in the list with the same value, the position of any one of them may be returned, and that if the value does not exist, then -1 will be returned.

#### Syntax:

ds\_list\_find\_index(id, val);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the list to use. |
| val | Any | The value to find. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

pos = ds\_list\_find\_index(list, "Player1");

The above code checks the list indexed in the variable "list" for the value "Player1" and stores the returned position in the variable "pos".