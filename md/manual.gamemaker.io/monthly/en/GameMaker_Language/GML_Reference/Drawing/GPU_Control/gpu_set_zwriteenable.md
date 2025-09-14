---
title: "gpu_set_zwriteenable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_zwriteenable.htm"
converted: "2025-09-14T03:59:50.934Z"
---

# gpu\_set\_zwriteenable

This function can be used to toggle on (true) and off (false) depth ordering using the z-buffer.

When an instance is rendered in GameMaker, the depth of a generated pixel (its z coordinate) is stored in the z-buffer, then, if another instance of the scene must be rendered at the same pixel, the two depths are compared (z-testing - see [gpu\_set\_ztestenable](gpu_set_ztestenable.md)) and the one "closer" to the observer is then saved to the z-buffer, replacing the old one.

However, this is not always what you wish to happen and there are moments when you may want something to be drawn over everything else, no matter what its z value is. In those cases you can use this function to switch off writing to the z-buffer and so force whatever is being drawn to be drawn over everything else.

NOTE The description given here is for the _default_ z-testing comparison mode, but that can be changed.

The default value is that z-writing is enabled (true).

#### Syntax:

gpu\_set\_zwriteenable(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | The comparison mode to use (see list above) |

#### Returns:

N/A

#### Example:

gpu\_set\_zwriteenable(false);
with (obj\_menu\_containers)
{
    draw\_self();
}
gpu\_set\_zwriteenable(true);

The above code switches off z-buffer writing, draws a number of objects, and then switches it back on again to continue drawing.