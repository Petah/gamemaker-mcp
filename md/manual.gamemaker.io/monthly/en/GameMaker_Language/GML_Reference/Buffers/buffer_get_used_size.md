---
title: "buffer_get_used_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_get_used_size.htm"
converted: "2025-09-14T03:59:43.597Z"
---

# buffer\_get\_used\_size

This function returns the used size of the given buffer.

The used size is the number of bytes that have been written to the buffer. It starts out at 0 for a new buffer created with [buffer\_create](buffer_create.md) and increases when you write to it. It can be set manually using [buffer\_set\_used\_size](buffer_set_used_size.md).

#### Syntax:

buffer\_get\_used\_size(buffer)

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to get the used size of |

#### Returns:

[Real](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_buffer = buffer\_create(16, buffer\_grow, 1);
repeat(6)
{
    buffer\_write(\_buffer, buffer\_f32, 4);
}
var \_used\_size = buffer\_get\_used\_size(\_buffer);
var \_size = buffer\_get\_size(\_buffer);

show\_debug\_message($"size: {\_size}, used: {\_used\_size}");

The above code creates a new grow buffer with an initial size of 16 bytes and then writes 6 values of type buffer\_f32 to it in a [repeat](../../../../../../GameMaker_Language/GML_Overview/Language_Features/repeat.md) loop. Each value of this data type takes up 4 bytes in the buffer, bringing the total size to 24 bytes, which is more than the initial size of the buffer. After the writes the used size and actual size of the buffer are retrieved using buffer\_get\_used\_size and [buffer\_get\_size](buffer_get_size.md) respectively and are output in a debug message. While the used size shows the exact number of bytes written (24), the size shows a larger number of bytes, indicating that the buffer was resized to accommodate more data than was written.