---
title: "gpu_set_texfilter"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_texfilter.htm"
converted: "2025-09-14T03:59:50.837Z"
---

# gpu\_set\_texfilter

This function can be used to set the texture filtering (linear interpolation) of all images drawn on the game screen. When this is enabled (true) all textures will be smoothed when drawn (this includes sprites as they too are considered textures), meaning that when scaled or moved if there is not a 1:1 pixel ratio then there will be a "smudging" across various pixels which may make images appear blurry depending on the art style used. If this is disabled (false) then images will be drawn based on the nearest pixel when scaled or moving which may lead to "blocky" images. The default value is false, and this can also be changed in the **Global Game Options** for individual target platforms.

**NOTE**:This setting will override any texture stage interpolation set for shaders using the function [gpu\_set\_texfilter\_ext()](gpu_set_texfilter_ext.md).

**NOTE**: On the HTML5 target, this function will only work with WebGL enabled.

#### Syntax:

gpu\_set\_texfilter(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Enable or disable texture filtering (true / false) |

#### Returns:

N/A

#### Example:

if (gpu\_get\_texfilter())
{
    gpu\_set\_texfilter(false);
}
else
{
    gpu\_set\_texfilter(true);
}

The above code checks to see if texture filtering is on or off and switches it accordingly.