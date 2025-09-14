---
title: "buffer_create_from_vertex_buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_create_from_vertex_buffer.htm"
converted: "2025-09-14T03:59:43.393Z"
---

# buffer\_create\_from\_vertex\_buffer

This function allocates a portion of memory as a buffer in your game filled with the data from a previously created [vertex buffer](../Drawing/Primitives/Primitives_And_Vertex_Formats.md).

The function returns a reference to the buffer that should be stored in a variable and used for all further function calls to the buffer. The function takes a reference to the vertex buffer to use (as returned by the function [vertex\_create\_buffer](../Drawing/Primitives/vertex_create_buffer.md), for example) with the following constants being used to define the buffer type:

| Buffer Type Constant |
| --- |
| Constant | Description |
| buffer_fixed | A buffer of a fixed size in bytes. The size is set when the buffer is created and cannot be changed again. |
| buffer_grow | A buffer that will grow dynamically as data is added. You create it with an initial size (which should be an approximation of the size of the data expected to be stored), and then it will expand to accept further data that overflows this initial size. |
| buffer_wrap | A buffer where the data will "wrap". When the data being added reaches the limit of the buffer size, the overwrite will be placed back at the start of the buffer, and further writing will continue from that point. |
| buffer_fast | A special "stripped" buffer that is extremely fast to read/write to. Can only be used with buffer_u8 data types, and must be 1 byte aligned. |

Apart from the buffer type, you will also have to set the _byte alignment_ for the buffer. This value will vary depending on the data that you wish to store in the buffer, and in most cases a value of 1 is perfectly fine. However, be aware that for some operations a specific alignment is _essential_, and an incorrect alignment may cause errors (for further details on alignment see [Buffers](../../../Additional_Information/Guide_To_Using_Buffers.md)). The following is a general guide to show which values are most appropriate for each data type (when in doubt, use an alignment of 1):

-   Strings should be aligned to 1 byte.
-   Signed or unsigned 8bit integers can be aligned to any value, but note that for a fast buffer (see [buffer\_write](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md)) it _must_ be aligned to 1.
-   Signed or unsigned 16bit integers should be aligned to 2 bytes.
-   Signed or unsigned 32bit integers should be aligned to 4 bytes
-   Floats of up to 16bits should be aligned to 2 bytes.
-   Floats of up to 32bits should be aligned to 4 bytes.
-   Floats of up to 64bits should be aligned to 8 bytes.

**NOTE** Vertex buffers are 1 byte aligned, but you can create the buffer with any alignment depending on how you want to treat the data, as the vertex data is simply a raw memory copy into the buffer.

NOTE It's important that you remove any dynamically created resources like this from memory when you no longer need them to prevent memory leaks, so when you are finished with the buffer that you have created you should free it up again using [buffer\_delete](buffer_delete.md).

NOTE The vertex buffer used to create the new buffer is not removed from memory either and you should use the function [vertex\_delete\_buffer](../Drawing/Primitives/vertex_delete_buffer.md) when it is no longer required.

#### Syntax:

buffer\_create\_from\_vertex\_buffer(vertex\_buffer, type, alignment)

| Argument | Type | Description |
| --- | --- | --- |
| vertex_buffer | Vertex Buffer | A reference to the vertex buffer to use. |
| type | Buffer Type Constant | The type of buffer to create (see the constants list above). |
| alignment | Real | The byte alignment for the buffer |

#### Returns:

[Buffer](buffer_create.md)

#### Example:

player\_buffer = buffer\_create\_from\_vertex\_buffer(model\_buffer, buffer\_grow, 1);

The above code allocates memory to a buffer then copies the data from the given vertex buffer into it, returning the new buffer which is stored in the variable player\_buffer, for future use.