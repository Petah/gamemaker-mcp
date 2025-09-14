---
title: "gpu_set_texrepeat_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_texrepeat_ext.htm"
converted: "2025-09-14T03:59:50.884Z"
---

# gpu\_set\_texrepeat\_ext

This function can be used to set whether a single sampler "slot" repeats the given texture when using [Shaders](../../Asset_Management/Shaders/Shaders.md) in GameMaker. Setting it to true will repeat the texture if the uv coordinates are out of the 0-1 range, while a setting of false will mean no repeating. The likely use case for these functions is for repeating a texture in 3D but in order for it to work and not pull images from the rest of the texture page, the sprite used will need to be marked as being on a "Separate Texture Page" in [The Sprite Editor](../../../../The_Asset_Editors/Sprites.md).

**NOTE** This setting will be overridden by the value set when calling the function [gpu\_set\_texrepeat()](gpu_set_texrepeat.md).

#### Syntax:

gpu\_set\_texrepeat\_ext(sampler\_id, enable);

| Argument | Type | Description |
| --- | --- | --- |
| sampler_id | Shader Sampler Handle | The sampler id from the shader. |
| enable | Boolean | Enable or disable texture repeating (true / false) |

#### Returns:

N/A

#### Example:

var s\_tex = shader\_get\_sampler\_index(shader\_glass, "s\_NoiseSampler");
if (gpu\_get\_texrepeat\_ext(s\_tex))
{
    gpu\_set\_texrepeat\_ext(s\_tex, false);
}
else
{
    gpu\_set\_texrepeat\_ext(s\_tex, true);
}

The above code checks to see if texture repeating is on or off for a specific sampler ID (stored in a local variable) and switches it accordingly.