---
title: "gpu_set_tex_min_mip_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_set_tex_min_mip_ext.htm"
converted: "2025-09-14T03:59:51.351Z"
---

# gpu\_set\_tex\_min\_mip\_ext

With this function you can set the minimum mipmap level which is currently used for a given shader sampler. You supply the handle for the shader sampler (as returned by the function [shader\_get\_sampler\_index()](../../Asset_Management/Shaders/shader_get_sampler_index.md), and then give a value, where 0 is for full resolution, 1 is for the first mipmap, 2 for the second etc...

#### Syntax:

gpu\_set\_tex\_min\_mip\_ext(sampler\_index, minmip);

| Argument | Type | Description |
| --- | --- | --- |
| sampler_index | Shader Sampler Handle | The shader sampler to get |
| minmip | Real | The minimum mipmap level to use |

#### Returns:

N/A

#### Example:

var \_sampleIndex = shader\_get\_sampler\_index(shd\_Glass, "s\_Background");
var \_spriteTex = sprite\_get\_texture(sprite\_index, 0);
shader\_set(shd\_Glass);
if (gpu\_get\_tex\_min\_mip\_ext(\_sampleIndex) != 0)
{
    gpu\_set\_tex\_min\_mip\_ext(\_sampleIndex, 0);
}
texture\_set\_stage(\_sampleIndex , \_spriteTex);
shader\_reset();

The above code sets the minimum mipmap level to 0 for the given shader texture sampler if it has not already been set to 0.