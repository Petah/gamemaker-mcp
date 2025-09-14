---
title: "gpu_get_depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_depth.htm"
converted: "2025-09-14T03:59:50.081Z"
---

# gpu\_get\_depth

This function returns the current depth (i.e. the z coordinate) for the 2D drawing functions (such as sprites or primitives).

By default, it will be equal to the current layer's depth, but this can be changed using [gpu\_set\_depth](gpu_set_depth.md).

#### Syntax:

gpu\_get\_depth();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_depth = gpu\_get\_depth();
show\_debug\_message($"The depth used for drawing is currently set to: {\_depth}");

The code above gets the current depth value used for drawing using gpu\_get\_depth and outputs it in a debug message.