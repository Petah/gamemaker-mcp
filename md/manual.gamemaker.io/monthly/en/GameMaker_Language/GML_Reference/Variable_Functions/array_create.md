---
title: "array_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_create.htm"
converted: "2025-09-14T04:00:09.746Z"
---

# array\_create

With this function you can create an array of the given size.

You tell the function the length of the array to create, and it will return the "handle" for the array which you can then assign to a variable.

Arrays created in this way will have each entry initialised to 0 unless you specify an (optional) initialisation value. If you do supply the extra value for initialising the array, then all indices within the new array will be set to that instead of 0, but note that the function will have a greater performance overhead in this case.

NOTE To initialise each entry of the array using a function, you can use [array\_create\_ext](array_create_ext.md).

#### Syntax:

array\_create(size, \[value\]);

| Argument | Type | Description |
| --- | --- | --- |
| size | Real | The size of the array to create. |
| value | Any | OPTIONAL The value to use to initialise all array indices. |

#### Returns:

[Array](../../GML_Overview/Arrays.md)

#### Example:

instance\_array = array\_create(100, noone);

The above code will create a new array of 100 entries, each one set to the keyword [noone](../../GML_Overview/Instance%20Keywords/noone.md), and then assign it to the variable instance\_array.