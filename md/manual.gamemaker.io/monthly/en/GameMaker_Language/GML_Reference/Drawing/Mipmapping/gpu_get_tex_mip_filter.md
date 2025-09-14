---
title: "gpu_get_tex_mip_filter"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_get_tex_mip_filter.htm"
converted: "2025-09-14T03:59:51.248Z"
---

# gpu\_get\_tex\_mip\_filter

With this function you can get the current mip filter mode. The mode value returned by the function will be one of the constants listed below.

#### Syntax:

gpu\_get\_tex\_mip\_filter();

#### Returns:

[Mipmapping Filter Constant](gpu_set_tex_mip_filter.md) (listed below):

| Mipmapping Filter Constant |
| --- |
| Constant | Description |
| tf_point | This means that blending between mipmap levels is disabled, which can cause visible texture transitions, but gives the best performance. |
| tf_linear | This means that blending between mipmap levels is enabled (this is also known as trilinear filtering), which smooths the texture transitions, but it will give a minor hit to performance. |
| tf_anisotropic | This means that anisotropic filtering is enabled, which greatly improves texture transition quality and can reduce the blurring visible with other filtering modes, but it has the highest hit on performance. |

#### Example:

if (keyboard\_check(vk\_enter))
{
    switch(gpu\_get\_tex\_mip\_filter())
    {
        case tf\_point: gpu\_set\_tex\_mip\_filter(tf\_linear); break;
        case tf\_linear: gpu\_set\_tex\_mip\_filter(tf\_anisotropic); break;
        case tf\_anisotropic: gpu\_set\_tex\_mip\_filter(tf\_point); break;
    }
}

The above code checks the keyboard and if the specified key is pressed it will then get the current mip filter and toggle the value to the next one, cycling through the different modes.