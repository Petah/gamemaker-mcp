---
title: "array_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_delete.htm"
converted: "2025-09-14T04:00:09.781Z"
---

# array\_delete

This function deletes a single value or a range of values from an array at any given position.

You provide a variable that holds the array, the index (position) in the array to delete from and the number of values to delete.

The function supports specifying negative values for the index and number of elements, as described under [Offset And Length](Array_Functions.htm#h1).

#### Syntax:

array\_delete(array, index, number);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | A reference to an array. |
| index | Real | The index (position) in the array to delete the value(s) from. Negative indices are supported and count from the end of the array. An offset of -1 refers to the last element of the array, an offset of -2 to the one before last element, etc. (see Offset And Length) |
| number | Real | The number of values to delete. A negative number means elements are deleted backwards, starting at the offset index. E.g. when index is 5, the indices 5, 6 and 7 will be deleted when number is 3, and indices 5, 4 and 3 will be deleted when number is -3. (see Offset And Length) |

#### Returns:

N/A

#### Example 1: Deleting the first 5 elements

var \_score\_array = \[96, 77, 54, 89, 92, 93, 80, 12, 65, 71\];
array\_delete(\_score\_array, 0, 5);

The above code deletes the first 5 elements in the given array \_score\_array, starting at index 0 (so indices 0 to 4 will be removed from the array). After the function has executed, the contents of the array are \[93, 80, 12, 65, 71\].

#### Example 2: Deleting the last 3 elements

var \_values = \["a", "b", "c", "d", "e", -1, -1, -1\];
array\_delete(\_values, -1, -3);

The above code creates a temporary array \_values and then deletes the last 3 elements using array\_delete.

Note that you can achieve the same by setting the index to the third last element and using a positive number: array\_delete(\_values, -3, 3);

#### Example 3: Deleting a range

var \_array\_with\_undefined = \[1, 2, 3, 4, 5, 6, undefined, undefined, undefined, 7, 8, 9\];
array\_delete(\_array\_with\_undefined, 6, 3);

The above code removes all the undefined values in the array \_array\_with\_undefined. The index of 6 refers to the index of the first undefined value, the number of 3 to the number of undefined values.