---
title: "buffer_tell"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_tell.htm"
converted: "2025-09-14T03:59:43.921Z"
---

# buffer\_tell

This function gets the current "seek" position for use in other buffer functions.

When you read or write data to a buffer using the [buffer\_read](buffer_read.md) or [buffer\_write](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md) functions, the current "seek" position is advanced by the bytes written or read. For example, if your buffer alignment is set to 4 bytes and you write a single piece of data which is 1 byte in size then do a buffer\_tell, you'll get a return value of 1. However, if you write another piece of data, also 1 byte in size, then do a buffer\_tell, you'll get a return value of 5 as the alignment has "padded" the data to that position.

To change the seek value of a buffer, use [buffer\_seek](buffer_seek.md).

#### Syntax:

buffer\_tell(buffer);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to use. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

var \_pos = buffer\_tell(buff); buffer\_seek(buff, buffer\_seek\_start, 0);
val\[0\] = buffer\_read(buff, buffer\_s16);
val\[1\] = buffer\_read(buff, buffer\_s16);
val\[2\] = buffer\_read(buff, buffer\_s16);
buffer\_seek(buff, buffer\_seek\_start, \_pos);

The above code will store the current seek position within the buffer stored in the variable buff to the local variable \_pos. The buffer seek position will then be set to the start of the buffer, and three pieces of data read into an array, before finally resetting the buffer seek position to where it was previously.