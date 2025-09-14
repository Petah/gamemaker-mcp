---
title: "array_length_1d"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_length_1d.htm"
converted: "2025-09-14T04:00:10.033Z"
---

# array\_length\_1d DEPRECATED

**WARNING!** This function is deprecated (and replaced by [array\_length()](array_length.md)) as arrays are no longer limited to only 1 or 2 dimensions, and as such this function is only supplied for support of legacy projects. All new projects should use the current way of creating and accessing multi-dimension arrays (see [here](../../GML_Overview/Arrays.md) for more information).

With this function you can get the length (number of entries) of a 1D array. For 2D arrays you should be using the [array\_height\_2d](array_height_2d.md) and [array\_length\_2d](array_length_2d.md) functions.

**IMPORTANT!:** If the array has over 32,000 entries this function will return an erroneous value and should not be used.

#### Syntax:

array\_length\_1d(array\_index);

| Argument | Type | Description |
| --- | --- | --- |
| array_index | Array | The index of the array to check. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

for (var i = array\_length\_1d(a) - 1; i > -1; i--;)
{
    a\[i\] = -1;
}

The above code will loop through an array and set each entry to -1.