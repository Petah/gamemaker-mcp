---
title: "gpu_get_tex_max_aniso_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_get_tex_max_aniso_ext.htm"
converted: "2025-09-14T03:59:51.110Z"
---

# gpu\_get\_tex\_max\_aniso\_ext

With this function you can get the current maximum level of anisotropy when using the tf\_anisotropic filter mode (see [gpu\_get\_tex\_mip\_filter()](gpu_get_tex_mip_filter.md) for more information) on a shader sampler. You supply the handle for the shader sampler (as returned by the function [shader\_get\_sampler\_index()](../../Asset_Management/Shaders/shader_get_sampler_index.md), and the function will return a value within the range of 1 and 16.

#### Syntax:

gpu\_get\_tex\_max\_aniso\_ext(sampler\_index);

| Argument | Type | Description |
| --- | --- | --- |
| sampler_index | Shader Sampler Handle | The shader sampler to get |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (default: 16)

#### Example:

var \_sampleIndex = shader\_get\_sampler\_index(shd\_Glass, "s\_Background");
var \_spriteTex = sprite\_get\_texture(sprite\_index, 0);

shader\_set(shd\_Glass);

if (gpu\_get\_tex\_max\_aniso\_ext(\_sampleIndex) != 8)
{
    gpu\_set\_tex\_max\_aniso\_ext(\_sampleIndex, 8);
}

texture\_set\_stage(\_sampleIndex , \_spriteTex);

shader\_reset();

The above code sets the maximum level of anisotropy to 8 for the given shader texture sampler if it has not already been set to 8.