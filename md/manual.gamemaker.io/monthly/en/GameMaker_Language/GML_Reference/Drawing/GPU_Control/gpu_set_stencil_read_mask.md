---
title: "gpu_set_stencil_read_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_stencil_read_mask.htm"
converted: "2025-09-14T03:59:50.791Z"
---

# gpu\_set\_stencil\_read\_mask

This function sets the stencil read mask.

The stencil read mask is a bitmask of 8 bits that's bitwise AND-ed & with both the stencil ref value and the current stencil value _before_ the values are compared in the stencil test, i.e. only the bits in the read mask are compared:

(ref & read\_mask) cmp\_func (stencil & read\_mask)

By default, the stencil read mask is set to all ones, i.e. 0b11111111 so the stencil test becomes:

ref cmp\_func stencil

See [Bitwise Operators](../../../../Additional_Information/Bitwise_Operators.md) for more information on how to work with bitmask values.

#### Syntax:

gpu\_set\_stencil\_read\_mask(mask);

| Argument | Type | Description |
| --- | --- | --- |
| mask | Real | The bitmask to use, a value in the range [0, 255], or, [0x00, 0xFF]. |

#### Returns:

N/A

#### Example:

gpu\_set\_stencil\_read\_mask(0b11111111);

The code above sets the stencil read mask to all ones by passing the binary literal 0b11111111 as the parameter to the function.