---
title: "ds_map_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_size.htm"
converted: "2025-09-14T03:59:47.468Z"
---

# ds\_map\_size

With this function you can find how many key/values pairs the (previously created) DS map contains.

#### Syntax:

ds\_map\_size(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the data structure to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (ds\_map\_size(inventory) > 49)
{
    full = true;
}

The above code will check the size of the DS map (ie: number of key/value pairs) and if it is greater than 49 it sets the variable "full" to true.