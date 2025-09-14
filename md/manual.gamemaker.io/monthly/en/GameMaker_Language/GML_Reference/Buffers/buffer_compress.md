---
title: "buffer_compress"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_compress.htm"
converted: "2025-09-14T03:59:43.252Z"
---

# buffer\_compress

This function compresses part (or all) of a buffer using [zlib compression](https://en.wikipedia.org/wiki/Zlib) and returns a new buffer containing the compressed data.

You supply the buffer to compress (as returned by [buffer\_create](buffer_create.md)), the offset within the buffer to use in bytes, and the size of the buffer data to compress (also in bytes). The function will return the compressed buffer as a new buffer, or \-1 if it has failed for any reason.

The function does not alter the original buffer.

#### Syntax:

buffer\_compress(buffer, offset, size);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to compress. |
| offset | Real | The offset within the buffer to compress (in bytes). |
| size | Real | The size of the buffer area to compress (in bytes). |

#### Returns:

[Buffer](buffer_create.md) or -1 in case anything went wrong

#### Example:

var \_srcBuff = buffer\_create(1024, buffer\_grow, 1);
buffer\_write(\_srcBuff, global.DataString);
var \_cmpBuff = buffer\_compress(\_srcBuff, 0, buffer\_tell(\_srcBuff));
buffer\_save(\_cmpBuff, "Player\_Save.sav");
buffer\_delete(\_srcBuff);
buffer\_delete(\_cmpBuff);

The above code creates a buffer then populates it with the data from a string. This buffer is then compressed and saved, and both the source and compressed buffers are deleted.