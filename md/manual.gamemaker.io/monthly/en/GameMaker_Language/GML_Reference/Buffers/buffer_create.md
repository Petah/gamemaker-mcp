---
title: "buffer_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_create.htm"
converted: "2025-09-14T03:59:43.371Z"
---

# buffer\_create

This function creates a new buffer and returns it.

The function allocates a portion of memory for the buffer, which can then be used to store different types of data (specified when you write to the buffer using the [buffer\_write](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md), [buffer\_poke](buffer_poke.md) or [buffer\_fill](buffer_fill.md) function).

The following constants can be used to define the buffer type:

| Buffer Type Constant |
| --- |
| Constant | Description |
| buffer_fixed | A buffer of a fixed size in bytes. The size is set when the buffer is created and cannot be changed again. |
| buffer_grow | A buffer that will grow dynamically as data is added. You create it with an initial size (which should be an approximation of the size of the data expected to be stored), and then it will expand to accept further data that overflows this initial size. |
| buffer_wrap | A buffer where the data will "wrap". When the data being added reaches the limit of the buffer size, the overwrite will be placed back at the start of the buffer, and further writing will continue from that point. |
| buffer_fast | A special "stripped" buffer that is extremely fast to read/write to. Can only be used with buffer_u8 data types, and must be 1 byte aligned. |

Apart from the buffer type, you will also have to set the _byte alignment_ for the buffer. This value will vary depending on the data that you wish to store in the buffer, and in most cases a value of 1 is perfectly fine. However, be aware that for some operations a specific alignment is _essential_, and an incorrect alignment may cause errors (for further details on alignment see [Guide To Using Buffers](../../../Additional_Information/Guide_To_Using_Buffers.md)). The following is a general guide to show which values are most appropriate for each data type (when in doubt, use an alignment of 1):

-   Strings should be aligned to 1 byte.
-   Signed or unsigned 8bit integers can be aligned to any value, but note that for a fast buffer (see [buffer\_write](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md)) it _must_ be aligned to 1.
-   Signed or unsigned 16bit integers should be aligned to 2 bytes.
-   Signed or unsigned 32bit integers should be aligned to 4 bytes.
-   Floats of up to 16bits should be aligned to 2 bytes.
-   Floats of up to 32bits should be aligned to 4 bytes.
-   Floats of up to 64bits should be aligned to 8 bytes.

NOTE Byte alignment can be very important as the wrong choice may adversely affect performance.

IMPORTANT You cannot create buffers that are 2 Gibibytes (2,147,483,648 bytes) or larger.

NOTE It's important that you remove any dynamically created resources like this from memory when you no longer need them to prevent memory leaks, so when you are finished with the buffer that you have created you should free it up again using [buffer\_delete](buffer_delete.md).

#### Syntax:

buffer\_create(size, type, alignment)

| Argument | Type | Description |
| --- | --- | --- |
| size | Real | The size (in bytes) of the buffer. |
| type | Buffer Type Constant | The type of buffer to create (see the constants list above). |
| alignment | Real | The byte alignment for the buffer |

#### Returns:

[Buffer](buffer_create.md)

#### Example:

player\_buffer = buffer\_create(16384, buffer\_fixed, 2);

The above code allocates 16384 bytes of memory to a buffer and returns the buffer, storing the reference to it in the variable player\_buffer for future use. The buffer is aligned to a two byte boundary.