---
title: "tilemap_get_global_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_get_global_mask.htm"
converted: "2025-09-14T03:59:38.591Z"
---

# tilemap\_get\_global\_mask

This function returns the global bit mask value, the one used for _all_ tile maps.

The function returns the current mask value or -1 if there is an error.

For further information on global tile map bit masks, see the function [tilemap\_set\_global\_mask](tilemap_set_global_mask.md).

#### Syntax:

tilemap\_get\_global\_mask()

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (the global mask value or -1 in case of an error)

#### Example:

var \_mask = tilemap\_get\_global\_mask(map\_id);
var \_new\_mask = tile\_mirror | tile\_flip | tile\_rotate | 255;
if (\_mask != \_new\_mask)
{
    tilemap\_set\_global\_mask(\_new\_mask);
}

The above code gets the global mask value associated with all tile maps. If it is not the same as the value defined in the variable \_new\_mask, then it is set to that value.