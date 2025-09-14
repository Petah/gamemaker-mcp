---
title: "surface_copy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_copy.htm"
converted: "2025-09-14T03:59:54.219Z"
---

# surface\_copy

This function simply takes the image from one surface and copies it onto another one at the specified local position within that surface (where the (0, 0) position is the top left corner of the destination surface). If the destination surface already has information this will be overwritten by the copy, and the function does _not_ change the source surface in any way.

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists](surface_exists.md) before referencing them directly.

#### Syntax:

surface\_copy(destination, x, y, source);

| Argument | Type | Description |
| --- | --- | --- |
| destination | Surface | The surface to copy the other surface to. |
| x | Real | The x position to copy to. |
| y | Real | The y position to copy to. |
| source | Surface | The surface to be copied. |

#### Returns:

N/A

#### Example:

if (view\_current == 0)
{
    surface\_copy(surf, 0, 0, temp\_surf);
}
else
{
    draw\_surface(surf, 0, 0);
}

The above code checks the current view being drawn. If it is view\[0\] it copies the surface stored in the variable temp\_surf onto the surface in the variable surf. If the current view is anything other than view\[0\] the surface surf is drawn to the screen.