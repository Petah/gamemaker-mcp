---
title: "draw_circle_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_circle_colour.htm"
converted: "2025-09-14T03:59:49.149Z"
---

# draw\_circle\_colour

With this function you can draw either an outline of a circle or a filled circle, and if it is filled you can define the interior and exterior fill colours. If these colours are not the same, you will get a gradient effect from one to the other and the colour settings will over-ride the base colour set with the function [draw\_set\_colour()](../Colour_And_Alpha/draw_set_colour.md). You can define how precise the drawing is with the function [draw\_set\_circle\_precision()](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_set_circle_precision.md).

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_circle\_colour(x, y, r, col1, col2, outline);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the center of the circle. |
| y | Real | The y coordinate of the center of the circle. |
| r | Real | The radius (distance from center to edge) of the circle in pixels. |
| col1 | Colour | The colour at the center of the circle. |
| col2 | Colour | The colour at the edge of the circle. |
| outline | Boolean | Whether the circle is an outline (true) or not (false). If true, col1 is irrelevant. |

#### Returns:

N/A

#### Example:

draw\_circle\_colour(x, y, 100, c\_white, c\_black, false);

This would draw a filled circle with its center at the executing instance's x and y position, with a radius of 100 pixels, from white in the center to black at the outside.