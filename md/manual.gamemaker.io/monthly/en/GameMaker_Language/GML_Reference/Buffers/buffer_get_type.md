---
title: "buffer_get_type"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_get_type.htm"
converted: "2025-09-14T03:59:43.583Z"
---

# buffer\_get\_type

This function returns the type of a given buffer.

The return value will be one of the following constants:

| Buffer Type Constant |
| --- |
| Constant | Description |
| buffer_fixed | A buffer of a fixed size in bytes. The size is set when the buffer is created and cannot be changed again. |
| buffer_grow | A buffer that will grow dynamically as data is added. You create it with an initial size (which should be an approximation of the size of the data expected to be stored), and then it will expand to accept further data that overflows this initial size. |
| buffer_wrap | A buffer where the data will "wrap". When the data being added reaches the limit of the buffer size, the overwrite will be placed back at the start of the buffer, and further writing will continue from that point. |
| buffer_fast | A special "stripped" buffer that is extremely fast to read/write to. Can only be used with buffer_u8 data types, and must be 1 byte aligned. |

#### Syntax:

buffer\_get\_type(buffer);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to check. |

#### Returns:

[Buffer Type Constant](buffer_create.md)

#### Example:

type = buffer\_get\_type(buff);

The above code gets the type of the buffer stored in the variable buff and stores it in a variable.