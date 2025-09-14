---
title: "vertex_float2"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_float2.htm"
converted: "2025-09-14T03:59:53.181Z"
---

# vertex\_float2

This function adds two floating point values to the vertex data.

The vertex buffer must have been formatted correctly to accept this using the [vertex\_format\_add\_custom](vertex_format_add_custom.md) function.

#### Syntax:

vertex\_float2(buffer, float, float);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to write the information to. |
| float | Real | The first input value. |
| float | Real | The second input value. |

#### Returns:

N/A

#### Example:

vertex\_float2(buff, 0.05, 0.01);

The above code adds two floating point values to the vertex data being defined.