---
title: "draw_surface_stretched_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/draw_surface_stretched_ext.htm"
converted: "2025-09-14T03:59:54.169Z"
---

# draw\_surface\_stretched\_ext

This function does exactly the same as the [draw\_surface\_stretched](draw_surface_stretched.md) function with the added ability to set the colour blending and alpha value for the surface when it is drawn (similar to the function [draw\_surface\_ext](draw_surface_ext.md)).

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists()](surface_exists.md) before referencing them directly.

TIP How a surface appears depends on its contents, especially the alpha values inside the surface. A surface [cleared](../Colour_And_Alpha/draw_clear_alpha.md) with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the [application\_surface](application_surface.md).

#### Syntax:

draw\_surface\_stretched\_ext(surface, x, y, w, h, col, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| surface | Surface | The surface to draw. |
| x | Real | The x position of where to draw the surface. |
| y | Real | The y position of where to draw the surface. |
| w | Real | The width at which to draw the surface. |
| h | Real | The height at which to draw the surface. |
| colour | Colour | The colour with which to colour the surface. |
| alpha | Real | The alpha with which to blend the surface. |

#### Returns:

N/A

#### Example:

draw\_surface\_stretched\_ext(surf, x, y, 200, 200, c\_white, 0.5);

This will draw the given surface with its left corner at the instance's (x, y) position, stretched to occupy an area of 200x200 pixels, with no blending but partially transparent.