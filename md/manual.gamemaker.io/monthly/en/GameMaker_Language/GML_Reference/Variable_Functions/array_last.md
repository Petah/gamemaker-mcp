---
title: "array_last"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_last.htm"
converted: "2025-09-14T04:00:10.003Z"
---

# array\_last

This function returns the last element in the given array, i.e. the last element at index [array\_length](array_length.md)(array)-1.

This function does not modify the array. To remove the last element of the array while reading it, use [array\_pop](array_pop.md).

#### Syntax:

array\_last(array);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to get the last value from |

#### Returns:

[Any](../../GML_Overview/Data_Types.htm#variable) (Any valid data type that an array can hold) or [undefined](../../GML_Overview/Data_Types.md) if the array is empty

#### Example:

var \_last\_added\_enemy = array\_last(enemies);

with (\_last\_added\_enemy)
{
    show\_debug\_message(string(id) + " is the last enemy in the array.");
}

The above code gets the last enemy instance added to the array enemies and stores it in a temporary variable \_last\_added\_enemy. It then lets that instance display a debug message with the id of the instance.