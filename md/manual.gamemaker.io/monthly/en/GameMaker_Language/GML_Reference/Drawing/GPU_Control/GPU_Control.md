---
title: "GPU Control"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/GPU_Control.htm"
converted: "2025-09-14T03:59:49.852Z"
---

# GPU Control

When drawing things in a room, you'll often require a more granular control over exactly how drawing will be done. You may wish for there to be no alpha blending, or you may require culling, or you may need to switch texture interpolation on or off. All this is possible - and a lot more! - using the GPU controller functions listed below.

IMPORTANT Most of these functions are global in scope and once set or changed will affect how everything is drawn from then onwards.

## Function Reference

### Getters

-   [gpu\_get\_blendenable](gpu_get_blendenable.md)
-   [gpu\_get\_ztestenable](gpu_get_ztestenable.md)
-   [gpu\_get\_zfunc](gpu_get_zfunc.md)
-   [gpu\_get\_zwriteenable](gpu_get_zwriteenable.md)
-   [gpu\_get\_depth](gpu_get_depth.md)
-   [gpu\_get\_fog](gpu_get_fog.md)
-   [gpu\_get\_cullmode](gpu_get_cullmode.md)
-   [gpu\_get\_blendmode](gpu_get_blendmode.md)
-   [gpu\_get\_blendmode\_ext](gpu_get_blendmode_ext.md)
-   [gpu\_get\_blendmode\_ext\_sepalpha](gpu_get_blendmode_ext_sepalpha.md)
-   [gpu\_get\_blendmode\_src](gpu_get_blendmode_src.md)
-   [gpu\_get\_blendmode\_dest](gpu_get_blendmode_dest.md)
-   [gpu\_get\_blendmode\_srcalpha](gpu_get_blendmode_srcalpha.md)
-   [gpu\_get\_blendmode\_destalpha](gpu_get_blendmode_destalpha.md)
-   [gpu\_get\_blendequation](gpu_get_blendequation.md)
-   [gpu\_get\_colourwriteenable](gpu_get_colourwriteenable.md)
-   [gpu\_get\_alphatestenable](gpu_get_alphatestenable.md)
-   [gpu\_get\_alphatestref](gpu_get_alphatestref.md)
-   [gpu\_get\_texfilter](gpu_get_texfilter.md)
-   [gpu\_get\_texfilter\_ext](gpu_get_texfilter_ext.md)
-   [gpu\_get\_texrepeat](gpu_get_texrepeat.md)
-   [gpu\_get\_texrepeat\_ext](gpu_get_texrepeat_ext.md)
-   [gpu\_get\_scissor](gpu_get_scissor.md)

### Setters

-   [gpu\_set\_blendenable](gpu_set_blendenable.md)
-   [gpu\_set\_ztestenable](gpu_set_ztestenable.md)
-   [gpu\_set\_zfunc](gpu_set_zfunc.md)
-   [gpu\_set\_zwriteenable](gpu_set_zwriteenable.md)
-   [gpu\_set\_depth](gpu_set_depth.md)
-   [gpu\_set\_fog](gpu_set_fog.md)
-   [gpu\_set\_cullmode](gpu_set_cullmode.md)
-   [gpu\_set\_blendmode](gpu_set_blendmode.md)
-   [gpu\_set\_blendmode\_ext](gpu_set_blendmode_ext.md)
-   [gpu\_set\_blendmode\_ext\_sepalpha](gpu_set_blendmode_ext_sepalpha.md)
-   [gpu\_set\_blendequation](gpu_set_blendequation.md)
-   [gpu\_set\_blendequation\_sepalpha](gpu_set_blendequation_sepalpha.md)
-   [gpu\_set\_colourwriteenable](gpu_set_colourwriteenable.md)
-   [gpu\_set\_alphatestenable](gpu_set_alphatestenable.md)
-   [gpu\_set\_alphatestref](gpu_set_alphatestref.md)
-   [gpu\_set\_texfilter](gpu_set_texfilter.md)
-   [gpu\_set\_texfilter\_ext](gpu_set_texfilter_ext.md)
-   [gpu\_set\_texrepeat](gpu_set_texrepeat.md)
-   [gpu\_set\_texrepeat\_ext](gpu_set_texrepeat_ext.md)
-   [gpu\_set\_scissor](../../../../../../../GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_scissor.md)

NOTE Before using the **blend mode** functions it is important to understand how they work so that you get the correct results when applying them. For that we have created the [Guide To Using Blendmodes](../../../../Additional_Information/Guide_To_Using_Blendmodes.md).

### Stencil Buffer

-   [gpu\_get\_stencil\_enable](gpu_get_stencil_enable.md)
-   [gpu\_get\_stencil\_func](gpu_get_stencil_func.md)
-   [gpu\_get\_stencil\_ref](gpu_get_stencil_ref.md)
-   [gpu\_get\_stencil\_pass](../../../../../../../GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_stencil_pass.md)
-   [gpu\_get\_stencil\_fail](gpu_get_stencil_fail.md)
-   [gpu\_get\_stencil\_depth\_fail](gpu_get_stencil_depth_fail.md)
-   [gpu\_get\_stencil\_read\_mask](gpu_get_stencil_read_mask.md)
-   [gpu\_get\_stencil\_write\_mask](../../../../../../../GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_stencil_write_mask.md)
-   [gpu\_set\_stencil\_enable](gpu_set_stencil_enable.md)
-   [gpu\_set\_stencil\_func](gpu_set_stencil_func.md)
-   [gpu\_set\_stencil\_ref](gpu_set_stencil_ref.md)
-   [gpu\_set\_stencil\_pass](../../../../../../../GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_stencil_pass.md)
-   [gpu\_set\_stencil\_fail](gpu_set_stencil_fail.md)
-   [gpu\_set\_stencil\_depth\_fail](gpu_set_stencil_depth_fail.md)
-   [gpu\_set\_stencil\_read\_mask](gpu_set_stencil_read_mask.md)
-   [gpu\_set\_stencil\_write\_mask](gpu_set_stencil_write_mask.md)

### GPU Stack

-   [gpu\_push\_state](../../../../../../../GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_push_state.md)
-   [gpu\_pop\_state](gpu_pop_state.md)
-   [gpu\_get\_state](gpu_get_state.md)
-   [gpu\_set\_state](gpu_set_state.md)

### Frustum Culling

-   [gpu\_get\_sprite\_cull](gpu_get_sprite_cull.md)
-   [gpu\_set\_sprite\_cull](gpu_set_sprite_cull.md)