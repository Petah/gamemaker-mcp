---
title: "ds_map_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_clear.htm"
converted: "2025-09-14T03:59:47.085Z"
---

# ds\_map\_clear

This function will clear the (previously created) DS map of all key/value pairs, but it will not delete the DS map itself from memory. For that you should use the function [ds\_map\_destroy()](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_destroy.md). Note that clearing a map will de-reference any data structures stored in the map giving a memory leak, so you would need to go through it and destroy all data structure items manually before clearing the map to prevent this. The only time this is not required is when you have flagged any items in the map as a [DS list](../DS_Lists/DS_Lists.md) or as another [DS map](DS_Maps.md), in which case these items will be destroyed (not cleared!) and their memory cleaned up automatically when the parent map is cleared.

#### Syntax:

ds\_map\_clear(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The handle of the data structure to clear. |

#### Returns:

N/A

#### Example:

if (global.new\_game)
{
    ds\_map\_clear(inventory);
}

The above function will check a global variable to see if it is true and, if it is, then the DS map indexed in the instance variable "inventory" will be cleared of all key/value pairs (but it is _not_ destroyed).