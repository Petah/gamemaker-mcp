---
title: "buffer_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_exists.htm"
converted: "2025-09-14T03:59:43.457Z"
---

# buffer\_exists

This function checks whether the given buffer exists in memory or not. If it does the function will return true otherwise it will return false.

#### Syntax:

buffer\_exists(buffer)

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (buffer\_exists(buff))
{
    buffer\_delete(buff);
}

The above code checks to see if the variable buff holds a buffer and if it does, the buffer is deleted.