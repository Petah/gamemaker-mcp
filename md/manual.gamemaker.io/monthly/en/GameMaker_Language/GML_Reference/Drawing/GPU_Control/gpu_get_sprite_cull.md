---
title: "gpu_get_sprite_cull"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_sprite_cull.htm"
converted: "2025-09-14T03:59:50.126Z"
---

# gpu\_get\_sprite\_cull

This function returns whether (frustum) culling of sprites and tile maps is enabled or not. It is enabled by default.

#### Syntax:

gpu\_get\_sprite\_cull()

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var \_cull\_sprites = gpu\_get\_sprite\_cull();

The above code calls gpu\_get\_sprite\_cull to retrieve whether sprites are currently culled against the view frustum when they're drawn. The value is stored in a temporary variable \_cull\_sprites.