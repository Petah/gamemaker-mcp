---
title: "vertex_create_buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_create_buffer.htm"
converted: "2025-09-14T03:59:53.073Z"
---

# vertex\_create\_buffer

This function creates a new vertex buffer. This is a special _grow_ buffer created by GameMaker which is pre-formatted for use when building primitives (for use with shaders, for example).

The function will return a handle to the buffer which should then be used in all further calls to it.

When using a vertex buffer created with this function you simply call [vertex\_begin](vertex_begin.md) to start assigning vertex data to it to start to define your custom primitive, which will then be held in the buffer ready for submission to the shader. The buffer can be re-used when necessary (unless you have used the [vertex\_freeze](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_freeze.md) function), with each call to [vertex\_begin](vertex_begin.md) wiping the previous buffer data ready to accept the new data.

#### Syntax:

vertex\_create\_buffer();

#### Returns:

[Vertex Buffer](vertex_create_buffer.md)

#### Example:

v\_buff = vertex\_create\_buffer();

The above code creates a new vertex buffer and store its handle in the variable v\_buff.