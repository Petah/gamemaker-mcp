---
title: "tilemap_get_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_get_mask.htm"
converted: "2025-09-14T03:59:38.617Z"
---

# tilemap\_get\_mask

This function returns the bit mask value for the given tile map.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id](layer_tilemap_get_id.md)), and the function will return the current mask value or -1 if there is an error.

For further information on tile map bit masks, see the function [tilemap\_set\_mask](tilemap_set_mask.md).

#### Syntax:

tilemap\_get\_mask(tilemap\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to get the mask of |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (the mask value for the tile map or -1 in case of an error)

#### Example:

var \_lay\_id = layer\_get\_id("Tiles\_sky");
var \_map\_id = layer\_tilemap\_get\_id(\_lay\_id);
var \_mask = tilemap\_get\_mask(\_map\_id);
var \_new\_mask = tile\_mirror | tile\_flip | tile\_rotate | 255;
if (\_mask != \_new\_mask)
{
    tilemap\_set\_mask(\_map\_id, \_new\_mask);
}

The above code gets the tile map ID from the given layer and then checks the mask value associated with it. If it is not the same as the value defined in the variable \_new\_mask, then it is set to that value.