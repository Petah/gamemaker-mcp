---
title: "gpu_get_cullmode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_cullmode.htm"
converted: "2025-09-14T03:59:50.070Z"
---

# gpu\_get\_cullmode

This function can be used to retrieve the backface culling mode. The returned value will be one of the following constants (the default value is cull\_noculling):

| Culling Mode Constant |
| --- |
| Constant | Description |
| cull_noculling | No culling will be done |
| cull_clockwise | All clockwise triangles will be culled |
| cull_counterclockwise | All counter-clockwise triangles will be culled |

#### Syntax:

gpu\_get\_cullmode();

#### Returns:

[Culling Mode Constant](gpu_get_cullmode.md) (see above for constants)

#### Example:

if (gpu\_get\_cullmode() != cull\_clockwise)
{
    gpu\_set\_cullmode(cull\_clockwise);
}

The above code gets the current cull mode and if it is not cull\_clockwise it is set to that constant.