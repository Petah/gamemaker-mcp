---
title: "draw_clear_stencil"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/draw_clear_stencil.htm"
converted: "2025-09-14T03:59:55.565Z"
---

# draw\_clear\_stencil

This function clears the stencil buffer of the [current render target](Surfaces/surface_set_target.md) to the given stencil value, an integer value from 0 to 255.

#### Syntax:

draw\_clear\_stencil(stencil);

| Argument | Type | Description |
| --- | --- | --- |
| stencil | Real | The value to clear the stencil buffer to. An integer value in the range [0, 255]. |

#### Returns:

N/A

#### Example:

draw\_clear\_stencil(1);

The above code clears the stencil buffer to the value 1.