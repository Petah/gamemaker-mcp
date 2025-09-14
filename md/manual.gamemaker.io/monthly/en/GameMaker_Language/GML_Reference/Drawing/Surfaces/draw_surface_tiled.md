---
title: "draw_surface_tiled"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/draw_surface_tiled.htm"
converted: "2025-09-14T03:59:54.183Z"
---

# draw\_surface\_tiled

This function takes a surface and then repeatedly tiles it across the whole room, starting from the coordinates that you give in the function.

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists()](surface_exists.md) before referencing them directly.

TIP How a surface appears depends on its contents, especially the alpha values inside the surface. A surface [cleared](../Colour_And_Alpha/draw_clear_alpha.md) with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the [application\_surface](application_surface.md).

#### Syntax:

draw\_surface\_tiled(surface, x, y);

| Argument | Type | Description |
| --- | --- | --- |
| surface | Surface | The surface to draw. |
| x | Real | The x position of where to draw the surface. |
| y | Real | The y position of where to draw the surface. |

#### Returns:

N/A

#### Example:

draw\_surface\_tiled(surf, x, y);

This will draw the surface indexed in surf at the instance's own x and y position, and tiled in every direction in the room.