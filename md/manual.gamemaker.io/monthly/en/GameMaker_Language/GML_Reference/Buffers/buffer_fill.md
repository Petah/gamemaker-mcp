---
title: "buffer_fill"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_fill.htm"
converted: "2025-09-14T03:59:43.474Z"
---

# buffer\_fill

This function fills a previously created buffer with a given data type and value.

The data you fill the buffer with must be in agreement with the "type" argument of this function, meaning that you can't try to fill with a string and use the unsigned 16bit integer type, for example. The type constants are the same as those used by the [buffer\_read](buffer_read.md) and [buffer\_write](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md) functions. The "size" is the size of the buffer (in bytes) that you wish to fill, while the offset is the offset value (also in bytes) from the start of the buffer to start the fill from.

#### Syntax:

buffer\_fill(buffer, offset, type, value, size);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The reference to the buffer to fill. |
| offset | Real | The data offset value (in bytes). |
| type | Real | The type of data that is to be written to the buffer (see the list of constants here). |
| value | Real | The data to write. |
| size | Real | The size of the buffer (in bytes) that you wish to fill. |

#### Returns:

N/A

#### Example:

map\_buffer = buffer\_create(16384, buffer\_fixed, 0);
buffer\_fill(map\_buffer, 0, buffer\_u16, 0, 16384);

The above code finds the start of the buffer stored in the variable buff then writes a series of signed 16bit integer values to it.