---
title: "gpu_get_stencil_pass"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_stencil_pass.htm"
converted: "2025-09-14T03:59:50.191Z"
---

# gpu\_get\_stencil\_pass

This function gets the operation that's performed on pixels for which the stencil test passes.

The default operation performed when the stencil test passes is stencilop\_keep.

#### Syntax:

gpu\_get\_stencil\_pass()

#### Returns:

[Stencil Op Constant](../Depth_And_Stencil_Buffer/The_Depth_And_Stencil_Buffer.htm#stencil_op_constant)

#### Example:

var \_pass\_op = gpu\_get\_stencil\_pass();

The above code gets the stencil operation that's used when the stencil test passes and stores it in a local variable \_pass\_op for further use.