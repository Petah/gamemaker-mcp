---
title: "gpu_set_cullmode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_cullmode.htm"
converted: "2025-09-14T03:59:50.560Z"
---

# gpu\_set\_cullmode

This function can be used to set the backface culling mode. A polygon (primitive) has a _front_ and a _back_ side. The front side is said to be the side where the vertices are defined in **counter-clockwise** order. Normally both sides are drawn, but if you make a closed shape (like a pyramid) then this is a waste of processing power because the back side of the triangle can never be seen. It's in these cases that you can switch on backface culling, as this saves about half the amount of drawing time, although it means you have the task of defining your polygons in the correct way to prevent issues.

The cull mode value used must be one of the following constants (the default value is cull\_noculling):

| Constant | Description |
| --- | --- |
| cull_noculling | No culling will be done |
| cull_clockwise | All clockwise triangles will be culled |
| cull_counterclockwise | All counter-clockwise triangles will be culled |

#### Syntax:

gpu\_set\_cullmode(cullmode);

| Argument | Type | Description |
| --- | --- | --- |
| cullmode | Culling Mode Constant | The cull mode to use (see list above) |

#### Returns:

N/A

#### Example:

if (gpu\_get\_cullmode() != cull\_clockwise)
{
    gpu\_set\_cullmode(cull\_clockwise);
}

The above code gets the current cull mode and if it is not cull\_clockwise it is set to that constant.