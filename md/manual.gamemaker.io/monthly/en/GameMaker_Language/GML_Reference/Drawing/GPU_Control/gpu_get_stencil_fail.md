---
title: "gpu_get_stencil_fail"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_stencil_fail.htm"
converted: "2025-09-14T03:59:50.170Z"
---

# gpu\_get\_stencil\_fail

This function retrieves the stencil operation that's performed when the stencil test fails.

#### Syntax:

gpu\_get\_stencil\_fail()

#### Returns:

[Stencil Op Constant](../Depth_And_Stencil_Buffer/The_Depth_And_Stencil_Buffer.htm#stencil_op_constant)

#### Example:

var \_op\_current = gpu\_get\_stencil\_fail();
gpu\_set\_stencil\_fail(stencilop\_replace);
draw\_circle(20, 20, 10, false);
gpu\_set\_stencil\_fail(\_op\_current);

The code above first gets the current stencil fail operation and stores it in a temporary variable \_op\_current. It then sets the stencil fail operation to stencilop\_replace with a call to [gpu\_set\_stencil\_fail](gpu_set_stencil_fail.md). After that, it draws a disk of radius 10 at position (20, 20). Finally, it resets the stencil fail operation to the value stored in \_op\_current.