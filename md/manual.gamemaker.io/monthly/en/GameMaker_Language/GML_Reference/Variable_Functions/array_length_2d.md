---
title: "array_length_2d"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_length_2d.htm"
converted: "2025-09-14T04:00:10.047Z"
---

# array\_length\_2d DEPRECATED

**WARNING!** This function is deprecated (and replaced by [array\_length()](array_length.md)) as arrays are no longer limited to only 1 or 2 dimensions, and as such this function is only supplied for support of legacy projects. All new projects should use the current way of creating and accessing multi-dimension arrays (see [here](../../GML_Overview/Arrays.md) for more information).

With this function you can get the length (number of entries) of a the second dimension of an array. You supply the entry number for the first dimension and the function will return the number of second dimension entries that the array has (to find the length of the first dimension use the function [array\_height\_2D()](array_height_2d.md)). The function will return 0 if the variable given is not an array or 1 if the variable is a 1D array (as there is still 1 row).

#### Syntax:

array\_length\_2d(array\_index, n);

| Argument | Type | Description |
| --- | --- | --- |
| array_index | Array | The index of the array to check. |
| n | Real | The entry of the array to get the length of. |

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