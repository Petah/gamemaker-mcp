---
title: "shader_get_sampler_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_get_sampler_index.htm"
converted: "2025-09-14T03:59:40.046Z"
---

# shader\_get\_sampler\_index

Since you cannot change the value of a shader sampler within the shader itself, you have to set it before calling the shader using one of the available **uniform set** functions. However, to be able to do _that_ you must first call this function to get the "handle" of the shader sampler that you will want to set.

NOTE Although a shader is made up of two discreet programs (vertex and fragment) this function will not differentiate between the two and will return the handle of the shader sample from either of them.

#### Syntax:

shader\_get\_sampler\_index(shader, uniform);

| Argument | Type | Description |
| --- | --- | --- |
| shader | Shader Asset | The handle of the shader to use. |
| uniform | String | The shader sampler to get the handle of (a string). |

#### Returns:

[Shader Sampler Handle](shader_get_sampler_index.md)

#### Example:

glassshader\_bgsampler = shader\_get\_sampler\_index(GlassShader, "s\_BackgroundSampler")
spr = sprite\_get\_texture(sprite\_index, 0);
shader\_set(GlassShader);
texture\_set\_stage(glassshader\_bgsampler, spr);
shader\_reset();

The above code will get the _handle_ for the sampler within the shader indexed as "GlassShader" and then set that shader constant to the given sprite texture.