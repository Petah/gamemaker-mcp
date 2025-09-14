---
title: "array_reverse_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_reverse_ext.htm"
converted: "2025-09-14T04:00:10.194Z"
---

# array\_reverse\_ext

This function is similar to [array\_reverse](array_reverse.md), but instead of returning a modified array, it modifies the original array that you passed into the function.

By default, it reverse the whole array. You can reverse only a part of the array by supplying [Offset And Length](Array_Functions.htm#h1) values.

The function returns the number of elements that were modified in the array.

IMPORTANT This function _mutates_ the input array, i.e. changes it directly. Existing array elements in the range given by the offset and length parameter might be overwritten. For performance reasons the array is **not** resized and the new number of _valid_ elements is returned instead.

#### Syntax:

array\_reverse\_ext(array, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to use |
| offset | Real | OPTIONAL The offset, or the starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2 > 1 > 0 instead of 0 > 1 > 2). See: Offset And Length |

#### Returns:

[Real](../../GML_Overview/Data_Types.md) (the number of valid elements in the array)

#### Example:

values = \[1, 2, 3, 4, 8, 7, 6, 5\];

array\_reverse\_ext(values, -4, 4);

The above code first creates an array values. It then reverses the order of the last four elements using array\_reverse\_ext.