---
title: "gpu_push_state"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_push_state.htm"
converted: "2025-09-14T03:59:50.350Z"
---

# gpu\_push\_state

With this function you can push the current GPU state onto a stack to be used later. You would generally use this if you want to "save" the current GPU state (things like blend mode, alpha writing, culling, etc... will all be pushed to the stack), then draw something with different settings, and then reset the GPU stack to what it was before (by calling [gpu\_pop\_state()](gpu_pop_state.md)).

#### Syntax:

gpu\_push\_state();

#### Returns:

N/A

#### Example:

gpu\_push\_state();
gpu\_set\_blendmode(bm\_add);
gpu\_set\_blendenable(false);
gpu\_set\_cullmode(true);
with (obj\_Effect\_Parent)
{
    draw\_self();
}
gpu\_pop\_state();

The above code will "save" the current GPU state on the stack, then change certain GPU settings and draw a group of instances before resetting the GPU state to what it was previously.