---
title: "draw_vertex_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/draw_vertex_colour.htm"
converted: "2025-09-14T03:59:52.971Z"
---

# draw\_vertex\_colour

This function defines the position of a vertex for a primitive, with its own colour and alpha setting. The final look of the primitive will depend on the primitive type chosen to draw and the order with which you add the vertexes to it (see [draw\_primitive\_begin()](draw_primitive_begin.md) for more information) and the vertexes with different colours and alphas will blend smoothly from one to the other. To end and draw the primitive you must call [draw\_primitive\_end()](draw_primitive_end.md).

#### Syntax:

draw\_vertex\_colour(x, y, col, alpha)

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the vertex. |
| y | Real | The y coordinate of the vertex. |
| col | Colour | The colour to draw this vertex with. |
| alpha | Real | The alpha to draw this vertex with (0-1). |

#### Returns:

N/A

#### Example:

draw\_primitive\_begin(pr\_trianglelist);
draw\_vertex\_colour(100, 100, c\_blue, 0.1);
draw\_vertex\_colour(100, 200, c\_red, 0.1);
draw\_vertex\_colour(150, 150, c\_green, 1);
draw\_primitive\_end();

The above code will draw a semi-transparent triangle with each vertex coloured a different colour.