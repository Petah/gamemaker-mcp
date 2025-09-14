---
title: "texture_set_stage"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texture_set_stage.htm"
converted: "2025-09-14T03:59:55.121Z"
---

# texture\_set\_stage

This function will set the given stage "slot" a texture to be used.

The number of stage "slots" available will depend on the platform you are compiling to, with a maximum of 8 being available for Windows, Mac and Linux, but on lower end Android devices (for example) this number can be as low as 2. It is also worth noting that the first stage slot (1) is always used automatically by GameMaker.

**NOTE** This function will do nothing outside of the context of a running shader! See [Shaders](../../Asset_Management/Shaders/Shaders.md) for more information.

#### Syntax:

texture\_set\_stage(stage, tex);

| Argument | Type | Description |
| --- | --- | --- |
| stage | Shader Sampler Handle or Real | The texture "slot" to use. |
| tex | Texture | The texture to use. |

#### Returns:

N/A

#### Example:

glassshader\_bgsampler = shader\_get\_sampler\_index(GlassShader, "s\_BackgroundSampler")
spr = sprite\_get\_texture(sprite\_index, 0);
shader\_set(GlassShader);
texture\_set\_stage(glassshader\_bgsampler, spr);
shader\_reset();

The above code will get the _handle_ for the sampler within the shader indexed as GlassShader and then set that shader constant to the given sprite texture.