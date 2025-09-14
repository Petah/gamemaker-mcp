---
title: "gpu_get_texrepeat"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_texrepeat.htm"
converted: "2025-09-14T03:59:50.270Z"
---

# gpu\_get\_texrepeat

With this function you can check to see whether texture repeating is enabled (returns true) or not (returns false). For more information on texture repeating, see the function [gpu\_set\_texrepeat()](gpu_set_texrepeat.md).

#### Syntax:

gpu\_get\_texrepeat();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (gpu\_get\_texrepeat())
{
    gpu\_set\_texrepeat(false);
}
else
{
    gpu\_set\_texrepeat(true);
}

The above code checks to see if texture repeating is on or off and switches it accordingly.