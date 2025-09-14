---
title: "gpu_get_blendequation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendequation.htm"
converted: "2025-09-14T03:59:49.904Z"
---

# gpu\_get\_blendequation

This function can be used to retrieve the current [blend equation](gpu_set_blendequation.md) being used for drawing. The returned value will be one of the following constants (the default value is bm\_eq\_add):

| Blend Mode Equation Constant |
| --- |
| Constant | Description | Equation |
| bm_eq_add | Add both together (the default equation). | source + destination |
| bm_eq_subtract | Subtract source from destination. | destination - source |
| bm_eq_reverse_subtract | Subtract destination from source. | source - destination |
| bm_eq_min | Use whichever value is smaller. | min(source, destination) |
| bm_eq_max | Use whichever value is larger. | max(source, destination) |

IMPORTANT [Blend factors](gpu_set_blendmode_ext.md) are not applied when bm\_eq\_min or bm\_eq\_max is used as the blend equation, which is effectively the same as using bm\_one as the factors.

#### Syntax:

gpu\_get\_blendequation();

#### Returns:

[Blend Mode Equation Constant](gpu_set_blendequation.md) (see above for constants)

#### Example:

if (gpu\_get\_blendequation() != bm\_eq\_add)
{
    gpu\_set\_blendequation(bm\_eq\_add);
}

The above code gets the current blend equation and if it is not bm\_eq\_add it is set to that constant.