---
title: "gpu_get_stencil_write_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_stencil_write_mask.htm"
converted: "2025-09-14T03:59:50.232Z"
---

# gpu\_get\_stencil\_write\_mask

This function gets the stencil write mask.

The stencil write mask is used when writing values to the stencil buffer and defines for every bit whether it can be written to or not.

See [Bitwise Operators](../../../../../../../Additional_Information/Bitwise_Operators.md) for detailed information on how to work with bitmask values.

#### Syntax:

gpu\_get\_stencil\_write\_mask()

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_write\_mask = gpu\_get\_stencil\_write\_mask();
if (\_write\_mask == 0b00001111)
{
    show\_debug\_message("The stencil write mask's lowest 4 bits are set, the highest 4 bits are unset.");
}

The above code first retrieves the currently set stencil write mask and assigns it to a temporary variable \_write\_mask. It then checks if this value is equal to the binary literal value 0b00001111 (0x0E in hexadecimal or 15 in decimal). If this comparison is true, it means that the exact same bits are set in the write mask. A debug message is shown when this is the case.