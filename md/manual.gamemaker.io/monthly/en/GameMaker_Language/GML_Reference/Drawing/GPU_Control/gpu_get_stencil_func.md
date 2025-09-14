---
title: "gpu_get_stencil_func"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_stencil_func.htm"
converted: "2025-09-14T03:59:50.181Z"
---

# gpu\_get\_stencil\_func

This function gets the comparison function currently used for comparisons in the stencil buffer.

#### Syntax:

gpu\_get\_stencil\_func()

#### Returns:

[Comparison Function Constant](gpu_get_zfunc.md)

#### Example:

var \_func = gpu\_get\_stencil\_func();

The above code calls gpu\_get\_stencil\_func to get the stencil function that's currently used and stores the result in a temporary variable \_func.