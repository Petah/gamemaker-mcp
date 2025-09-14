---
title: "draw_roundrect"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect.htm"
converted: "2025-09-14T03:59:49.380Z"
---

# draw\_roundrect

With this function you can draw either an outline of a rounded rectangle or a filled rounded rectangle where the (x1,y1) position is the top left corner and the (x2,y2) position is the bottom right corner. You can define how precise the drawing of the corners is with the function [draw\_set\_circle\_precision()](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_set_circle_precision.md), but this function uses a fixed radius for them (should you need to change the corner radius, use the function [draw\_roundrect\_ext()](draw_roundrect_ext.md)). Please note that the rectangle being drawn may need different values (+/-1 on the x, y, or width or height) to be drawn with the desired dimensions due to differences across the various supported platforms.

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_roundrect(x1, y1, x2, y2, outline);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the top left corner of the rounded rectangle (as if it were a normal rectangle). |
| y1 | Real | The y coordinate of the top left corner of the rounded rectangle (as if it were a normal rectangle). |
| x2 | Real | The x coordinate of the bottom right corner of the rounded rectangle (as if it were a normal rectangle). |
| y2 | Real | The y coordinate of the bottom right corner of the rounded rectangle (as if it were a normal rectangle). |
| outline | Boolean | Whether the rounded rectangle is drawn filled (false) or as a one pixel wide outline (true). |

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_lime);
draw\_roundrect(50, 100, 250, 200, 0);

This will draw a filled rounded rectangle, with its theoretical (before being curved) top left corner at (50,100) and its theoretical bottom right corner at (250,200).