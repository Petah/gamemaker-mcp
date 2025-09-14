---
title: "ds_map_is_map"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_is_map.htm"
converted: "2025-09-14T03:59:47.286Z"
---

# ds\_map\_is\_map

With this function you can check to see if a DS map is stored in the given map key. If the given key contains a DS map ID, then the function will return true otherwise it will return false.

NOTE This will only detect maps that were added using the [ds\_map\_add\_map](ds_map_add_map.md) function.

#### Syntax:

ds\_map\_is\_map(id, key)

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to use. |
| key | String | The key to replace. |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var size = ds\_map\_size(inventory);
var key = ds\_map\_find\_first(inventory);
for (var i = 0; i < size; i++)
{
    if (ds\_map\_is\_map(inventory, key))
    {
        ds\_map\_destroy(inventory\[? key\]);
    }
    key = ds\_map\_find\_next(inventory);
}
ds\_map\_destroy(inventory);

The above code loops through a DS map and checks to see if any of the keys within it are for other DS maps. If they are, then the stored DS map is destroyed, and the at the end of the loop the main DS map is destroyed too.