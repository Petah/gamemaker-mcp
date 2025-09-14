---
title: "draw_clear_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/draw_clear_ext.htm"
converted: "2025-09-14T03:59:55.553Z"
---

# draw\_clear\_ext

This function clears the current render target along with the depth and stencil buffers.

NOTE If all arguments are undefined the function does nothing.

#### Syntax:

draw\_clear\_ext(\[colour\], \[alpha\], \[depth\], \[stencil\]);

| Argument | Type | Description |
| --- | --- | --- |
| colour | Colour | OPTIONAL The colour to clear the current render target with. Use undefined to skip clearing the colour buffer. Must be specified if alpha is specified. |
| alpha | Real | OPTIONAL The alpha value to clear the alpha channel with. Use undefined to skip clearing the alpha channel. A value from 0 to 1 (inclusive). Must be specified if colour is specified. |
| depth | Real | OPTIONAL The value to clear the current depth buffer with. Use undefined to skip clearing the depth buffer. A value from 0 (znear) to 1 (zfar) (inclusive). |
| stencil | Real | OPTIONAL The value to clear the current stencil buffer with. Use undefined to skip clearing the stencil buffer. An integer value from 0 to 255 (inclusive). |

#### Returns:

N/A

#### Example:

draw\_clear\_ext(c\_white, 1, 0, 20);

The above code calls draw\_clear\_ext to clear the colour to white, the alpha channel to 1, the depth buffer to 0 and the stencil buffer to 20.