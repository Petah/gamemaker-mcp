---
title: "gpu_set_tex_min_mip"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_set_tex_min_mip.htm"
converted: "2025-09-14T03:59:51.338Z"
---

# gpu\_set\_tex\_min\_mip

With this function you can set the minimum mipmap level which is currently used, where a value of 0 is the highest resolution, 1 is to use the first mipmap, 2 is the second etc...

#### Syntax:

gpu\_set\_tex\_min\_mip(minmip);

| Argument | Type | Description |
| --- | --- | --- |
| minmip | Real | The minimum mipmap level to use |

#### Returns:

N/A

#### Example:

if (gpu\_get\_tex\_min\_mip() != 0)
{
    gpu\_set\_tex\_min\_mip(0);
}

The above code will check the current minimum mipmap level and if it is not 0 it is set to 0.