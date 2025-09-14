---
title: "draw_text"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Text/draw_text.htm"
converted: "2025-09-14T03:59:54.771Z"
---

# draw\_text

This function draws a [string](../../Strings/Strings.md) at any position within the [room](../../Asset_Management/Rooms/Rooms.md), using the current settings for drawing text.

The settings for drawing text are:

-   The font set by [draw\_set\_font](draw_set_font.md)
-   The colour and alpha set by [draw\_set\_colour](../Colour_And_Alpha/draw_set_colour.md) and [draw\_set\_alpha](../Colour_And_Alpha/draw_set_alpha.md)
-   The horizontal and vertical text alignment set by [draw\_set\_halign](draw_set_halign.md) and [draw\_set\_valign](draw_set_valign.md)

### Usage Notes

Use the [string](../../Strings/string.md) function to convert real numbers into text for drawing and + to combine strings. Use "\\n" within a string to add a line break so it is drawn over multiple lines (for information on how to properly format a string and what escape characters you can use, please see the [Strings](../../Strings/Strings.md) page).

#### Syntax:

draw\_text(x, y, string);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the drawn string. |
| y | Real | The y coordinate of the drawn string. |
| string | String | The string to draw. |

#### Returns:

N/A

#### Example:

draw\_text(x, y, "Hello, " + global.Name + "!\\nI hope you are well!");

The above code will draw a string at the instance x/y position, which will use the string stored in the global variable global.Name and split it over two lines.