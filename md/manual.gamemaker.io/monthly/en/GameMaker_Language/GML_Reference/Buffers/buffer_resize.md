---
title: "buffer_resize"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_resize.htm"
converted: "2025-09-14T03:59:43.752Z"
---

# buffer\_resize

This function resizes a given buffer to the size (in bytes) that you specify.

#### Syntax:

buffer\_resize(buffer, newsize);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to change the size of |
| newsize | Real | The new size of the buffer (in bytes) |

#### Returns:

N/A

#### Example:

if (buffer\_get\_size(buff) < 16384)
{
    buffer\_resize(buff, 16384);
}

The above code checks the size of the buffer stored in the variable buff. If it's less than the given value, the buffer is resized.