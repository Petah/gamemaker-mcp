---
title: "gpu_set_blendmode_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_blendmode_ext.htm"
converted: "2025-09-14T03:59:50.504Z"
---

# gpu\_set\_blendmode\_ext

When GameMaker goes to draw a pixel there is a source colour (the colour of the pixel we're going to draw) and a destination colour (the colour that's already in the pixel we're drawing to), so when determining the new colour of the pixel, the source and destination colours are calculated according to the chosen blend mode.

Each component of the colours is stored as a floating point value between 0 and 1, and the new colour is calculated by multiplying each component of the source colour by some factor and by multiplying each component of destination colour by some other factor and then adding the results together component by component (or using a different [equation](gpu_set_blendequation.md)).

This function permits you to set how the different component parts that should be factored together to create a custom blend mode. The source and destination both have a red, green, blue and alpha component, and in the following chart the source's RGBA are considered (Rs, Gs, Bs, As) while the destination's are (Rd, Gd, Bd, Ad). The eleven constants that are available for use can be either source or destination (or both) when used in this function.

| Blend Mode Factor Constant |
| --- |
| Constant | Blend factor (Red, Green, Blue, Alpha) |
| bm_zero | (0, 0, 0, 0) |
| bm_one | (1, 1, 1, 1) |
| bm_src_colour | (Rs, Gs, Bs, As) |
| bm_inv_src_colour | (1-Rs, 1-Gs, 1-Bs, 1-As) |
| bm_src_alpha | (As, As, As, As) |
| bm_inv_src_alpha | (1-As, 1-As, 1-As, 1-As) |
| bm_dest_alpha | (Ad, Ad, Ad, Ad) |
| bm_inv_dest_alpha | (1-Ad, 1-Ad, 1-Ad, 1-Ad) |
| bm_dest_colour | (Rd, Gd, Bd, Ad) |
| bm_inv_dest_colour | (1-Rd, 1-Gd, 1-Bd, 1-Ad) |
| bm_src_alpha_sat | (f, f, f, 1) where f = min(As, 1-Ad) |

**IMPORTANT!** HTML5 without WebGL enabled will **not** be able to display the following modes correctly:

-   bm\_src\_colour
-   bm\_inv\_src\_colour
-   bm\_dest\_colour
-   bm\_inv\_dest\_colour
-   bm\_src\_alpha\_sat

Note that you can either supply two individual arguments to this function or you can supply an array of arguments (as returned by the function [gpu\_get\_blendmode\_ext()](gpu_get_blendmode_ext.md) for example). If supplying an array it should have the following two elements:

-   \[0\] = Source blend mode (default is bm\_src\_alpha)
-   \[1\] = Destination blend mode (default is bm\_inv\_src\_alpha)

To help you get the most from blend modes and to help understand how they work and how they affect the final image being drawn to the screen, we recommend that you read the following guide:

-   [Guide To Using Blendmodes](../../../../Additional_Information/Guide_To_Using_Blendmodes.md)

#### Syntax:

gpu\_set\_blendmode\_ext(src, dest);

| Argument | Type | Description |
| --- | --- | --- |
| src | Blend Mode Factor Constant | Source blend mode factor (see constants above). |
| dest | Blend Mode Factor Constant | Destination blend mode factor (see constants above). |

#### Returns:

N/A

#### Example:

gpu\_set\_blendmode\_ext(bm\_src\_alpha, bm\_one);
draw\_circle\_colour(100, 100, 50, c\_white, c\_black, 0);
gpu\_set\_blendmode(bm\_normal);

This will turn the black into transparency, creating a 'glow' effect from the white being strong on the outside and gradually weakening further from the circle centre. The blend mode is reset after the circle is drawn to ensure additive blending is not also applied to everything else after it.