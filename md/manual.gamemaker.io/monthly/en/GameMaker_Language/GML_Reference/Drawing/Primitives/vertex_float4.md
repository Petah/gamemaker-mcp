---
title: "vertex_float4"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_float4.htm"
converted: "2025-09-14T03:59:53.209Z"
---

# vertex\_float4

This function adds four floating point values to the vertex data.

The vertex buffer must have been formatted correctly to accept this using the [vertex\_format\_add\_custom](vertex_format_add_custom.md) function.

#### Syntax:

vertex\_float4(buffer, float, float, float, float);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to write the information to. |
| float | Real | The first input value. |
| float | Real | The second input value. |
| float | Real | The third input value. |
| float | Real | The fourth input value. |

#### Returns:

N/A

#### Example:

vertex\_float4(buff, 0.05, 0.01, room\_width / x, room\_height / y);

The above code adds four floating point values to the vertex data being defined.