---
title: "array_foreach"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_foreach.htm"
converted: "2025-09-14T04:00:09.908Z"
---

# array\_foreach

This function loops through an array (or a range of it) and executes the [Callback Method](Array_Functions.htm#h2) _for each_ element.

IMPORTANT You **cannot** use this function to change array elements directly, i.e. by writing  element = value;  in the function. You **can** make changes if the array element _references_ something else (e.g. when the array element itself is an [array](../../GML_Overview/Arrays.md) or [struct](../../GML_Overview/Structs.md)).

[Callback FunctionCallback Function](../../../assets/snippets/Syntax_predicate_general.hts#)

The callback function you pass into this function should take the following arguments:

#### Syntax:

function(element, index);

| Argument | Type | Description |
| --- | --- | --- |
| element | Any | The current array element |
| index | Real | The current array index |

This callback function should not return a value. It simply executes the function on all elements in the given range.

#### Syntax:

array\_foreach(array, function, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to use |
| function | Function | The callback function to run on each element |
| offset | Real | OPTIONAL The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: Offset And Length |

#### Returns:

N/A

#### Example:

var \_array =
\[
    { x: 4,  y: 5  },
    { x: 12, y: 8  },
    { x: 75, y: 23 }
\];

var \_set\_x\_to\_index = function(\_element, \_index)
{
    \_element.x = \_index;
}

array\_foreach(\_array, \_set\_x\_to\_index);

The above code first creates a temporary array of structs array where each struct stores and x and y value.

It then defines a temporary function x\_to\_index that takes in an element and an index, and sets the element's x to that index.

It expects the element parameter to be a struct. Finally array\_foreach is called with the array and the function as the arguments. After the code has executed all structs will have their x value set to their array index.