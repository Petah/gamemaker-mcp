---
title: "string_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_width.htm"
converted: "2025-09-14T04:00:07.959Z"
---

# string\_width

This function will return the width (in pixels) of the input string, taking into account any line-breaks the text may have. It is very handy for calculating distances between text elements based on the total width of the letters that make up the string as it would be drawn with [draw\_text()](../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md) using the currently defined font.

#### Syntax:

string\_width(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to measure the width of. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

var ww = string\_width(str\_Name + " ");
draw\_text(32, 32, str\_Name));
draw\_text(32 + ww, 32, "has won the game!");

The above code will get the width of the given string and then draw two lines of text, using the returned string width as a separator.