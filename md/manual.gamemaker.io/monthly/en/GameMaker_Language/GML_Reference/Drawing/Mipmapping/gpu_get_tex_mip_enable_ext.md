---
title: "gpu_get_tex_mip_enable_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_get_tex_mip_enable_ext.htm"
converted: "2025-09-14T03:59:51.231Z"
---

# gpu\_get\_tex\_mip\_enable\_ext

With this function you can get whether mipmapping is switched off, switched on for everything or switched on only for texture groups selected in the [Texture Group Manager](../../../../Settings/Texture_Groups.md) on a shader sampler. You supply the handle for the shader sampler (as returned by the function [shader\_get\_sampler\_index()](../../Asset_Management/Shaders/shader_get_sampler_index.md), and the function will return one of the constants listed below.

#### Syntax:

gpu\_get\_tex\_mip\_enable\_ext(sampler\_index);

| Argument | Type | Description |
| --- | --- | --- |
| sampler_index | Shader Sampler Handle | The shader sampler to get |

#### Returns:

[Constant](../../../GML_Overview/Variables/Constants.md)

| Constant | Description |
| --- | --- |
| mip_off | Mipmapping is disabled. |
| mip_on | Mipmapping for all textures is enabled. |
| mip_markedonly | Mipmapping is enabled for textures that have it enabled in the Texture Group options. |

#### Example:

var \_sampleIndex = shader\_get\_sampler\_index(shd\_Glass, "s\_Background");
var \_spriteTex = sprite\_get\_texture(sprite\_index, 0);
shader\_set(shd\_Glass);
if (gpu\_get\_tex\_mip\_enable\_ext(\_sampleIndex) != mip\_on)
{
    gpu\_set\_tex\_mip\_enable\_ext(\_sampleIndex, mip\_on);
}
texture\_set\_stage(\_sampleIndex , \_spriteTex);
shader\_reset();

The above code enables mipmapping for the given shader texture sampler if it has not already been enabled.