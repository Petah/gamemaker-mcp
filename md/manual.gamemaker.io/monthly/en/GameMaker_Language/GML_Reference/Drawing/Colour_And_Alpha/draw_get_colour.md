---
title: "draw_get_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_get_colour.htm"
converted: "2025-09-14T03:59:49.663Z"
---

# draw\_get\_colour

This function returns the current draw colour which is used for drawing forms, text, primitives and un-textured 3D models. This can be set with the [draw\_set\_colour()](draw_set_colour.md) function.

#### Syntax:

draw\_get\_colour()

#### Returns:

[Colour](Colour_And_Alpha.md)

#### Example:

var \_cur\_color = draw\_get\_color();
draw\_set\_color(text\_color);
draw\_text(x, y, text);
draw\_set\_color(\_cur\_color);

The above code stores the current draw colour into a local variable, and changes the draw colour based on an instance variable. After drawing some text, it resets the colour back to the value stored in the local variable.