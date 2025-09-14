---
title: "Tile Map Elements"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/Tile_Map_Layers.htm"
converted: "2025-09-14T03:59:38.261Z"
---

# Tile Map Elements

A tile map is a collection of tile set tiles that are all considered to be at the same depth within the room.

It can be visualised as a grid where each cell stores some tile data: the index of the tile that should be drawn at that cell, along with how it should be drawn (rotated, flipped and/or mirrored).

Each tile map has its own unique element ID and properties.

When working with tiles, you use a few things that are related to one another as follows:

-   The **tile set** is the asset that you use to create tile layers and tile maps.
-   The **tile layer** is what you create in [The Room Editor](../../../../../The_Asset_Editors/Rooms.md) to add tile sets to. Note that layers are only of a certain type in the Room Editor, not in code.
-   The **tile map** is what you call the collection of tiles that are added to a layer, either in the Room Editor or through code, as a single element on that layer.

NOTE In the Room Editor you are limited to a single tile map per layer, which is created when you add a [Tile Layer](../../../../../The_Asset_Editors/Room_Properties/Layer_Properties.md), but when working with them in code, you can have multiple tile maps assigned to a layer.

### Tile Data "Blob"

A "blob" of tile data is stored as a 32 bit value. It is made up of 19 bits that store the tile index in the tile set (bits 0 to 18) plus a few extra bits to indicate how the tile data should be drawn: bit 28 stores the mirror bit, bit 29 stores the flip bit, bit 30 stores the rotate bit and bit 31 is unused. Bits 19 to 27 are also unused. You can also use these unused bits to store your own data.

For more convenient access to certain bits you can use the values of the tile mask constant:

| Constant | Description |
| --- | --- |
| tile_rotate | Used to set/get the rotate bit of a tile data blob. |
| tile_mirror | Used to set/get the mirror bit of a tile data blob. |
| tile_flip | Used to set/get the flip bit of a tile data blob. |
| tile_index_mask | A special constant that is for "and"-ing with the tile data blob to extract the 19 bits of the tile index. |

You can get tile data at a specific map cell using [tilemap\_get](tilemap_get.md) or [tilemap\_get\_at\_pixel](tilemap_get_at_pixel.md) and set it using [tilemap\_set](tilemap_set.md) or [tilemap\_set\_at\_pixel](tilemap_set_at_pixel.md).

### Tile Map Bit Mask

You have the possibility of adding your own bit mask to a tile map in order to use bits of the tile data "blob" for your own use, although this is for advanced users only as you will be masking off bits that are reserved for the tile index. There are 19 bits reserved for your tile indices, but if you only use 8 of them, then you have eleven bits left over that can be used to create a custom mask. This mask can then be used and checked in code to create custom tile collisions or whatever.

The bit mask is "and"-ed & against the tile data when the tile map is _drawn_ (so it doesn't affect any of the other functionality), meaning that bits which aren't in the mask are ignored, but can still be read and written to by the user for their own purposes.

However, you would normally not need to create your own tile data blobs, and would instead use the function [tilemap\_get](tilemap_get.md) to get the tile data, then you would manipulate it using the functions for [Editing Individual Tiles](Tile_Map_Layers.htm#func_ref_editing_individual_tiles), and then you would set it again using [tilemap\_set](tilemap_set.md).

NOTE Aside from a mask per tile map, there is also a [global](tilemap_set_global_mask.md) one. The two are bitwise "and"-ed & together internally by GameMaker before being used for drawing.

### Calculating the Mask Bits

To get an initial index mask value you take the number of tiles in the tile set and subtract 1, so a 16x16 tile set has 256 tiles and a mask value of 255 (or $ff in hexadecimal). If the tile set has a number of tiles that's not a power of two, then round up to the nearest power of two to get the mask, for example a tile set that is 20x20 has 400 tiles, which you would round up to 512, and so get a mask index value of 511 ($1ff in hexadecimal). Apart from the index mask, normally you would want to preserve the flip, rotate and mirror values that are assigned to a tile too, to help with that there are the constants under [Tile Mask Constant](Tile_Map_Layers.htm#table "Tile Mask Constant Table") that can be used. These can be bitwise "or"-ed | together with the index mask value to preserve those bits of data.

NOTE See [Bitwise Operators](../../../../../Additional_Information/Bitwise_Operators.md) for more information on how to work with binary and bit masks.

## Function Reference

### Editing Tile Map Elements

-   [layer\_tilemap\_get\_id](layer_tilemap_get_id.md)
-   [layer\_tilemap\_exists](layer_tilemap_exists.md)
-   [layer\_tilemap\_create](layer_tilemap_create.md)
-   [layer\_tilemap\_destroy](layer_tilemap_destroy.md)
-   [tilemap\_tileset](tilemap_tileset.md)
-   [tilemap\_clear](tilemap_clear.md)
-   [tilemap\_x](tilemap_x.md)
-   [tilemap\_y](tilemap_y.md)
-   [tilemap\_set](tilemap_set.md)
-   [tilemap\_set\_at\_pixel](tilemap_set_at_pixel.md)
-   [tilemap\_set\_mask](tilemap_set_mask.md)
-   [tilemap\_set\_global\_mask](tilemap_set_global_mask.md)
-   [tilemap\_set\_width](tilemap_set_width.md)
-   [tilemap\_set\_height](tilemap_set_height.md)
-   [tilemap\_get\_mask](tilemap_get_mask.md)
-   [tilemap\_get\_global\_mask](tilemap_get_global_mask.md)
-   [tilemap\_get\_tileset](tilemap_get_tileset.md)
-   [tilemap\_get\_frame](tilemap_get_frame.md)
-   [tilemap\_get\_tile\_width](tilemap_get_tile_width.md)
-   [tilemap\_get\_tile\_height](tilemap_get_tile_height.md)
-   [tilemap\_get\_width](tilemap_get_width.md)
-   [tilemap\_get\_height](tilemap_get_height.md)
-   [tilemap\_get\_x](tilemap_get_x.md)
-   [tilemap\_get\_y](tilemap_get_y.md)
-   [tilemap\_get](tilemap_get.md)
-   [tilemap\_get\_at\_pixel](tilemap_get_at_pixel.md)
-   [tilemap\_get\_cell\_x\_at\_pixel](tilemap_get_cell_x_at_pixel.md)
-   [tilemap\_get\_cell\_y\_at\_pixel](tilemap_get_cell_y_at_pixel.md)
-   [draw\_tilemap](../../../Drawing/Sprites_And_Tiles/draw_tilemap.md)

### Editing Individual Tiles

-   [tile\_get\_empty](tile_get_empty.md)
-   [tile\_get\_index](tile_get_index.md)
-   [tile\_get\_flip](tile_get_flip.md)
-   [tile\_get\_mirror](tile_get_mirror.md)
-   [tile\_get\_rotate](tile_get_rotate.md)
-   [tile\_set\_empty](tile_set_empty.md)
-   [tile\_set\_index](tile_set_index.md)
-   [tile\_set\_flip](tile_set_flip.md)
-   [tile\_set\_mirror](tile_set_mirror.md)
-   [tile\_set\_rotate](tile_set_rotate.md)
-   [draw\_tile](../../../Drawing/Sprites_And_Tiles/draw_tile.md)