---
title: "vertex_ubyte4"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_ubyte4.htm"
converted: "2025-09-14T03:59:53.532Z"
---

# vertex\_ubyte4

This function adds four unsigned byte values (0 - 255) to the vertex data.

The vertex buffer must have been formatted correctly to accept this using the [vertex\_format\_add\_custom](vertex_format_add_custom.md) function.

IMPORTANT On Windows, Xbox, PS4 and PS5 the ubyte4 data type only works if you use the native shader type (HLSL/PSSL) and tell that the input is uint4 in the shader.

#### Syntax:

vertex\_ubyte4(buffer, byte, byte, byte, byte);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to write the information to. |
| byte | Real | The first input value. |
| byte | Real | The second input value. |
| byte | Real | The third input value. |
| byte | Real | The fourth input value. |

#### Returns:

N/A

#### Example:

vertex\_ubyte4(buff, irandom(255), irandom(255), irandom(255), 127);

The above code adds four values to the vertex data being defined.