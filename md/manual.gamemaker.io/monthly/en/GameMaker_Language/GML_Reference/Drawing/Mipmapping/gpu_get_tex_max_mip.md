---
title: "gpu_get_tex_max_mip"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_get_tex_max_mip.htm"
converted: "2025-09-14T03:59:51.121Z"
---

# gpu\_get\_tex\_max\_mip

With this function you can get the currently set maximum mipmap level which is to be used, where a value of 0 is the highest resolution, 1 is to use the first mipmap, 2 is the second etc... Note that this can be quite useful for avoiding bleeding artifacts when rendering textures, for example, setting the texture page border to 8px and then setting the max mipmap level to 3 will ensure you don't get any bleeding problems at greater render distances.

#### Syntax:

gpu\_get\_tex\_max\_mip();

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (default: 16)

#### Example:

if (gpu\_get\_tex\_max\_mip() != 4)
{
    gpu\_set\_tex\_max\_mip(4);
}

The above code will check the current maximum mipmap level and if it is not 4 it is set to 4.