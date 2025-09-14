---
title: "array_any"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_any.htm"
converted: "2025-09-14T04:00:09.634Z"
---

# array\_any

This function is used to check if any one element in the given array matches a condition. You check that by passing a [Predicate Method](Array_Functions.htm#h) that runs on each element of the given array, and returns true or false.

This function returns true if the predicate function returns true for at least one of the elements in the given array range.

[Predicate FunctionPredicate Function](array_any.htm#)

This function takes a [Predicate Method](Array_Functions.htm#h) that operates on the given array. The predicate function is passed the following arguments:

#### Syntax:

function(element, index);

| Argument | Type | Description |
| --- | --- | --- |
| element | Any | The current array element's value |
| index | Real | The current array index |

The predicate function should return a [Boolean](../../GML_Overview/Data_Types.md), which affects how the original function modifies or reads the array.

See information and examples on [Predicate Method](Array_Functions.htm#h).

#### Syntax:

array\_any(array, function, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to use |
| function | Function | The Predicate Method to run on each element |
| offset | Real | OPTIONAL The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: Offset And Length |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md) (**true** if there is any element in the array for which the predicate returns **true**, **false** if there isn't any)

#### Example:

var \_array =
\[
    "apple",
    "banana",
    "coconut",
    "dragonfruit"
\]

var \_contains\_apple = array\_any(\_array, function(\_val, \_ind)
{
    return \_val == "apple"
});

show\_debug\_message(\_contains\_apple); // prints 1 (true)

This creates an array containing strings of fruit names. We want to check if the array contains "apple" anywhere.

The predicate function \_contains\_apple checks if \_val == "apple" and returns the result. When this is true for any one of the array's elements, [array\_any](array_any.md) returns true.