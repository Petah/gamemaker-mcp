---
title: "Primitives And Vertex Formats"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/Primitives_And_Vertex_Formats.htm"
converted: "2025-09-14T03:59:52.896Z"
---

# Primitives And Vertex Formats

A primitive is a type of drawing done using points to define what is shown on the screen. They can be made up of single points, lines or triangles and can be coloured, have alpha blending and even be given a texture, which means that they can be used to create some very exciting effects in your 2D and 3D games!

The points of a primitive are called _vertices_ (singular _vertex_) and store data about their position, colour, texture and possibly other information. The GPU then draws these vertices using the primitive _type_ that you provide:

![The different primitive types](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/primitive_types.png)

For example, you can create a rectangle using two triangle primitives, then texture it with a flag sprite and in the Draw event of an instance have that flag "wave" in the wind and distort the sprite you used by simply modifying the points that form the primitive.

**WARNING** This will not work on HTML5 when WebGL is disabled or not supported by the browser. WebGL can be allowed or set to be required in the [HTML5 Game Options](../../../../Settings/Game_Options/HTML5.md) under **Graphics**.

## Creating Primitives

GameMaker offers two ways to draw and create primitives:

-   The primitive functions: the draw\_primitive\_\* and draw\_vertex\_\* functions
-   Vertex buffers

### Primitive Functions

The draw\_primitive\_\* functions allow you to define primitives and draw them directly to the screen (or to a [surface](../Surfaces/Surfaces.md)). You call [draw\_primitive\_begin](draw_primitive_begin.md) or [draw\_primitive\_begin\_texture](draw_primitive_begin_texture.md), then define the vertices with any of the draw\_vertex\_\* functions and finally call [draw\_primitive\_end](draw_primitive_end.md) to draw the primitive.

Draw Event

var \_tex = sprite\_get\_texture(spr\_image, 0);
draw\_primitive\_begin\_texture(pr\_trianglestrip, \_tex);
draw\_vertex\_texture(0, 0, 0, 0);
draw\_vertex\_texture(100, 0, 1, 0);
draw\_vertex\_texture(0, 100, 0, 1);
draw\_vertex\_texture(100, 100, 1, 1);
draw\_primitive\_end();

### Vertex Buffers

Vertex buffers are the more advanced way to define reusable primitives. They are [Buffers](../../Buffers/Buffers.md) that store data about vertices specifically ("vertex data"). With vertex buffers you split up the definition of the primitive and its drawing.

You create a new, empty vertex buffer using [vertex\_create\_buffer](vertex_create_buffer.md) / [vertex\_create\_buffer\_ext](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_create_buffer_ext.md) or create one and fill it with the data in a buffer using [vertex\_create\_buffer\_from\_buffer](vertex_create_buffer_from_buffer.md) / [vertex\_create\_buffer\_from\_buffer\_ext](vertex_create_buffer_from_buffer_ext.md):

Create Event

// Create an empty vertex buffer
vb = vertex\_create\_buffer();

// Create a vertex buffer filled with data from a buffer
var \_buff = buffer\_load("model.mod");
vb\_model = vertex\_create\_buffer\_from\_buffer(\_buff, format);
buffer\_delete(\_buff);

NOTE See [Transferring Data Between Buffers](../../Buffers/Transferring_Data_Between_Buffers.md) for more info on how to pass data between the two buffer types.

You draw a vertex buffer by submitting it at any time in Draw events using [vertex\_submit](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_submit.md), or just part of it using[vertex\_submit\_ext](vertex_submit_ext.md).

The following is a complete example that makes use of GameMaker's default [passthrough vertex format](../../../../Additional_Information/Guide_To_Primitives_And_Vertex_Building.md):

Create Event

var \_uv\_data = sprite\_get\_uvs(spr\_image, 0);
var \_umin = \_uv\_data\[0\], \_vmin = \_uv\_data\[1\], \_umax = \_uv\_data\[2\], \_vmax = \_uv\_data\[3\];

vb = vertex\_create\_buffer();

vertex\_begin(vb, format);

vertex\_position\_3d(vb,   0,   0, 0); vertex\_color(vb, c\_white, 1); vertex\_texcoord(vb, \_umin, \_vmin);
vertex\_position\_3d(vb, 100,   0, 0); vertex\_color(vb, c\_white, 1); vertex\_texcoord(vb, \_umax, \_vmin);
vertex\_position\_3d(vb,   0, 100, 0); vertex\_color(vb, c\_white, 1); vertex\_texcoord(vb, \_umin, \_vmax);
vertex\_position\_3d(vb, 100, 100, 0); vertex\_color(vb, c\_white, 1); vertex\_texcoord(vb, \_umax, \_vmax);

vertex\_end(vb);

Draw Event

var \_tex = sprite\_get\_texture(spr\_image, 0);
vertex\_submit(vb, pr\_trianglestrip, \_tex);

Cleanup Event

vertex\_delete\_buffer(vb);

NOTE See the [Guide To Primitives And Vertex Building](../../../../Additional_Information/Guide_To_Primitives_And_Vertex_Building.md) for more info on how to work with vertex buffers.

### Texture Coordinates

In the code examples above, the UVs are provided differently for vertex buffers. This is because the UVs are interpreted differently by both sets of functions:

-   The functions [draw\_vertex\_texture](draw_vertex_texture.md) and [draw\_vertex\_texture\_colour](draw_vertex_texture_colour.md) map (0, 0) to the top-left corner of the sprite's region on the texture page and (1, 1) to the bottom-right corner of the sprite's region on the texture page.
-   The function [vertex\_texcoord](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_texcoord.md) doesn't map the texture coordinates that you pass it to any sprite in a texture page. Therefore, (0, 0) is the top-left corner of the texture page and (1, 1) is the bottom-right corner of the texture page, i.e. the range \[0, 1\] covers the entire texture page.

NOTE You can use the functions [sprite\_get\_uvs](../../Asset_Management/Sprites/Sprite_Information/sprite_get_uvs.md), [font\_get\_uvs](../../Asset_Management/Fonts/font_get_uvs.md) and [tileset\_get\_uvs](../../Asset_Management/Tilsets/tileset_get_uvs.md) to get a specific asset's UV range on the texture page.

## Function Reference

### Primitives

-   [draw\_primitive\_begin](draw_primitive_begin.md)
-   [draw\_primitive\_begin\_texture](draw_primitive_begin_texture.md)
-   [draw\_primitive\_end](draw_primitive_end.md)
-   [draw\_vertex](draw_vertex.md)
-   [draw\_vertex\_colour](draw_vertex_colour.md)
-   [draw\_vertex\_texture](draw_vertex_texture.md)
-   [draw\_vertex\_texture\_colour](draw_vertex_texture_colour.md)

### Vertex Formats

GameMaker permits you to define your own vertex formats from which you can create your own custom primitives. This can greatly speed up shader operations or can be used to extend their capabilities and create surprising effects.

A **vertex format** lists the attributes that are stored for a vertex in order. You start defining one with [vertex\_format\_begin](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_begin.md), then add the attributes using the vertex\_format\_add\_\* functions and finally end it using [vertex\_format\_end](vertex_format_end.md).

-   [vertex\_format\_begin](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_begin.md)
-   [vertex\_format\_add\_colour](vertex_format_add_colour.md)
-   [vertex\_format\_add\_position](vertex_format_add_position.md)
-   [vertex\_format\_add\_position\_3d](vertex_format_add_position_3d.md)
-   [vertex\_format\_add\_texcoord](vertex_format_add_texcoord.md)
-   [vertex\_format\_add\_normal](vertex_format_add_normal.md)
-   [vertex\_format\_add\_custom](vertex_format_add_custom.md)
-   [vertex\_format\_end](vertex_format_end.md)
-   [vertex\_format\_delete](vertex_format_delete.md)
-   [vertex\_format\_get\_info](vertex_format_get_info.md)

### Vertex Buffers

Once you have created your vertex format (see the section above) you can then use it to build the primitives that you want to draw using the following vertex buffer functions:

-   [vertex\_create\_buffer](vertex_create_buffer.md)
-   [vertex\_create\_buffer\_ext](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_create_buffer_ext.md)
-   [vertex\_create\_buffer\_from\_buffer](vertex_create_buffer_from_buffer.md)
-   [vertex\_create\_buffer\_from\_buffer\_ext](vertex_create_buffer_from_buffer_ext.md)
-   [vertex\_update\_buffer\_from\_buffer](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_update_buffer_from_buffer.md)
-   [vertex\_update\_buffer\_from\_vertex](vertex_update_buffer_from_vertex.md)
-   [vertex\_get\_buffer\_size](vertex_get_buffer_size.md)
-   [vertex\_get\_number](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_get_number.md)
-   [vertex\_delete\_buffer](vertex_delete_buffer.md)
-   [vertex\_begin](vertex_begin.md)
-   [vertex\_colour](vertex_colour.md)
-   [vertex\_normal](vertex_normal.md)
-   [vertex\_position](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_position.md)
-   [vertex\_position\_3d](vertex_position_3d.md)
-   [vertex\_argb](vertex_argb.md)
-   [vertex\_texcoord](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_texcoord.md)
-   [vertex\_float1](vertex_float1.md)
-   [vertex\_float2](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_float2.md)
-   [vertex\_float3](vertex_float3.md)
-   [vertex\_float4](vertex_float4.md)
-   [vertex\_ubyte4](vertex_ubyte4.md)
-   [vertex\_end](vertex_end.md)
-   [vertex\_freeze](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_freeze.md)
-   [vertex\_submit](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_submit.md)
-   [vertex\_submit\_ext](vertex_submit_ext.md)

IMPORTANT The primitives that you build should follow the format that you have set using the Vertex Format functions, so if you have defined a vertex format with only positional data, there is no point building your primitive with colour data. You should note that the order in which you add properties to the primitive you are building is defined by the order in which you added these properties when creating the vertex format, so if you have defined the vector format with the order position, colour and texture coordinate, you _must_ add these properties to the primitive being built in the same order otherwise you will get errors.

For an overview of how to build primitives using the vertex functions, see:

-   [Guide To Primitives And Vertex Building](../../../../Additional_Information/Guide_To_Primitives_And_Vertex_Building.md)