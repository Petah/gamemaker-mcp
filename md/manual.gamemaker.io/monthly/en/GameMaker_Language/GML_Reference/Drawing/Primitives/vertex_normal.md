---
title: "vertex_normal"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_normal.htm"
converted: "2025-09-14T03:59:53.422Z"
---

# vertex\_normal

This function adds normal data to the vertex currently being defined for the custom primitive.

You supply the vertex buffer to write the data into as well as the x, y and z components of the normal.

#### Syntax:

vertex\_normal(buffer, nx, ny, nz);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to write the information to. |
| nx | Real | The x component of the normal. |
| ny | Real | The y component of the normal. |
| nz | Real | The z component of the normal. |

#### Returns:

N/A

#### Example:

vertex\_normal(buff, 0, 1, 1);

The above code will set the surface normal of the vertex being defined.