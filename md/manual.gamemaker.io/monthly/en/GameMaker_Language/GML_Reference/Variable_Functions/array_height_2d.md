---
title: "array_height_2d"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_height_2d.htm"
converted: "2025-09-14T04:00:09.955Z"
---

# array\_height\_2d DEPRECATED

**WARNING!** This function is deprecated (and replaced by [array\_length()](array_length.md)) as arrays are no longer limited to only 1 or 2 dimensions, and as such this function is only supplied for support of legacy projects. All new projects should use the current way of creating and accessing multi-dimension arrays (see [here](../../GML_Overview/Arrays.md) for more information).

With this function you can get the height (number of entries) of a the first dimension of a 2D array. You supply the array to check and the output from the function tells you how many initial entries it contains. You can get the number of entries for the second dimension of the array using the function [array\_length\_2d](array_length_2d.md).

#### Syntax:

array\_height\_2d(array\_index);

| Argument | Type | Description |
| --- | --- | --- |
| array_index | Array | The index of the array to check. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

for (var i = 0; i < array\_height\_2d(a); ++i;)
{
    for (var j = 0; j < array\_length\_2d(a, i); ++j;)
    {
        a\[i, j\] = -1;
    }
}

The above code will loop through a 2D array and set each entry to -1.