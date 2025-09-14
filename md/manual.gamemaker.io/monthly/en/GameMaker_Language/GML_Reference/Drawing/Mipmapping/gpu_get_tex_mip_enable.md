---
title: "gpu_get_tex_mip_enable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_get_tex_mip_enable.htm"
converted: "2025-09-14T03:59:51.213Z"
---

# gpu\_get\_tex\_mip\_enable

With this function you can get whether mipmapping is switched off, switched on for everything or switched on only for texture groups selected in the [Texture Group Manager](../../../../Settings/Texture_Groups.md). The function will return one of the constants listed below, with the default setting being mip\_markedonly.

#### Syntax:

gpu\_get\_tex\_mip\_enable()

#### Returns:

[Constant](../../../GML_Overview/Variables/Constants.md)

| Mipmapping Constant |
| --- |
| Constant | Description |
| mip_off | Mipmapping is disabled. |
| mip_on | Mipmapping for all textures is enabled. |
| mip_markedonly | Mipmapping is enabled for textures that have it enabled in the Texture Group options (default). |

#### Example:

if (gpu\_get\_tex\_mip\_enable() != mip\_on)
{
    gpu\_set\_tex\_mip\_enable(mip\_on);
}

The above code will check to see if mipmapping is enabled and if it is not, it will enable it.