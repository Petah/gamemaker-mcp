---
title: "array_pop"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_pop.htm"
converted: "2025-09-14T04:00:10.106Z"
---

# array\_pop

This function will remove the last element in the given array, and return its value. If the array is empty, undefined is returned.

The function works identically to [array\_shift](array_shift.md), but removes and returns the _last_ element instead of the _first_ one.

NOTE To only read the last element in the array without removing it, use [array\_last](array_last.md).

#### Syntax:

array\_pop(array);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to remove the last value from. |

#### Returns:

[Any](../../GML_Overview/Data_Types.htm#variable) or [undefined](../../GML_Overview/Data_Types.md)

#### Example:

var \_lastscore = array\_pop(score\_array);
draw\_text(32, 32, "Last Score = " + string(\_lastscore));

The above code will pop the last value from the given array, and then draw it along with some text to the screen. The retrieved entry is also removed from the score array.