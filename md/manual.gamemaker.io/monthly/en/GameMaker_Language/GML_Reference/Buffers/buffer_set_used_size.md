---
title: "buffer_set_used_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_set_used_size.htm"
converted: "2025-09-14T03:59:43.874Z"
---

# buffer\_set\_used\_size

This function sets the "used" size of the given buffer, which is the number of bytes that have been written to it. It is primarily for use within extensions.

When you write data to a buffer from an extension, GameMaker doesn't know how much of the buffer was filled by the extension code and is not able to read that data. This function can be called by the extension to tell the engine how many bytes of data have been written to the buffer, so the engine can read that data.

#### Syntax:

buffer\_set\_used\_size(buffer, size);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to use. |
| size | Real | The number of bytes to set as the "used" size. |

#### Returns:

N/A

#### Example:

buffer\_write(\_bufferAddress, buffer\_u8, 1);
buffer\_write(\_bufferAddress, buffer\_u8, 2);
buffer\_write(\_bufferAddress, buffer\_u16, 400);

buffer\_set\_used\_size(\_bufferAddress, 4);

The above functions would be called in an extension to write some data to a GameMaker buffer (through its memory address), and then set the number of bytes that were written to it so the engine can read that data.