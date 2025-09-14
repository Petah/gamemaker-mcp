---
title: "draw_text_ext_transformed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Text/draw_text_ext_transformed.htm"
converted: "2025-09-14T03:59:54.846Z"
---

# draw\_text\_ext\_transformed

This function is a combination of the base [draw\_text()](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md) function with the [draw\_text\_ext()](draw_text_ext.md) and [draw\_text\_transformed()](draw_text_transformed.md) functions, permitting you to scale and rotate text while maintaining a specific line spacing and maximum width per line. Note that the "width" argument is based on a scale of 1, so if the scale is different, this value should be changed proportionally. For example, if the base width for a line break is 300 and you set the scale to 2, then the text will appear wrong, over-running the given width. Instead you should have set the width to 150 to compensate the scaling.

#### Syntax:

draw\_text\_ext\_transformed(x, y, string, sep, w, xscale, yscale, angle);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the drawn string. |
| y | Real | The y coordinate of the drawn string. |
| string | String | The string to draw. |
| sep | Real | The distance in pixels between lines of text. |
| w | Real | The maximum width in pixels of the string before a line break. |
| xscale | Real | The horizontal scale. |
| yscale | Real | The vertical scale. |
| angle | Real | The angle of the text. |

#### Returns:

N/A

#### Example:

draw\_set\_halign(fa\_center);
draw\_set\_valign(fa\_middle);
image\_angle += 1;
draw\_text\_ext\_transformed(room\_width / 2, room\_height / 2, keyboard\_string, 10, 300, 2, 2, image\_angle);

The above code will draw the given text in the middle of the room, with a maximum string length of 300 pixels, a spacing between each line of 10 pixels, spinning round and scaled to twice its original size.