---
title: "gpu_get_tex_max_aniso"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_get_tex_max_aniso.htm"
converted: "2025-09-14T03:59:51.097Z"
---

# gpu\_get\_tex\_max\_aniso

With this function you can get the current maximum level of anisotropy when using the tf\_anisotropic filter mode (see [gpu\_get\_tex\_mip\_filter()](gpu_get_tex_mip_filter.md) for more information). The returned value will range between 1 and 16.

#### Syntax:

gpu\_get\_tex\_max\_aniso();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (default: 16)

#### Example:

if (gpu\_get\_tex\_max\_aniso() != 8)
{
    gpu\_set\_tex\_max\_aniso(8);
}

The above code will check the current maximum anisotropic filtering level and if it is not 8 it is set to 8.