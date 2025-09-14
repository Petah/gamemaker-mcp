---
title: "draw_surface_stretched"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/draw_surface_stretched.htm"
converted: "2025-09-14T03:59:54.144Z"
---

# draw\_surface\_stretched

This function simply takes a surface and stretches it over the given width and height so that it occupies the area. As with [draw\_surface](draw_surface.md) you can specify a surface and then the (x, y) position in the room for the surface to be drawn at and finally a width and a height (which must be pixel values).

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists()](surface_exists.md) before referencing them directly.

TIP How a surface appears depends on its contents, especially the alpha values inside the surface. A surface [cleared](../Colour_And_Alpha/draw_clear_alpha.md) with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the [application\_surface](application_surface.md).

#### Syntax:

draw\_surface\_stretched(surface, x, y, w, h);

| Argument | Type | Description |
| --- | --- | --- |
| surface | Surface | The surface to draw. |
| x | Real | The x position of where to draw the surface. |
| y | Real | The y position of where to draw the surface. |
| w | Real | The width at which to draw the surface. |
| h | Real | The height at which to draw the surface. |

#### Returns:

N/A

#### Example:

draw\_surface\_stretched(surf, 10, 10, 100, 100);

This will draw the surface indexed in the variable surf with its left corner at (10, 10). Its width and height are both set to 100, which is how much space it will occupy regardless of the surface's actual width and height.