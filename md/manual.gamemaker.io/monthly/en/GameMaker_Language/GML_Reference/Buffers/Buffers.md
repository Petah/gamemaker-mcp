---
title: "Buffers"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/Buffers.htm"
converted: "2025-09-14T03:59:43.125Z"
---

# Buffers

GameMaker has a number of specific functions related to creating, modifying and loading/saving buffers. A buffer is a region of physical memory used to temporarily hold data while it's being moved from one place to another or manipulated in some way. For example, you can use a buffer to hold packet data awaiting transmission over a network or for storing a packet that has been received over a network.

### Usage Notes

Before using buffers please note the following points:

-   When a buffer is created, it is automatically cleared and filled to 0.
-   The "size" argument of the buffer functions always refers to the size _in bytes_ of the buffer.
-   The "alignment" argument refers to how data is stored within a buffer. If your alignment is set to say, 4, and you write a single piece of data which is 1 byte in size then do a [buffer\_tell](buffer_tell.md), you'll get an offset of 1. However, if you write another piece of data, also 1 byte in size, then do a [buffer\_tell](buffer_tell.md), you'll get an offset of 5 as the alignment has "padded" the data to that size. Alignment only affects _where_ things are written to, so if you do a [buffer\_tell](buffer_tell.md) after you write something, it'll return the current write position which immediately follows the data you have written. Note, however, that if you then write another piece of data, internally the buffer will move the write position along to the next multiple of the alignment size before actually writing the piece of data.
-   When dealing with "offset", this is the value _in bytes_ to offset the data by within the given buffer. So if your buffer is 2 byte aligned and you want to skip the first 4 aligned places, you would have an offset of 2 \* 4 bytes.
-   Some of the buffer functions also create a new buffer (like [buffer\_load](buffer_load.md) for example). Remember that these buffers will also need to be removed from memory when not in use using the [buffer\_delete](buffer_delete.md) function.
-   The memory used for creating buffers is _system memory_ so even when the game doesn't have focus, any data stored in a buffer should be safe. If the app is closed or restarted, however, it will be lost.
-   The "used size" of a buffer starts out at 0 for a buffer created with [buffer\_create](buffer_create.md) and is updated when you write to the buffer. It is set to the actual size of the data for a buffer that you load externally (using, e.g., [buffer\_load](buffer_load.md)). The used size can be manually changed using [buffer\_set\_used\_size](buffer_set_used_size.md).
-   A buffer of type buffer\_grow is automatically resized when you write data beyond its initial size. The new size of the buffer in memory will be greater than the actual size needed to store this extra data. The actual size used can be retrieved with [buffer\_get\_used\_size](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_get_used_size.md).
-   If you need a buffer of an exact size you can use a grow buffer that you write to until it reaches the exact size and then copy the right amount of bytes to a new buffer with [buffer\_copy](buffer_copy.md) that is exactly the size you want and delete the grow buffer.

The following pages explain how buffers work within the context of GameMaker and contain a couple of code examples for those users that are unsure of how to use them:

-   [Guide To Using Buffers](../../../Additional_Information/Guide_To_Using_Buffers.md)
-   [Transferring Data Between Buffers](Transferring_Data_Between_Buffers.md)

IMPORTANT When you create a buffer, a reference to the new buffer is returned. After the buffer is destroyed, we recommend that you set the variable that holds a buffer reference to \-1.

## Function Reference

### General

-   [buffer\_exists](buffer_exists.md)
-   [buffer\_create](buffer_create.md)
-   [buffer\_create\_from\_vertex\_buffer](buffer_create_from_vertex_buffer.md)
-   [buffer\_create\_from\_vertex\_buffer\_ext](buffer_create_from_vertex_buffer_ext.md)
-   [buffer\_delete](buffer_delete.md)
-   [buffer\_read](buffer_read.md)
-   [buffer\_write](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md)
-   [buffer\_fill](buffer_fill.md)
-   [buffer\_seek](buffer_seek.md)
-   [buffer\_tell](buffer_tell.md)
-   [buffer\_peek](buffer_peek.md)
-   [buffer\_poke](buffer_poke.md)
-   [buffer\_get\_type](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_get_type.md)
-   [buffer\_get\_alignment](buffer_get_alignment.md)
-   [buffer\_get\_address](buffer_get_address.md)
-   [buffer\_get\_size](buffer_get_size.md)
-   [buffer\_resize](buffer_resize.md)
-   [buffer\_sizeof](buffer_sizeof.md)
-   [buffer\_set\_used\_size](buffer_set_used_size.md)
-   [buffer\_get\_used\_size](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_get_used_size.md)
-   [buffer\_copy](buffer_copy.md)
-   [buffer\_copy\_stride](buffer_copy_stride.md)
-   [buffer\_copy\_from\_vertex\_buffer](buffer_copy_from_vertex_buffer.md)

### Loading & Saving

-   [buffer\_save](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_save.md)
-   [buffer\_save\_ext](buffer_save_ext.md)
-   [buffer\_save\_async](buffer_save_async.md)
-   [buffer\_load](buffer_load.md)
-   [buffer\_load\_ext](buffer_load_ext.md)
-   [buffer\_load\_async](buffer_load_async.md)
-   [buffer\_load\_partial](buffer_load_partial.md)

### Compression

-   [buffer\_compress](buffer_compress.md)
-   [buffer\_decompress](buffer_decompress.md)

### Async Groups

-   [buffer\_async\_group\_begin](buffer_async_group_begin.md)
-   [buffer\_async\_group\_option](buffer_async_group_option.md)
-   [buffer\_async\_group\_end](buffer_async_group_end.md)

### Surfaces

-   [buffer\_get\_surface](buffer_get_surface.md)
-   [buffer\_set\_surface](buffer_set_surface.md)
-   [buffer\_get\_surface\_depth](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_get_surface_depth.md)
-   [buffer\_set\_surface\_depth](buffer_set_surface_depth.md)

### Hashes & Checksums

-   [buffer\_md5](buffer_md5.md)
-   [buffer\_sha1](buffer_sha1.md)
-   [buffer\_crc32](buffer_crc32.md)

### Encoding

-   [buffer\_base64\_encode](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_base64_encode.md)
-   [buffer\_base64\_decode](buffer_base64_decode.md)
-   [buffer\_base64\_decode\_ext](buffer_base64_decode_ext.md)

### Loading & Saving Game States

NOTE These functions require a buffer to have been created previously.

-   [game\_load\_buffer](../General_Game_Control/game_load_buffer.md)
-   [game\_save\_buffer](../General_Game_Control/game_save_buffer.md)

### Vertex Buffers

-   [Primitive Building](../Drawing/Primitives/Primitives_And_Vertex_Formats.md)