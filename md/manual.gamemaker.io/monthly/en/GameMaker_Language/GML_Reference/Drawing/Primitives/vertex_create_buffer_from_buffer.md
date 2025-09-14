---
title: "vertex_create_buffer_from_buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_create_buffer_from_buffer.htm"
converted: "2025-09-14T03:59:53.104Z"
---

# vertex\_create\_buffer\_from\_buffer

This function creates a new vertex buffer by copying the data from the specified source buffer.

The data in the source buffer must be pre-formatted according to the vertex format for building primitives for use with (for example) shaders.

#### Syntax:

vertex\_create\_buffer\_from\_buffer(buffer, format);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to create the vertex buffer from. |
| format | Vertex Format | The vertex format to use. |

#### Returns:

[Vertex Buffer](vertex_create_buffer.md)

#### Example:

vertex\_format\_begin();
vertex\_format\_add\_position\_3d();
vertex\_format\_add\_colour();
vertex\_format\_add\_texcoord();
var \_my\_format = vertex\_format\_end();
v\_buff = vertex\_create\_buffer\_from\_buffer(global.modelBuff, \_my\_format);

The above code first creates a new vertex format and then creates a new vertex buffer from a previously created regular buffer, applying the custom vertex format to it.