---
title: "array_create_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_create_ext.htm"
converted: "2025-09-14T04:00:09.764Z"
---

# array\_create\_ext

This function creates an array of the given size. For each element in the new array, it calls the given callback function, and applies the return value to that element.

Using this function you can initialise the array with values that change depending on the array index.

[Callback functionCallback function](../../../assets/snippets/Syntax_predicate_general.hts#)

The callback function supplied in the second argument should take 1 argument, which is the index of the current array element. It can return any type of value, which is stored in the array at that index.

#### Syntax:

function(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | The current array index |

#### Syntax:

array\_create\_ext(size, function);

| Argument | Type | Description |
| --- | --- | --- |
| size | Real | The size of the array |
| function | Function | The callback function used to initialise each entry |

#### Returns:

[Array](../../GML_Overview/Arrays.md)

#### Example:

var \_f = function(\_index)
{
    return \_index + 1;
}
array = array\_create\_ext(100, \_f);
show\_debug\_message(array);

The above code first creates a temporary function \_f that takes in an index as an argument, and returns that index with 1 added to it.

It then uses array\_create\_ext with the \_f function which creates an array filled with the integer numbers from 1 to 100.