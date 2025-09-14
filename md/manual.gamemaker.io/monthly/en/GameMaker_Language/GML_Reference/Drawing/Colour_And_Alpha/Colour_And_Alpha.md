---
title: "Colour And Alpha"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/Colour_And_Alpha.htm"
converted: "2025-09-14T03:59:49.518Z"
---

# Colour And Alpha

GameMaker has a comprehensive selection of functions to manipulate the colour and alpha of what is drawn on the screen. Using these functions you can separate colours into their component parts, create new colours and manipulate the draw alpha to change how different things in your game are drawn together.

NOTE For blending images using special **blend modes** and other GPU specific functions, see the section on [GPU Control](../GPU_Control/GPU_Control.md).

There are also a number of constants that can be used as base colours in these (and other) functions:

| Colour |
| --- |
| Constant | Colour | Decimal Value |
| c_aqua |  | 16776960 |
| c_black |  | 0 |
| c_blue |  | 16711680 |
| c_dkgray |  | 4210752 |
| c_fuchsia |  | 16711935 |
| c_gray |  | 8421504 |
| c_green |  | 32768 |
| c_lime |  | 65280 |
| c_ltgray |  | 12632256 |
| c_maroon |  | 128 |
| c_navy |  | 8388608 |
| c_olive |  | 32896 |
| c_orange |  | 4235519 |
| c_purple |  | 8388736 |
| c_red |  | 255 |
| c_silver |  | 12632256 |
| c_teal |  | 8421376 |
| c_white |  | 16777215 |
| c_yellow |  | 65535 |

## Hex Colours

You can create colours from hexadecimal values using the $ symbol beforehand, and these values can also be used with various colour functions to get component values separately. The hexadecimal value for a colour is split into three parts, with the format being: Blue/Green/Red (or $BBGGRR), so, for example, to define a light blue/aqua colour you could use:

col = $**FFCC11**;

Here, FF is the blue component, CC is the green component and 11 is the red component.

---

You can also use "CSS colours" that begin with a hash/pound sign (#). This uses a Red/Green/Blue format (or #RRGGBB) which is more widely used and is compatible with various other applications.

col = #**11CCFF**;

This is the same colour as shown in the previous code block, only the RR and BB values are swapped to match the format.

NOTE GML also supports the $AABBGGRR format (with the alpha hex value in the beginning) however most GML colour functions will only be able to make use of the colour part and ignore the alpha.

IMPORTANT Avoid using hex codes (starting with $ or #) after an opening bracket \[, as GameMaker might interpret that as an [accessor](../../../GML_Overview/Accessors.md).

## Functions

The following functions can be used to get the component hues, compound hue, saturation and luminosity of a selected colour as well as the alpha and other properties:

-   [colour\_get\_blue](colour_get_blue.md)
-   [colour\_get\_green](colour_get_green.md)
-   [colour\_get\_red](colour_get_red.md)
-   [colour\_get\_hue](colour_get_hue.md)
-   [colour\_get\_saturation](colour_get_saturation.md)
-   [colour\_get\_value](colour_get_value.md)
-   [draw\_getpixel](draw_getpixel.md)
-   [draw\_getpixel\_ext](draw_getpixel_ext.md)
-   [draw\_get\_colour](draw_get_colour.md)
-   [draw\_get\_alpha](draw_get_alpha.md)

These functions can be used to create colours from raw input values for colour components:

-   [make\_colour\_hsv](make_colour_hsv.md)
-   [make\_colour\_rgb](make_colour_rgb.md)
-   [merge\_colour](merge_colour.md)

The following functions can be used to set the various different options for drawing to the screen, including alpha, colour and blending:

-   [draw\_clear](draw_clear.md)
-   [draw\_clear\_alpha](draw_clear_alpha.md)
-   [draw\_set\_alpha](draw_set_alpha.md)
-   [draw\_set\_colour](draw_set_colour.md)