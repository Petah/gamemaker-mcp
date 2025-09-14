---
title: "gpu_get_blendmode_src"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendmode_src.htm"
converted: "2025-09-14T03:59:50.022Z"
---

# gpu\_get\_blendmode\_src

This function can be used to retrieve the current _source_ extended blend mode factor being used for drawing. The value returned will be one of the following constants ("s" denotes a value taken from the source while a "d" denotes a value from the destination):

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

s

#### Syntax:

gpu\_get\_blendmode\_src();

#### Returns:

[Blend Mode Factor Constant](gpu_get_blendmode_ext.md) (see above table)

#### Example:

var bm;
bm\[0\] = gpu\_get\_blendmode\_src();
bm\[1\] = gpu\_get\_blendmode\_dest();
gpu\_set\_blendmode\_ext\_sepalpha(bm\[0\], bm\[1\], bm\_inv\_src\_alpha, bm\_inv\_dest\_colour);

The above code creates a local array and gets the current source and destination blending factors. This array is then used to manipulate the alpha component of the blending factors.