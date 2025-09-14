---
title: "buffer_get_address"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_get_address.htm"
converted: "2025-09-14T03:59:43.489Z"
---

# buffer\_get\_address

This function gets a _pointer_ to the raw, _aligned_ buffer address.

This is primarily for use with extensions as you can pass this value through to them, allowing them to access the buffer data.

### Usage Notes

-   You cannot free the memory.
-   You cannot resize the memory.
-   You cannot write past the buffer address plus the buffer size (you can use the [buffer\_get\_size](buffer_get_size.md) function for this) or you will get an out of bounds error.

#### Syntax:

buffer\_get\_address(buffer);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to use. |

#### Returns:

[Pointer](../../GML_Overview/Data_Types.md)

#### Example:

var \_address = buffer\_get\_address(buff\_model);
var \_end\_address = \_address + buffer\_get\_size(buff\_model);

The above code gets the memory address of the buffer stored in the variable buff\_model and then gets the memory address for the end of the buffer by adding the size of the buffer, returned by [buffer\_get\_size](buffer_get_size.md), to the address. Both values are stored in local variables for further use.