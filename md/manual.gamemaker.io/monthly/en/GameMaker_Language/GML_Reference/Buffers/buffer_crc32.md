---
title: "buffer_crc32"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_crc32.htm"
converted: "2025-09-14T03:59:43.348Z"
---

# buffer\_crc32

This function will take input data from a buffer and returns a CRC32 checksum hash.

You specify the buffer to use, then an offset value (in bytes) for where to begin, and then a size (again in bytes) for the region to be hashed, and the function will return a 32 bit integer value for that region.

#### Syntax:

buffer\_crc32(buffer, offset, size);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to use. |
| offset | Real | The data offset value. |
| size | Real | The size of the buffer. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

check\_val = buffer\_crc32(buff, 0, buffer\_get\_size(buff));

The above code will create a CRC32 checksum hash value for the full data stored in the buffer indexed by the variable buff, and store the returned integer hash value in the variable check\_val.