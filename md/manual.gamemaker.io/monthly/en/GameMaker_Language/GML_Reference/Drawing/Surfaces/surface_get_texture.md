---
title: "surface_get_texture"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_texture.htm"
converted: "2025-09-14T03:59:54.445Z"
---

# surface\_get\_texture

This function returns the texture for the surface's texture page. This value can then be used in other draw functions, particularly in general 3D and some of the 2D primitive functions.

This function returns the ID of the texture used by the surface, rather than a pointer to it, as is the case for [sprite\_get\_texture](../../Asset_Management/Sprites/Sprite_Information/sprite_get_texture.md). GameMaker's drawing functions accept both in the same way.

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists()](surface_exists.md) before referencing them directly.

TIP How a surface appears depends on its contents, especially the alpha values inside the surface. A surface [cleared](../Colour_And_Alpha/draw_clear_alpha.md) with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the [application\_surface](application_surface.md).

NOTE On HTML5, this returns a struct instead of a texture pointer, as a pointer cannot be used on that platform. However this does not change the use of the returned value, as its usage in [texture functions](../Textures/Textures.md) still remains the same.

#### Syntax:

surface\_get\_texture(surface\_id);

| Argument | Type | Description |
| --- | --- | --- |
| surface_id | Texture | The surface to get the texture of. |

#### Returns:

[Texture](../../Asset_Management/Sprites/Sprite_Information/sprite_get_texture.md) or -1 if the surface doesn't exist

#### Example:

var \_tex;
\_tex = surface\_get\_texture(surf);
draw\_primitive\_begin\_texture(pr\_trianglestrip, \_tex);
draw\_vertex\_texture(0, 0, 0, 0);
draw\_vertex\_texture(640, 0, 1, 0);
draw\_vertex\_texture(0, 480, 0, 1);
draw\_vertex\_texture(640, 480, 1, 1);
draw\_primitive\_end();

The above code will draw a 4 vertex triangle strip textured with the texture held in the \_tex variable, which is itself taken from a previously created surface surf.