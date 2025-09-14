---
title: "array_first"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_first.htm"
converted: "2025-09-14T04:00:09.883Z"
---

# array\_first

This function returns the element at the start of the array, i.e. the first element at index 0.

NOTE Use [array\_shift](array_shift.md) to also remove the first element from the array.

#### Syntax:

array\_first(array);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to get the first value from |

#### Returns:

[Any](../../GML_Overview/Data_Types.htm#variable) (Any valid data type that an array can hold) or [undefined](../../GML_Overview/Data_Types.md) if the array is empty

#### Example:

var \_first\_added\_enemy = array\_first(enemies);

with (\_first\_added\_enemy)
{
    show\_debug\_message(string(id) + " is the first enemy in the array.");
}

The above code gets the first enemy instance added to the array enemies and stores it in a temporary variable \_first\_added\_enemy. It then lets the instance display a debug message with the id of the instance.