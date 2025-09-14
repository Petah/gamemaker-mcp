---
title: "gpu_set_stencil_write_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_stencil_write_mask.htm"
converted: "2025-09-14T03:59:50.821Z"
---

# gpu\_set\_stencil\_write\_mask

This function sets the stencil write mask.

The stencil write mask is used when writing values to the stencil buffer and defines for every bit whether it can be written to or not.

See [Bitwise Operators](../../../../Additional_Information/Bitwise_Operators.md) for detailed information on how to work with bitmask values.

#### Syntax:

gpu\_set\_stencil\_write\_mask(write\_mask);

| Argument | Type | Description |
| --- | --- | --- |
| write_mask | Real | The write mask to use, a bitmask value of 8 bits. |

#### Returns:

N/A

#### Example:

gpu\_set\_stencil\_write\_mask(0xFF);

The above code sets the stencil write mask to the hexadecimal value 0xFF, or the decimal value 255, meaning that all bits can be written to.