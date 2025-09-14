---
title: "gpu_set_stencil_pass"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_stencil_pass.htm"
converted: "2025-09-14T03:59:50.776Z"
---

# gpu\_set\_stencil\_pass

This function sets the stencil operation to perform when the stencil test passes.

The default operation when the stencil test passes is stencilop\_keep. You can change it to one of the following:

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

gpu\_set\_stencil\_pass(stencil\_op);

| Argument | Type | Description |
| --- | --- | --- |
| stencil_op | Stencil Op Constant | A constant indicating the stencil operation to perform on pixels for which the stencil test passes. |

#### Returns:

N/A

#### Example:

gpu\_set\_stencil\_pass(stencilop\_incr\_wrap);

The above code sets the stencil operation to the [Stencil Op Constant](../Depth_And_Stencil_Buffer/The_Depth_And_Stencil_Buffer.htm#stencil_op_constant) stencilop\_incr\_wrap, i.e. increment the stencil value for the pixel at every pass of the stencil test and wrap from the maximum value of 255 to 0 when it is reached.