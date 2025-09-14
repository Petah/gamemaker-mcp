---
title: "string_height_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_height_ext.htm"
converted: "2025-09-14T04:00:07.593Z"
---

# string\_height\_ext

This function will return the height (in pixels) of the input string, taking into account the line separation and line-break width (which is defined as the number of pixels that the string can occupy before a line break is inserted). It is very handy for calculating distances between text elements based on the tallest of the letters that make up the string as well as the actual string length itself when spread over several lines as it would be drawn with [draw\_text\_ext()](../Drawing/Text/draw_text_ext.md) using the currently defined font. Separation and width can be set to -1 to get the default spacing.

#### Syntax:

string\_height\_ext(string, sep, w);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to measure the height of. |
| sep | Real | The distance in pixels between lines of text as if the string was being drawn. |
| w | Real | The maximum width (in pixels) of the string before a line break as if the string was bring drawn. |

#### Returns:

[Real](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var hh = string\_height\_ext(str\_Story\_Text\[1\], -1, 100);
draw\_text\_ext(32, 32, str\_Story\_Text\[1\], -1, 100);
draw\_text\_ext(32, 32 + hh, str\_Story\_Text\[2\], -1, 100);

The above code will get the height of the given string, taking into account the line separation and line-break width, and then draw two lines of text, using the returned total string height as a separator.