---
title: "ds_map_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_delete.htm"
converted: "2025-09-14T03:59:47.125Z"
---

# ds\_map\_delete

With this function you can remove any given key (and its corresponding value) from the given, previously created, DS map .

#### Syntax:

ds\_map\_delete(id, key);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the map to change. |
| key | String | The key to delete (along with its associated value). |

#### Returns:

N/A

#### Example:

ds\_map\_delete(inventory, "shield");

The above code will delete the key "shield" (and the value it is paired with) from the DS map (inventory).