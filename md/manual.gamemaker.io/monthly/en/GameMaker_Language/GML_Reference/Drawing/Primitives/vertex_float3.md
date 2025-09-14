---
title: "vertex_float3"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_float3.htm"
converted: "2025-09-14T03:59:53.195Z"
---

# vertex\_float3

This function adds three floating point values to the vertex data.

The vertex buffer must have been formatted correctly to accept this using the [vertex\_format\_add\_custom](vertex_format_add_custom.md) function.

#### Syntax:

vertex\_float3(buffer, float, float, float);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to write the information to. |
| float | Real | The first input value. |
| float | Real | The second input value. |
| float | Real | The third input value. |

#### Returns:

N/A

#### Example:

vertex\_float3(buff, 0.05, 0.01, room\_width / x);

The above code adds three floating point values to the vertex data being defined.