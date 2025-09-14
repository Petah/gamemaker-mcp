---
title: "array_insert"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_insert.htm"
converted: "2025-09-14T04:00:09.971Z"
---

# array\_insert

This function inserts a value (or multiple values) into an array at any given position.

You provide the array, the index (position) in the array to insert at, as well as at least _one_ value to insert, although you can optionally provide further arguments and they'll all be inserted into the array in consecutive order from the given index.

NOTE If the given index is outside of the length of the array, the values will be added at the given index, and any empty slots in the array between its last value and the inserted values will be set to a default value of 0.

#### Syntax:

array\_insert(variable, index, value, \[value\], \[value\], \[etc...\]);

| Argument | Type | Description |
| --- | --- | --- |
| variable | Array | The variable that holds the array. |
| index | Real | The index (position) in the array to insert the value(s). Negative indices are supported and count from the end of the array. An offset of -1 refers to the last element of the array, an offset of -2 to the one before last element, etc. (see Offset And Length) |
| value | Any | The value to insert |
| [value], [value], [etc...] | Any | OPTIONAL Additional values to insert into the array |

#### Returns:

N/A

#### Example 1: Inserting a single value

array = \[1, 2, 3, 5\];
var \_missing\_value = 4;
array\_insert(array, 3, \_missing\_value);
show\_debug\_message(array);

The above code inserts a missing value into an array array, at index 3. A debug message shows the array's contents after insertion of the value.

#### Example 2: Inserting multiple values

var \_array = \["G", "a", "k", "e", "r"\];
array\_insert(\_array, 2, "m", "e", "M", "a");
show\_debug\_message(string\_join\_ext("", \_array));

The above code creates a temporary array \_array and then uses array\_insert to insert a couple of values at index 6. After that, [string\_join\_ext](../Strings/string_join_ext.md) is called n the array to concatenate the letters and the resulting string is output as a debug message.