---
title: "ds_map_replace_list"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_replace_list.htm"
converted: "2025-09-14T03:59:47.352Z"
---

# ds\_map\_replace\_list

With this function you can replace a [DS list](../DS_Lists/DS_Lists.md) that has been stored in the given "key" with another list that has been created previously.

This function is designed for creating JSON compatible maps which you would then encode using [json\_encode](../../File_Handling/Encoding_And_Hashing/json_encode.md) and should only be used in conjunction with that functionality.

#### Syntax:

ds\_map\_replace\_list(id, key, value)

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to use. |
| key | String | The key to replace. |
| value | DS List | The handle of the DS list to use to replace the one previously stored in the given key. |

#### Returns:

N/A

#### Example:

var j\_list = ds\_list\_create();
ds\_list\_add(j\_list, health);
ds\_list\_add(j\_list, lives);
ds\_list\_add(j\_list, score);
ds\_map\_replace\_list(j\_map, "list", j\_list);
var j = json\_encode(j\_map);
ds\_list\_destroy(j\_list);

The above code will create a [DS List](../DS_Lists/ds_list_create.md) and populate it with the values of various global variables before replacing a previously stored list in the [DS Map](ds_map_create.md) j\_map.