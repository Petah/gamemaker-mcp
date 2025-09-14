---
title: "gpu_set_texrepeat"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_texrepeat.htm"
converted: "2025-09-14T03:59:50.868Z"
---

# gpu\_set\_texrepeat

This function can be used to indicate to GameMaker whether textures should repeat (true) or not (false) when used for models and primitives.

Normally texture widths and heights lie in the range 0 - 1, but if you specify a value larger than 1 by default the rest is not drawn (the entire texture will be drawn with an "empty" section corresponding to the percentage over 1 that is used. So a value of 2 for a texture width or height would draw the texture in half the space and leave the other half empty). However, by using this function to set repeat to true the texture is repeated automatically over all models and primitives. The likely use case for these functions is for repeating a texture in 3D but in order for it to work and not pull images from the rest of the texture page, the sprite used will need to be marked as being on a "Separate Texture Page" in [The Sprite Editor](../../../../The_Asset_Editors/Sprites.md).

**NOTE** Sprites and backgrounds are always drawn without repeating, so once you draw a sprite or background this value is reset to false. This default behaviour will not affect texture stage settings (i.e.: calling the function will, but the internal setting to false will not).

**NOTE** This setting will override any texture stage repeats set for shaders when using the function [gpu\_set\_texrepeat\_ext](gpu_set_texrepeat_ext.md).

#### Syntax:

gpu\_set\_texrepeat(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Enable or disable texture filtering (true / false) |

#### Returns:

N/A

#### Example:

if (gpu\_get\_texrepeat())
{
    gpu\_set\_texrepeat(false);
}
else
{
    gpu\_set\_texrepeat(true);
}

The above code checks to see if texture repeating is on or off and switches it accordingly.