---
title: "vertex_float1"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_float1.htm"
converted: "2025-09-14T03:59:53.164Z"
---

# vertex\_float1

This function adds a floating point value to the vertex data.

The vertex buffer must have been formatted correctly to accept this using the [vertex\_format\_add\_custom](vertex_format_add_custom.md) function.

#### Syntax:

vertex\_float1(buffer, float);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to write the information to. |
| float | Real | The input value. |

#### Returns:

N/A

#### Example:

vertex\_float1(buff, 0.05);

The above code adds a floating point value to the vertex data being defined.