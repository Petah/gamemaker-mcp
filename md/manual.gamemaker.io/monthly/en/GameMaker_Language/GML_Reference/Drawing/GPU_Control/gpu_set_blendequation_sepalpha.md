---
title: "gpu_set_blendequation_sepalpha"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_blendequation_sepalpha.htm"
converted: "2025-09-14T03:59:50.445Z"
---

# gpu\_set\_blendequation\_sepalpha

This function is the same as [gpu\_set\_blendequation](gpu_set_blendequation.md), however it allows you to set two separate equations: the first one is used for the RGB components of the source and destination, and the second one is used for the alpha component.

You can choose from the following equations for each:

| Blend Mode Equation Constant |
| --- |
| Constant | Description | Equation |
| bm_eq_add | Add both together (the default equation). | source + destination |
| bm_eq_subtract | Subtract source from destination. | destination - source |
| bm_eq_reverse_subtract | Subtract destination from source. | source - destination |
| bm_eq_min | Use whichever value is smaller. | min(source, destination) |
| bm_eq_max | Use whichever value is larger. | max(source, destination) |

IMPORTANT [Blend factors](gpu_set_blendmode_ext.md) are not applied when bm\_eq\_min or bm\_eq\_max is used as the blend equation, which is effectively the same as using bm\_one as the factors.

To help you get the most from blend modes and to help understand how they work and how they affect the final image being drawn to the screen, we recommend that you read the following guide:

-   [Guide To Using Blendmodes](../../../../Additional_Information/Guide_To_Using_Blendmodes.md)

#### Syntax:

gpu\_set\_blendequation\_sepalpha(equation, equation\_alpha);

| Argument | Type | Description |
| --- | --- | --- |
| equation | Blend Mode Equation Constant | Blend mode equation used for RGB components. |
| equation_alpha | Blend Mode Equation Constant | Blend mode equation used for the alpha component. |

#### Returns:

N/A

#### Example:

gpu\_set\_blendmode\_ext(bm\_src\_alpha, bm\_one);
gpu\_set\_blendequation\_sepalpha(bm\_subtract, bm\_max);
draw\_circle(100, 100, 50, 0);
gpu\_set\_blendmode(bm\_normal);

This changes the blend mode factors and then the equation, draws a circle and resets both the blend mode and equation (by switching to the normal blend mode) so they don't affect things drawn after this.

The blending here will function as the following: it will multiply the source pixel with the source alpha, and the destination pixel with 1 (keeping it the same as it was). It will then subtract the source RGB from the destination RGB, and use whichever alpha value is larger.