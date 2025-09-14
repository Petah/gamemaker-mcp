---
title: "draw_surface_tiled_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/draw_surface_tiled_ext.htm"
converted: "2025-09-14T03:59:54.200Z"
---

# draw\_surface\_tiled\_ext

This function takes a surface and then repeatedly tiles it across the whole room, starting at the coordinates that you give in the function and with each tile scaled, colour blended and with the alpha that you define (these properties are the same as those used in [draw\_surface\_ext](draw_surface_ext.md)).

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists()](surface_exists.md) before referencing them directly.

TIP How a surface appears depends on its contents, especially the alpha values inside the surface. A surface [cleared](../Colour_And_Alpha/draw_clear_alpha.md) with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the [application\_surface](application_surface.md).

#### Syntax:

draw\_surface\_tiled\_ext(surface, x, y, xscale, yscale, col, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| surface | Surface | The surface to draw. |
| x | Real | The x coordinate of where to draw the surface. |
| y | Real | The y coordinate of where to draw the surface. |
| xscale | Real | The horizontal scaling of the surface. |
| yscale | Real | The vertical scaling of the surface. |
| col | Colour | The colour with which to blend the surface. |
| alpha | Real | The alpha of the surface. |

#### Returns:

N/A

#### Example:

draw\_surface\_tiled\_ext(surf, x, y, 2, 2, c\_red, 0.5);

This will draw the surface indexed in surf at the instance's own x and y position, double its stored size and tiled in every direction in the room, as well as blended with the colour red and partially transparent.