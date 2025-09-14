---
title: "string_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_height.htm"
converted: "2025-09-14T04:00:07.577Z"
---

# string\_height

This function will return the height (in pixels) of the input string, taking into account the line separation and any line-breaks the text may have. It is very handy for calculating distances between text elements based on the tallest of the letters that make up the string as it would be drawn with [draw\_text()](../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md) using the currently defined font.

#### Syntax:

string\_height(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to measure the height of. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

var hh = string\_height("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
draw\_text(32, 32, string(score));
draw\_text(32, 32 + hh, string(lives);

The above code will get the height of the given string and then draw two lines of text, using the returned string height as a separator.