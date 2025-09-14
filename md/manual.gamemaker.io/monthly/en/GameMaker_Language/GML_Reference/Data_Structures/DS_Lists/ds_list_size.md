---
title: "ds_list_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_size.htm"
converted: "2025-09-14T03:59:46.966Z"
---

# ds\_list\_size

This function will return the "size" of the list, ie: the number of items that have been added into it.

#### Syntax:

ds\_list\_size(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the data structure to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (!ds\_list\_empty(control\_list))
{
    num = ds\_list\_size(control\_list);
}

The above code checks a DS list to see if it is empty or not, and if it is not, it gets the number of items that it contains and stores the value in a variable.