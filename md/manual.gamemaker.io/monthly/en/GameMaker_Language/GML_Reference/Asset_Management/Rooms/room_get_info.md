---
title: "room_get_info"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_get_info.htm"
converted: "2025-09-14T03:59:39.130Z"
---

# room\_get\_info

This function gets information on a room from storage and returns it as a [struct](../../../../../../../GameMaker_Language/GML_Overview/Structs.md). You can choose to exclude information through the given optional arguments.

NOTE The function cannot be used to get the current state of an active room (the current [room](room.md) or an already visited [persistent](room_persistent.md) room). In this case it returns the original state of the room.

The room must have been previously created using [The Asset Browser](../../../../../../../Introduction/The_Asset_Browser.md) or added in-game using [room\_add](room_add.md).

The format of the returned struct is as follows:

room\_info\_struct =
{
    instances:
    \[
        {/\* Instance Info Struct \*/},
        {/\* Instance Info Struct \*/},
    \],
    layers:
    \[
        {
            elements:
            \[
                {/\* Layer Element Info Struct \*/},
                    {
                        /\* Example \*/
                        type: layerelementtype\_tilemap,
                        tiles: \[/\* Tile Map Data \*/\]
                    }
                \]
            },
        \],
    views:
    \[
        {/\* View Info Struct \*/},
    \]
}

The tables below list all the possible structs that can be contained in the returned struct:

[Room InfoRoom Info](room_get_info.htm#)

This is the main struct returned by the function. All variables listed below are present at the root of this returned struct:

| Variable Name | Data Type | Description |
| --- | --- | --- |
| width | Real | The width of the room |
| height | Real | The height of the room |
| creationCode | Script Function | The index of the script function that contains this room's creation code |
| physicsWorld | Boolean | Whether the room has a physics world |
| physicsGravityX | Real | The physics world's gravity component along the x axis |
| physicsGravityY | Real | The physics world's gravity component along the y axis |
| physicsPixToMeters | Real | The physics world's pixel-to-metre scale |
| persistent | Boolean | Whether the room is persistent |
| enableViews | Boolean | Whether views are enabled for the room |
| clearDisplayBuffer | Boolean | Whether to clear the display buffer before drawing the room |
| clearViewportBackground | Boolean | Whether to clear viewports' backgrounds before drawing to them |
| colour | Colour | The clear colour used when clearDisplayBuffer is set to true |
| instances | Array of Room Instance Info Struct | An array listing all instances placed in the room with basic information on them |
| layers | Array of Room Layer Info Struct | An array listing all room layers, in order of increasing depth |
| views | Array of Room View Info Struct | An array listing all views, ordered by view index |

[Instance InfoInstance Info](room_get_info.htm#)

This type of struct represents one instance in the room.

These structs are found in the instances array, which is part of the main struct returned by the function.

| Variable Name | Data Type | Description |
| --- | --- | --- |
| id | Object Instance | The instance ID |
| object_index | String | The name of the object this is an instance of (use asset_get_index to get the actual object) |
| x | Real | The x coordinate of the instance's position |
| y | Real | The y coordinate of the instance's position |
| xscale | Real | The x scale of the instance |
| yscale | Real | The y scale of the instance |
| angle | Real | The rotation angle of the instance |
| image_index | Real | The image index used by the instance |
| image_speed | Real | The image speed of the instance |
| colour | Colour | The blend colour used to draw the instance |
| creation_code | Script Function | The index of the script function that contains the instance's creation code |
| pre_creation_code | Script Function | The index of the script function that holds the pre-creation code for this specific instance, i.e. the overrides for its Object Variables as set in the Room Editor. See: Pre-creation Code |

[Layer InfoLayer Info](room_get_info.htm#)

This type of struct represents one layer in the room.

These structs are found in the layers array, which is part of the main struct returned by the function.

| Variable Name | Data Type | Description |
| --- | --- | --- |
| id | Real | The layer handle |
| name | String | The name of the layer |
| visible | Boolean | Whether the layer is visible |
| depth | Real | The depth of the layer |
| xoffset | Real | The x offset of the layer |
| yoffset | Real | The y offset of the layer |
| hspeed | Real | The horizontal speed of the layer |
| vspeed | Real | The vertical speed of the layer |
| effectEnabled | Boolean | Whether the layer filter/effect is currently enabled |
| effectToBeEnabled | Boolean | Whether the layer filter/effect should be enabled/disabled in the next frame (the next value of effectEnabled) |
| effect | FX Struct | A struct containing the effect's parameters (-1 if no layer effect is set) |
| shaderID | Shader Asset | The shader to be applied to the layer (layer_shader) |
| elements | Array of Room Layer Element Info Struct | An array listing all elements on the layer. Each element type struct contains information specific to it. |

[View InfoView Info](room_get_info.htm#)

This type of struct represents one view in the room.

These structs are found in the views array, which is part of the main struct returned by the function.

| Variable Name | Data Type | Description |
| --- | --- | --- |
| visible | Boolean | Whether the view is visible |
| cameraID | Camera ID | The camera assigned to this view |
| xview | Real | The x coordinate of the view camera's position |
| yview | Real | The y coordinate of the view camera's position |
| wview | Real | The width of the view's camera |
| hview | Real | The height of the view's camera |
| hspeed | Real | The horizontal movement speed of the view |
| vspeed | Real | The vertical movement speed of the view |
| xport | Real | The x position on screen where the view is drawn |
| yport | Real | The y position on screen where the view is drawn |
| wport | Real | The width of the viewport |
| hport | Real | The height of the viewport |
| object | Object Asset | The object of which the first instance in the room should be followed by the camera |
| hborder | Real | The horizontal border around the instance of the object to follow |
| vborder | Real | The vertical border around the instance of the object to follow |

[Layer Element InfoLayer Element Info](room_get_info.htm#)

This type of struct represents one element in a layer.

These structs are found in the elements array, which is part of a layer struct.

| Variable Name | Data Type | Description |
| --- | --- | --- |
| All Element Types |
| id | Real | The unique ID of the element |
| type | Layer Element Type Constant | The type of element |
| Background Element Type |
| sprite_index | Sprite Asset | The sprite used by the background |
| image_index | Real | The sprite's subimage |
| xscale | Real | The scale along the x axis |
| yscale | Real | The scale along the y axis |
| htiled | Boolean | Whether to tile the background image horizontally |
| vtiled | Boolean | Whether to tile the background image vertically |
| stretch | Boolean | Whether to stretch the background so it fills the entire room |
| visible | Boolean | Whether the background should be visible |
| blendColour | Colour | The blend colour to draw the background with |
| blendAlpha | Real | The alpha value between 0 and 1 to use |
| image_speed | Real | The image speed of the background |
| speed_type | Sprite Speed Constant | The units in which image_speed is expressed, either spritespeed_framespersecond or spritespeed_framespergameframe |
| name | String | The name of the background |
| Instance Element Type |
| inst_id | Object Instance | The ID of the instance |
| Sprite Element Type |
| sprite_index | Sprite Asset | The sprite index of this sprite element |
| image_index | Real | The subimage of the sprite |
| x | Real | The x coordinate of the sprite's position |
| y | Real | The y coordinate of the sprite's position |
| image_xscale | Real | The scale of the image along the x axis |
| image_yscale | Real | The scale of the image along the y axis |
| image_angle | Real | The image angle |
| image_alpha | Real | The alpha value between 0 and 1 |
| image_blend | Colour | The blend colour |
| image_speed | Real | The animation speed of the image, expressed in speed_type units |
| speed_type | Sprite Speed Constant | The units in which image_speed is expressed, either spritespeed_framespersecond or spritespeed_framespergameframe |
| name | String | The name of the sprite element as given in The Room Editor (default is graphic_*) |
| Tile Map Element Type |
| x | Real | The x position (or offset) of the tile map in the room |
| y | Real | The y position (or offset) of the tile map in the room |
| tileset_index | Tile Set Asset | The tile set that this tile map uses |
| data_mask | Real | The bitmask value for the tile map |
| tiles | Array of Real | This variable is only present when the tilemap_data parameter is set to true. It is a one-dimensional array that contains all the tile map data, listed row by row. |
| width | Real | The width in cells of the tile map |
| height | Real | The height in cells of the tile map |
| name | String | The tile map's name |
| Particle System Element Type |
| ps | Particle System Asset | The particle system |
| x | Real | The x coordinate of the particle system's position |
| y | Real | The y coordinate of the particle system's position |
| angle | Real | The angle by which the particle system is rotated |
| xscale | Real | The scale along the x axis of the particle system |
| yscale | Real | The scale along the y axis of the particle system |
| blend | Colour | The blend colour to use to draw the particle system |
| alpha | Real | The alpha value between 0 and 1 to use |
| name | String | The name of the particle system element as defined in The Room Editor (default is particle_*) |
| Tile Element Type |
| visible | Boolean | Whether the tile is visible |
| sprite_index | Sprite Asset | The sprite this tile is on |
| x | Real | The x coordinate of the tile position |
| y | Real | The y coordinate of the tile position |
| width | Real | The width of the tile |
| height | Real | The height of the tile |
| image_xscale | Real | The scale factor along the x axis of the tile |
| image_yscale | Real | The scale factor along the y axis of the tile |
| image_angle | Real | The angle of the tile |
| image_blend | Colour | The blend colour to use to draw the tile |
| image_alpha | Real | The alpha to use |
| xo | Real | The x offset |
| yo | Real | The y offset |
| Sequence Element Type |
| x | Real | The x coordinate of the sequence position |
| y | Real | The y coordinate of the sequence position |
| image_xscale | Real | The scale along the x axis of the entire sequence |
| image_yscale | Real | The scale along the y axis of the entire sequence |
| image_angle | Real | The angle by which the sequence is rotated |
| image_alpha | Real | The alpha value between 0 and 1 to use |
| image_blend | Colour | The blend colour to use to draw the sequence |
| image_speed | Real | The animation speed of the sequence, expressed in speed_type units |
| speedType | Sprite Speed Constant | The units in which image_speed is expressed, either spritespeed_framespersecond or spritespeed_framespergameframe |
| seq_id | Sequence Asset | The sequence asset |
| name | String | The name of the sequence element as defined in The Room Editor (default is graphic_*) |
| head_position | Real | The playhead position of the sequence |

#### Syntax:

room\_get\_info(room, \[views\], \[instances\], \[layers\], \[layer\_elements\], \[tilemap\_data\]);

| Argument | Type | Description |
| --- | --- | --- |
| room | Room Asset | The room to get the info from |
| views | Boolean | OPTIONAL Whether to include view information in the struct (defaults to true) |
| instances | Boolean | OPTIONAL Whether to include instance information in the struct (defaults to true) |
| layers | Boolean | OPTIONAL Whether to include layer information in the struct (defaults to true) |
| layer_elements | Boolean | OPTIONAL Whether to include layer element information in the struct (defaults to true, requires layers to be set to true) |
| tilemap_data | Boolean | OPTIONAL Whether to include tile map data in the struct (defaults to true, requires layers and layer_elements to be set to true) |

#### Returns:

[Room Info Struct](room_get_info.htm#room_info_struct)

#### Example:

var \_info = room\_get\_info(Room1);
var \_info\_json = json\_stringify(\_info, true);
show\_debug\_message(\_info\_json);

The above code gets the information of the room Room1, converts the returned struct to a JSON string using [json\_stringify](../../File_Handling/Encoding_And_Hashing/json_stringify.md), then outputs it in a debug message. All view, instance, layer, layer element and tile map information is included in the output.