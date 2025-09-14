---
title: "gpu_set_scissor"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_scissor.htm"
converted: "2025-09-14T03:59:50.619Z"
---

# gpu\_set\_scissor

This function defines a rectangular "scissor" region within the [render target](../Surfaces/surface_set_target.md). Anything you draw after this function will only be output within the scissor region, essentially being cropped, as anything outside of it will be "cut out".

Coordinates are rounded to integers and are local to the render target region, i.e. (0, 0) is the top-left corner of the surface you are drawing to.

NOTE Changing the surface target or viewport will reset the scissor region to cover the entirety of the new render target.

#### Syntax:

gpu\_set\_scissor(x\_or\_struct, \[y, w, h\]);

| Argument | Type | Description |
| --- | --- | --- |
| x_or_struct | Real or Struct | The X position of the scissor region, or a struct containing x, y, w, h |
| y | Real | OPTIONAL The Y position of the scissor region, must be specified if first argument is not a struct |
| w | Real | OPTIONAL The width of the scissor region, must be specified if first argument is not a struct |
| h | Real | OPTIONAL The height of the scissor region, must be specified if first argument is not a struct |

#### Returns:

N/A

#### Example:

var \_scissor = gpu\_get\_scissor();
gpu\_set\_scissor(200, 200, 600, 600);

draw\_self();

gpu\_set\_scissor(\_scissor);

This gets the current scissor region and stores it in a local variable. It then changes the scissor region, draws something, and resets the scissor region to what it was before the gpu\_set\_scissor() call.