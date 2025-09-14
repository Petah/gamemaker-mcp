---
title: "font_get_texture"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_texture.htm"
converted: "2025-09-14T03:59:33.176Z"
---

# font\_get\_texture

This function returns a special _pointer_ for the font texture page.

This value can then be used in other draw functions, particularly in general drawing when using [primitives](../../Drawing/Primitives/Primitives_And_Vertex_Formats.md) as well as the [Shader](../Shaders/Shaders.md) functions. You can get more information about the returned texture page using the different texture\_\* functions on the [Textures](../../Drawing/Textures/Textures.md) page.

NOTE On HTML5, this returns a struct instead of a texture pointer, as a pointer cannot be used on that platform. However this does not change the use of the returned value, as its usage in [texture functions](../../Drawing/Textures/Textures.md) still remains the same.

#### Syntax:

font\_get\_texture(font);

| Argument | Type | Description |
| --- | --- | --- |
| font | Font Asset | The font to use. |

#### Returns:

[Texture](../Sprites/Sprite_Information/sprite_get_texture.md)

#### Example:

tex = font\_get\_texture(fnt\_Main);

The above code will get the texture pointer for the font indexed as fnt\_Main.