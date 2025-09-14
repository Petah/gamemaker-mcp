---
title: "surface_getpixel_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_getpixel_ext.htm"
converted: "2025-09-14T03:59:54.516Z"
---

# surface\_getpixel\_ext

This function gets the full **abgr 32-bit** value of any pixel of a (previously created) surface.

If the surface uses a floating point [format](surface_create.md), an array will be returned instead, similar to [surface\_getpixel()](surface_getpixel.md). However, as opposed to that function (which only gives you RGB), this function will give you 4 elements in the array (RGBA).

**NOTE** This function will have a huge performance hit and so should only be used when absolutely necessary.

#### Syntax:

surface\_getpixel\_ext(surface\_id, x, y);

| Argument | Type | Description |
| --- | --- | --- |
| surface_id | Surface | The surface to use. |
| x | Real | The x coordinate of the pixel to check |
| y | Real | The y coordinate of the pixel to check |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) or [Array](../../../GML_Overview/Arrays.md)

#### Example:

col = surface\_getpixel\_ext(mouse\_x, mouse\_y);
alpha = (col >> 24) & 255;
blue = (col >> 16) & 255;
green = (col >> 8) & 255;
red = col & 255;

The above code will get the 32-bit colour value at the position of the mouse and then split it into its component values, storing them in variables.