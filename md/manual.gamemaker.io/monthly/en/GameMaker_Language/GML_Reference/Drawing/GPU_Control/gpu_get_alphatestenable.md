---
title: "gpu_get_alphatestenable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_alphatestenable.htm"
converted: "2025-09-14T03:59:49.862Z"
---

# gpu\_get\_alphatestenable

With this function you can check to see whether alpha testing is enabled (returns true) or not (returns false). For more information on alpha testing, see the function [gpu\_set\_alphatestref()](gpu_set_alphatestref.md).

#### Syntax:

gpu\_get\_alphatestenable();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (!gpu\_get\_alphatestenable())
{
    gpu\_set\_alphatestenable(true);
    gpu\_set\_alphatestref(128);
}

The above code will check to see if alpha testing is enabled and if not it will switch on alpha testing and set the test threshold to 128 (only pixels with an alpha over 0.5 will be drawn).