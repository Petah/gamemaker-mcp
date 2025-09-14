---
title: "draw_triangle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_triangle.htm"
converted: "2025-09-14T03:59:49.464Z"
---

# draw\_triangle

With this function you can draw either an outline of a triangle or a filled triangle.

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_triangle(x1, y1, x2, y2, x3, y3, outline);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the triangle's first corner. |
| y1 | Real | The y coordinate of the triangle's first corner. |
| x2 | Real | The x coordinate of the triangle's second corner. |
| y2 | Real | The y coordinate of the triangle's second corner. |
| x3 | Real | The x coordinate of the triangle's third corner. |
| y3 | Real | The y coordinate of the triangle's third corner. |
| outline | Boolean | Whether the triangle is drawn filled (false) or as a one pixel wide outline (true). |

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_aqua);
draw\_triangle(50, 50, 200, 50, 50, 200, 0);

This will draw a filled aquamarine-coloured isosceles right-angled triangle, with its first corner at (50,50), its second at (200,50) and its third at (50,200).