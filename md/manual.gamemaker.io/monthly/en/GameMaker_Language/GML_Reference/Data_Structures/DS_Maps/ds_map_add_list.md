---
title: "ds_map_add_list"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_add_list.htm"
converted: "2025-09-14T03:59:47.055Z"
---

# ds\_map\_add\_list

With this function you can assign a (previously created) [DS list](../DS_Lists/DS_Lists.md) to a key within the given DS map.

This function is designed for creating JSON compatible maps which you would then encode using [json\_encode](../../File_Handling/Encoding_And_Hashing/json_encode.md) and should only be used in conjunction with that functionality. If a DS map has a list added in this way, destroying the parent map will also destroy the contained lists and free their memory, and calling [ds\_map\_clear](ds_map_clear.md) on the parent map will also destroy and clean up any flagged lists.

#### Syntax:

ds\_map\_add\_list(id, key, value)

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to use. |
| key | String | The key for the added list. |
| value | DS List | The handle of the list to add. |

#### Returns:

N/A

#### Example:

var j\_list = ds\_list\_create();
ds\_list\_add(j\_list, health);
ds\_list\_add(j\_list, lives);
ds\_list\_add(j\_list, score);
var j\_map = ds\_map\_create();
ds\_map\_add\_list(j\_map, "list", j\_list);
var j = json\_encode(j\_map);
ds\_map\_destroy(j\_map);

The above code will create a list and populate it with the various values of global variables. This list is then "nested" within a DS map, and the map is then encoded into a JSON string, before the map is destroyed, removing it, and any lists it contains, from memory.