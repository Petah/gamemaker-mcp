---
title: "surface_getpixel"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_getpixel.htm"
converted: "2025-09-14T03:59:54.500Z"
---

# surface\_getpixel

This function can be used to get the colour of a specific pixel from a surface, using the local coordinates of the surface where (0, 0) is the top left corner. This function should _not_ be used very often as it is extremely slow and may cause a pause in your game.

The data type returned by this function will depend on the [format](surface_create.md) of the given surface:

| Formats | Function Return |
| --- | --- |
| surface_rgba8unorm (default)surface_rgba4unormsurface_r8unormsurface_rg8unorm | For these formats, the function will return a regular colour value. Any unused channels are set to 0. |
| surface_rgba16floatsurface_r16floatsurface_rgba32floatsurface_r32float | For these formats, the function will return an array with 3 values (R, G, B) with each being a 32-bit float. Any unused channels are set to 0.To get the pixel colour with the alpha channel, use surface_getpixel_ext. |

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists](surface_exists.md) before referencing them directly.

#### Syntax:

surface\_getpixel(surface\_id, x, y);

| Argument | Type | Description |
| --- | --- | --- |
| surface_id | Surface | The surface. |
| x | Real | The x position on the surface to get the pixel from. |
| y | Real | The y position on the surface to get the pixel from. |

#### Returns:

[Colour](../Colour_And_Alpha/Colour_And_Alpha.md) or [Array](../../../GML_Overview/Arrays.md)

#### Example:

col = surface\_getpixel(surf, 56, 78);

This will return the colour of the pixel at coordinates (56, 78) of the surface stored in the variable surf.