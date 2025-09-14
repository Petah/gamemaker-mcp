---
title: "array_shift"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_shift.htm"
converted: "2025-09-14T04:00:10.231Z"
---

# array\_shift

This function removes the first element from the given array and returns it.

Because of this, all other elements are _**shifted** to the left one place_, i.e. the value at index 0 is removed, the value at index 1 moves to index 0, the value at index 2 moves to index 1, etc. The number of elements is reduced by 1, as there is no value to replace the last element with.

The function works identically to [array\_pop](array_pop.md), but removes and returns the _first_ element instead of the _last_ one.

NOTE Use [array\_first](array_first.md) to get the first element without removing it from the array.

#### Syntax:

array\_shift(array);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to shift, i.e. to return and remove the first element from |

#### Returns:

[Any](../../GML_Overview/Data_Types.htm#variable) (the type of the removed first array element)

#### Example 1: Basic Use

var \_array = \["A", "B", "C"\];
repeat(2)
{
    array\_shift(\_array);
}
show\_debug\_message(\_array);

The above code calls array\_shift on the array \_array twice. After that, a debug message shows the contents of the array. As the first call to the function removes the value "A" and the second shift removes the value "B", the array will only contain "C" at this point.

#### Example 2: Queue using array\_shift and array\_push

var \_queue = \[\];
var \_incoming = \["S", "O", "M", "E", " ", "L", "E", "T", "T", "E", "R", "S"\];
MAX\_QUEUE\_LENGTH = 4;
var \_len = array\_length(\_incoming), i = 0;
repeat(\_len)
{
    array\_push(\_queue, \_incoming\[i\]);
    if (array\_length(\_queue) > MAX\_QUEUE\_LENGTH)
    {
        array\_shift(\_queue);
    }
    i++;
}

The above code creates a temporary array \_queue that acts like a queue using array\_shift and [array\_push](array_push.md). The characters in a second array \_incoming are added to the queue array one by one, using a [repeat](../../GML_Overview/Language_Features/repeat.md) loop. Whenever the length of the queue is greater than 4 (stored in the constant MAX\_QUEUE\_LENGTH), the first element is removed using array\_shift.

#### Example 3: Rotate an Array

var \_array = \["F", "O", "R", "E", "V", "E", "R"\];
repeat(10)
{
    array\_push(\_array, array\_shift(\_array));
    show\_debug\_message(\_array);
}

In the above example the array \_array is "rotated" 10 times. "Rotating" an array means that elements are removed on one end and added back on the other end. The length of the array remains the same. Every iteration, the letters move left; the array is rotated _left_. A debug message is shown after each iteration to show the contents of the array at that point.

Using the functions [array\_pop](array_pop.md) and [array\_insert](array_insert.md) arrays can be rotated _right_ instead.