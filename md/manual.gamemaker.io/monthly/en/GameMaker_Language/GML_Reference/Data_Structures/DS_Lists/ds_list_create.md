---
title: "ds_list_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_create.htm"
converted: "2025-09-14T03:59:46.728Z"
---

# ds\_list\_create

This function creates a new list data structure and returns a [Handle](../../../GML_Overview/Data_Types.md) to it. This value should be stored in a variable and used in all further function calls relating to the list.

NOTE If you try and access a value in the list _before_ it has been populated - i.e. the list is "empty" - then the return value may be 0 since internally the first few entries in the list are set when created to minimize performance issues when initially adding items to the list (although the [ds\_list\_size](ds_list_size.md) function will still return 0 on a newly created list). If you wish to ensure that the list is "truly" empty on create, then you should call [ds\_list\_clear](ds_list_clear.md) after creating the list, which will then mean that any values returned for unpopulated list slots will be undefined.

#### Syntax:

ds\_list\_create();

#### Returns:

[DS List](ds_list_create.md)

#### Example:

list = ds\_list\_create();

This will create a new list and assign its index id to the instance variable list.