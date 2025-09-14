---
title: "gpu_get_fog"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_fog.htm"
converted: "2025-09-14T03:59:50.096Z"
---

# gpu\_get\_fog

This function can be used to retrieve the fog settings. The function returns a 4 element 1D array with the following information:

-   \[0\] = enabled toggle (a [Boolean](../../../GML_Overview/Data_Types.md), either true or false), default false
-   \[1\] = [Colour](../Colour_And_Alpha/Colour_And_Alpha.md), default c\_black
-   \[2\] = start distance ([Real](../../../GML_Overview/Data_Types.md)), default 0
-   \[3\] = end distance ([Real](../../../GML_Overview/Data_Types.md)), default 1

Note that you can change these values and pass the full array to the [gpu\_set\_fog()](gpu_set_fog.md) function as a single argument.

#### Syntax:

gpu\_get\_fog();

#### Returns:

[Array](../../../GML_Overview/Arrays.md) (4 elements only; see above for details)

#### Example:

var fog\_a = gpu\_get\_fog();
fog\_a\[1\] = c\_red;
gpu\_set\_fog(fog\_a);

The above code gets the current fog settings and then sets the colour element of the array to c\_red before setting the fog again using the changed array.