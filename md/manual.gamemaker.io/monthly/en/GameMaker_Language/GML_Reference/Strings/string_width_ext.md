---
title: "string_width_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_width_ext.htm"
converted: "2025-09-14T04:00:07.973Z"
---

# string\_width\_ext

This function will return the maximum width (in pixels) of the input string, taking into account the line separation and line-break width (which is defined as the number of pixels that the string can occupy before a line break is inserted). It is very handy for calculating distances between text elements based on the maximum width of a string that is split over several lines as it would be drawn with [draw\_text\_ext()](../Drawing/Text/draw_text_ext.md) using the currently defined font. Separation and width can be set to -1 to get the default spacing.

#### Syntax:

string\_width\_ext(string, sep, w);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to measure the width of. |
| sep | Real | The distance in pixels between lines of text as if the string was being drawn. |
| w | Real | The maximum width (in pixels) of the string before a line break as if the string was bring drawn. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

var ww = string\_width\_ext(str\_Story\_Text\[1\], -1, 100);
draw\_text\_ext(32, 32, str\_Story\_Text\[1\], -1, 100);
draw\_text\_ext(32 + ww, 32, str\_Story\_Text\[2\], -1, 100);

The above code will get the width of the given string, taking into account the line separation and line-break width, and then draw two lines of text, using the returned total string width as a separator.