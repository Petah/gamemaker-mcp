---
title: "array_unique"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_unique.htm"
converted: "2025-09-14T04:00:10.320Z"
---

# array\_unique

This function returns a **new** array containing the values of the input array (or a range of it) with any duplicate values removed.

#### Syntax:

array\_unique(array, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to use |
| offset | Real | OPTIONAL The offset, or the starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2 > 1 > 0 instead of 0 > 1 > 2). See: Offset And Length |

#### Returns:

[Array](../../GML_Overview/Arrays.md)

#### Example:

var \_values = \["rock", "paper", "scissors", "rock", "rock", "scissors", "paper", "scissors"\];
var \_values\_unique = array\_unique(\_values);

The above code first creates a temporary array values.

It then calls array\_unique and stores the result in a temporary variable values\_unique. This array contains the three possible values in the array values: "rock", "paper" and "scissors".