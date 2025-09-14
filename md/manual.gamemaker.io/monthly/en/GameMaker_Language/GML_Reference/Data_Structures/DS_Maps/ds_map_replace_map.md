---
title: "ds_map_replace_map"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_replace_map.htm"
converted: "2025-09-14T03:59:47.367Z"
---

# ds\_map\_replace\_map

With this function you can replace a [DS Map](ds_map_create.md) that has been stored in the given key with another map that has been created previously.

This function is designed for creating JSON compatible maps which you would then encode using [json\_encode](../../File_Handling/Encoding_And_Hashing/json_encode.md) and should only be used in conjunction with that functionality.

#### Syntax:

ds\_map\_replace\_map(id, key, value)

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the DS map to use. |
| key | String | The key to replace. |
| value | DS Map | The handle of the DS map to use to replace the one previously stored in the given key. |

#### Returns:

N/A

#### Example:

var temp\_map = ds\_map\_create();
ds\_map\_add\_list(temp\_map, "list", j\_list);
ds\_map\_add(temp\_map, "array", j\_array);
ds\_map\_replace\_map(j\_map, "maps", temp\_map);
var j = json\_encode(j\_map);
ds\_map\_destroy(temp\_map);

The above code will create a [DS Map](ds_map_create.md) and populate it with an array and a [DS List](../DS_Lists/ds_list_create.md) before replacing a previously stored map in the [DS Map](ds_map_create.md) j\_map.