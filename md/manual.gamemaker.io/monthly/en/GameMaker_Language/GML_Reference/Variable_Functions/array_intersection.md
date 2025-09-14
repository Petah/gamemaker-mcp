---
title: "array_intersection"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_intersection.htm"
converted: "2025-09-14T04:00:09.987Z"
---

# array\_intersection

This function returns a **new** array with the [intersection](https://en.wikipedia.org/wiki/Intersection_(set_theory)) of all arrays that you provide to it. An intersection refers to all the values that are present in all of the provided arrays.

The function also removes any duplicates found in the intersection, so it only returns unique values.

NOTE The order of elements in the new array is **not** ensured. If you need to sort the array you will need to do so afterwards.

#### Syntax:

array\_intersection(array0, \[array1, ... array\_n\]);

| Argument | Type | Description |
| --- | --- | --- |
| array0 | Array | The first array |
| [array1, ... array_n] | Array | OPTIONAL Any number of arrays for the intersection (one array per argument) |

#### Returns:

[Array](../../GML_Overview/Arrays.md) (the intersection of the provided arrays)

#### Example:

var \_array1 = \[1, 1, 2, 7, 12\];
var \_array2 = \[1, 2, 4, 5, 7\];
var \_array3 = \[1, 4, 5, 7\];

var \_array\_intersection = array\_intersection(\_array1, \_array2, \_array3);

The above code first creates three temporary arrays \_array1, \_array2 and \_array3. It then calls array\_intersection to create a new array that is the intersection of these three arrays.

The \_array\_intersection array will be set to \[1, 7\] as these are the unique values present throughout all three arrays.