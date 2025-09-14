---
title: "array_map"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_map.htm"
converted: "2025-09-14T04:00:10.069Z"
---

# array\_map

This function returns a **new** array that is a modified version of the given array (or a range of it), based on a callback function.

You provide an array, and a [Callback Method](Array_Functions.htm#h2), which is called for each element in the given array. The callback function can return any value, which is applied to that index in a new copy of the array.

After the callback is executed for all elements, the modified array (or the affected range of it) is returned as a new array. The original array is **not changed**; for that, see [array\_map\_ext](array_map_ext.md).

[Callback FunctionCallback Function](../../../assets/snippets/Syntax_predicate_general.hts#)

The callback function you pass into this function should take the following arguments:

#### Syntax:

function(element, index);

| Argument | Type | Description |
| --- | --- | --- |
| element | Any | The current array element |
| index | Real | The current array index |

This callback function should return a value of [Any](../../GML_Overview/Data_Types.htm#variable) type that will be applied back to the array element.

#### Syntax:

array\_map(array, function, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to use |
| function | Function | The callback function to run on each element |
| offset | Real | OPTIONAL The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: Offset And Length |

#### Returns:

[Array](../../GML_Overview/Arrays.md)

#### Example:

var \_numbers = \[1, 2, 3, 4, 5\];

var \_double = function (\_element, \_index)
{
    return \_element \* 2;
}

var \_numbers\_doubled = array\_map(\_numbers, \_double);

The above code creates an array \_numbers with numbers from 1 to 5.

It creates a function \_double that takes the array element and index, and returns the element multiplied by 2.

This function is then used in an array\_map call, which returns a modified version of the array with all numbers doubled: \[2, 4, 6, 8, 10\].