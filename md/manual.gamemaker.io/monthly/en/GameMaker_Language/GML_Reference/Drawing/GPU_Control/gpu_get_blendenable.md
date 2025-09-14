---
title: "gpu_get_blendenable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendenable.htm"
converted: "2025-09-14T03:59:49.889Z"
---

# gpu\_get\_blendenable

This function can be used to retrieve the alpha-blending state. If it returns true then alpha-blending is enabled, and if it returns false it is disabled. By default this is on and so the function will return true

#### Syntax:

gpu\_get\_blendenable();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (gpu\_get\_blendenable() == false)
{
    gpu\_set\_blendenable(true);
}

The above code checks the state of the alpha blending and if it is disabled it is then enabled again.