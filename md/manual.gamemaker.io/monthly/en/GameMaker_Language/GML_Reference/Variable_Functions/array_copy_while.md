---
title: "array_copy_while"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_copy_while.htm"
converted: "2025-09-14T04:00:09.732Z"
---

# array\_copy\_while

This function creates a **new** array and adds elements of the input array to it _while_ (or _as long as_) the predicate function returns true.

The function stops execution as soon as the predicate function returns false. The first element for which the predicate function returns false and any elements that come after it are **not** added to the new array.

NOTE This function is identical to [array\_filter](array_filter.md) with the difference that this function stops execution after the first time the predicate function returns false. array\_filter on the other hand continues to check elements, even after encountering an element for which the predicate function returns false.

#### Syntax:

array\_copy\_while(array, function, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to use |
| function | Function | The Predicate Method to run on each element |
| offset | Real | OPTIONAL The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: Offset And Length |

#### Returns:

[Array](../../GML_Overview/Arrays.md)

#### Example:

array = \["1", "2", "3", "STOP", "4", "5", "6", "STOP", "7", "8", "9"\];
array\_up\_to\_stop = array\_copy\_while(array, function(element, index)
{
    return (element != "STOP");
}, -1, -infinity);

The above code first creates an array array that stores strings containing the first 9 digits, with the string "STOP" in between.

Then the function array\_copy\_while is called on this array, with a predicate function that returns true if the element is **not equal** to the string "STOP".

The offset parameter is set to -1 and the length to -[infinity](../../GML_Overview/Data_Types.md). This will start iterating over the values backwards starting at the last array index.

Finally the result is stored in the variable array\_up\_to\_stop, which should only contain "9", "8" and "7", in that order, as the array was traversed in reverse.