---
title: "draw_clear_depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/draw_clear_depth.htm"
converted: "2025-09-14T03:59:55.538Z"
---

# draw\_clear\_depth

This function clears the depth buffer of the [current render target](Surfaces/surface_set_target.md) to the given depth value, which can be a value from 0 to 1.

The value 0 corresponds to znear, the value 1 corresponds to zfar.

#### Syntax:

draw\_clear\_depth(depth)

| Argument | Type | Description |
| --- | --- | --- |
| depth | Real | The value to clear the current render target's depth buffer to. A value ranging from 0 (representing znear) to 1 (representing zfar). |

#### Returns:

N/A

#### Example:

draw\_clear\_depth(1);

The above code clears the depth buffer to a value of 1.