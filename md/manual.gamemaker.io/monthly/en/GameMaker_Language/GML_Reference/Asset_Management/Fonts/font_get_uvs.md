---
title: "font_get_uvs"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_uvs.htm"
converted: "2025-09-14T03:59:33.195Z"
---

# font\_get\_uvs

This function returns an [array](../../../GML_Overview/Arrays.md) with the UV coordinates for the font texture on the texture page, filling in the array with the following values:

-   \[0\] = left
-   \[1\] = top
-   \[2\] = right
-   \[3\] = bottom

This value can then be used in other draw functions, particularly in general drawing when using [primitives](../../Drawing/Primitives/Primitives_And_Vertex_Formats.md) as well as the [Shader](../Shaders/Shaders.md) functions.

#### Syntax:

font\_get\_uvs(font);

| Argument | Type | Description |
| --- | --- | --- |
| font | Font Asset | The index of the font to use. |

#### Returns:

[Array](../../../GML_Overview/Arrays.md)

#### Example:

var tex = font\_get\_uvs(fnt\_Main);
tex\_left = tex\[0\];
tex\_top = tex\[1\];
tex\_right = tex\[2\];
tex\_left = tex\[3\];

The above code will store the UV coordinates for the given background in a local array and then assign the values to instance variables.