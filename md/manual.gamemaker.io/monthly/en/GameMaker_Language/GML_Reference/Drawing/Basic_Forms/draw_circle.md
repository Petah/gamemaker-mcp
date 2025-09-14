---
title: "draw_circle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_circle.htm"
converted: "2025-09-14T03:59:49.134Z"
---

# draw\_circle

With this function you can draw either an outline of a circle or a filled circle. You can define how precise the drawing is with the function [draw\_set\_circle\_precision()](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_set_circle_precision.md).

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_circle(x, y, r, outline);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the center of the circle. |
| y | Real | The y coordinate of the center of the circle. |
| r | Real | The circle's radius (length from its center to its edge) |
| outline | Boolean | Whether the circle is drawn filled (false) or as a one pixel wide outline (true). |

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_white);
draw\_circle(100, 100, 50, true);

This will draw a one pixel wide white circle outline with a radius of 50 pixels.