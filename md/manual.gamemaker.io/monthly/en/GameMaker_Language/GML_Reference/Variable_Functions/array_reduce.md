---
title: "array_reduce"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_reduce.htm"
converted: "2025-09-14T04:00:10.146Z"
---

# array\_reduce

This function is used to obtain one value from an array, by processing all array elements one-by-one.

You supply a [Callback Method](Array_Functions.htm#h2) which runs for each element of the given array. The callback function must return a value, which is passed to the next element's callback, in its previous argument.

[Callback Function Callback Function](array_reduce.htm#)

#### Syntax:

function(previous, current, index);

| Argument | Type | Description |
| --- | --- | --- |
| previous | Any | The value returned by the previous iteration |
| current | Any | The element value of the current iteration |
| index | Real | The index of the current iteration |

The first time this callback function is called, its previous argument is set to the value of the first array element (or the element at the given offset), and the first iteration of the array range is skipped, meaning callbacks start from the second element in the given range.

If you supply the init parameter to this function, the first iteration will not be skipped, and the previous parameter for the first element's callback will be set to the init value you passed.

When the callback function returns a value, it's carried over into the next iteration. This process is repeated, until the given array (or the provided range) has been fully iterated. The function returns the value obtained from the final element's callback.

Finally there are a couple of special cases, which are handled as follows:

-   If the array has one element and no initial value is given, the function returns the first array element.
-   If the array is empty and an initial value is supplied, the function returns that initial value. If none is given, the function throws an error.

#### Syntax:

array\_reduce(array, function, \[init\], \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to use |
| function | Function | The function to use for each element |
| init | Any | OPTIONAL The initial value to use as the first carried value. If none is provided this defaults to array[offset] and the first iteration is skipped. |
| offset | Real | OPTIONAL The offset, or the starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2 > 1 > 0 instead of 0 > 1 > 2). See Offset And Length |

#### Returns:

[Any](../../GML_Overview/Data_Types.htm#variable)

#### Example:

var \_array = \[2, 1, 3, 4, 5\];

var \_min\_value = function(\_previous, \_current, \_index)
{
    return min(\_previous, \_current);
}

var \_value = array\_reduce(\_array, \_min\_value);

The above code tries to find the smallest value in an array. It first creates a temporary array array and fills it with a set of numbers.

Then it creates a new function min\_value that returns either the previous or current argument, whichever is smaller.

Finally it calls array\_reduce on the array, using \_min\_value as the callback function, and stores the final result in a temporary variable value. This variable will contain 1 as that is the smallest value in the array.