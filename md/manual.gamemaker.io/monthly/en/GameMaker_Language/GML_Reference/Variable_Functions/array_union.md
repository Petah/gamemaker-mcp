---
title: "array_union"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_union.htm"
converted: "2025-09-14T04:00:10.304Z"
---

# array\_union

This function returns a **new** array that is the [union](https://en.wikipedia.org/wiki/Union_(set_theory)) of all provided arrays. A union refers to all the elements in the provided arrays, with duplicates removed.

NOTE The order of elements in the new array is **not** ensured. If you need to sort the array you will need to do so afterwards.

#### Syntax:

array\_union(array0, \[array1, ... array\_n\]);

| Argument | Type | Description |
| --- | --- | --- |
| array0 | Array | The first array |
| [array1, ... array_n] | Array | OPTIONAL Any number of arrays for union (one array per argument) |

#### Returns:

[Array](../../GML_Overview/Arrays.md) (the union of the provided arrays)

#### Example:

a1 = \[1, 2, 3, 4, 5\];
a2 = \[3, 4, 5, 6, 7, 8\];
a3 = \[5, 6, 7, 8, 9, 10, 11\];

a4 = array\_union(a1, a2, a3);

The above code first creates 3 arrays a1, a2 and a3. It then takes the union of these arrays and stores the result in a new array a4.