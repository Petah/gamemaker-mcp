---
title: "ds_list_find_value"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_find_value.htm"
converted: "2025-09-14T03:59:46.799Z"
---

# ds\_list\_find\_value

With this function you can check the given list position and the value held within the list for that position will be returned. Note that if you give a position that is outside of the given list size (i.e.: position 11 in a 10 value list) then the function may return undefined _or_ 0. This is because when you create the list, internally the first few entries in the list are set to 0 to minimize performance issues when initially adding items to the list (although the [ds\_list\_size()](ds_list_size.md) function will still return 0 on a newly created list). If you wish to ensure that the list is "truly" empty on create, then you should call [ds\_list\_clear()](ds_list_clear.md) after creating the list, which will then mean that any values returned for unpopulated list slots will be undefined, which you can then check consistently using the [is\_undefined()](../../Variable_Functions/is_undefined.md) function.

#### Syntax:

ds\_list\_find\_value(id, pos);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the list to use. |
| pos | Real | The position to look at, where 0 corresponds to the very beginning of the list and the final position is ds_list_size(id)-1. |

#### Returns:

[Any](../../../GML_Overview/Data_Types.htm#variable) or [undefined](../../../GML_Overview/Data_Types.md)

#### Example:

val = ds\_list\_find\_value(list, ds\_list\_size(list) - 1);

The above code checks the list indexed in the variable "list" at the last position in the list and stores the returned value in the variable "val".