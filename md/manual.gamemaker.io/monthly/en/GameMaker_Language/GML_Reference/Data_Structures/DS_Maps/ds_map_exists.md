---
title: "ds_map_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_exists.htm"
converted: "2025-09-14T03:59:47.171Z"
---

# ds\_map\_exists

This function will return true if the specified key exists in the (previously created) DS map , and false if it does not.

#### Syntax:

ds\_map\_exists(id, key);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the data structure to check |
| key | String | The key to check for |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (!ds\_map\_exists(inventory, "potions"))
{
    ds\_map\_add(inventory, "potions", 1);
}

The above code will check the DS map indexed in the variable "inventory" for the key "potions" and if it doesn't exist it will add it to the map.