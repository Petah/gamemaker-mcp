---
title: "array_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_set.htm"
converted: "2025-09-14T04:00:10.210Z"
---

# array\_set

With this function you can set the value of an index in an array to a value. The function requires you to provide a variable that holds the array as well as the index to set and the value to set it to. This function can also be used for multi-dimension arrays, as long as you specify which dimension you want to set when you supply the array index, following this pattern:

// 1D array
array\_set(my\_array, 0, 100);
// 2D array
array\_set(my\_array\[0\], 0, 100);
// 3D array
array\_set(my\_array\[0\]\[0\], 0, 100);
// etc...

#### Syntax:

array\_set(variable, index, value);

| Argument | Type | Description |
| --- | --- | --- |
| variable | Array | The variable that holds the array. |
| index | Real | The index of the array element to set the value for. |
| value | Any | The value to set. |

#### Returns:

N/A

#### Example:

for (var i = 0; i < 10; ++i;)
{
    array\_set(score\_array, i, i\*100));
}

The above code will set the first 10 items in the given array to a value.