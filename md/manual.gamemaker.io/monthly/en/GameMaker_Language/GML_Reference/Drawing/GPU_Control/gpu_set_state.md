---
title: "gpu_set_state"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_state.htm"
converted: "2025-09-14T03:59:50.686Z"
---

# gpu\_set\_state

This function will set the current GPU state using the passed-in [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md).

The supplied map can be created using the function [gpu\_get\_state](gpu_get_state.md). It contains the following keys:

| Key | Type | Description |
| --- | --- | --- |
| Colour & Alpha |
| colorwriteenable | Real | A bitmask consisting of 4 bits, ordered ABGR, where each bit indicates whether the channel is written to or not. Corresponds to gpu_set_colourwriteenable. |
| blendenable | Boolean | Whether colour blending is enabled. As set with gpu_set_blendenable. |
| sepalphaenable | Boolean | A read-only value that indicates whether separate blend mode factors for the RGB and alpha channels are enabled. It will be true if you've set the blend mode using gpu_set_blendmode_ext_sepalpha, false in all other cases. |
| srcblend | Blend Mode Factor Constant | The source blend mode factor. |
| srcblendalpha | Blend Mode Factor Constant | The source blend mode factor of the alpha channel. |
| destblend | Blend Mode Factor Constant | The destination blend mode factor. |
| destblendalpha | Blend Mode Factor Constant | The destination blend mode factor of the alpha channel. |
| alphatestenable | Boolean | Whether to enable alpha testing. As set with gpu_set_alphatestenable. |
| alphatestfunc | Comparison Function Constant | A read-only value that indicates the comparison function used by GameMaker for the alpha test. Always set to cmpfunc_greater. |
| alphatestref | Real | The reference value to use for the alpha test, as a value from 0 to 255. As set with gpu_set_alphatestref. |
| Depth and Stencil Buffer |
| zwriteenable | Boolean | Whether z-writing is enabled. As set with gpu_set_zwriteenable. |
| ztestenable | Boolean | Whether z-testing is enabled. As set with gpu_set_ztestenable. |
| zfunc | Comparison Function Constant | The comparison function to use for z-testing. As set with gpu_set_zfunc. |
| stencilenable | Boolean | Whether to enable the stencil test. As set with gpu_set_stencil_enable. |
| stencilfunc | Comparison Function Constant | The comparison function to use for the stencil test. As set with gpu_set_stencil_func. |
| stencilref | Real | The reference value used for the stencil test. As set with gpu_set_stencil_ref. |
| stencilpass | Stencil Op Constant | The stencil operation to perform when the stencil test passes. As set with gpu_set_stencil_pass. |
| stencilfail | Stencil Op Constant | The stencil operation to perform when the stencil test fails. As set with gpu_set_stencil_fail. |
| stencilzfail | Stencil Op Constant | The stencil operation to perform when the stencil test passes but the depth test fails. As set with gpu_set_stencil_depth_fail. |
| stencilwritemask | Real | An 8 bit bitmask that determines which bits in the stencil buffer can be written to. As set with gpu_set_stencil_write_mask. |
| stencilreadmask | Real | An 8 bit bitmask that determines the bits to compare in the stencil test. As set with gpu_set_stencil_read_mask. |
| Backface Culling |
| cullmode | Culling Mode Constant | The backface culling mode. As set with gpu_set_cullmode. |
| Fog |
| fogenable | Boolean | Whether fog is set to enabled. The first element in the array passed to gpu_set_fog. |
| fogcolor | Colour | The fog colour to use, if enabled. The second element in the array passed to gpu_set_fog. |
| fogstart | Real | The distance at which the fog starts. The third element in the array passed to gpu_set_fog. |
| fogend | Real | The distance at which the fog ends. The fourth element in the array passed to gpu_set_fog. |
| Textures |
| minfilter | Mipmapping Filter Constant | The filtering mode used when textures are drawn minified. Determined by gpu_set_texfilter. |
| magfilter | Mipmapping Filter Constant | The filtering mode used when textures are drawn magnified. Determined by gpu_set_texfilter. |
| addressu | Real | The texture wrapping/clamping mode in the horizontal direction. As set with gpu_set_texrepeat. |
| addressv | Real | The texture wrapping/clamping mode in the vertical direction. As set with gpu_set_texrepeat. |
| Mipmapping |
| mipenable | Mipmapping Constant | Whether to enable mipmapping. As set with gpu_set_tex_mip_enable. |
| mipmip | Real | The minimum mipmap level to use. As set with gpu_set_tex_min_mip. |
| maxmip | Real | The maximum mipmap level to use. As set with gpu_set_tex_max_mip. |
| mipfilter | Mipmapping Filter Constant | The mip filter to use with mipmapping. As set with gpu_set_tex_mip_filter. |
| mipbias | Real | The bias value to use for mipmapping. As set with gpu_set_tex_mip_bias. |
| maxaniso | Real | The maximum level of anisotropy to use with the tf_anisotropic filter. As set with gpu_set_tex_max_aniso. |

#### Syntax:

gpu\_set\_state(ds\_map);

| Argument | Type | Description |
| --- | --- | --- |
| ds_map | DS Map | The GPU state to set as a DS Map. |

#### Returns:

N/A

#### Example:

gpu\_set\_state(gpu\_map);

The above code sets the GPU state using the map supplied in the variable gpu\_map.