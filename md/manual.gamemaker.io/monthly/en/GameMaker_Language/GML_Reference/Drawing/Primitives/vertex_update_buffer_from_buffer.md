---
title: "vertex_update_buffer_from_buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_update_buffer_from_buffer.htm"
converted: "2025-09-14T03:59:53.552Z"
---

# vertex\_update\_buffer\_from\_buffer

This function updates the contents of a vertex buffer using data in the given buffer.

IMPORTANT You cannot pass a [frozen](vertex_freeze.md) vertex buffer as the destination buffer.

### Usage Notes

-   The data in the source buffer should be formatted the same as the destination vertex buffer's vertex format. If it's not, you may get unexpected or no results.
-   You can use the function [vertex\_format\_get\_info](vertex_format_get_info.md) to get the size and offset of an attribute.
-   Writing data outside of the vertex buffer's current size will resize the vertex buffer as required.

#### Syntax:

vertex\_update\_buffer\_from\_buffer(dest\_vbuff, dest\_offset, src\_buffer\[, src\_offset, src\_size\]);

| Argument | Type | Description |
| --- | --- | --- |
| dest_vbuff | Vertex Buffer | The vertex buffer to copy to |
| dest_offset | Real | The offset in the destination buffer to start writing the data |
| src_buffer | Buffer | The source buffer to copy from |
| src_offset | Real | OPTIONAL The offset in bytes in the source buffer to start copying. Defaults to 0. |
| src_size | Real | OPTIONAL The size of the data in bytes to copy from the source buffer. Defaults to -1. When -1 the whole buffer is copied. |

#### Returns:

N/A

#### Example:

vertex\_format\_begin();
vertex\_format\_add\_position\_3d();     // Three buffer\_f32 values
vertex\_format\_add\_texcoord();        // Two buffer\_f32 values
vertex\_format = vertex\_format\_end();

var \_i = 0, \_vertex\_size = (3 + 2) \* buffer\_sizeof(buffer\_f32), \_buff = buffer\_create(1000, buffer\_fixed, 4);
repeat(51)
{
    repeat(3) buffer\_write(\_buff, buffer\_f32, random(500));        // x, y, z
    repeat(2) buffer\_write(\_buff, buffer\_f32, ((\_i++ mod 6) < 3)); // u, v
}

vb = vertex\_create\_buffer\_from\_buffer\_ext(\_buff, vertex\_format, 0, 30);
vertex\_update\_buffer\_from\_buffer(vb, 0, \_buff, 40 \* \_vertex\_size, 3 \* \_vertex\_size);

The code above first creates a new vertex format that consists of a 3D position attribute and a texture coordinate attribute. It then initialises a couple of temporary variables: a loop counter, the source buffer and the size in bytes of a single vertex. The (3 + 2) refers to the three float values used to store a position and the two float values to store a UV coordinate. The buffer is then filled with some random values to create a total of 51 randomly positioned vertices, or 17 triangles, stored as pr\_trianglelist (see [Primitive Type Constant](draw_primitive_begin.md)). After that, a new vertex buffer is created from the first 30 vertices in the buffer. Finally, the first three vertices in this vertex buffer are updated with a call to vertex\_update\_buffer\_from\_buffer; they are overwritten with the data of vertex index 40, 41 and 42 in the original buffer.