---
title: "gpu_get_blendmode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendmode.htm"
converted: "2025-09-14T03:59:49.929Z"
---

# gpu\_get\_blendmode

This function can be used to retrieve the current blend mode being used for drawing. The returned value will be one of the following constants (the default value is bm\_normal):

| Blend Mode Constant |
| --- |
| Constant | Description | Extended Blend Mode | Blend Equation |
| bm_normal | Normal blending (the default blend mode). | (bm_src_alpha, bm_inv_src_alpha) | bm_eq_add |
| bm_add | Additive blending. Luminosity values of light areas are added. | (bm_src_alpha, bm_one) | bm_eq_add |
| bm_subtract | Subtractive blending. Source is subtracted from the destination. | (bm_src_alpha, bm_one) | bm_eq_subtract |
| bm_reverse_subtract | Reverse subtractive blending. Destination is subtracted from the source. | (bm_src_alpha, bm_one) | bm_eq_reverse_subtract |
| bm_min | Smaller value from source and destination is selected. | (bm_one, bm_one) | bm_eq_min |
| bm_max | Max blending. Similar to additive blending. | (bm_src_alpha, bm_inv_src_colour) | bm_eq_add |

#### Syntax:

gpu\_get\_blendmode();

#### Returns:

[Blend Mode Constant](gpu_get_blendmode.md) (see above for constants)

#### Example:

if (gpu\_get\_blendmode() != bm\_normal)
{
    gpu\_set\_blendmode(bm\_normal);
}

The above code gets the current blend mode and if it is not bm\_normal it is set to that constant.