---
title: "gpu_set_tex_max_mip_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_set_tex_max_mip_ext.htm"
converted: "2025-09-14T03:59:51.321Z"
---

# gpu\_set\_tex\_max\_mip\_ext

With this function you can get the currently set maximum mipmap level which is to be used for a given shader sampler. You supply the handle for the shader sampler (as returned by the function [shader\_get\_sampler\_index()](../../Asset_Management/Shaders/shader_get_sampler_index.md), and the function will return the current maximum mipmap level, where a value of 0 is the highest resolution, 1 is to use the first mipmap, 2 is the second etc... Note that this can be quite useful for avoiding bleeding artifacts when rendering textures, for example, setting the texture page border to 8px and then setting the max mipmap level to 3 will ensure you don't get any bleeding problems at greater render distances.

#### Syntax:

gpu\_set\_tex\_max\_mip\_ext(sampler\_index, maxmip);

| Argument | Type | Description |
| --- | --- | --- |
| sampler_index | Shader Sampler Handle | The index of the shader sampler to get |
| maxmip | Real | The maximum mipmap level value to use (default: 16) |

#### Returns:

N/A

#### Example:

var \_sampleIndex = shader\_get\_sampler\_index(shd\_Glass, "s\_Background");
var \_spriteTex = sprite\_get\_texture(sprite\_index, 0);
shader\_set(shd\_Glass);
if (gpu\_get\_tex\_max\_mip\_ext(\_sampleIndex) != 4)
{
    gpu\_set\_tex\_max\_mip\_ext(\_sampleIndex, 4);
}
texture\_set\_stage(\_sampleIndex , \_spriteTex);
shader\_reset();

The above code sets the maximum mipmap level to 4 for the given shader texture sampler if it has not already been set to 4.