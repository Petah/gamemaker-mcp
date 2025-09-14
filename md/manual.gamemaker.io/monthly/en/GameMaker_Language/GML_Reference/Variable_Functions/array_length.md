---
title: "array_length"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_length.htm"
converted: "2025-09-14T04:00:10.016Z"
---

# array\_length

This function gets the length (number of entries) of an array.

You supply the array and the function will return an integer value representing the number of entries the array contains. This function can also be used for multi-dimension arrays, as long as you specify which dimension you want to get the length of when you supply the array index, following this pattern:

// Returns the first dimension of the array
val = array\_length(my\_array);

// Returns the second dimension of the array
val = array\_length(my\_array\[0\]);

// Returns the third dimension of the array
val = array\_length(my\_array\[0\]\[0\]);

// etc.

NOTE The function returns 0 in case a data type that's not an [Array](../../GML_Overview/Arrays.md) is passed to it.

#### Syntax:

array\_length(array);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to check. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

for (var i = 0; i < array\_length(a); ++i)
{
    a\[i\] = -1;
}

The above code will loop through an array and set each entry to -1.