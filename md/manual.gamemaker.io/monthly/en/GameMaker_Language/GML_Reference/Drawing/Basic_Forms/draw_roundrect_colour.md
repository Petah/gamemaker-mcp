---
title: "draw_roundrect_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect_colour.htm"
converted: "2025-09-14T03:59:49.397Z"
---

# draw\_roundrect\_colour

With this function you can draw either an outline of a rounded rectangle or a filled rounded rectangle where the (x1,y1) position is the top left corner and the (x2,y2) position is the bottom right corner. If it is filled you can define the individual colours for the centre and the edges, and if these colours are not the same, you will get a gradient effect from one to the other (the colour settings will over-ride the base colour set with the function [draw\_set\_colour()](../Colour_And_Alpha/draw_set_colour.md)).You can define how precise the drawing of the corners is with the function [draw\_set\_circle\_precision()](draw_set_circle_precision.md), but the corners are always drawn with a fixed radius. Should you need to change the corner radius you should use the function [draw\_roundrect\_colour\_ext()](draw_roundrect_colour_ext.md). Please note that the rectangle being drawn may need different values (+/-1 on the x, y, or width or height) to be drawn with the desired dimensions due to differences across the various supported platforms.

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_roundrect\_colour(x1, y1, x2, y2, col1, col2, outline);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the left of the rounded rectangle. |
| y1 | Real | The y coordinate of the top of the rounded rectangle. |
| x2 | Real | The x coordinate of the right of the rounded rectangle. |
| y2 | Real | The y coordinate of the bottom of the rounded rectangle. |
| col1 | Colour | The center colour. |
| col2 | Colour | The outside edge colour. |
| outline | Boolean | Whether the rectangle is an outline (true) or filled in (false). |

#### Returns:

N/A

#### Example:

draw\_roundrect\_colour(50, 50, 200, 200, c\_black, c\_white, false);

This would draw a filled-in square with rounded corners and with a smooth black/white gradient from the center to the edges.