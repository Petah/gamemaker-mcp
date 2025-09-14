---
title: "buffer_copy_from_vertex_buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_copy_from_vertex_buffer.htm"
converted: "2025-09-14T03:59:43.300Z"
---

# buffer\_copy\_from\_vertex\_buffer

This function copies some (or all) of the vertex data stored in one vertex buffer into a previously created regular buffer.

When copying from a vertex buffer into a regular buffer with this function, both buffers must have previously been created (using the [vertex\_create\_buffer](../Drawing/Primitives/vertex_create_buffer.md) and [buffer\_create](buffer_create.md) functions, for example). You can specify the range of vertex data that you wish to copy into the buffer, where the start vertex can be anywhere between 0 and the number of vertices -1, and you can give the number of vertices from that point on to copy. You can use the function [vertex\_get\_number](../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_get_number.md) on the vertex buffer to get the total number of vertices stored. Finally you give the buffer index to copy the vertex data into, as well as a data offset to define the position to copy the vertex data to in the destination buffer.

#### Syntax:

buffer\_copy\_from\_vertex\_buffer(vertex\_buffer, start\_vertex, num\_vertices, dest\_buffer, dest\_offset);

| Argument | Type | Description |
| --- | --- | --- |
| vertex_buffer | Vertex Buffer | The vertex buffer to copy from. |
| start_vertex | Real | The starting vertex. |
| num_vertices | Real | The total number of vertices to copy. |
| dest_buffer | Buffer | The buffer to copy to. |
| dest_offset | Real | The offset position to copy the data to (in bytes). |

#### Returns:

N/A

#### Example:

var \_v\_num = vertex\_get\_number(model\_buff);
buffer\_copy\_from\_vertex\_buffer(model\_buffer, 0, \_v\_num - 1, player\_buffer, 0);

The above code copies the vertex data stored in the vertex buffer stored in the variable model\_buffer, and then pastes it into the buffer stored in the variable player\_buffer.