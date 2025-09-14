---
title: "ds_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/ds_exists.htm"
converted: "2025-09-14T03:59:48.182Z"
---

# ds\_exists

This function checks if a data structure of the given type with the given index exists.

You supply the DS reference (as held in a variable) and the DS type, which can be any of the constants listed below, and the function will return true if the data structure exists and false otherwise.

| DS Type Constant |
| --- |
| Constant | Description |
| ds_type_map | A map data structure |
| ds_type_list | A list data structure |
| ds_type_stack | A stack data structure |
| ds_type_grid | A grid data structure |
| ds_type_queue | A queue data structure |
| ds_type_priority | A priority data structure |

NOTE You cannot use this function to check the type of a data structure, as the same index number may be used by multiple data structures of differing types.

#### Syntax:

ds\_exists(ind, type)

| Argument | Type | Description |
| --- | --- | --- |
| ind | Any DS Reference | The variable index to check for the data structure |
| type | DS Type Constant | The type of data structure to check for (see the list of constants above) |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (!ds\_exists(ai\_grid, ds\_type\_grid))
{
    ai\_grid = ds\_grid\_create(room\_width / 32, room\_height / 32);
}

The above code checks the (previously initialised) variable ai\_grid to see if it indexes a DS grid type data structure. If it doesn't, it creates one and stores its handle in the variable.