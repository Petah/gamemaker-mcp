---
title: "ds_map_find_value"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_find_value.htm"
converted: "2025-09-14T03:59:47.252Z"
---

# ds\_map\_find\_value

With this function you can get the value from a specified key. The input values of the function are the (previously created) DS map to use and the key to check for.

NOTE If no such key exists then the function will return undefined. You should always check this using the [is\_undefined()](../../Variable_Functions/is_undefined.md) function.

#### Syntax:

ds\_map\_find\_value(id, key)

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to use. |
| key | String | The key to find. |

#### Returns:

[Any](../../../GML_Overview/Data_Types.htm#variable) or [undefined](../../../GML_Overview/Data_Types.md)

#### Example:

amount = ds\_map\_find\_value(inventory, "food");

Or, using the map [accessor](../../../GML_Overview/Accessors.md) "?":

amount = inventory\[? "food"\];

The above code will get the value of the key "food" and store it in the variable "amount".