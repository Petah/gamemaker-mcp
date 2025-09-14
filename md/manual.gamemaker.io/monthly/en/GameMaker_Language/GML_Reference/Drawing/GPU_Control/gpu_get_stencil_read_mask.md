---
title: "gpu_get_stencil_read_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_stencil_read_mask.htm"
converted: "2025-09-14T03:59:50.206Z"
---

# gpu\_get\_stencil\_read\_mask

This function gets the stencil read mask.

The stencil read mask is a bitmask of 8 bits that's bitwise AND-ed & with both the stencil ref value and the current stencil value _before_ the values are compared in the stencil test, i.e. only the bits in the read mask are compared:

(ref & read\_mask) cmp\_func (stencil & read\_mask)

By default, the stencil read mask is set to all ones, i.e. 0b11111111 so the stencil test becomes:

ref cmp\_func stencil

See [Bitwise Operators](../../../../Additional_Information/Bitwise_Operators.md) for more information on how to work with bitmask values.

#### Syntax:

gpu\_get\_stencil\_read\_mask()

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_read\_mask = gpu\_get\_stencil\_read\_mask();
\_read\_mask |= 0b11000000;
gpu\_set\_stencil\_read\_mask(\_read\_mask);

The above code gets the current stencil read mask with a call to gpu\_get\_stencil\_read\_mask and stores it in a temporary variable \_read\_mask. It then sets the highest two bits to 1 by binary OR-ing the value with 0b11000000. Finally, the stencil read mask is set to the new value with [gpu\_set\_stencil\_read\_mask](gpu_set_stencil_read_mask.md). Note that the new mask value may be the same as the old value if the two highest bits were already set.