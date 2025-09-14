---
title: "array_get_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_get_index.htm"
converted: "2025-09-14T04:00:09.940Z"
---

# array\_get\_index

This function gets the index of a specific value in the given array.

Optionally an offset and length parameter can be provided to the function to define the range of the array in which to search.

If the value isn't found, -1 is returned.

TIP If you're looking for the index of the first array element _that satisfies a condition_, use [array\_find\_index](array_find_index.md).

#### Syntax:

array\_get\_index(array, value, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array in which to look for the value |
| value | Any | The value to look for |
| offset | Real | OPTIONAL The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: Offset And Length |

#### Returns:

[Real](../../GML_Overview/Data_Types.md) (the index of the first occurrence of the value if found or -1 if it isn't found)

#### Example 1:

var \_array = array\_create(100, 1);
\_array\[7\] = 13;
var \_index = array\_get\_index(\_array, 13);
show\_debug\_message("The value 13 was found at index {0}", \_index);

The above code first creates a temporary array \_array of size 100 and sets the value at index 7 to 13. It then looks for the index of that value 13 using array\_get\_index. Finally a debug message is shown showing the index.

#### Example 2:

var \_array = \["a", "b", "c", "d", "e", "d", "c", "b", "a"\];
var \_pos1 = array\_get\_index(\_array, "d");                 // 3
var \_pos2 = array\_get\_index(\_array, "d", 6);              // -1
var \_pos3 = array\_get\_index(\_array, "d", -1, -infinity);  // 5

In the above code an array \_array is initialised with a set of letters. The position of the letter "d" is then looked up three times, with different values for offset and length. The results of the calls to array\_get\_index are shown in the comments.