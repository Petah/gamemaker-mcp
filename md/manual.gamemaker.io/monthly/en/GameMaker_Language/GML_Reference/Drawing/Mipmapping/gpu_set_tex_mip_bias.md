---
title: "gpu_set_tex_mip_bias"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_set_tex_mip_bias.htm"
converted: "2025-09-14T03:59:51.368Z"
---

# gpu\_set\_tex\_mip\_bias

With this function you can set the mipmap bias value, where a value of 0 equals no bias, 1 equals the first mipmap, 2 equals the second mipmap etc... This controls the rate at which the mip map is swapped and will generally make rendered textures blurrier the higher the value and the greater the "distance" being viewed. Note that this function can take negative values too, in which case rendered textures will be sharper over a greater distance the lower the value.

#### Syntax:

gpu\_set\_tex\_mip\_bias(bias);

| Argument | Type | Description |
| --- | --- | --- |
| bias | Real | The mipmap bias value to use (default: 0) |

#### Returns:

N/A

#### Example:

if (gpu\_get\_tex\_mip\_bias() != 0)
{
    gpu\_set\_tex\_mip\_bias(0);
}

The above code will check the current mipmap bias and if it is not 0 it is set to 0.