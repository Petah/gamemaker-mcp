---
title: "texture_get_uvs"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texture_get_uvs.htm"
converted: "2025-09-14T03:59:55.044Z"
---

# texture\_get\_uvs

This function returns a 1D [array](../../../GML_Overview/Arrays.md) with 4 elements representing the UV coordinates for the given texture pointer on the texture page, filling in the array with the following values:

-   \[0\] = left
-   \[1\] = top
-   \[2\] = right
-   \[3\] = bottom
-   \[4\] = amount of pixels the asset compiler has trimmed from the sprite's left side (sprite assets only)
-   \[5\] = amount of pixels the asset compiler has trimmed from the sprite's top side (sprite assets only)
-   \[6\] = normalised percentage of pixel data from the original sprite's width that has been saved to the texture page (sprite assets only)
-   \[7\] = normalised percentage of pixel data from the original sprite's height that has been saved to the texture page (sprite assets only)

This value can then be used in other draw functions, particularly in general 3D and some of the 2D primitive functions, as well as the Shader functions. If you need the UVs for a sprite then you can use [sprite\_get\_uvs](../../Asset_Management/Sprites/Sprite_Information/sprite_get_uvs.md), for a font [font\_get\_uvs](../../Asset_Management/Fonts/font_get_uvs.md) and for a tileset [tileset\_get\_uvs](../../Asset_Management/Tilsets/tileset_get_uvs.md).

#### Syntax:

texture\_get\_uvs(texid)

| Argument | Type | Description |
| --- | --- | --- |
| texid | Texture | The texture pointer to get the UVs for |

#### Returns:

[Array](../../../GML_Overview/Arrays.md) (4 - 8 elements)

#### Example:

var \_tex = surface\_get\_texture(surf\_back);
var \_uvs = texture\_get\_uvs(tex);
var \_uvs\_left = \_uvs\[0\];
var \_uvs\_top = \_uvs\[1\];
var \_uvs\_right = \_uvs\[2\];
var \_uvs\_bottom = \_uvs\[3\];

The above code first retrieves the texture for the surface stored in surf\_back, and then gets the UV coordinates for that texture. It then retrieves the left, top, right and bottom UV coordinates from the returned array and stores them in local variables.