---
title: "draw_surface_part"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/draw_surface_part.htm"
converted: "2025-09-14T03:59:54.100Z"
---

# draw\_surface\_part

This function draws part of any surface at a given position within the room.

As with [draw\_surface](draw_surface.md) you can specify a surface, but you then need to specify the _relative coordinates_ within the surface of an area to select for drawing. This means that a left position of 0 and a top position of 0 would be the top left corner of the surface and all further coordinates should be taken from that position.

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists()](surface_exists.md) before referencing them directly.

TIP How a surface appears depends on its contents, especially the alpha values inside the surface. A surface [cleared](../Colour_And_Alpha/draw_clear_alpha.md) with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the [application\_surface](application_surface.md).

#### Syntax:

draw\_surface\_part(surface, left, top, w, h, x, y);

| Argument | Type | Description |
| --- | --- | --- |
| surface | Surface | The surface to draw. |
| left | Real | The left position in the surface of the part to be drawn. |
| top | Real | The top position in the surface of the part to be drawn. |
| w | Real | The width of the part to be drawn, from left. |
| h | Real | The height of the part to be drawn, from top. |
| x | Real | The x position of where to draw the surface. |
| y | Real | The y position of where to draw the surface. |

#### Returns:

N/A

#### Example:

draw\_surface\_part(surf, 8, 8, 32, 32, x, y);

This will draw a 32x32 area 8px by 8px in from the top left of the surface indexed in surf, at the instance's (x, y) position.