---
title: "gpu_get_alphatestref"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_alphatestref.htm"
converted: "2025-09-14T03:59:49.874Z"
---

# gpu\_get\_alphatestref

You can use this function to find the current value for the alpha test reference (default is 0, but you can use [gpu\_set\_alphatestref()](gpu_set_alphatestref.md) to set this value to something other than this).

#### Syntax:

gpu\_get\_alphatestref();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (from 0 - 255)

#### Example:

if (gpu\_get\_alphatestenable())
{
    if (gpu\_get\_alphatestref() < 254)
    {
        gpu\_set\_alphatestref(254);
    }
}

The above code checks to see if alpha testing is enabled, and if it is, it then checks the current alpha test reference value and sets it if it is less than 254.