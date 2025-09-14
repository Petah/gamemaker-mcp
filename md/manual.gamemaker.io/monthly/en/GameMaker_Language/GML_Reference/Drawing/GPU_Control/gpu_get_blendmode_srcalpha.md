---
title: "gpu_get_blendmode_srcalpha"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendmode_srcalpha.htm"
converted: "2025-09-14T03:59:50.038Z"
---

# gpu\_get\_blendmode\_srcalpha

This function can be used to retrieve the current _source_ extended blend mode alpha factor. The value returned will be one of the following constants ("s" denotes a value taken from the source while a "d" denotes a value from the destination) with only the "A" component being used when drawing:

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

#### Syntax:

gpu\_get\_blendmode\_srcalpha();

#### Returns:

[Blend Mode Factor Constant](gpu_get_blendmode_ext.md) (see above table)

#### Example:

var bm;
bm\[0\] = gpu\_get\_blendmode\_srcalpha();
bm\[1\] = gpu\_get\_blendmode\_destalpha();
gpu\_set\_blendmode\_ext\_sepalpha(bm\_inv\_src\_alpha, bm\_inv\_dest\_colour, bm\[0\], bm\[1\]);

The above code creates a local array and gets the current source and destination blending factors for the alpha component. This array is then used to manipulate the RGB component of the blending factors.