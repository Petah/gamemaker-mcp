---
title: "ds_map_add_map"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_add_map.htm"
converted: "2025-09-14T03:59:47.070Z"
---

# ds\_map\_add\_map

With this function you can assign a (previously created) DS map to a key within the given DS map.

This function is designed for creating JSON compatible maps which you would then encode using [json\_encode](../../File_Handling/Encoding_And_Hashing/json_encode.md) and should only be used in conjunction with that functionality. If a DS map has another map added in this way, then destroying the parent map will also destroy the contained maps and free their memory, and calling [ds\_map\_clear](ds_map_clear.md) on the parent map will also destroy and clean up any flagged maps.

#### Syntax:

ds\_map\_add\_map(id, key, value)

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to use. |
| key | String | The key for the added map. |
| value | DS Map | The handle of the map to add. |

#### Returns:

N/A

#### Example:

var j\_map = ds\_map\_create();
var j\_list = ds\_list\_create();
var sub\_map = ds\_map\_create();
ds\_map\_add\_list(sub\_map, "list", j\_list);
ds\_map\_add(sub\_map, "array", j\_array);
ds\_map\_add\_map(j\_map, "map", sub\_map);
var j = json\_encode(j\_map);
ds\_map\_destroy(j\_map);

The above code will create two DS maps, and then populate one with a list and an array before adding it into the second, which is then encoded into a JSON string. The map is then destroyed to remove it, and any other maps or lists that it contains, from memory.