---
title: "ds_map_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_destroy.htm"
converted: "2025-09-14T03:59:47.143Z"
---

# ds\_map\_destroy

DS maps take up space in memory, which is allocated to them when they are created. This means that you also need to free this memory when the DS map is not needed to prevent errors, memory leaks and loss of performance when running your game. This function does just that.

NOTE Destroying a map will de-reference any data structures stored in the map giving a memory leak, so you would need to go through the map and destroy all data structure items manually before destroying it to prevent this. The only time this is not required is when you have flagged any items in the map as a [DS list](../DS_Lists/DS_Lists.md) or as another [DS map](DS_Maps.md), in which case these items will be destroyed and their memory cleaned up automatically as well.

NOTE You should always set the variable that held the data structure handle to \-1 after calling this function, as handle indices are recycled and the variable may unintentionally hold an active resource when the held index is eventually reused. See **Usage Notes** under **Handles** on [Data Types](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) for more information.

#### Syntax:

ds\_map\_destroy(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The DS map to destroy |

#### Returns:

N/A

#### Example:

ds\_map\_destroy(inventory);
inventory = -1;

The above code will destroy the DS map referenced in the variable inventory.