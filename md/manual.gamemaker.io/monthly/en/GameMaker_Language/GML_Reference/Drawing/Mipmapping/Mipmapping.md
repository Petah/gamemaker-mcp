---
title: "Mipmapping"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/Mipmapping.htm"
converted: "2025-09-14T03:59:51.082Z"
---

# Mipmapping

This section contains all the functions related to using the [mipmapping](https://en.wikipedia.org/wiki/Mipmap) functions. Before using these functions you should have enabled mipmapping for the required texture pages in the [Texture Group Editor](../../../../Settings/Texture_Groups.md) and then at runtime enable mipmapping using [gpu\_set\_tex\_mip\_enable](gpu_set_tex_mip_enable.md).

Mipmapping generates lower resolution textures for drawing at appropriate distance levels. There will be multiple mipmap "levels", where 0 is the original texture, 1 is half the size of 0, 2 is half the size of 1, and so on (you can control the [minimum](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_set_tex_min_mip.md) and [maximum](gpu_set_tex_max_mip.md) mipmap levels used). For each subsequent mipmap level, a 2x2 block from the previous mipmap level is sampled (i.e. 4 pixels) to create one pixel, resulting in a texture that is half the size.

Mipmapping can cause bleeding issues if multiple sprites are close together on the texture page and pixels from both happen to be sampled into a 2x2 block. This is where the **border size** option for a Texture Group comes into play as it creates a gap of the given size between each sprite on a texture page. Since a border is added around each individual sprite, a border size of 8 allows mipmaps to be scaled up to its sixteenth level without bleeding (as then the actual gap between two sprites would be 8 + 8 = 16).

The image below shows the difference mipmapping can make when rendering your project:

![Mipmapping example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/Mipmapping_Example.png)Once you have enabled mipmapping for the project or a texture page, you can then use the following functions to get and set values which will change how things will look in your project when run.

## Function Reference

### Getters

-   [gpu\_get\_tex\_mip\_filter](gpu_get_tex_mip_filter.md)
-   [gpu\_get\_tex\_mip\_filter\_ext](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_get_tex_mip_filter_ext.md)
-   [gpu\_get\_tex\_mip\_bias](gpu_get_tex_mip_bias.md)
-   [gpu\_get\_tex\_mip\_bias\_ext](gpu_get_tex_mip_bias_ext.md)
-   [gpu\_get\_tex\_min\_mip](gpu_get_tex_min_mip.md)
-   [gpu\_get\_tex\_min\_mip\_ext](gpu_get_tex_min_mip_ext.md)
-   [gpu\_get\_tex\_max\_mip](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_get_tex_max_mip.md)
-   [gpu\_get\_tex\_max\_mip\_ext](gpu_get_tex_max_mip_ext.md)
-   [gpu\_get\_tex\_max\_aniso](gpu_get_tex_max_aniso.md)
-   [gpu\_get\_tex\_max\_aniso\_ext](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_get_tex_max_aniso_ext.md)
-   [gpu\_get\_tex\_mip\_enable](gpu_get_tex_mip_enable.md)
-   [gpu\_get\_tex\_mip\_enable\_ext](gpu_get_tex_mip_enable_ext.md)

### Setters

-   [gpu\_set\_tex\_mip\_filter](gpu_set_tex_mip_filter.md)
-   [gpu\_set\_tex\_mip\_filter\_ext](gpu_set_tex_mip_filter_ext.md)
-   [gpu\_set\_tex\_mip\_bias](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_set_tex_mip_bias.md)
-   [gpu\_set\_tex\_mip\_bias\_ext](gpu_set_tex_mip_bias_ext.md)
-   [gpu\_set\_tex\_min\_mip](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_set_tex_min_mip.md)
-   [gpu\_set\_tex\_min\_mip\_ext](gpu_set_tex_min_mip_ext.md)
-   [gpu\_set\_tex\_max\_mip](gpu_set_tex_max_mip.md)
-   [gpu\_set\_tex\_max\_mip\_ext](gpu_set_tex_max_mip_ext.md)
-   [gpu\_set\_tex\_max\_aniso](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_set_tex_max_aniso.md)
-   [gpu\_set\_tex\_max\_aniso\_ext](gpu_set_tex_max_aniso_ext.md)
-   [gpu\_set\_tex\_mip\_enable](gpu_set_tex_mip_enable.md)
-   [gpu\_set\_tex\_mip\_enable\_ext](gpu_set_tex_mip_enable_ext.md)