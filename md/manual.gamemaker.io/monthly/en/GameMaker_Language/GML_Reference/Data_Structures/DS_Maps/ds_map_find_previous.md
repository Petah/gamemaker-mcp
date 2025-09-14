---
title: "ds_map_find_previous"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_find_previous.htm"
converted: "2025-09-14T03:59:47.239Z"
---

# ds\_map\_find\_previous

This function returns the previous key stored in the DS map _before_ the one specified in the function. This can be useful if your have to iterate through the DS map looking for something, but should be avoided if possible as it can be slow. If no such key exists then the function will return undefined. You should always check this using the [is\_undefined()](../../Variable_Functions/is_undefined.md) function.

#### Syntax:

ds\_map\_find\_previous(id, key);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to use. |
| key | String | The key to find the previous one to. |

#### Returns:

[Any](../../../GML_Overview/Data_Types.htm#variable) or [undefined](../../../GML_Overview/Data_Types.md)

#### Example:

var size = ds\_map\_size(inventory) - 1;
var key = ds\_map\_find\_last(inventory);
for (var i = size; i > 0; i--;)
{
    if (key != "gold")
    {
        key = ds\_map\_find\_previous(inventory, key);
    }
    else break;
}

The above code creates some temporary variables and then gets the ds\_map size and finds the last key as stored by the computer in the map. It then uses a for loop to iterate back through the ds\_map looking for the key value "gold". If it finds it, it breaks out the loop.