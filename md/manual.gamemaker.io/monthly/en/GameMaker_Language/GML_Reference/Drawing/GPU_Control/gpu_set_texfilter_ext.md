---
title: "gpu_set_texfilter_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_texfilter_ext.htm"
converted: "2025-09-14T03:59:50.851Z"
---

# gpu\_set\_texfilter\_ext

This function can be used to set the linear interpolation for a single sampler "slot" when using [Shaders](../../Asset_Management/Shaders/Shaders.md) in GameMaker. When this is enabled (true) the sampler texture will be smoothed and if this is disabled (false) then images will be drawn based on the nearest pixel. The default value is that set by the **Global Game Options** for your game, or that set using the function [gpu\_set\_texfilter()](gpu_set_texfilter.md).

**NOTE**: This setting will be over-ridden by the value set when calling the function [gpu\_set\_texfilter()](gpu_set_texfilter.md).

**NOTE**: On the HTML5 target, this function will only work with WebGL enabled.

#### Syntax:

gpu\_set\_texfilter\_ext(sampler\_id, enable);

| Argument | Type | Description |
| --- | --- | --- |
| sampler_id | Shader Sampler Handle | The sampler id from the shader. |
| enable | Boolean | Enable or disable texture filtering (true / false) |

#### Returns:

N/A

#### Example:

var s\_tex = shader\_get\_sampler\_index(shader\_glass, "s\_NoiseSampler");
if (gpu\_get\_texfilter\_ext(s\_tex))
{
    gpu\_set\_texfilter\_ext(s\_tex, false);
}
else
{
    gpu\_set\_texfilter\_ext(s\_tex, true);
}

The above code checks to see if texture filtering is on or off for a specific sampler ID (stored in a local variable) and switches it accordingly.