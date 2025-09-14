---
title: "array_concat"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_concat.htm"
converted: "2025-09-14T04:00:09.647Z"
---

# array\_concat

This function takes multiple arrays as arguments, joins them together (in the order of the arguments), and returns the joined array.

#### Syntax:

array\_concat(array0, \[array1, ... array\_n\]);

| Argument | Type | Description |
| --- | --- | --- |
| array0 | Array | The first array to concatenate |
| [array1, ... array_n] | Array | OPTIONAL Any number of arrays to concatenate (one array per argument) |

#### Returns:

[Array](../../GML_Overview/Arrays.md) (new array with all arrays concatenated)

#### Example:

array\_1 = \[1, 2, 3\];
array\_2 = \[4, 5, 6\];
array\_3 = \[7, 8, 9\];
new\_array = array\_concat(array\_1, array\_2, array\_3);

The above code first creates three arrays: array\_1, array\_2 and array\_3. It then joins the arrays together using array\_concat and stores the result in new\_array.