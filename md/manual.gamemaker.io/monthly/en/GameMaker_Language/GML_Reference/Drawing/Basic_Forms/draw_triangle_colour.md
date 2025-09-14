---
title: "draw_triangle_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_triangle_colour.htm"
converted: "2025-09-14T03:59:49.484Z"
---

# draw\_triangle\_colour

With this function you can draw either an outline of a triangle or a filled triangle. If it is filled you can define the individual colours for each corner point and if these colours are not the same, you will get a gradient effect from one to the other (the colour settings will over-ride the base colour set with the function [draw\_set\_colour()](../Colour_And_Alpha/draw_set_colour.md)).

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_triangle\_colour(x1, y1, x2, y2, x3, y3, col1, col2, col3, outline);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the triangle's first corner. |
| y1 | Real | The y coordinate of the triangle's first corner. |
| x2 | Real | The x coordinate of the triangle's second corner. |
| y2 | Real | The y coordinate of the triangle's second corner. |
| x3 | Real | The x coordinate of the triangle's third corner. |
| y3 | Real | The y coordinate of the triangle's third corner. |
| col1 | Colour | The colour of the first corner. |
| col2 | Colour | The colour of the second corner. |
| col3 | Colour | The colour of the third corner. |
| outline | Boolean | Whether the triangle is an outline (true) or filled in (false). |

#### Returns:

N/A

#### Example:

draw\_triangle\_colour(200, 200, 300, 200, 200, 300, c\_red, c\_blue, c\_blue, false);

This would draw a filled isosceles right-angled triangle with red at the right angle, blue on the other two corners.