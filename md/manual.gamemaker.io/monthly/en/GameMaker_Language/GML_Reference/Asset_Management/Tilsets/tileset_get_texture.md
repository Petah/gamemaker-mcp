---
title: "tileset_get_texture"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Tilsets/tileset_get_texture.htm"
converted: "2025-09-14T03:59:42.467Z"
---

# tileset\_get\_texture

This function returns a special _pointer_ for the tile set texture page. This value can then be used in other draw functions, particularly in the [2D primitive](../../Drawing/Primitives/Primitives_And_Vertex_Formats.md) functions, as well as the [Shader](../Shaders/Shaders.md) functions. You can get more information about the returned texture page using the different texture\_ functions found on the [Textures](../../Drawing/Textures/Textures.md) page.

NOTE On HTML5, this returns a struct instead of a texture pointer, as a pointer cannot be used on that platform. However this does not change the use of the returned value, as its usage in [texture functions](../../Drawing/Textures/Textures.md) still remains the same.

#### Syntax:

tileset\_get\_texture(tileset);

| Argument | Type | Description |
| --- | --- | --- |
| tileset | Tile Set Asset | The index of the tile set to use. |

#### Returns

[Texture](../Sprites/Sprite_Information/sprite_get_texture.md)

#### Example:

var tex;
tex = tileset\_get\_texture(spr\_Wall, 0);
draw\_primitive\_begin\_texture(pr\_trianglestrip, tex);
draw\_vertex\_texture(0, 0, 0, 0);
draw\_vertex\_texture(480, 0, 1, 0);
draw\_vertex\_texture(480, 640, 1, 1);
draw\_vertex\_texture(0, 640, 0, 1);
draw\_primitive\_end();

The above code will draw a 4 vertex triangle strip textured with the texture held in the tex variable.