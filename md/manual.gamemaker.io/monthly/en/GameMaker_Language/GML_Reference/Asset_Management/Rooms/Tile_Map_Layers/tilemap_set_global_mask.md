---
title: "tilemap_set_global_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_set_global_mask.htm"
converted: "2025-09-14T03:59:38.771Z"
---

# tilemap\_set\_global\_mask

This function sets the [Tile Map Bit Mask](Tile_Map_Layers.htm#tile_map_bit_mask) for all tile maps in the game.

The idea is that if you have, for example, pretty small tile sets of 16 x 16 tiles then you'll have a total of 256 different tiles in each tile set, which only uses up 8 bits of your index in the  (from an available 19 bits of data). These bits can be "masked" and then the rest of the tile data can be used to store additional values. See [Calculating the Mask Bits](Tile_Map_Layers.htm#calculating_the_mask_bits).

Tile map bit masking is an advanced feature and allows you to use bits of the tile data "blob" for your own use. For example, the user could reserve a bit to mean "solid" in the tile-data structure and then this can be checked for fast collisions. Basically, the bit mask is "and"-ed against the tile data when the tile map is _drawn_ (so it doesn't affect any of the other functionality), meaning that bits which aren't in the mask are ignored, but can still be read and written to by the user for their own purposes.

IMPORTANT You should make sure to always have at least the same bits set in the global mask to make the per tile map masks ([tilemap\_set\_mask](tilemap_set_mask.md)) work the way you'd expect. For example, a global mask of 0b0000111111111101 will force bit 1 to 0 in any tile map mask because of the "and"-ing of the two masks, no matter if the bit is set there or not.

#### Syntax:

tilemap\_set\_global\_mask(mask);

| Argument | Type | Description |
| --- | --- | --- |
| mask | Real | The mask value to use |

#### Returns:

N/A

#### Example 1: Basic Use

var \_mask = tile\_mirror | tile\_flip | tile\_rotate | 255;
tilemap\_set\_global\_mask(\_mask);

The above code sets the global tile map bit mask to 8bits (binary 0b11111111, i.e. the value 255), while also preserving the flip, mirror, and rotate values.

#### Example 2: Combining Global and Tile Map Mask

var \_transform\_bits = tile\_mirror | tile\_flip | tile\_rotate;
var \_mask\_global = \_transform\_bits | 0b11111111;
var \_mask\_small\_ts = \_transform\_bits | 0b1111;
tilemap\_set\_global\_mask(\_mask\_global);

var \_lay\_id = layer\_get\_id("Tiles\_sky");
var \_map\_id = layer\_tilemap\_get\_id(\_lay\_id);
tilemap\_set\_mask(\_map\_id, \_mask\_small\_ts);

The above code sets the global tile map bit mask using tilemap\_set\_global\_mask. 8 bits can be used for the tile index and the mirror, flip and rotate bits are preserved. For the tile map at a layer named "Tiles\_sky" a custom mask is set that allows only 4 bits for the tile index. The transform bits are, however, also preserved.