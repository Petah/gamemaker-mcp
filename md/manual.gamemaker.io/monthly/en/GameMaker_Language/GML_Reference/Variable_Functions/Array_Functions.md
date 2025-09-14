---
title: "Array Functions"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/Array_Functions.htm"
converted: "2025-09-14T04:00:09.563Z"
---

# Array Functions

There are a few functions associated with the use of [Arrays](../../GML_Overview/Arrays.md) too. These are designed to give you flexibility in your code, and will permit you to create more functional and dynamic arrays when making your games.

## Basic Array Functions

-   [array\_create](array_create.md)
-   [array\_copy](array_copy.md)
-   [array\_equals](array_equals.md)
-   [array\_get](array_get.md)
-   [array\_set](array_set.md)
-   [array\_push](array_push.md)
-   [array\_pop](array_pop.md)
-   [array\_shift](array_shift.md)
-   [array\_insert](array_insert.md)
-   [array\_delete](array_delete.md)
-   [array\_get\_index](array_get_index.md)
-   [array\_contains](array_contains.md)
-   [array\_contains\_ext](array_contains_ext.md)
-   [array\_sort](array_sort.md)
-   [array\_reverse](array_reverse.md)
-   [array\_shuffle](array_shuffle.md)
-   [array\_length](array_length.md)
-   [array\_resize](array_resize.md)
-   [array\_length\_1d](array_length_1d.md) DEPRECATED
-   [array\_length\_2d](array_length_2d.md) DEPRECATED
-   [array\_height\_2d](array_height_2d.md) DEPRECATED
-   [array\_first](array_first.md)
-   [array\_last](array_last.md)

## Advanced Array Functions

-   [array\_find\_index](array_find_index.md)
-   [array\_any](array_any.md)
-   [array\_all](array_all.md)
-   [array\_foreach](array_foreach.md)
-   [array\_reduce](array_reduce.md)
-   [array\_concat](array_concat.md)
-   [array\_union](array_union.md)
-   [array\_intersection](array_intersection.md)
-   [array\_filter](array_filter.md)
-   [array\_map](array_map.md)
-   [array\_unique](array_unique.md)
-   [array\_copy\_while](array_copy_while.md)

## Extended Array Functions

-   [array\_create\_ext](array_create_ext.md)
-   [array\_filter\_ext](array_filter_ext.md)
-   [array\_map\_ext](array_map_ext.md)
-   [array\_unique\_ext](array_unique_ext.md)
-   [array\_reverse\_ext](array_reverse_ext.md)
-   [array\_shuffle\_ext](array_shuffle_ext.md)

## Callback Method

A callback [method](../../GML_Overview/Method_Variables.md) is passed into an array function, such as [array\_foreach](array_foreach.md), along with an array.

GameMaker runs your callback method on each element of the given array. For each element in the array, it passes two arguments into your callback method:

-   **Value** of the array element
-   **Index** of the array element

In your callback method, you can use these arguments to calculate a return value, if the array function requires it (such as [array\_map](array_map.md)).

Based on what your callback method returns for each element, either a result value or a modified copy of the array is returned. However if you're using one of the \_ext functions, the original array is modified instead of being copied.

### Predicate Method

When a callback method is required to only return true or false, it's called a **predicate method**. A predicate is used to tell whether an element in the array qualifies a condition.

### Example: Predicate

Let's create a predicate method to check if an array contains the string "apple" inside it.

For this, we would use the [array\_any](array_any.md) function:

var \_array =
\[
    "apple",
    "banana",
    "coconut",
    "dragonfruit"
\]

var \_contains\_apple = array\_any(\_array, function(\_val, \_ind)
{
    return \_val == "apple"
});

show\_debug\_message(\_contains\_apple); // prints 1 (true)

Our predicate method checks if \_val == "apple" and returns the result. When this is true for any one of the array's elements, [array\_any](array_any.md) returns true.

By default, a predicate method runs on all elements inside the array, however most advanced array functions also take two extra parameters: offset and length.

### Offset And Length

The offset and length parameters let you decide which part of the array you want the function to look through, and which direction you want it to go (forwards or backwards).

-   The offset is the 0-based index where the function starts operating on the array.
    -   The offset can be a negative number, in which case it will start from the end of the array. For example, an offset of \-1 refers to the last element of the array, \-2 refers to the second-last element, and so on.
    -   The offset that you pass is clamped between 0 and the last element. For example, an offset of 6 used with an array of 4 elements will refer to the last element 3, an offset of \-infinity used with that same array will refer to the first element 0.
-   The length is the number of elements that are checked in the array, starting at the offset.
    -   The length can also be negative, in which case the function will operate backwards. For example, if you start with an offset of 3 and a length of 3, then elements 3, 4, 5 will be covered. With a length of \-3, elements 3, 2, 1 will be covered.
    -   You can use infinity or \-infinity as the length to traverse an array to its end or its beginning, respectively.

If the function returns a modified version of the array, only the elements that were operated on will be returned, in the order they were operated in. For example, with an offset of 3 and length of 3, elements 3, 4, 5 will be operated on and returned as a new array, and the rest of the elements (e.g. 0, 1, 2, 6, 7, etc.) will be scrapped.