---
title: "draw_getpixel_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_getpixel_ext.htm"
converted: "2025-09-14T03:59:49.694Z"
---

# draw\_getpixel\_ext

With this function you can get the full **AGBR 32-bit** value of any pixel that is being drawn to the current render target. This means that the results will depend on the event in which the function is called, and also on the target surface being used.

IMPORTANT This function will cause a huge performance hit and so should only be used when absolutely necessary.

#### Syntax:

draw\_getpixel\_ext(x, y);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the pixel to check |
| y | Real | The y coordinate of the pixel to check |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

col = draw\_getpixel\_ext(mouse\_x, mouse\_y);
alpha = (col >> 24) & 255;
blue = (col >> 16) & 255;
green = (col >> 8) & 255;
red = col & 255;

The above code will get the 32bit colour value at the position of the mouse and then split it into its component values, storing them in variables.