---
title: "draw_surface_part_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/draw_surface_part_ext.htm"
converted: "2025-09-14T03:59:54.119Z"
---

# draw\_surface\_part\_ext

This function draws a part of the chosen surface at the given position following the same rules as per [draw\_surface\_part](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/draw_surface_part.md), only now you can scale the part, blend a colour with it, or change its alpha when drawing it to the screen (the same as when drawing a surface with [draw\_surface\_ext](draw_surface_ext.md)).

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists()](surface_exists.md) before referencing them directly.

TIP How a surface appears depends on its contents, especially the alpha values inside the surface. A surface [cleared](../Colour_And_Alpha/draw_clear_alpha.md) with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the [application\_surface](application_surface.md).

#### Syntax:

draw\_surface\_part\_ext(surface, left, top, w, h, x, y, xscale, yscale, colour, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| surface | Surface | The surface to draw. |
| left | Real | The left position in the surface of the part to be drawn. |
| top | Real | The top position in the surface of the part to be drawn. |
| w | Real | The width of the part to be draw, from left. |
| h | Real | The height of the part to be drawn, from top. |
| x | Real | The x position of where to draw the surface. |
| y | Real | The y position of where to draw the surface. |
| xscale | Real | The horizontal scaling the part should be drawn with. |
| yscale | Real | The vertical scaling the part should be drawn with. |
| colour | Colour | The colour blending the part should be drawn with. |
| alpha | Real | The alpha transparency the part should be drawn with. |

#### Returns:

N/A

#### Example:

draw\_surface\_part\_ext(surf, 8, 8, 32, 32, x, y, 2, 0.5, c\_black, 1);

This will draw a 32x32 pixel area from 8x8 pixels into the surface indexed in the variable surf. It will be stretched to double its usual width but half its usual height. It will be opaque and it will be blended with black (turning it into a silhouette).