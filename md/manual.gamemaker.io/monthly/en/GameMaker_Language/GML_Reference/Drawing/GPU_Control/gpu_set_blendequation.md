---
title: "gpu_set_blendequation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_blendequation.htm"
converted: "2025-09-14T03:59:50.418Z"
---

# gpu\_set\_blendequation

When GameMaker goes to draw a pixel there is a source colour (the colour of the pixel we're going to draw) and a destination colour (the colour that's already in the pixel we're drawing to), so the source and destination colours need to be processed to create the final pixel value.

After the source and destination pixels are multiplied by the set [factors](gpu_set_blendmode_ext.md), those two pixels now need to be mixed together to generate the final pixel value. By default, they are added together, meaning the final pixel is formed as: (source \* factor) **+** (destination \* factor).

With this function, you can change how the final pixel is calculated from the source and destination, and you can choose between the following equations:

| Blend Mode Equation Constant |
| --- |
| Constant | Description | Equation |
| bm_eq_add | Add both together (the default equation). | source + destination |
| bm_eq_subtract | Subtract source from destination. | destination - source |
| bm_eq_reverse_subtract | Subtract destination from source. | source - destination |
| bm_eq_min | Use whichever value is smaller. | min(source, destination) |
| bm_eq_max | Use whichever value is larger. | max(source, destination) |

IMPORTANT [Blend factors](gpu_set_blendmode_ext.md) are not applied when bm\_eq\_min or bm\_eq\_max is used as the blend equation, which is effectively the same as using bm\_one as the factors.

You can set different equations for the colour components (RGB) and the alpha component separately by calling [gpu\_set\_blendequation\_sepalpha](gpu_set_blendequation_sepalpha.md).

To help you get the most from blend modes and to help understand how they work and how they affect the final image being drawn to the screen, we recommend that you read the following guide:

-   [Guide To Using Blendmodes](../../../../Additional_Information/Guide_To_Using_Blendmodes.md)

#### Syntax:

gpu\_set\_blendequation(equation);

| Argument | Type | Description |
| --- | --- | --- |
| equation | Blend Mode Equation Constant | Blend mode equation (see constants above). |

#### Returns:

N/A

#### Example:

gpu\_set\_blendmode\_ext(bm\_src\_alpha, bm\_one);
gpu\_set\_blendequation(bm\_subtract);
draw\_circle(100, 100, 50, 0);
gpu\_set\_blendmode(bm\_normal);

This changes the blend mode factors and then the equation, draws a circle and resets both the blend mode factors and equation (by switching to the normal blend mode) so they don't affect things drawn after this.

The blending here will function as the following: it will multiply the source pixel with the source alpha, and the destination pixel with 1 (keeping it the same as it was). It will then subtract the source from the destination.