---
title: "ds_map_keys_to_array"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_keys_to_array.htm"
converted: "2025-09-14T03:59:47.302Z"
---

# ds\_map\_keys\_to\_array

With this function you can retrieve all of the keys that a DS map contains. You supply the DS map ID to get the keys from (as returned by [ds\_map\_create()](ds_map_create.md)) and the function will return an [array](../../../GML_Overview/Arrays.md) where each entry in the array is a key from the DS map. The function has an optional second argument where you can supply an array that you have created, in which case the map key data will be appended onto any existing data in the array. Note that the function will modify the array supplied directly, but will also return a reference to it (or a reference to a new array if none is supplied).

#### Syntax:

ds\_map\_keys\_to\_array(id, \[array\])

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to use. |
| [array] | Array | OPTIONAL The array to append the DS map keys to. |

#### Returns:

[Array](../../../GML_Overview/Arrays.md)

#### Example:

map\_keys = ds\_map\_keys\_to\_array(inventory);

The above code retrieves the keys for a DS map and then stores them as an array for future use.