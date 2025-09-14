---
title: "array_sort"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_sort.htm"
converted: "2025-09-14T04:00:10.286Z"
---

# array\_sort

With this function you can sort an array in ascending order or descending order or using a custom function to define the sort order. The function requires you to provide the array to sort, and then either of the following:

-   The constant true or false to indicate an ascending (true) or descending (false) sort order, or
-   A custom function to define the sort order

This function will modify the contents of the original array that was supplied. To create a sorted copy, use [array\_copy](array_copy.md) to duplicate the array first, and then pass that into this function.

### Using a custom function

If you use a custom function for sorting, it must take 2 arguments which will receive the values of the current element and the next element respectively. The function should return any of the following values to affect the sort order (where elm1 is the current element and elm2 is the next element):

-   0: if elm1 and elm2 are equal
-   <= -1 (negative integer): if elm1 goes before elm2
-   \>= 1 (positive integer): if elm1 goes after elm2

NOTE The value returned by your custom function must be an integer. Floating point values less than 1 will be read as 0, so you must use [sign()](../Maths_And_Numbers/Number_Functions/sign.md) or [round()](../Maths_And_Numbers/Number_Functions/round.md) if your function works with floating point values.

NOTE When your custom function returns 0 for a pair of elements (or the pair is equal when using ascending/descending order), the order of that pair may not be preserved as the sorting algorithm used (qsort) is not stable.

If the array contains a set of strings, then the strings will be sorted alphabetically based on the English alphabet when using the default ascending/descending sort type. All other data types will be sorted based on their numerical value, the exact values of which will depend on the data type itself (for example, an array of buffers would be sorted based on the numerical value of their indices).

#### Syntax:

array\_sort(variable, sorttype\_or\_function);

| Argument | Type | Description |
| --- | --- | --- |
| variable | Array | The variable that holds the array. |
| sorttype_or_function | Boolean or Script Function/Method | The sort type (true for ascending or false for descending) or a function reference to use for sorting. |

#### Returns:

N/A

#### Example:

var \_a = \[10, 9, 8, 7, 6, 5\];

array\_sort(\_a, function(elm1, elm2)
{
    return elm1 - elm2;
});

The above code uses a custom sorting function to sort the array in an ascending order. The sorting function takes the two array elements as elm1 and elm2 and performs a subtraction on them. If elm1 is greater than elm2, the subtraction results in a positive number which pushes elm1 to be after elm2, hence putting them in an ascending order.

Here is an extended example:

var \_xx, \_yy, \_a;

for (var i = 0; i < 10; i++)
{
    \_xx = irandom(room\_width);
    \_yy = irandom(room\_height);
    \_a\[i\] = instance\_create\_layer(\_xx, \_yy, layer, obj\_Bullet);
}

show\_debug\_message(\_a);

var \_f = function(inst1, inst2)
{
    return inst1.x - inst2.x;
}

array\_sort(\_a, \_f);
show\_debug\_message(\_a);

The above code will create an array of 10 instances placed at random positions within the room. The debug message will show something like the following:

\[ 100011,100004,100009,100006,100012,100008,100010,100005,100007,100003 \]

The code then creates a method to be used in the array\_sort function that returns the difference between each of the X positions of the instances in the room. Then the array\_sort function is run using that method, sorting the instances by X from lowest to highest. The output for the array would then look something like this:

\[ 100003,100004,100005,100006,100007,100008,100009,100010,100011,100012 \]