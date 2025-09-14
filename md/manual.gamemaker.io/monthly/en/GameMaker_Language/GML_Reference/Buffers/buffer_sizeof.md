---
title: "buffer_sizeof"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_sizeof.htm"
converted: "2025-09-14T03:59:43.907Z"
---

# buffer\_sizeof

This function returns the size (in bytes) of the given [Buffer Data Type Constant](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md) (listed [here](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md)).

#### Syntax:

buffer\_sizeof(type);

| Argument | Type | Description |
| --- | --- | --- |
| type | Buffer Data Type Constant | The type of data to be checked (see the list of constants here). |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

var \_bytesize = 12 \* buffer\_sizeof(buffer\_u8);
buff = buffer\_create(\_bytesize, buffer\_fixed, 1);

The above code first calculates the size of the buffer to create by multiplying the unsigned 8bit data type by 12 (since we'll be using the buffer to hold 12 pieces of data, each 1 byte in size), and then uses this value to set a fixed buffer to the correct size.