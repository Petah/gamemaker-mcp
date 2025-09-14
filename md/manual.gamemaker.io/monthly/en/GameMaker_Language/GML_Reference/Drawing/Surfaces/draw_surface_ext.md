---
title: "draw_surface_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/draw_surface_ext.htm"
converted: "2025-09-14T03:59:54.059Z"
---

# draw\_surface\_ext

This function draws the given surface as in the function [draw\_surface](draw_surface.md), with additional options to change the scale, blending, rotation and alpha of the surface being drawn.

Changing these additional options does _not_ modify the resource in any way (only how it is drawn).

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists()](surface_exists.md) before referencing them directly.

TIP How a surface appears depends on its contents, especially the alpha values inside the surface. A surface [cleared](../Colour_And_Alpha/draw_clear_alpha.md) with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the [application\_surface](application_surface.md).

#### Syntax:

draw\_surface\_ext(id, x, y, xscale, yscale, rot, col, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| id | Surface | The surface to draw. |
| x | Real | The x position of where to draw the surface. |
| y | Real | The y position of where to draw the surface. |
| xscale | Real | The horizontal scale. |
| yscale | Real | The vertical scale. |
| rot | Real | The rotation or angle to draw the surface. |
| col | Colour | The colour with which to blend the surface. |
| alpha | Real | The alpha transparency for drawing the surface. |

#### Returns:

N/A

#### Example:

draw\_surface\_ext(surf, 0, 0, 2, 2, 0, c\_red, 0.5);

The above code draws the surface stored in the variable surf at the (0, 0) position in the room at twice the original scale, blended red and semi transparent.