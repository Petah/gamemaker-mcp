---
title: "array_copy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_copy.htm"
converted: "2025-09-14T04:00:09.711Z"
---

# array\_copy

This function copies all or part of an array into another array at any position.

You supply both the source and destination arrays (both created previously), as well as a position within the source array to copy from and a position within the destination array to copy to. Finally you need to specify the length of the array (or the length of the part that you want) to copy.

This function can also be used for multidimensional arrays, as long as you specify which dimension you want to copy when you supply the array index, following this pattern:

// Copy to the first dimension of an array
// from the second dimension of an array
array\_copy(item\_array, 0, inventory\_array\[0\], 0, len);

// Copy to the third dimension of an array
// from the first dimension of an array
array\_copy(item\_array\[0\]\[0\], 0, inventory\_array, 0, len);

// etc.

### Usage Notes

-   The function supports specifying negative values for source and destination index and number of elements, as described under [Offset And Length](Array_Functions.htm#offset_and_length).
-   The range given by the source index and length must be within the source array's bounds, as attempting to read outside of the array will throw an error. See [Array Bounds](../../GML_Overview/Arrays.htm#array_bounds).
-   If the data being copied exceeds the length of the destination array, the array will be extended to accept the data. If the destination index is greater than the destination array's size, zeroes are inserted. Negative destination offsets are clipped to 0.

#### Syntax:

array\_copy(dest, dest\_index, src, src\_index, length);

| Argument | Type | Description |
| --- | --- | --- |
| dest | Array | The reference to the array to copy to. |
| dest_index | Real | The index within the array to copy to. Negative indices are supported and count from the end of the array. An offset of -1 refers to the last element of the array, an offset of -2 to the one before last element, etc. (see Offset And Length) |
| src | Array | The reference to the array to copy from. |
| src_index | Real | The index within the array to start copying from. Negative indices are supported and count from the end of the array. An offset of -1 refers to the last element of the array, an offset of -2 to the one before last element, etc. (see Offset And Length) |
| length | Real | The length (number of array indices) to copy, starting with the value at src_index. A negative value can be provided for length; in this case copying also starts at index src_index, but the next elements that are copied are src_index-1, src_index-2, etc. I.e. elements are copied "backwards". Note that the first value is always written at dest_index, the second value at dest_index+1, etc. |

#### Returns:

N/A

#### Example 1: Basic Use

if (!array\_equals(inventory\_array, item\_array))
{
    var \_len = array\_length(inventory\_array);
    array\_copy(item\_array, 0, inventory\_array, 0, \_len);
}

The above code checks two arrays using [array\_equals](array_equals.md) to see if they hold equivalent values. If they don't, the code will copy the entire contents of the array inventory\_array into the array item\_array.

#### Example 2: Negative Length

var \_a = \[1, 2, 3, 4\];
var \_b = \[5, 6, 7, 8\];

array\_copy(\_a, 1, \_b, -1, -2);
show\_debug\_message(\_a);

In the above example, first two temporary arrays \_a and \_b are initialised. Next two elements are copied from \_b to \_a. The src\_index and length parameter are set to -1 and -2, respectively. This means that the last (-1) and the one before last array element are copied (2 elements, counting backwards because of the minus sign, from the end of array \_b). This means the values of the last element and one before last element of \_b are copied to positions 1 (the value of the dest\_index parameter) and 2 in \_a respectively.

A debug message shows the contents of array \_a after copying.

#### Example 3: Extending the Destination Array

var \_a = \[-3, -2, -1\];
var \_b = \[1, 2, 3\];

array\_copy(\_a, 5, \_b, 0, 3);
show\_debug\_message(\_a);

The code example above shows copying to a position beyond the destination array's length.

Two arrays \_a and \_b are first initialised. The entire contents of array \_b are then copied to index 5 in array \_a using array\_copy. Since index 5 is three elements past \_a's current highest index (the value -1 at index 2), \_a is extended with two zeroes and the contents of \_b are added after that. After the copy, \_a holds the array \[-3, -2, -1, 0, 0, 1, 2, 3\]. This is then shown in a debug message.