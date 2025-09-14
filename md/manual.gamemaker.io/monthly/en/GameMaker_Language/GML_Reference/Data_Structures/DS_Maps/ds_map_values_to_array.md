---
title: "ds_map_values_to_array"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_values_to_array.htm"
converted: "2025-09-14T03:59:47.487Z"
---

# ds\_map\_values\_to\_array

With this function you can retrieve all of the values that a DS map contains for each key in the map. You supply the DS map ID to get the keys from (as returned by [ds\_map\_create()](ds_map_create.md)) and the function will return an [array](../../../../../../../GameMaker_Language/GML_Overview/Arrays.md) where each entry in the array is a value from the DS map (for example, if the map has 10 keys, then an array of 10 entries will be returned with each entry corresponding to a value for a key). The function has an optional second argument where you can supply an array that you have created, in which case the map key value data will be appended onto any existing data in the array. Note that the function will modify the array supplied directly, but will also return a reference to it (or a reference to a new array if none is supplied).

#### Syntax:

ds\_map\_values\_to\_array(id, \[array\])

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to use. |
| [array] | Array | OPTIONAL The array to append the DS map values to. |

#### Returns:

[Array](../../../../../../../GameMaker_Language/GML_Overview/Arrays.md)

#### Example:

var \_values = ds\_map\_values\_to\_array(lvl\_score);
var \_total = 0;
var \_length = array\_length(\_values);

for (var i = 0; i < \_length; i ++)
{
    \_total += \_values\[i\];
}

draw\_text(32, 32, "Total score for all levels: " + string(\_total));

The above retrieves all the values from a DS map for each key in the map and stores them in a local variable as an array. It then loops through the array and adds each of the values to a local variable which is then used to display the total of all the values.