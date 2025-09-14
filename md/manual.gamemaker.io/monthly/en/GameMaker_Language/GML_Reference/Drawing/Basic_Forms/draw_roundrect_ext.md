---
title: "draw_roundrect_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect_ext.htm"
converted: "2025-09-14T03:59:49.435Z"
---

# draw\_roundrect\_ext

With this function you can draw either an outline of a rounded rectangle or a filled rounded rectangle where the (x1,y1) position is the top left corner and the (x2,y2) position is the bottom right corner. You must also supply radius values for the x and y axis (in pixels) and the corners will be rounded by these amounts. You can define how precise the drawing of the corners is with the function [draw\_set\_circle\_precision()](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_set_circle_precision.md). Please note that the rectangle being drawn may need different values (+/-1 on the x, y, or width or height) to be drawn with the desired dimensions due to differences across the various supported platforms.

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_roundrect\_ext(x1, y1, x2, y2, xrad, yrad, outline);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the top left corner of the rounded rectangle (as if it were a normal rectangle). |
| y1 | Real | The y coordinate of the top left corner of the rounded rectangle (as if it were a normal rectangle). |
| x2 | Real | The x coordinate of the bottom right corner of the rounded rectangle (as if it were a normal rectangle). |
| y2 | Real | The y coordinate of the bottom right corner of the rounded rectangle (as if it were a normal rectangle). |
| xrad | Real | The radius of the curve along the x axis from the rectangle corners. |
| yrad | Real | The radius of the curve along the y axis from the rectangle corners. |
| outline | Boolean | Whether the rounded rectangle is drawn filled (false) or as a one pixel wide outline (true). |

#### Returns:

N/A

#### Example:

var dist = point\_distance(x, y, mouse\_x, mouse\_y) / 10;
draw\_set\_colour(c\_lime);
draw\_roundrect\_ext(x - 50, y - 50, x + 50, y + 50, dist, dist, 0);

This will draw a filled rounded rectangle with the corners being rounded by an amount based on the mouse position relative to the instance doing the drawing.