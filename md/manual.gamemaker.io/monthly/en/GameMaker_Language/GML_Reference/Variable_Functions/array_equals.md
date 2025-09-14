---
title: "array_equals"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_equals.htm"
converted: "2025-09-14T04:00:09.800Z"
---

# array\_equals

This function checks if two arrays are equal (equivalent or the same).

You give the two arrays to check, and the function will return true if they are equal (either equivalent or the same) or false if they are not.

The check is performed recursively, i.e. nested arrays are checked as well.

### Usage Notes

-   This is _not_ the same as checking if two arrays are the same using \==, which will not check if the two arrays hold equivalent values, but only if the arrays are referencing the same initial array. For example:

    var a = \[1, 2, 3, 4\];
    var b = \[1, 2, 3, 4\];

    if (a == b)
    {
        show\_debug\_message( "This will never fire, as a and b do not reference the SAME array" );
    }

    if (array\_equals(a, b))
    {
        show\_debug\_message( "This will fire as both arrays contain similar values" );
    }

-   If an array element stores a reference to, e.g. a struct or an instance, the function doesn't compare the contents of those, but rather checks if both references refer to the same thing in memory. See [Values and References](../../GML_Overview/Values_And_References.md)
-   There are some constants that may not be equal to themselves, which can make this function fail. Here is an example:

    if (array\_equals(\[NaN\], \[NaN\]))
    {
        show\_debug\_message( "This will never fire as NaN cannot be equal to itself" );
    }

    See the [Equality Table](../../../Additional_Information/Type_Tables.htm#h) for more information.

#### Syntax:

array\_equals(var1, var2);

| Argument | Type | Description |
| --- | --- | --- |
| var1 | Array | The first array. |
| var2 | Array | The second array. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example 1: Basic Use

var \_array1 = \[1, 2, 3, 4, 5\];
var \_array2 = \[1, 2, 5, 4, 3\];

if (!array\_equals(\_array2, \_array1))
{
    var \_len = array\_length(\_array1);
    array\_copy(\_array2, 0, \_array1, 0, \_len);
}

show\_debug\_message(\_array1);
show\_debug\_message(\_array2);

The above code checks two arrays to see if they hold equivalent values. If they don't, the code will copy the entire contents of the array \_array1 to the array \_array2. Both arrays are output in a debug message showing their contents are identical after the copy.

#### Example 2: Nested Arrays and References

var \_the\_struct = {a: 84, b: 38};

var \_array1 = \[\_the\_struct, 5, "hello", \["this", "that"\]\];
var \_array2 = \[\_the\_struct, 5, "hello", \["this", "that"\]\];
var \_array3 = \[{a: 84, b: 38}, 5, "hello", \["this", "that"\]\];

show\_debug\_message($"\_array1 equals \_array2: {array\_equals(\_array1, \_array2)}");
show\_debug\_message($"\_array1 equals \_array3: {array\_equals(\_array1, \_array3)}");

The above code shows a comparison between arrays that hold another array and a struct.

Three arrays \_array1, \_array2 and \_array3 are defined, each holding the exact same variables. Each array stores a struct in the first element that has a variable a set to 84 and a variable b set to 38. The first two arrays \_array1 and \_array2 reference the same struct, \_array3 doesn't.

Next, \_array1 and \_array2 as well as \_array1 and \_array3 are compared using array\_equals and the results are output in a debug message. \_array1 equals \_array2 since both arrays hold identical contents. \_array1 doesn't equal \_array3, however. While the struct in \_array3 does have the same contents, it doesn't reference the same struct as \_array1 and \_array2. array\_equals compares arrays recursively but doesn't follow references, instead it compares the references.