---
title: "tilemap_set_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/tilemap_set_mask.htm"
converted: "2025-09-14T03:59:38.806Z"
---

# tilemap\_set\_mask

This function sets the [Tile Map Bit Mask](Tile_Map_Layers.htm#tile_map_bit_mask) for a single tile map.

You give the tile map element ID (which you get when you create a tile map element using [layer\_tilemap\_create](layer_tilemap_create.md) or when you use the function [layer\_tilemap\_get\_id](layer_tilemap_get_id.md)), and then the mask value. If you have, for example, a pretty small tile set of 16 x 16 tiles then you have a total of 256 different tiles in your tile set. You only need 8 bits of the [Tile Data "Blob"](Tile_Map_Layers.htm#tile_data_blob) to index these tiles (from an available 19 bits of data). These bits can be "masked" and then the rest of the tile data can be used to store additional values. See [Calculating the Mask Bits](Tile_Map_Layers.htm#calculating_the_mask_bits).

Tile map bit masking is an advanced feature and allows you to use bits of the tile data "blob" for your own use. For example, you could reserve a bit to mean "solid" in the tile data that can then be checked for fast collisions. Basically, the bit mask is "and"-ed against the tile data when the tile map is _drawn_ (so it doesn't affect any of the other functionality), meaning that bits which aren't in the mask are ignored, but can still be read and written to by the user for their own purposes.

#### Syntax:

tilemap\_set\_mask(tilemap\_element\_id, mask);

| Argument | Type | Description |
| --- | --- | --- |
| tilemap_element_id | Tile Map Element ID | The unique ID value of the tile map element to set the mask of |
| mask | Real | The mask value |

#### Returns:

N/A

#### Example 1: Using 8 bits for the tile index

var \_lay\_id = layer\_get\_id("Tiles\_sky");
var \_map\_id = layer\_tilemap\_get\_id(\_lay\_id);
var \_mask = tile\_mirror | tile\_flip | tile\_rotate | 255;
tilemap\_set\_mask(\_map\_id, \_mask);

The above code gets the tile map ID from the given layer and then sets the tile map bit mask to 8bits (a value of 255 or 0b11111111), preserving the flip, mirror, and rotate values for each tile in the map.

#### Example 2: Resetting to the default mask

var \_lay\_id = layer\_get\_id("Tiles\_sky");
var \_map\_id = layer\_tilemap\_get\_id(\_lay\_id);
var \_mask = tile\_mirror | tile\_flip | tile\_rotate | tile\_index\_mask;
tilemap\_set\_mask(\_map\_id, \_mask);

The above code sets the tile bit mask to the value needed for GameMaker to draw tiles correctly by combining all tile mask constants using bitwise OR. The full 19 bits are used for the tile index and the mirror, flip and rotate bits are preserved.

#### Example 3: Writing and reading back custom data

Create Event

randomise();

var \_lay\_id = layer\_get\_id("Tiles\_1");
var \_map\_id = layer\_tilemap\_get\_id(\_lay\_id);
var \_mask = tile\_mirror | tile\_flip | tile\_rotate | 255;
tilemap\_set\_mask(\_map\_id, \_mask);
for(var \_x = 0;\_x < tilemap\_get\_width(\_map\_id);\_x++)
{
    for(var \_y = 0;\_y < tilemap\_get\_height(\_map\_id);\_y++)
    {
        var \_tdata = tilemap\_get(\_map\_id, \_x, \_y);
        var \_random\_value = irandom(255);
        var \_random\_value\_shifted = \_random\_value << 8;
        \_tdata |= \_random\_value\_shifted;
        tilemap\_set(\_map\_id, \_tdata, \_x, \_y);
    }
}

Step Event

var \_tdata = tilemap\_get\_at\_pixel(map\_id, mouse\_x, mouse\_y);
random\_value\_under\_cursor = (\_tdata >> 8) & 255;

Draw GUI Event

draw\_text(5, 5, $"Value: {random\_value\_under\_cursor}");

The above code shows how to store some custom data in the cells of a tile map and read them back.

In the Create event the bit mask is set to be the 8 lowest bits plus the mirror, flip and rotate bits. A random integer value from 0 to 255 is then written to bit 8 to 15 of each tile. This is done as follows: the bits of \_random\_value are first shifted _left_ by 8 bits, for example a value of 0b0000000011001111 (207) becomes 0b1100111100000000 (52992). This result is stored in \_random\_value\_shifted. This value is then bitwise "or"-ed | with the tile data, which will result in a 1 bit whenever a bit is set in either the tile data or in the random value. The tile data is then written back to the same tile map call using [tilemap\_set](tilemap_set.md).

In the Step event the tile data under the mouse is looked up using [tilemap\_get\_at\_pixel](tilemap_get_at_pixel.md). To get the random value back out, the bits are first shifted _right_ by 8 bits, which moves the 8 bits of the random value back to bit positions 0 to 7 (the index bits are also shifted right and so are lost at this point). This new value is then bitwise "and"-ed & with 255 to only keep the lower 8 bits that hold the random value (any of the mirror, flip or rotate bits may be set which, without "and"-ing would give a much higher value). The result is assigned to random\_value\_under\_cursor.

The random value stored in the tile under the mouse position is displayed in the Draw GUI event.