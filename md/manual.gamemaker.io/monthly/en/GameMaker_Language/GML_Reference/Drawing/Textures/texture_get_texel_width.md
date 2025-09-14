---
title: "texture_get_texel_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texture_get_texel_width.htm"
converted: "2025-09-14T03:59:55.023Z"
---

# texture\_get\_texel\_width

This function returns the width of a single texel from the texture page of the image asset used.

A texel, or _texture element_ is the fundamental unit of texture space used in computer graphics. Textures are represented by arrays of texels, just as pictures are represented by arrays of pixels.

#### Syntax:

texture\_get\_texel\_width(tex);

| Argument | Type | Description |
| --- | --- | --- |
| tex | Texture | The texture page asset pointer to use |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var tex = sprite\_get\_texture(sprite\_index, 0);
tex\_w = texture\_get\_texel\_width(tex);
tex\_h = texture\_get\_texel\_height(tex);

The above code will get the texel width and height of the texture taken from a sprite asset.