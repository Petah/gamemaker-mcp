---
title: "draw_point_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_point_colour.htm"
converted: "2025-09-14T03:59:49.326Z"
---

# draw\_point\_colour

With this function you can draw a single pixel anywhere on the screen with a colour that you define. The colour settings will override the base colour set with the function [draw\_set\_colour()](../Colour_And_Alpha/draw_set_colour.md).

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_point\_colour(x, y, col1);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the point. |
| y | Real | The y coordinate of the point. |
| col1 | Colour | The colour of the point. |

#### Returns:

N/A

#### Example:

draw\_point\_colour(50, 50, c\_red);

This would draw a red pixel at (50,50).