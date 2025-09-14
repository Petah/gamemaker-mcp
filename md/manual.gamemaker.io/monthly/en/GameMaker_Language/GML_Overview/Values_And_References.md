---
title: "Values and References"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Values_And_References.htm"
converted: "2025-09-14T03:59:29.561Z"
---

# Values and References

When you [create a variable](Variables_And_Variable_Scope.md) in GameMaker, the value that the variable stores can be of one of multiple [Data Types](Data_Types.md). For example, a number would be a **Real** value, a piece of text would be a **String**, a list of values would be an **Array**, and so on.

Creating a value of any type places it in the system memory and makes it accessible through the variable. This is simple enough, however when you assign the value of an _existing variable_ to another variable (a = b), there are two ways that it can work:

1.  The value is copied, so the value stored in each variable is independent of the other
2.  A reference is copied, so both variables allow you to access and modify the same data in memory

This is usually based on the complexity of the data type, where simple values like **Reals**, **Strings**, **Booleans**, etc. have their values copied on assignment, however larger structures like **Arrays**, **Structs**, **Buffers**, etc. have their references copied.

## Data Types

The following data types are passed by value, i.e. copied:

-   [Real](Data_Types.md)
-   [Boolean](Data_Types.md)
-   [int64 (signed 64-bit integer)](Data_Types.md)
-   [String](Data_Types.md)

The following data types are passed by sharing a reference:

-   [Array](Arrays.md)
-   [Struct](Structs.md)
-   Everything referenced by a [Handle](Data_Types.md) (including [Object Instance](../GML_Reference/Asset_Management/Instances/Instance_Variables/id.md)s, [Data Structures](../GML_Reference/Data_Structures/Data_Structures.md), etc.)

## Values and References

### Values

If you assign a variable to a new one, its value is normally copied to a new location in memory. For example:

a = 125;
b = a;

First the variable a is assigned the real value 125. This is stored somewhere in memory and can be accessed through a.

Then the variable a is assigned to a new variable b. Its _value_ is _copied_ to a new location in memory, which becomes accessible through b. At this point the number 125 is stored in two different locations in memory, one accessible through a, the other through b. As a result, a change to a does not change b and vice versa. For example:

a = 1000;
show\_debug\_message(a);  // 1000
show\_debug\_message(b);  // 125

This happens because real numbers are one of the data types in GameMaker that are _passed by value_.

### References

When the data type a variable holds is a reference, the value or data it refers to isn't copied, however a reference to the data is copied, so you can access and modify the same data from both variables.

For example, arrays in GameMaker are references. Let's say you define an array and store it in a variable c:

c = \[1, 2, 3, 4, 5\];

The variable c now holds a _reference_ to the array.

You can then assign c to a new variable d:

d = c;

This assignment does **not** make a copy of the entire array in c to assign to d, but rather makes d refer to the same array in memory. This is because arrays are a data type that's _passed by sharing a reference_.

This means that you can now access (and modify!) the array's first element through either c\[0\] or d\[0\], the second element through c\[1\] or d\[1\] and so on. For example, after the following code has executed:

c\[0\] = 5;
d\[1\] = 4;
c\[2\] = 3;
d\[3\] = 2;
c\[4\] = 1;

the variables c and d look as follows, with both of them pointing to the same array:

show\_debug\_message(c);  // \[5, 4, 3, 2, 1\]
show\_debug\_message(d);  // \[5, 4, 3, 2, 1\]

When working with references, you can use the comparison operator \== to check if two variables hold a reference to the same variable in memory:

show\_debug\_message(c == d);  // true

## Pass by Value and Pass by Sharing a Reference

The rules described above for passing one variable's value to another also apply to passing a variable into a function.

For example:

function try\_to\_modify\_value(\_value, \_new\_value)
{
    \_value = \_new\_value;
}

function try\_to\_modify\_array(\_array, \_new\_value)
{
    array\_push(\_array, \_new\_value);
}

var \_val\_orig = 48593;
try\_to\_modify\_value(\_val\_orig, 75);
show\_debug\_message(\_val\_orig);

var \_array\_orig = \[1, 2, 3\];
try\_to\_modify\_array(\_array\_orig, 100);
show\_debug\_message(\_array\_orig);

In the call to try\_to\_modify\_value(), the value stored in \_val\_orig is assigned to the function parameter \_value. Since this value is 48593, i.e. of type [Real](Data_Types.md), it is copied. The new value 75 is assigned to \_value, which goes "out of scope" after the function finishes. \_val\_orig isn't changed at all and still holds the value 48593.

In the call to try\_to\_modify\_array(), the value stored in \_array\_orig is assigned to the function parameter \_array. Since it is an [Array](Arrays.md), its reference is copied and \_array therefore references the same array as \_array\_orig. A new value of 100 is pushed onto the end of the array. The debug message that follows shows that this change modified the original array.

NOTE Arrays behave as if they're passed by value to a function if the legacy [Copy on Write](Arrays.htm#copy_on_write) behaviour is enabled in the [Game Options](../../Settings/Game_Options.md).

## Notes

### Referencing Basic Types

GameMaker has no way of creating references to "pass-by-value" data types (which could then be modified in code). There is, however, [ref\_create](../GML_Reference/Variable_Functions/ref_create.md) which creates a reference for use _only_ with [The Debug Overlay](../GML_Reference/Debugging/The_Debug_Overlay.md).