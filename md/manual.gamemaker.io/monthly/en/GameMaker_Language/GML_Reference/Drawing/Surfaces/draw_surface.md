---
title: "draw_surface"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/draw_surface.htm"
converted: "2025-09-14T03:59:54.039Z"
---

# draw\_surface

This function draws a surface at a given position within the room, with the top left corner of the surface being drawn at the specified x/y position.

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists()](surface_exists.md) before referencing them directly.

TIP How a surface appears depends on its contents, especially the alpha values inside the surface. A surface [cleared](../Colour_And_Alpha/draw_clear_alpha.md) with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the [application\_surface](application_surface.md).

#### Syntax:

draw\_surface(id, x, y);

| Argument | Type | Description |
| --- | --- | --- |
| id | Surface | The surface to draw. |
| x | Real | The x position of where to draw the surface. |
| y | Real | The y position of where to draw the surface. |

#### Returns:

N/A

#### Example:

var \_vx = camera\_get\_view\_x(view\_camera\[0\]);
var \_vy = camera\_get\_view\_y(view\_camera\[0\]);
draw\_surface(surf, \_vx, \_vy);

The above code draws the surface indexed in surf at same position as camera view\[0\].