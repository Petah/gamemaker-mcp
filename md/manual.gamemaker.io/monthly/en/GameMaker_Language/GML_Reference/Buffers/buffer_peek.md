---
title: "buffer_peek"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_peek.htm"
converted: "2025-09-14T03:59:43.697Z"
---

# buffer\_peek

The buffer\_peek function reads a piece of data of a certain type from the given buffer at an arbitrary offset position (in bytes).

Like the [buffer\_read](buffer_read.md) function, this function also _reads_ data from a buffer. buffer\_read(), however, always reads at the buffer's current "seek" position and advances this position by the number of bytes being read. This function allows you to read a given piece of data without changing the current seek position. You simply supply the function with a buffer, and then an offset position (from the buffer start) within that buffer to read from, as well as the data type that you want to read.

**NOTE** Using the incorrect data type for the data being read will result in erroneous values!

If the function succeeds it returns the value that was read (a real, string, boolean, etc.), if it fails it returns simply undefined.

#### Syntax:

buffer\_peek(buffer, offset, type);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to use. |
| offset | Real | The offset position (in bytes) within the buffer to read the given data from. |
| type | Buffer Data Type Constant | The type of data that is to be read from the buffer (see the list of constants here). |

#### Returns:

[Real](../../GML_Overview/Data_Types.md), [Boolean](../../GML_Overview/Data_Types.md), [String](../../GML_Overview/Data_Types.md) or undefined (if it fails)

#### Example:

var \_red = buffer\_peek(buff, 1, buffer\_u8);
var \_green = buffer\_peek(buff, 2, buffer\_u8);
var \_blue = buffer\_peek(buff, 3, buffer\_u8);
image\_blend = make\_colour\_rgb(\_red, \_green, \_blue);

The above code gets three values from three different positions within the buffer stored in the variable buff and then uses those values to set the [image\_blend](../Asset_Management/Sprites/Sprite_Instance_Variables/image_blend.md) of the calling instance.