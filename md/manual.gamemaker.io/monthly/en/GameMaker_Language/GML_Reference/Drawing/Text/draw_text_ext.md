---
title: "draw_text_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Text/draw_text_ext.htm"
converted: "2025-09-14T03:59:54.808Z"
---

# draw\_text\_ext

This function draws text in a similar way to [draw\_text()](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md), and allows you to set the space between each line of text - should the text occupy more than one line - and limit the width (in pixels) of the string per line so that should any line exceed this value, GameMaker will automatically split the text to the next line at the nearest available whitespace (if the text has no whitespaces then it will overrun this maximum width value).

Any whitespace placed at the start of the string (or at the start of a new line) will not count towards the maximum width, and will function as indentation for the line.

A value of -1 for the line separation argument will default to a separation based on the height of the "M" character in the chosen font.

#### Syntax:

draw\_text\_ext(x, y, string, sep, w);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the drawn string. |
| y | Real | The y coordinate of the drawn string. |
| string | String | The string to draw. |
| sep | Real | The distance in pixels between lines of text. |
| w | Real | The maximum width in pixels of the string before a line break. |

#### Returns:

N/A

#### Example:

draw\_text\_ext(100, 50, keyboard\_string, 3, 300);

The above code will draw whatever text the user types into the keyboard, splitting it onto new lines every time the string length for that line exceeds 300 pixels. the code will also maintain a separation of 3 pixels between lines should this occur.