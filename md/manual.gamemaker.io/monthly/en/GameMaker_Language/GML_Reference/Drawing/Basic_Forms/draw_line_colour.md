---
title: "draw_line_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_line_colour.htm"
converted: "2025-09-14T03:59:49.238Z"
---

# draw\_line\_colour

With this function you can draw a 1 pixel wide line with the colour blended between colour 1 at the first point and colour 2 at the second point. The colour settings will over-ride the base colour set with the function [draw\_set\_colour()](../Colour_And_Alpha/draw_set_colour.md). Please note that the line being drawn may need different values (+/-1 on the x, y) to be drawn with the desired dimensions due to differences across the various supported platforms.

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_line\_colour(x1, y1, x2, y2, col1, col2);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the start of the line. |
| y1 | Real | The y coordinate of the start of the line. |
| x2 | Real | The x coordinate of the end of the line. |
| y2 | Real | The y coordinate of the end of the line. |
| col1 | Colour | The colour of the start of the line. |
| col2 | Colour | The colour of the end of the line. |

#### Returns:

N/A

#### Example:

draw\_line\_colour(50, 50, 300, 50, c\_red, c\_blue);

This would draw a horizontal line from (50,50) to (300,50) with a smooth red to blue gradient.