---
title: "draw_vertex_texture"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/draw_vertex_texture.htm"
converted: "2025-09-14T03:59:52.986Z"
---

# draw\_vertex\_texture

This function defines the position of a textured vertex for a primitive. The final look of the primitive will depend on the primitive type chosen to draw (See [draw\_primitive\_begin](draw_primitive_begin.md) for more information), the order with which you add the vertices to it and the position of the start point you set for the texture. To end and draw the primitive you must call [draw\_primitive\_end](draw_primitive_end.md).

You can also choose to draw only _part_ of the texture over the surface of the primitive by setting the appropriate xtex/ytex position to sample to (these coordinates are also known as the **UV** points). This point is defined by a value between 0 and 1, with the top-left corner of the sprite image to use being the (0, 0) point and the bottom-right corner being the (1, 1) point. In this way you can texture a primitive with only a part of the source image asset.

When drawing a textured primitive, the texture will be blended with the colour set by [draw\_set\_colour](../Colour_And_Alpha/draw_set_colour.md). This means that to draw the texture with no blending this should be set to c\_white, as shown in the example below.

NOTE For a texture to repeat it must be a power of two in size, i.e.: 32x32, 128x128, etc.

#### Syntax:

draw\_vertex\_texture(x, y, xtex, ytex)

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the vertex. |
| y | Real | The y coordinate of the vertex. |
| xtex | Real | The fraction of the width of the texture. 0 corresponds to the left side of the sprite on the texture page. 1 corresponds to the right side of the sprite on the texture page. |
| ytex | Real | The fraction of the height of the texture. 0 corresponds to the top side of the sprite on the texture page. 1 corresponds to the bottom side of the sprite on the texture page. |

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_white);
var \_tex = sprite\_get\_texture(spr\_Background, 0);
draw\_primitive\_begin\_texture(pr\_trianglestrip, \_tex);
draw\_vertex\_texture(0, 0, 0, 0);
draw\_vertex\_texture(640, 0, 1, 0);
draw\_vertex\_texture(0, 480, 0, 1);
draw\_vertex\_texture(640, 480, 1, 1);
draw\_primitive\_end();

The above code will draw a 4 vertex triangle strip (making a rectangle) textured with the texture held in the \_tex variable, and the whole texture will be used to cover the completed primitive.