---
title: "gpu_get_zwriteenable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_zwriteenable.htm"
converted: "2025-09-14T03:59:50.324Z"
---

# gpu\_get\_zwriteenable

This function can be used to retrieve whether z-writing is enabled (the function returns true) or not (the function returns false).

The default value is that z-writing is _enabled_, so the function will return true.

#### Syntax:

gpu\_get\_zwriteenable()

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (gpu\_get\_zwriteenable() == false)
{
    gpu\_set\_zwriteenable(true);
}

The above code checks to see if z-writing is enabled or not and if it is disabled it is then enabled again.