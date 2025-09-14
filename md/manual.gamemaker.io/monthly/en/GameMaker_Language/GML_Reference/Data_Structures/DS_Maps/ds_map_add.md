---
title: "ds_map_add"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_add.htm"
converted: "2025-09-14T03:59:47.040Z"
---

# ds\_map\_add

This function should be used to add sets of key/value pairs into the specified DS map.

You can check this function to see if it was successful or not (it will return true on success or false otherwise), as it may fail if there already exists the same key in the DS map or you specify a non-existent DS map as the ID of the map to add to.

The keys and and values you supply can be made up of any combination of data types, so all of the following - and more - are acceptable (although, in practice, you would most commonly use a string for the key):

ds\_map\_add(map, 5, undefined);
ds\_map\_add(map, "level", 1);
ds\_map\_add(map, 89.6, "hello world");
ds\_map\_add(map, 5, buffer\_get\_address(buff)); // This will return **false** and fail, as the key 5 already exists in the map

You can also add to a map using the [accessor](../../../GML_Overview/Accessors.md) "?", as shown below, however this is a [ds\_map\_set](ds_map_set.md) operation and will successfully update existing keys as well, unlike the **add** function.

map\[? 5\] = undefined;
map\[? "level"\] = 1;
map\[? 89.6\] = "hello world";
map\[? 5\] = buffer\_get\_address(buff); // This will succeed as it is a "set" and not an "add"

**NOTE** Unlike other data structures in GameMaker this key will not go to the start (nor the end) of the DS map, but rather it will just go into the DS map **somewhere**.

#### Syntax:

ds\_map\_add(id, key, val);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to add to. |
| key | String | The key of the value to add. |
| val | Any | The value to add to the map. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

inventory = ds\_map\_create();
ds\_map\_add(inventory, "hp potion", 1);
ds\_map\_add(inventory, "gold", 100);

This will create a new map, assigning its id to the variable "inventory". It then adds two new keys to the map, "hp potion" and "gold", and sets their initial values as 1 and 100.