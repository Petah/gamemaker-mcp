---
title: "gpu_set_zfunc"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_zfunc.htm"
converted: "2025-09-14T03:59:50.904Z"
---

# gpu\_set\_zfunc

This function sets the z-buffer testing comparison mode (see [gpu\_set\_ztestenable](gpu_set_ztestenable.md) for more information).

The values available for use are any of the following constants (the default value is cmpfunc\_lessequal):

| Constant | Description |
| --- | --- |
| cmpfunc_never | Never |
| cmpfunc_less | Less |
| cmpfunc_equal | Equal |
| cmpfunc_lessequal | Less or Equal |
| cmpfunc_greater | Greater |
| cmpfunc_notequal | Not Equal |
| cmpfunc_greaterequal | Greater or Equal |
| cmpfunc_always | Always |

#### Syntax:

gpu\_set\_zfunc(cmp\_func);

| Argument | Type | Description |
| --- | --- | --- |
| cmp_func | Comparison Function Constant | The comparison mode to use (see list above) |

#### Returns:

N/A

#### Example:

gpu\_set\_ztestenable(true);
gpu\_set\_zfunc(cmpfunc\_always);
draw\_sprite(spr\_Background, 0, 0, 0);
gpu\_set\_ztestenable(false);

The above code switches on z-buffer testing and sets its comparison mode before drawing a background sprite and then switches it back off again to continue drawing.