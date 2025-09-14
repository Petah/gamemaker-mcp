---
title: "gpu_get_ztestenable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_ztestenable.htm"
converted: "2025-09-14T03:59:50.313Z"
---

# gpu\_get\_ztestenable

This function can be used to retrieve whether z-testing is enabled (the function returns true) or not (the function returns false).

The default value is that z-testing is _disabled_, so the function will return false.

#### Syntax:

gpu\_get\_ztestenable()

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (gpu\_get\_ztestenable() == false)
{
    gpu\_set\_ztestenable(true);
}

The above code checks to see if z-testing is enabled or not and if it is disabled it is then enabled again.