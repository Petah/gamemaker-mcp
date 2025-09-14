---
title: "draw_rectangle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_rectangle.htm"
converted: "2025-09-14T03:59:49.346Z"
---

# draw\_rectangle

This function draws either an outline of a rectangle or a filled rectangle where the (x1,y1) position is the top left corner and the (x2,y2) position is the bottom right corner. Please note that the rectangle being drawn may need different values (+/-1 on the x, y, or width or height) to be drawn with the desired dimensions due to differences across the various supported platforms.

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_rectangle(x1, y1, x2, y2, outline);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the top left corner of the rectangle. |
| y1 | Real | The y coordinate of the top left corner of the rectangle. |
| x2 | Real | The x coordinate of the bottom right corner of the rectangle. |
| y2 | Real | The y coordinate of the bottom right corner of the rectangle. |
| outline | Boolean | Whether the rectangle is drawn filled (false) or as a one pixel wide outline (true). |

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_yellow);
draw\_rectangle(100, 100, 300, 200, true);

This will draw a rectangle outline, with its top left corner at (100,100) and its bottom right corner at (300,200).