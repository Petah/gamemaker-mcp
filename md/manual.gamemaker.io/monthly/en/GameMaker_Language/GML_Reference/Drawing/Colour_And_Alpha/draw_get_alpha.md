---
title: "draw_get_alpha"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_get_alpha.htm"
converted: "2025-09-14T03:59:49.650Z"
---

# draw\_get\_alpha

This function returns the current value of the draw alpha, which will range between 0 (fully transparent) and 1 (fully opaque). The draw alpha affects the transparency of all draw functions, and can be set with the [draw\_set\_alpha()](draw_set_alpha.md) function.

#### Syntax:

draw\_get\_alpha()

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_cur\_alpha = draw\_get\_alpha();
draw\_set\_alpha(text\_alpha);
draw\_text(x, y, text);
draw\_set\_alpha(\_cur\_alpha);

The above code stores the current draw alpha into a local variable, and changes the draw alpha based on an instance variable. After drawing some text, it resets the alpha back to the value stored in the local variable.