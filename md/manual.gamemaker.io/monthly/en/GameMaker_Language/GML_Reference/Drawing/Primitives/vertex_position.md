---
title: "vertex_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_position.htm"
converted: "2025-09-14T03:59:53.435Z"
---

# vertex\_position

This function adds 2D position data to the vertex currently being defined for the custom primitive.

You supply the vertex buffer to write the data into as well as the x and y components of the vertex position.

#### Syntax:

vertex\_position(buffer, x, y);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to write the information to. |
| x | Real | The x position. |
| y | Real | The y position. |

#### Returns:

N/A

#### Example:

vertex\_position(buff, x - 100, y - 125);

The above code sets the 2D position of the vertex being defined.