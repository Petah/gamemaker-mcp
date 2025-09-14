---
title: "ds_list_sort"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_sort.htm"
converted: "2025-09-14T03:59:46.986Z"
---

# ds\_list\_sort

With this function you can sort all the values within a list, either in ascending or descending order. If the list contains strings, these will be sorted alphabetically, based on the English 26 letter alphabet.

#### Syntax:

ds\_list\_sort(id, ascend);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the list to sort. |
| ascend | Boolean | Whether the values should be ascending (true) or descending (false) order. |

#### Returns:

N/A

#### Example:

if (newgame)
{
    ds\_list\_sort(name\_list, true);
}

The above code will sort the list indexed in the variable "name\_list" if the variable "newgame" is flagged as true.