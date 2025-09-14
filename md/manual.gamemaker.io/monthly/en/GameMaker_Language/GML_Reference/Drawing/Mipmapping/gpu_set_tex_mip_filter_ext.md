---
title: "gpu_set_tex_mip_filter_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_set_tex_mip_filter_ext.htm"
converted: "2025-09-14T03:59:51.452Z"
---

# gpu\_set\_tex\_mip\_filter\_ext

With this function you can set the mip filter mode for a given shader sampler. You supply the handle for the shader sampler (as returned by the function [shader\_get\_sampler\_index()](../../Asset_Management/Shaders/shader_get_sampler_index.md), and then one of the mode value constants listed below.

| Constant | Description |
| --- | --- |
| tf_point | This means that blending between mipmap levels is disabled, which can cause visible texture transitions, but gives the best performance. |
| tf_linear | This means that blending between mipmap levels is enabled (this is also known as trilinear filtering), which smooths the texture transitions, but it will give a minor hit to performance. |
| tf_anisotropic | This means that anisotropic filtering is enabled, which greatly improves texture transition quality and can reduce the blurring visible with other filtering modes, but it has the highest hit on performance. |

#### Syntax:

gpu\_set\_tex\_mip\_filter\_ext(sampler\_index, filter);

| Argument | Type | Description |
| --- | --- | --- |
| sampler_index | Shader Sampler Handle | The shader sampler to get. |
| filter | Mipmapping Filter Constant | The mip filter mode to use (a constant, default: tf_point). |

#### Returns:

N/A

#### Example:

var \_sampleIndex = shader\_get\_sampler\_index(shd\_Glass, "s\_Background");
var \_spriteTex = sprite\_get\_texture(sprite\_index, 0);
shader\_set(shd\_Glass);
if (gpu\_get\_tex\_mip\_filter\_ext(\_sampleIndex) != tf\_point)
{
    gpu\_set\_tex\_mip\_filter\_ext(\_sampleIndex, tf\_point);
}
texture\_set\_stage(\_sampleIndex, \_spriteTex);
shader\_reset();

The above code sets the mip filter mode to tf\_point (disabling mipmapping) for the given shader texture sampler if it has not already been set.