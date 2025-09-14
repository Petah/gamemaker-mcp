---
title: "Transferring Data Between Buffers"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/Transferring_Data_Between_Buffers.htm"
converted: "2025-09-14T03:59:43.140Z"
---

# Transferring Data Between Buffers

This page gives an overview of how you can transfer data between buffers and vertex buffers.

At the lowest level, a buffer is a contiguous region in memory that consists of bytes. Using the functions [buffer\_read](buffer_read.md) and [buffer\_write](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md) (and [buffer\_peek](buffer_peek.md), [buffer\_poke](buffer_poke.md) and [buffer\_fill](buffer_fill.md)) basic data types can be written into a buffer. On top of this, these basic data types can be combined to create data structures where each entry in the structure follows a given format.

### Stride

Items stored in a buffer in such a structured way all take up the same number of bytes. This is the number of bytes to move to go from one item to the next and is called the stride.

## Buffer to Buffer

The following functions allow copying parts of data from one buffer to another:

-   [buffer\_copy](buffer_copy.md): copies a contiguous block of bytes once
-   [buffer\_copy\_stride](buffer_copy_stride.md): copies a contiguous block of bytes multiple times. You can use this to copy e.g. all positions, all colours, all UV's, etc.

## Buffer to Vertex Buffer

A vertex buffer is a special type of buffer. The vertex format determines what data is written to the buffer and in which order. You don't have to write the values directly, but can call functions such as [vertex\_position\_3d](../Drawing/Primitives/vertex_position_3d.md), [vertex\_colour](../Drawing/Primitives/vertex_colour.md), [vertex\_texcoord](../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_texcoord.md), etc.

A few things are specific to vertex buffers:

-   The stride in this case is the size of the vertex format (and that of a vertex).
-   Most components of the vertex attributes are stored as a 32bit float (buffer\_f32).
-   Each of the components of a colour attribute (R, G, B, A) is stored as an unsigned byte (buffer\_u8).

The following schematic shows how the data in a vertex buffer maps to the data in a buffer, and the other way around:

![](../../../assets/Images/Scripting_Reference/GML/Reference/Buffers/buffer_transfer_overview.png)

TIP You can use the function [vertex\_format\_get\_info](../Drawing/Primitives/vertex_format_get_info.md) to get information on how the data of a vertex in a given format is laid out in a buffer.

The following functions can be used to transfer data between buffers and vertex buffers and vice versa:

-   [buffer\_create\_from\_vertex\_buffer](buffer_create_from_vertex_buffer.md)
-   [buffer\_create\_from\_vertex\_buffer\_ext](buffer_create_from_vertex_buffer_ext.md)
-   [buffer\_copy\_from\_vertex\_buffer](buffer_copy_from_vertex_buffer.md)
-   [vertex\_create\_buffer\_from\_buffer](../Drawing/Primitives/vertex_create_buffer_from_buffer.md)
-   [vertex\_create\_buffer\_from\_buffer\_ext](../Drawing/Primitives/vertex_create_buffer_from_buffer_ext.md)
-   [vertex\_update\_buffer\_from\_buffer](../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_update_buffer_from_buffer.md)