---
title: "vertex_position_3d"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_position_3d.htm"
converted: "2025-09-14T03:59:53.450Z"
---

# vertex\_position\_3d

This function adds 3D position data to the vertex currently being defined for the custom primitive.

You supply the vertex buffer to write the data into as well as the x, y and z components of the vertex position.

#### Syntax:

vertex\_position\_3d(buffer, x, y, z);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to write the information to. |
| x | Real | The x position. |
| y | Real | The y position. |
| z | Real | The z position. |

#### Returns:

N/A

#### Example:

vertex\_position\_3d(buff, x - 100, y - 125, 0);

The above code sets the position of the vertex being defined.