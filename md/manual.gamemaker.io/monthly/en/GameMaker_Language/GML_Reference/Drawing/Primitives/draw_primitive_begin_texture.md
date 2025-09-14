---
title: "draw_primitive_begin_texture"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/draw_primitive_begin_texture.htm"
converted: "2025-09-14T03:59:52.931Z"
---

# draw\_primitive\_begin\_texture

This function must be called before you define the vertices of a textured primitive. You must give the kind of primitive to use (see [draw\_primitive\_begin](draw_primitive_begin.md) for more information) and the **id** of a texture to use, which can be that of a sprite asset or of a surface. This **id** can be retrieved from the function [sprite\_get\_texture](../../Asset_Management/Sprites/Sprite_Information/sprite_get_texture.md), for example (use \-1 for no texture).

NOTE For a texture to repeat it must be a power of two in size, i.e.: 32x32, 128x128, etc.

#### Syntax:

draw\_primitive\_begin\_texture(kind, tex)

| Argument | Type | Description |
| --- | --- | --- |
| kind | Primitive Type Constant | The kind of primitive you are going to draw. |
| tex | Texture | The texture to use with the primitive (-1 to use no texture) |

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