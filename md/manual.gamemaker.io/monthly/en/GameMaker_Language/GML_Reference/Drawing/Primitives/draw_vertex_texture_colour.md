---
title: "draw_vertex_texture_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/draw_vertex_texture_colour.htm"
converted: "2025-09-14T03:59:53.014Z"
---

# draw\_vertex\_texture\_colour

This function defines the position of a textured vertex for a primitive. The final look of the primitive will depend on the primitive type chosen to draw (See [draw\_primitive\_begin](draw_primitive_begin.md) for more information), the order with which you add the vertices to it, the position of the start and end points that you give for the texture sample and the colour and alpha values that you have set. To maintain the texture appearance while changing only the alpha, a value of \-1 (or c\_white) may be used for the colour argument. To end and draw the primitive you must call [draw\_primitive\_end](draw_primitive_end.md).

NOTE For a texture to repeat it must be a power of two in size, i.e.: 32x32, 128x128, etc.

#### Syntax:

draw\_vertex\_texture\_colour(x, y, xtex, ytex, col, alpha)

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the vertex. |
| y | Real | The y coordinate of the vertex. |
| xtex | Real | The x coordinate within the texture (0 refers to the left edge of the sprite image, 1 refers to the right edge). |
| ytex | Real | The y coordinate within the texture (0 refers the top edge of the sprite image, 1 refers the bottom edge). |
| col | Colour | The colour to blend with the texture at this vertex (-1 or c_white for no blending). |
| alpha | Real | The alpha to draw this vertex with (a value from 0 - 1). |

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_white);
var \_tex = sprite\_get\_texture(spr\_Background, 0);
draw\_primitive\_begin\_texture(pr\_trianglestrip, \_tex);
draw\_vertex\_texture\_colour(0, 0, 0, 0, c\_fuchsia, 1);
draw\_vertex\_texture\_colour(640, 0, 1, 0, c\_yellow, 1);
draw\_vertex\_texture\_colour(0, 480, 0, 1, c\_aqua, 1);
draw\_vertex\_texture\_colour(640, 480, 1, 1, c\_lime, 1);
draw\_primitive\_end();

The above code will draw a 4 vertex triangle strip (making a rectangle) textured with the texture held in the \_tex variable, and the whole texture will be used to cover the completed primitive, and it will be blended with four different colours.