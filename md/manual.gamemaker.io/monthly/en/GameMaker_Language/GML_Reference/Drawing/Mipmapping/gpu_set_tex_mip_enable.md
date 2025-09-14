---
title: "gpu_set_tex_mip_enable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Mipmapping/gpu_set_tex_mip_enable.htm"
converted: "2025-09-14T03:59:51.402Z"
---

# gpu\_set\_tex\_mip\_enable

With this function you can change whether mipmapping is switched off, switched on for everything, or switched on only for texture groups selected in the [Texture Group Manager](../../../../Settings/Texture_Groups.md). The function requires one of the constants listed below.

| Constant | Description |
| --- | --- |
| mip_off | Mipmapping is disabled. |
| mip_on | Mipmapping for all textures is enabled. |
| mip_markedonly | Mipmapping is enabled for textures that have it enabled in the Texture Group options (default). |

#### Syntax:

gpu\_set\_tex\_mip\_enable(setting);

| Argument | Type | Description |
| --- | --- | --- |
| setting | Mipmapping Constant | The mipmap setting (a constant, default: mip_markedonly) |

#### Returns:

N/A

#### Example:

if (gpu\_get\_tex\_mip\_enable() != mip\_on)
{
    gpu\_set\_tex\_mip\_enable(mip\_on);
}

The above code will check to see if mipmapping is enabled and if it is not, it will enable it.