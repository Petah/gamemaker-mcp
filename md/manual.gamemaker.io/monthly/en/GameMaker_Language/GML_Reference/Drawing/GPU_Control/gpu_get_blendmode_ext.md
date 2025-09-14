---
title: "gpu_get_blendmode_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendmode_ext.htm"
converted: "2025-09-14T03:59:49.984Z"
---

# gpu\_get\_blendmode\_ext

This function can be used to retrieve the current extended blend mode being used for drawing. The function returns a 2 element 1D array with the following elements in it:

-   \[0\] = Source [Blend Mode Factor Constant](gpu_get_blendmode_ext.md) (default is bm\_src\_alpha)
-   \[1\] = Destination [Blend Mode Factor Constant](gpu_get_blendmode_ext.md) (default is bm\_inv\_src\_alpha)

The values of the array will be one of the following constants ("s" denotes a value taken from the source while a "d" denotes a value from the destination):

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

Note that you can change these values and pass the full array to the [gpu\_set\_blendmode\_ext()](gpu_set_blendmode_ext.md) function as a single argument.

#### Syntax:

gpu\_get\_blendmode\_ext();

#### Returns:

[Array](../../../GML_Overview/Arrays.md) (2 elements only; see above for constants)

#### Example:

var bm = gpu\_get\_blendmode\_ext();
bm\[0\] = bm\_src\_alpha;
gpu\_set\_blendmode\_ext(bm);

The above code gets the current extended blend mode, modifies the source, and then sets the extended blend mode again.