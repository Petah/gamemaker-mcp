---
title: "ds_map_empty"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_empty.htm"
converted: "2025-09-14T03:59:47.158Z"
---

# ds\_map\_empty

This function will simply return false if the specified (previously created) DS map contains any key/value pairs, or true if it does not.

#### Syntax:

ds\_map\_empty(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the data structure to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (ds\_map\_empty(inventory))
{
    weight = 0;
}

The above code checks to see if the DS map indexed in the variable "inventory" has any key/value pairs and if it does not it sets the variable "weight" to 0.