---
title: "sprite_get_uvs"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_uvs.htm"
converted: "2025-09-14T03:59:41.560Z"
---

# sprite\_get\_uvs

This function returns an [array](../../../../GML_Overview/Arrays.md) with the UV coordinates and other data for the texture of the sprite sub-image on the texture page. The function returns an array with the following 8 elements:

-   \[0\] = left
-   \[1\] = top
-   \[2\] = right
-   \[3\] = bottom
-   \[4\] = amount of pixels the asset compiler has trimmed from the sprite's left side
-   \[5\] = amount of pixels the asset compiler has trimmed from the sprite's top side
-   \[6\] = normalised percentage of pixel data from the original sprite's width that has been saved to the texture page
-   \[7\] = normalised percentage of pixel data from the original sprite's height that has been saved to the texture page

This array can then be used in other draw functions, particularly when working in 3D or using the [Primitive](../../../Drawing/Primitives/Primitives_And_Vertex_Formats.md) functions, as well as when working with the [Shader](../../Shaders/Shaders.md) functions.

NOTE This function will **not** work with vector sprites or skeleton animation sprites.

#### Syntax:

sprite\_get\_uvs(sprite, subimage);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The index of the sprite to use. |
| subimage | Real | The sub-image of the sprite to use. |

#### Returns

[Array](../../../../GML_Overview/Arrays.md) (1D, 8 elements)

#### Example:

var \_tex = sprite\_get\_uvs(sprite, 0);
tex\_left = \_tex\[0\];
tex\_top = \_tex\[1\];
tex\_right = \_tex\[2\];
tex\_bottom = \_tex\[3\];

The above code will store the UV coordinates for the given sprite in a local array and then assign the values to instance variables.