---
title: "gpu_set_stencil_depth_fail"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_stencil_depth_fail.htm"
converted: "2025-09-14T03:59:50.705Z"
---

# gpu\_set\_stencil\_depth\_fail

This function sets the stencil operation that's executed when the stencil test passes but the depth test fails. You can use one of the following constants:

| Constant | Description |
| --- | --- |
| stencilop_keep | Keeps the current value in the stencil buffer. |
| stencilop_zero | Sets the stencil buffer value to 0. |
| stencilop_replace | Replaces the value in the buffer to the new stencil reference value. |
| stencilop_incr | Increments the stencil buffer value, clamping at the maximum value. |
| stencilop_incr_wrap | Increments the stencil buffer value, wrapping to 0 at the maximum value. |
| stencilop_decr | Decrements the stencil buffer value, clamping at 0. |
| stencilop_decr_wrap | Decrements the stencil buffer value, wrapping to the maximum value at 0. |
| stencilop_invert | Performs a bitwise inversion on the current stencil buffer value. |

#### Syntax:

gpu\_set\_stencil\_depth\_fail(stencil\_op);

| Argument | Type | Description |
| --- | --- | --- |
| stencil_op | Stencil Op Constant | A constant indicating the stencil operation to perform on pixels for which the stencil test passes but the depth test fails. |

#### Returns:

N/A

#### Example:

gpu\_set\_stencil\_depth\_fail(stencilop\_keep);

The code above sets the stencil operation to use when the stencil test passes but the depth test fails to stencilop\_keep, i.e. for every pixel for which this is the case the value in the stencil buffer remains unchanged.