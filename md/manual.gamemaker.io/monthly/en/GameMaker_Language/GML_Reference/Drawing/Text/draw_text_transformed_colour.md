---
title: "draw_text_transformed_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Text/draw_text_transformed_colour.htm"
converted: "2025-09-14T03:59:54.911Z"
---

# draw\_text\_transformed\_colour

This function is a combination of the base [draw\_text()](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md) function with the [draw\_text\_transformed()](draw_text_transformed.md) and [draw\_text\_colour()](draw_text_colour.md) functions, permitting you to scale and rotate text as well as colour it with a gradient fill and change its alpha value, ignoring the base alpha and colour settings for drawing.

**NOTE** Gradient blending is not available for the HTML5 target unless WebGL is enabled, although you can still set the blending colours and it will blend the font with the first given colour. However all blending in this way creates a duplicate font which is then stored in the cache and used when required, which is far from optimal and if you use multiple colour changes it will slow down your games performance. You can set the font cache size to try and limit this should it be necessary using the function [font\_set\_cache\_size()](../../Asset_Management/Fonts/font_set_cache_size.md).

#### Syntax:

draw\_text\_transformed\_colour(x, y, string, xscale, yscale, angle, c1, c2, c3, c4, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the drawn string. |
| y | Real | The y coordinate of the drawn string. |
| string | String | The string to draw. |
| xscale | Real | The horizontal scale. |
| yscale | Real | The vertical scale. |
| angle | Real | The angle of the text. |
| c1 | Colour | The colour for the top left of the drawn text. |
| c2 | Colour | The colour for the top right of the drawn text. |
| c3 | Colour | The colour for the bottom right of the drawn text. |
| c4 | Colour | The colour for the bottom left of the drawn text. |
| alpha | Real | The alpha for the text. |

#### Returns:

N/A

#### Example:

draw\_set\_halign(fa\_center);
draw\_set\_valign(fa\_middle);
image\_angle += 1;
draw\_text\_transformed\_colour(room\_width / 2, room\_height / 2, keyboard\_string, 2, 2, image\_angle, c\_red, c\_red, c\_yellow, c\_yellow, 0.5);

The above code will draw the given text in the middle of the room, spinning round and scaled to twice its original size, with a colour gradient going from yellow to red as well as an alpha of 0.5.