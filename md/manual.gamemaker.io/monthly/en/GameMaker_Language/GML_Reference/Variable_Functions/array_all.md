---
title: "array_all"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_all.htm"
converted: "2025-09-14T04:00:09.606Z"
---

# array\_all

This function is used to check if all of the elements in the given array match the same condition. You check that by passing a [Predicate Method](Array_Functions.htm#h) that runs on each element of the given array, and returns true or false.

This function returns true if your predicate function returns true for _all_ of the elements in the given array range, otherwise it returns false.

[Predicate FunctionPredicate Function](array_all.htm#)

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

array\_all(array, function, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to use |
| function | Function | The Predicate Method to run on each element |
| offset | Real | OPTIONAL The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: Offset And Length |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md) (whether the function returned **true** for all elements in the array or range)

#### Example:

function is\_even(element, index)
{
    return (element mod 2 == 0);
}
values = \[2, 4, 8, 10, 12, 14, 18, 22, 46\];
var all\_elements\_are\_even = array\_all(values, is\_even);

The above code first defines a function is\_even that returns true if the value is even.

It then creates an array values and adds some numbers to it.

Finally it calls array\_all on the array and stores the result in a temporary variable all\_elements\_are\_even. As all values in the array are even, all\_elements\_are\_even will be set to true.