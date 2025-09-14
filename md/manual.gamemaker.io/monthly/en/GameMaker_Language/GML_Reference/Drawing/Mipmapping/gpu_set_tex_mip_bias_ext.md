---
title: "gpu_set_tex_mip_bias_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_set_tex_mip_bias_ext.htm"
converted: "2025-09-14T03:59:51.385Z"
---

# gpu\_set\_tex\_mip\_bias\_ext

With this function you can set the mipmap bias value for a given shader sampler. You supply the handle for the shader sampler (as returned by the function [shader\_get\_sampler\_index()](../../Asset_Management/Shaders/shader_get_sampler_index.md), and then the bias value, where 0 is for no bias, 1 equals the first mipmap, 2 equals the second mipmap etc... This controls the rate at which the mip map is swapped and will generally make the shader textures blurrier the higher the value and the greater the "distance" being viewed. Note that this function can also take negative values too, in which case shader textures will be sharper over a greater distance the lower the value.

#### Syntax:

gpu\_set\_tex\_mip\_bias\_ext(sampler\_index, bias);

| Argument | Type | Description |
| --- | --- | --- |
| sampler_index | Shader Sampler Handle | The shader sampler to get |
| bias | Real | The mipmap bias value to use (default: 0) |

#### Returns:

N/A

#### Example:

var \_sampleIndex = shader\_get\_sampler\_index(shd\_Glass, "s\_Background");
var \_spriteTex = sprite\_get\_texture(sprite\_index, 0);
shader\_set(shd\_Glass);
if (gpu\_get\_tex\_mip\_bias\_ext(\_sampleIndex) != 0)
{
    gpu\_set\_tex\_mip\_bias\_ext(\_sampleIndex, 0);
}
texture\_set\_stage(\_sampleIndex , \_spriteTex);
shader\_reset();

The above code sets the mip filter bias to 0 for the given shader texture sampler if it has not already been set to 0.