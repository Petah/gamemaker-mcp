---
title: "array_resize"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_resize.htm"
converted: "2025-09-14T04:00:10.163Z"
---

# array\_resize

With this function you can resize an existing array dimension to a new size. You supply the array to be resized as well as the new number of indices for the array, and the function will resize that array. Note that this function is designed for resizing an array _down_ to a smaller length as you can resize up by simply setting a new index in the array. That said, if you do use it to size up an array, any new indices will be set to the default value of 0.

This function can also be used for multi-dimension arrays, as long as you specify which dimension you want to resize when you supply the array index, following this pattern:

// Resize the first dimension of the array
array\_resize(my\_array, 10);

// Resize the second dimension of the array (only for the first slot)
array\_resize(my\_array\[0\], 10);

// Resize the third dimension of the array (only for the first slots)
array\_resize(my\_array\[0\]\[0\], 10);

// ...and so on.

The code states that only the first slot of the second dimension is resized, since the slots in any given array dimension are _not_ interconnected and can have different sizes; for example:

array\_resize(my\_array\[0\], 10);
array\_resize(my\_array\[1\], 22);

In the above code, the length of the array's second dimension is 10 in the first slot but 22 in the second slot.

#### Syntax:

array\_resize(array\_index, new\_size);

| Argument | Type | Description |
| --- | --- | --- |
| array_index | Array | The index of the array to resize. |
| new_size | Real | The new size for the array (an integer, starting from 0). |

#### Returns:

N/A

#### Example:

if (array\_length(a) > 10)
{
    array\_resize(a, 10);
}

The above code checks the length of an array and if it has more than 10 indices, it is resized.