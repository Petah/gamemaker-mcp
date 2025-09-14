---
title: "gpu_get_stencil_ref"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_stencil_ref.htm"
converted: "2025-09-14T03:59:50.219Z"
---

# gpu\_get\_stencil\_ref

This function retrieves the current stencil test reference value set by [gpu\_set\_stencil\_ref](gpu_set_stencil_ref.md).

The stencil ref value is used in the stencil test as follows:

ref cmp\_func stencil

NOTE The comparison function used for the stencil test is returned by [gpu\_get\_stencil\_func](gpu_get_stencil_func.md).

#### Syntax:

gpu\_get\_stencil\_ref()

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_ref = gpu\_get\_stencil\_ref();

The code above gets the current reference value used for the stencil test and stores it in a temporary variable \_ref.