---
title: "buffer_write"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_write.htm"
converted: "2025-09-14T03:59:43.951Z"
---

# buffer\_write

This function can be used to write data to a previously created buffer. The data you write must be in agreement with the "type" argument of this function, meaning that you can't try to write a string as an unsigned 16bit integer, for example.

The function will write your given value at the buffer's [current seek position](buffer_tell.md).

The following constants can be used to define the data type:

| Constant | Description | Datatype Returned |
| --- | --- | --- |
| buffer_u8 | An unsigned, 8bit integer. This is a positive value from 0 to 255. | int32 |
| buffer_s8 | A signed, 8bit integer. This can be a positive or negative value from -128 to 127 (0 is classed as positive). | int32 |
| buffer_u16 | An unsigned, 16bit integer. This is a positive value from 0 - 65,535. | int32 |
| buffer_s16 | A signed, 16bit integer. This can be a positive or negative value from -32,768 to 32,767 (0 is classed as positive). | int32 |
| buffer_u32 | An unsigned, 32bit integer. This is a positive value from 0 to 4,294,967,295. | int64 |
| buffer_s32 | A signed, 32bit integer. This can be a positive or negative value from -2,147,483,648 to 2,147,483,647 (0 is classed as positive). | int32 |
| buffer_u64 | An unsigned 64bit integer. This is a positive value from 0 to 18,446,744,073,709,551,615. | int64 |
| buffer_f16 | A 16bit float. This can be a positive or negative value within the range of +/- 65504. | number (real) |
| buffer_f32 | A 32bit float. This can be a positive or negative value within the range of +/-16777216. | number (real) |
| buffer_f64 | A 64bit float. | number (real) |
| buffer_bool | A boolean value, can only be either 1 or 0 (true or false). It is stored in a single byte (8bit) | int32 |
| buffer_string | A string of any size, including a final null terminating character | string |
| buffer_text | A string of any size, without the final null terminating character | string |

The function will return 0 if it succeeds or one of the following constants in case of failure:

| Buffer Error Constant |
| --- |
| Constant | Description | Value |
| buffer_error_general | A general buffer error. | -1 |
| buffer_error_out_of_space | The buffer doesn't have enough space for the size of the type being written. | -2 |
| buffer_error_invalid_type | Attempting to write an invalid type to a buffer. For example, submitting a string value for a buffer_u16 type or a buffer_f16 into a "fast" buffer that only takes buffer_u8 values. | -4 |

#### Syntax:

buffer\_write(buffer, type, value);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to write to. |
| type | Real | The type of data to be written to the buffer (see the list of constants above). |
| value | Real | The data to write. |

#### Returns:

[Real](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (0 if success) or [Buffer Error Constant](buffer_write.md) (if it fails)

#### Example:

buffer\_seek(buff, buffer\_seek\_start, 0);
buffer\_write(buff, buffer\_s16, 0);
buffer\_write(buff, buffer\_s16, x);
buffer\_write(buff, buffer\_s16, y);

The above code finds the start of the buffer stored in the variable buff then writes a series of signed 16bit integer values to it.