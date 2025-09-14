---
title: "texture_get_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texture_get_height.htm"
converted: "2025-09-14T03:59:54.997Z"
---

# texture\_get\_height

This function returns the height of the texture with the given ID, which is always a value within the range 0 - 1. This can then be used when mapping textures to models or primitives.

#### Syntax:

texture\_get\_height(tex);

| Argument | Type | Description |
| --- | --- | --- |
| tex | Texture | The texture page asset pointer to use |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

tex\_h = texture\_get\_height(surface\_get\_texture(global.Surf));

The above code will get the height of the texture taken from a previously created surface.