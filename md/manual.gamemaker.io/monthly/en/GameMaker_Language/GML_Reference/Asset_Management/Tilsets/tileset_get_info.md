---
title: "tileset_get_info"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Tilsets/tileset_get_info.htm"
converted: "2025-09-14T03:59:42.436Z"
---

# tileset\_get\_info

This function returns a [struct](../../../GML_Overview/Structs.htm#struct) containing information on a tile set.

The returned struct contains the following variables:

| Variable Name | Data Type | Description |
| --- | --- | --- |
| width | Real | The width of the whole tile set texture (in pixels) |
| height | Real | The height of the whole tile set texture (in pixels) |
| texture | Real | The texture ID |
| tile_width | Real | The width of a single tile (in pixels) |
| tile_height | Real | The height of a single tile (in pixels) |
| tile_horizontal_separator | Real | The number of pixels horizontally on each side of each tile (making the space between two tiles 2 * tile_horizontal_separator) |
| tile_vertical_separator | Real | The number of pixels vertically on each side of each tile (making the space between two tiles 2 * tile_vertical_separator) |
| tile_columns | Real | The number of columns on each row of the tile set |
| tile_count | Real | The number of tiles |
| frame_count | Real | The number of frames of animation per animation |
| frame_length_ms | int64 (signed 64-bit integer) | The number of milliseconds for frame animation |
| frames | Struct | A struct containing all the animation frames. Each tile number has a key in the struct, each entry is an array of the frames to use (each array should be frame_count long). |

#### Syntax:

tileset\_get\_info(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Tile Set Asset | The tile set to get the info from |

#### Returns:

[Tile Set Info Struct](tileset_get_info.md) (in case of a valid [Tile Set Asset](../../../../The_Asset_Editors/Tile_Sets.md)) or [undefined](../../../GML_Overview/Data_Types.md) (no valid tile set given)

#### Example 1: Showing the output

var \_info = tileset\_get\_info(ts\_Forest);
show\_debug\_message(\_info);

The above code calls tileset\_get\_info to get information about an existing tile set ts\_Forest and stores the result in a temporary variable \_info. The info is then shown in a debug message.

#### Example 2: Finding the top-left corner position of a tile

// tnumber is the number of the tile that you want to find
var \_tnumber = 7;
var \_ts\_info = tileset\_get\_info(ts\_Forest);
if (is\_undefined(\_ts\_info) == false)
{
    var \_twidth = \_ts\_info.tile\_width + 2 \* \_ts\_info.tile\_horizontal\_separator;
    var \_theight = \_ts\_info.tile\_height + 2 \* \_ts\_info.tile\_vertical\_separator;
    var \_tile\_x = (\_tnumber mod \_ts\_info.tile\_columns) \* \_twidth;
    var \_tile\_y = (\_tnumber div \_ts\_info.tile\_columns) \* \_theight;
    show\_debug\_message("The top-left coordinates of tile index {0} are: ({1}, {2})", \_tnumber, \_tile\_x, \_tile\_y);
}
else
{
    show\_debug\_message("No valid tile set was provided to the function");
}

The above code finds the coordinates of the top-left corner of the given tile index. First the index of the tile is defined and stored in a temporary variable \_tnumber. Then tileset\_get\_info is called on an existing tile set ts\_Forest and the returned struct is stored in \_ts\_info. Next an if statement checks if the variable contains a valid struct (accessing the variables in the next steps will throw errors otherwise).
If it does, some variables are calculated. \_twidth and \_theight are the total width and height of a tile on the tile set, including the border on both sides (\_ts\_info.tile\_horizontal\_separator and \_ts\_info.tile\_vertical\_separator) \_tile\_x is the remainder of the tile index divided by the number of columns and \_tile\_y is the number of times \_ts\_info.tile\_columns fits into the tile index. After this, a debug message is shown with the top-left coordinates (the separator offsets not yet included).
If the case an invalid tile set was provided to the function a different debug message is shown.