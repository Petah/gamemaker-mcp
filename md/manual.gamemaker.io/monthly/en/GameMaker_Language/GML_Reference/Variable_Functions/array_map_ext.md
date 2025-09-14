---
title: "array_map_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_map_ext.htm"
converted: "2025-09-14T04:00:10.092Z"
---

# array\_map\_ext

This function is similar to [array\_map](array_map.md), but instead of returning a new array, it modifies the original array that was passed as an argument.

You supply a [Callback Method](Array_Functions.htm#h2) which runs for all elements in the array. It can return any value which is applied back to the original array, starting at the index given by offset, in the direction given by the sign of the length parameter.

This function returns the new number of valid elements, starting at the given offset position and in the direction set by the length argument. For this function, it's the number of elements modified in the given range.

[Callback FunctionCallback Function](../../../assets/snippets/Syntax_predicate_general.hts#)

The callback function you pass into this function should take the following arguments:

#### Syntax:

function(element, index);

| Argument | Type | Description |
| --- | --- | --- |
| element | Any | The current array element |
| index | Real | The current array index |

This callback function should return a value of [Any](../../GML_Overview/Data_Types.htm#variable) type that will be applied back to the array element.

IMPORTANT This function _mutates_ the input array, i.e. changes it directly. Existing array elements in the range given by the offset and length parameter might be overwritten. For performance reasons the array is **not** resized and the new number of _valid_ elements is returned instead.

#### Syntax:

array\_map\_ext(array, function, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to use |
| function | Function | The callback function to run on each element |
| offset | Real | OPTIONAL The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: Offset And Length |

#### Returns:

[Real](../../GML_Overview/Data_Types.md) (the number of valid elements in the array)

#### Example:

var \_values = \[7, 4, 11, 9, 12, 21, 17, 1, 2, 3\];
elements = array\_map\_ext(\_values, sqr, 2, 5);

The above code first creates an array values with a set of numbers. It then applies the built-in [sqr](../Maths_And_Numbers/Number_Functions/sqr.md) function to a range of the array using array\_map\_ext.

After the function has executed the array values will hold in indices 2 to 6 the square of the values that were originally there.