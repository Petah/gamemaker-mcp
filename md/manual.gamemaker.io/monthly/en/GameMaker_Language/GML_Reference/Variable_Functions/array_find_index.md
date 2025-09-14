---
title: "array_find_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_find_index.htm"
converted: "2025-09-14T04:00:09.869Z"
---

# array\_find\_index

This function is used to find the index of the first array element that satisfies a condition.

You supply a [Predicate Method](Array_Functions.htm#h) which runs for all elements in the array. It should return either true or false based on a condition.

As soon as the predicate function returns true for an element, the function stops and returns the index of that element.

If the predicate doesn't return true on any element, the function returns \-1.

[Predicate FunctionPredicate Function](array_find_index.htm#)

This function takes a [Predicate Method](Array_Functions.htm#h) that operates on the given array. The predicate function is passed the following arguments:

#### Syntax:

function(element, index);

| Argument | Type | Description |
| --- | --- | --- |
| element | Any | The current array element's value |
| index | Real | The current array index |

The predicate function should return a [Boolean](../../GML_Overview/Data_Types.md), which affects how the original function modifies or reads the array.

See information and examples on [Predicate Method](Array_Functions.htm#h).

TIP If you use an offset of \-1 and a negative length (\-infinity), then this function will search backwards from the end of the array, essentially letting you find the last element in the array that satisfies the predicate condition.

#### Syntax:

array\_find\_index(array, function, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to use |
| function | Function | The Predicate Method to run on each element |
| offset | Real | OPTIONAL The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: Offset And Length |

#### Returns:

[Real](../../GML_Overview/Data_Types.md) (the index of the first element found or -1 if nothing was found)

#### Example:

var \_f = function(\_element, \_index)
{
    return (\_element > 0);
}

var \_array = \[-1, -8, -2, -4, 0, 3, 8, 7, 5\];
var \_index = array\_find\_index(\_array, \_f);

The above code first creates a function that takes an array element and its index as the input. The function returns true if the element is greater than 0 and false if not. An array with values is then created.

Finally an index is found using array\_find\_index and stored in a temporary variable index. This variable will contain the value 5, as the first positive value in the array, 3, is at array index 5.