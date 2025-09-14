---
title: "draw_line_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_line_width.htm"
converted: "2025-09-14T03:59:49.251Z"
---

# draw\_line\_width

With this function you can draw a line of a specified width between any two points in the game room. Please note that the line being drawn may need different values (+/-1 on the x, y) to be drawn with the desired dimensions due to differences across the various supported platforms.

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_line\_width(x1, y1, x2, y2, w);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the start of the line. |
| y1 | Real | The y coordinate of the start of the line. |
| x2 | Real | The x coordinate of the end of the line. |
| y2 | Real | The y coordinate of the end of the line. |
| w | Real | The width of the line in pixels. |

#### Returns:

N/A

#### Example:

draw\_set\_colour(c\_red);
draw\_line\_width(100, 100, 200, 200, 6);

This will draw a red diagonal line, 6 pixels wide, from point (100,100) to point (200,200).