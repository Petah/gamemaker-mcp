---
title: "array_contains"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_contains.htm"
converted: "2025-09-14T04:00:09.666Z"
---

# array\_contains

This function checks if the given value exists in the array, or in a part of it. It returns true if the value exists, or false if not.

TIP To check if an array not just _contains_ a value but rather contains a value _that satisfies a certain condition_, use [array\_any](array_any.md).

#### Syntax:

array\_contains(array, value, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array in which to look for the value |
| value | Any | The value to look for in the array |
| offset | Real | OPTIONAL The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: Offset And Length |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example 1:

var \_digits\_decimal = \[0, 1, 2, 3, 4, 5, 6, 7, 8, 9\];
var \_contains = array\_contains(\_digits\_decimal, 3);
show\_debug\_message("The array contains the digit 3: {0}", \_contains);

The above code first defines an array \_digits\_decimal containing the decimal digits from 0 to 9. It then calls array\_contains to check if the value 3 is in the array. Finally it shows a debug message with the result.

#### Example 2: array of arrays

var \_a = \[0, 1, 2\];
var \_b = \_a;
var \_array\_of\_arrays =
\[
    \[
        "this", "that", "another thing"
    \],
    \_a
\];
show\_debug\_message(array\_contains(\_array\_of\_arrays, \_a));
show\_debug\_message(array\_contains(\_array\_of\_arrays, \_b));
show\_debug\_message(array\_contains(\_array\_of\_arrays, \[0, 1, 2\]));
show\_debug\_message(array\_contains(\_array\_of\_arrays, \["this", "that", "another thing"\]));

The above code first defines three temporary variables: an array \_a, a variable \_b referring to \_a and an array \_array\_of\_arrays.

It then shows four debug messages with the result of calling array\_contains in 4 different situations. \_array\_of\_arrays contains \_a because it has been added to it as an element. It also contains \_b because \_b refers to \_a. The remaining checks return false because even though the arrays contain the same values, they aren't the same arrays.