---
title: "tileset_get_uvs"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Tilsets/tileset_get_uvs.htm"
converted: "2025-09-14T03:59:42.482Z"
---

# tileset\_get\_uvs

This function returns an [array](../../../GML_Overview/Arrays.md) with the UV coordinates and other data for the texture of the given tile set on the texture page. The array contains the following 8 elements:

-   \[0\] = left
-   \[1\] = top
-   \[2\] = right
-   \[3\] = bottom
-   \[4\] = amount of pixels the asset compiler has trimmed from the tile set left side
-   \[5\] = amount of pixels the asset compiler has trimmed from the tile set top side
-   \[6\] = normalised percentage of pixel data from the original tile set width that has been saved to the texture page
-   \[7\] = normalised percentage of pixel data from the original tile set height that has been saved to the texture page

This array can then be used in other draw functions, particularly when working in 3D or using the [2D primitive](../../Drawing/Primitives/Primitives_And_Vertex_Formats.md) functions, as well as when working with the [Shader](../Shaders/Shaders.md) functions.

#### Syntax:

tileset\_get\_uvs(tileset);

| Argument | Type | Description |
| --- | --- | --- |
| tileset | Tile Set Asset | The index of the tile set to use. |

#### Returns

[Array](../../../GML_Overview/Arrays.md) (1D, 8 elements)

#### Example:

var tex = tileset\_get\_uvs(tl\_Grass);
tex\_left = tex\[0\];
tex\_top = tex\[1\];
tex\_right = tex\[2\];
tex\_bottom = tex\[3\];

The above code will store the UV coordinates for the given tile set in a local array and then assign the values to instance variables.