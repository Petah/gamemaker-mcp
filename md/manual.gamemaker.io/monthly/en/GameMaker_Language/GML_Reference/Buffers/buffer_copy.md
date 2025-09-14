---
title: "buffer_copy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_copy.htm"
converted: "2025-09-14T03:59:43.279Z"
---

# buffer\_copy

This function copies a segment (or all) of the data stored in one buffer to another.

When using two buffers and copying from one to the other, both buffers must have previously been created using the [buffer\_create](buffer_create.md) function (for example), and you can specify a data offset (in bytes) for the start point of the data to be copied from the source buffer relative to the start of the buffer, as well as another data offset to define the position to copy the data to in the destination buffer.

NOTE You cannot copy to the same buffer.

#### Syntax:

buffer\_copy(src\_buffer, src\_offset, size, dest\_buffer, dest\_offset);

| Argument | Type | Description |
| --- | --- | --- |
| src_buffer | Buffer | The buffer to copy from. |
| src_offset | Real | The data offset to start copying from (in bytes). |
| size | Real | The size of the data to copy (in bytes). |
| dest_buffer | Buffer | The buffer to copy to. |
| dest_offset | Real | The offset position to copy the data to (in bytes). |

#### Returns:

N/A

#### Example 1: Copying an entire buffer's contents

buff1 = buffer\_create(2048, buffer\_grow, 1);
buff2 = buffer\_create(2048, buffer\_grow, 1);
repeat(2048)
{
    buffer\_write(buff1, buffer\_u8, irandom(255));
}
buffer\_copy(buff1, 0, 2048, buff2, 0);

The above code first creates two buffers, buff1 and buff2, both with a size of 2048 bytes. buff1 is then filled with random bytes (type buffer\_u8) using [buffer\_write](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md) and a [repeat](../../GML_Overview/Language_Features/repeat.md) loop. irandom(255) returns random values from 0 to 255, both inclusive. Finally the entire buff1 is copied to buff2. Copying of the data starts at the start of buff1 (as the src\_offset parameter is 0). 2048 bytes (i.e. _all_ bytes) are copied to the destination buffer buff2. Writing starts at the start, indicated by the dest\_offset set to 0. After copying, buff2 contains the exact same bytes as buff1 (and so is identical).

#### Example 2: Copying from a buffer, starting at an offset

buff1 = buffer\_create(2048, buffer\_fixed, 1);
buff2 = buffer\_create(2048, buffer\_fixed, 1);
repeat(2048)
{
    buffer\_write(buff1, buffer\_u8, irandom(255));
}
var \_offset = 273;
var \_size = buffer\_get\_size(buff1) - \_offset;
buffer\_copy(buff1, \_offset, \_size, buff2, 0);

This example initialises the buffers in the same way as Example 1, i.e. it creates two buffers of size 2048 and fills the first one with random bytes. It then defines an offset from which to start copying bytes from the first buffer buff1 to the second buffer buff2. The number of bytes to copy (i.e. the _length_ or the _size_) is then calculated by subtracting the offset \_offset from the total size of the buffer, retrieved using [buffer\_get\_size](buffer_get_size.md). Finally, the contiguous block of bytes in buff1, starting at \_offset is copied to buff2. It is copied to buff2 at an offset of 0, so the byte in buff1 at index \_offset is copied to index 0 in buff2, the byte in buff1 at index \_offset+1 ends up at index 1 in buff2, etc. This happens for a total of \_size bytes.