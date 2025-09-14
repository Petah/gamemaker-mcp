---
title: "draw_ellipse"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_ellipse.htm"
converted: "2025-09-14T03:59:49.168Z"
---

# draw\_ellipse

With this function you can draw either an outline of an ellipse or a filled ellipse by defining a rectangular area that will then have the ellipse created to fit. You can define how precise the drawing is with the function [draw\_set\_circle\_precision()](draw_set_circle_precision.md).

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_ellipse(x1, y1, x2, y2, outline);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the left of the ellipse. |
| y1 | Real | The y coordinate of the top of the ellipse. |
| x2 | Real | The x coordinate of the right of the ellipse. |
| y2 | Real | The y coordinate of the bottom of the ellipse. |
| outline | Boolean | Whether the ellipse is drawn filled (false) or as a one pixel wide outline (true). |

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_white);
draw\_ellipse(100, 100, 300, 200, false);

This will draw a filled ellipse within the defined rectangular area.