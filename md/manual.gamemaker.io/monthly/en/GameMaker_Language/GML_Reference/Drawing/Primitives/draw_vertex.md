---
title: "draw_vertex"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/draw_vertex.htm"
converted: "2025-09-14T03:59:52.957Z"
---

# draw\_vertex

This function defines the position of a vertex for a primitive. The final look of the primitive will depend on the primitive type chosen to draw and the order with which you add the vertexes to it. See [draw\_primitive\_begin()](draw_primitive_begin.md) for more information. To end and draw the primitive you must call [draw\_primitive\_end()](draw_primitive_end.md).

#### Syntax:

draw\_vertex(x, y)

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the vertex. |
| y | Real | The y coordinate of the vertex. |

#### Returns:

N/A

#### Example:

draw\_primitive\_begin(pr\_trianglelist);
draw\_vertex(100, 100);
draw\_vertex(100, 200);
draw\_vertex(150, 150);
draw\_primitive\_end();

The above code will draw a simple triangle primitive.