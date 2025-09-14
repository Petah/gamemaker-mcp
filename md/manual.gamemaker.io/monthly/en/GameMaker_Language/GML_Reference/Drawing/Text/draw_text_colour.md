---
title: "draw_text_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Text/draw_text_colour.htm"
converted: "2025-09-14T03:59:54.792Z"
---

# draw\_text\_colour

This function will draw text in a similar way to [draw\_text()](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md) only now you can choose the colours to use for colouring the text as well as the alpha value, and these new values will be used instead of the base drawing colour and alpha.

**NOTE**: Gradient blending is not available for the HTML5 target unless WebGL is enabled, although you can still set the blending colours and it will blend the font with the first given colour. However all blending in this way creates a duplicate font which is then stored in the cache and used when required, which is far from optimal and if you use multiple colour changes it will slow down your games performance. You can set the font cache size to try and limit this should it be necessary using the function [font\_set\_cache\_size()](../../Asset_Management/Fonts/font_set_cache_size.md).

#### Syntax:

draw\_text\_colour(x, y, string, c1, c2, c3, c4, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the drawn string. |
| y | Real | The y coordinate of the drawn string. |
| string | String | The string to draw. |
| c1 | Colour | The colour for the top left of the drawn text. |
| c2 | Colour | The colour for the top right of the drawn text. |
| c3 | Colour | The colour for the bottom right of the drawn text. |
| c4 | Colour | The colour for the bottom left of the drawn text. |
| alpha | Real | The alpha for the text. |

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_white);
draw\_text(100, 100, "Health");
draw\_text\_colour(100, 200, string(health), c\_lime, c\_lime, c\_green, c\_green, 1);

The above code will draw two sections of text on the same line, with the first text being drawn white (as that is the base drawing colour) and the second text being drawn with a lime green to normal green gradient.