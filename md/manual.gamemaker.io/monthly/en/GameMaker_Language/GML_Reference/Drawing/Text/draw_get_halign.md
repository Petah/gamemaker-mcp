---
title: "draw_get_halign"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Text/draw_get_halign.htm"
converted: "2025-09-14T03:59:54.674Z"
---

# draw\_get\_halign

This function is used to get the text alignment setting along the horizontal axis, and will return one of the constants listed below.

#### Syntax:

draw\_get\_halign();

#### Returns:

[Constant](../../../GML_Overview/Variables/Constants.md)

| Constant | Alignment |
| --- | --- |
| fa_left |  |
| fa_center |  |
| fa_right |  |



#### Example:

var \_cur\_halign = draw\_get\_halign();
var \_cur\_valign = draw\_get\_valign();

draw\_set\_halign(fa\_right);
draw\_set\_valign(fa\_bottom);

draw\_text(100, 32, "Score: " + string(score));

draw\_set\_halign(\_cur\_halign);
draw\_set\_valign(\_cur\_valign);

The above code saves the currently applied "halign" and "valign" values to local variables, and then changes the alignments to draw some text. After drawing it, it resets the alignments back to the values stored in the local variables.