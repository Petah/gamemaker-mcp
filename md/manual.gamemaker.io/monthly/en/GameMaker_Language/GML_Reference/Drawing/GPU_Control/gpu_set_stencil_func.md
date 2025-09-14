---
title: "gpu_set_stencil_func"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_stencil_func.htm"
converted: "2025-09-14T03:59:50.757Z"
---

# gpu\_set\_stencil\_func

This function sets the comparison function to use for the stencil test.

The default is cmpfunc\_always, i.e. the stencil test always passes.

The stencil ref value is compared to the stencil value as follows:

ref cmp\_func stencil

NOTE The stencil ref value can be set with [gpu\_set\_stencil\_ref](gpu_set_stencil_ref.md).

#### Syntax:

gpu\_set\_stencil\_func(cmp\_func);

| Argument | Type | Description |
| --- | --- | --- |
| cmp_func | Comparison Function Constant | The comparison function to use for comparing the stencil reference value to the stencil value at the current pixel, i.e. ref cmp_func stencil |

#### Returns:

N/A

#### Example:

Draw Event

gpu\_set\_stencil\_enable(true);
draw\_clear\_stencil(0);
gpu\_set\_stencil\_func(cmpfunc\_greaterequal);
gpu\_set\_stencil\_pass(stencilop\_replace);
gpu\_set\_stencil\_ref(128);
draw\_circle\_color(100, 100, 50, c\_red, c\_red, false);
gpu\_set\_stencil\_ref(64);
draw\_rectangle\_color(100, 100, 179, 170, c\_blue, c\_blue, c\_blue, c\_blue, false);
gpu\_set\_stencil\_enable(false);

The code example above shows how to draw shapes with the stencil buffer enabled.

First the stencil test is enabled with a call to [gpu\_set\_stencil\_enable](gpu_set_stencil_enable.md) and the stencil buffer is cleared to 0 using [draw\_clear\_stencil](../draw_clear_stencil.md). After that, the stencil comparison function is set to cmpfunc\_greaterequal using [gpu\_set\_stencil\_func](gpu_set_stencil_func.md) and the operation to perform when the stencil test passes set to stencilop\_replace with a call to [gpu\_set\_stencil\_pass](../../../../../../../GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_stencil_pass.md) (the operation to perform when the stencil test fails remains at the default stencilop\_keep).

Next, the stencil reference value is set to 128 using [gpu\_set\_stencil\_ref](gpu_set_stencil_ref.md) and a filled red circle is drawn. The stencil test passes for every pixel covered by the circle (because the comparison that takes place is 128 >= 0) and the value in the stencil buffer is replaced. A filled blue rectangle is then drawn with the stencil ref value set to 64 instead. For all pixels of the rectangle that overlap with the circle's pixels the comparison will be 64 >= 128. These pixels don't pass the stencil test, the current stencil value is kept and the pixel isn't drawn. For all pixels of the rectangle that _don't_ overlap with the circle's pixels the comparison will be 64 >= 0. These pixels pass the stencil test, the current stencil value is replaced and the pixel is drawn.

Finally, the stencil buffer is disabled again with another call to [gpu\_set\_stencil\_enable](gpu_set_stencil_enable.md).