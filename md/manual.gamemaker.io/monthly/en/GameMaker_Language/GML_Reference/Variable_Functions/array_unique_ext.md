---
title: "array_unique_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_unique_ext.htm"
converted: "2025-09-14T04:00:10.339Z"
---

# array\_unique\_ext

This function is similar to [array\_unique](array_unique.md), but instead of returning a modified array, it modifies the original array that you passed into the function.

The function will modify the array, starting at the offset, writing only the unique values it finds in the array, and ignoring duplicates.

It returns the number of elements written back to the array.

IMPORTANT This function _mutates_ the input array, i.e. changes it directly. Existing array elements in the range given by the offset and length parameter might be overwritten. For performance reasons the array is **not** resized and the new number of _valid_ elements is returned instead.

#### Syntax:

array\_unique\_ext(array, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to use |
| offset | Real | OPTIONAL The offset, or the starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2 > 1 > 0 instead of 0 > 1 > 2). See: Offset And Length |

#### Returns:

[Real](../../GML_Overview/Data_Types.md) (the number of valid elements in the array)

#### Example:

values = \[1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 8\];
valid\_values = array\_unique\_ext(array);

The above code first creates an array values with a set of values. It then calls array\_unique\_ext on the array and assigns the number of valid array elements to a new variable valid\_values.