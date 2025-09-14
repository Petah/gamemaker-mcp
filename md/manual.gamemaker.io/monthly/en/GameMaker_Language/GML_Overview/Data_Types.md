---
title: "Data Types"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Data_Types.htm"
converted: "2025-09-14T03:59:28.777Z"
---

# Data Types

In previous section we covered [variables and their scoping rules](Variables_And_Variable_Scope.md) but little has been said about the different **data types** that a variable can store. Therefore this section explains the different types and what they can be used for.

NOTE You can use the function [typeof](../GML_Reference/Variable_Functions/typeof.md) to get the data type that a variable holds.

Before continuing, let's just briefly explain what we mean by "data types". When you create a variable it can be used to hold information, and when you call a function, it can also store returned information. However, this information can come in various "flavours" - for example, it can be a _real number_ or it can be a _string_. These different types of values being used are called **data types** and when using the GameMaker Language they can be any of the following:

[Real NumbersReal Numbers](Data_Types.htm#)

Real numbers are any value that is not a string, nor any of the other possible data types. So, 124, 45639.566546456, 0, -45.5, etc. are all examples of real numbers. All real numbers are stored as 64-bit double-precision floating point values (or integer values), and the compiler will optimise where possible (for example, 0.0 will be optimised to the integer value of 0).

When dealing with any value that is not an integer, you may experience slight rounding errors due to the nature of floating point maths. For more information on this and other number related functions, please see: [GML Reference - Number Functions](../GML_Reference/Maths_And_Numbers/Number_Functions/Number_Functions.md).

NOTE On the **HTML5** target, all real numbers are doubles.

NOTE While created variables in GameMaker are all stored as double-precision floating point numbers or integers, you can still use other formats when dealing with extensions. These can be passed into GameMaker from an extension and then checked using the appropriate is\_\*() function, a list of which can be found under [Data Type Functions](../GML_Reference/Variable_Functions/Variable_Functions.htm#data_type_functions).

[BooleanBoolean](Data_Types.htm#)

A boolean is simply a value that can either be true or false. Note that currently GameMaker will interpret a real number equal to or below 0.5 as a false value, and any real number greater than 0.5 as being true. This does _not_ mean however that you should be checking 1 and 0 (or any other real number) for true and false, as you are also provided with the **constants** true and false, which should always be used in your code to prevent any issues should real boolean data types be added in a future update.

You can convert any real number into an implicitly boolean value using the following function:

-   [bool](../GML_Reference/Variable_Functions/bool.md)

[StringsStrings](Data_Types.htm#)

A string is simply any text that has been placed in quotation marks "...". You can perform certain operations on strings, like add two strings together to create a longer string (concatenation) and you can also change the string properties and even extract real numbers from it. For more information on strings and the string functions see: [GML Reference - Strings](../GML_Reference/Strings/Strings.md).

[ArraysArrays](Data_Types.htm#)

An array is a special data type that can be used to hold multiple values. You assign the array to a variable, and then "fill in" different indices of the array with values. This array can then be passed through to scripts and functions on a [pass-by-reference](Values_And_References.htm#pass_by_value_and_pass_by_reference) basis, however should you modify the passed array, it will then become a copy of the original array and so will need to be returned back to the original variable for the array to be updated. For more information on arrays, please see: [GML Overview - Arrays](Arrays.md).

Note that matrices are also stored in arrays. See [Matrix Functions](../GML_Reference/Maths_And_Numbers/Matrix_Functions/Matrix_Functions.md) for more information.

[StructsStructs](Data_Types.htm#)

A struct (sometimes called a "lightweight object") is a raw data structure that acts as a container for variables of all data types. You assign a struct to a variable and in the struct you can then define further variables and these can then be read from or written to as required. Structs are [passed by reference](Values_And_References.htm#pass_by_value_and_pass_by_reference). For more detailed information on structs, please see the section [GML Overview - Structs](Structs.md).

[Method VariablesMethod Variables](Data_Types.htm#)

A method variable is a variable that has been assigned a function and it can be used exactly the same as you would use a GML runtime function. For more detailed information, please see the section [Method Variables](Method_Variables.md).

[int64int64](Data_Types.htm#)

An "int64" is a 64-bit integer that can be created using [int64](../GML_Reference/Variable_Functions/int64.md) (by passing in a non-64-bit real number) or when reading a buffer\_u64 value from a [Buffer](../GML_Reference/Buffers/buffer_create.md).

This can be used in places where a 64-bit integer is strictly required, or when you want to work with [bit-shifting](../../Additional_Information/Bitwise_Operators.md) and need those 64 bit positions.

Any bitwise operations, even when run on non-64-bit values, will always return a 64-bit integer.

Divisions on int64 values will also return integers (e.g.: int64(5) / int64(2) = 2).

References to data structures and assets (such as objects, sprites, etc.) are stored as int64s, where the first 32 bits contain information about the type of resource, and the next 32 bits contain the ID for the resource. See the next section "Handles" for more info.

[HandlesHandles](Data_Types.htm#)

A handle contains a reference to one of the following types of resources:

-   [Data Structures](../GML_Reference/Data_Structures/Data_Structures.md)
-   [Assets](../../The_Asset_Editors/The_Asset_Editors.md), such as Objects, Sprites, Rooms, etc.
-   [Object Instances](../GML_Reference/Asset_Management/Instances/Instances.md)
-   [Script Functions](Script_Functions.md)
-   [Particle System Instances](../GML_Reference/Drawing/Particles/Particle_Systems/part_system_create.md), [Particle Emitters](../GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_create.md), [Particle Types](../GML_Reference/Drawing/Particles/Particle_Types/part_type_create.md)
-   [Buffers](../GML_Reference/Buffers/buffer_create.md), [Vertex Buffers](../GML_Reference/Drawing/Primitives/vertex_create_buffer.md) and [Vertex Formats](../GML_Reference/Drawing/Primitives/vertex_format_end.md)
-   [Surfaces](../GML_Reference/Drawing/Surfaces/Surfaces.md)
-   A reference created with [ref\_create](../GML_Reference/Variable_Functions/ref_create.md)
-   [Time Sources](../GML_Reference/Time_Sources/Time_Sources.md)
-   [Room Layers](../GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_id.md) and [Tile Maps](../GML_Reference/Asset_Management/Rooms/Tile_Map_Layers/Tile_Map_Layers.md)

You get a handle when you create a new resource (with a \_create() function) or reference an existing resource in your code (like referencing an object, getting an instance through a function, etc.).

A handle is a 64-bit integer, where the first 32 bits contain information about the type of resource, and the next 32 bits contain the index number of the resource.

The type information in a handle is used to make sure that you pass the correct type of resource into a function (e.g. making sure you pass a DS list into [ds\_list\_add](../GML_Reference/Data_Structures/DS_Lists/ds_list_add.md) instead of a DS map, DS grid or some other incompatible resource).

A handle can be invalid, in which case the index number it holds will be \-1, or \-4 ([noone](Instance%20Keywords/noone.md)) for instance handles. All handles can be compared against their "invalid" value to check whether they're valid or not (i.e. if (handle != -1) { // do something } or if (handle != noone) { // do something }).

### Usage Notes

-   It is good practice to initialise a variable that will hold a handle to the "invalid" value, i.e., [noone](Instance%20Keywords/noone.md) for instance handles and \-1 for all other handle types.
-   If you convert a handle to a number (using [real](../GML_Reference/Strings/real.md) or [int64](../GML_Reference/Variable_Functions/int64.md)) you will get the index number for the resource. This index number is also recycled, e.g. if you destroy a DS List with index 0 and later create a new DS List, that same index 0 will be reused. This means that any old variables holding a reference to the destroyed list will now hold a _new_ active list, which may be unintended and so it is good practice to reset a handle variable to \-1 after destroying its resource if it continues to be used after destruction. Handles that hold an instance should be reset to [noone](Instance%20Keywords/noone.md) instead.
-   If you convert a handle to a string or print it as an output, you will see a string in the format "ref <type> <id>" or "ref <type> <name>", e.g. "ref ds\_list 1".
-   You can convert a string that's correctly formatted as "ref <type> <id>" or "ref <type> <name>" back to a handle using the [handle\_parse](../GML_Reference/Variable_Functions/handle.md) function.
-   In older versions of GameMaker, resources that are now referenced by handles used simple index numbers and for legacy support they are still accepted. This means it is possible for a simple **Real** value to act as a resource ID if such a value is accidentally passed. For example, you cannot pass a DS List handle into a DS Map function as the Handle stores the data type which the function checks against. However, such resource functions still accept simple ID numbers, so simply passing in, say, 2 will make the function look for a DS Map with the ID 2, and this goes for any function that takes a Handle. You should ensure that you only pass a **Handle** returned by a \*\_create() function into compatible functions and not pass **Real** values directly.

[Hexadecimal LiteralsHexadecimal Literals](Data_Types.htm#)

GameMaker will accept **hexadecimal literals** as legitimate values. Hexadecimal values are especially common when working with colours, but can be used anywhere a positive integer value is required. Hexadecimal values can be formatted in the following two ways, where _abcd_ would be the actual hex value:

**$**_abcd_
**0x**_abcd_

For example, the following decimal values can be expressed as hexadecimal as shown:

**11406** -> $2c8e, 0x2c8e
**16777215** -> $ffffff, 0xffffff

---

A hexadecimal value can also begin with a hash/pound symbol (#), however when written this way, its value will not equal a similar hex value written using a previously shown format ($ or 0x). This is due to the way colours are interpreted in GML, which required the format for hash/pound hex values to be changed so that CSS colours could be written in an #RRGGBB format. For more information, see [Hex Colours](../GML_Reference/Drawing/Colour_And_Alpha/Colour_And_Alpha.htm#hex_colours).

For example, the following two are not equal:

$2c8edd **!=** #2c8edd

For them to refer to the same decimal value, you would have to swap the first two and last two characters:

$**2c**8edd **\=****\=** #dd8e**2c**

[Binary LiteralsBinary Literals](Data_Types.htm#)

You can write binary literals with the 0b prefix:

var \_six = 0b0010 | 0b0100; // produces 0b0110, or 6

The above code shows two binary values, 0010 and 0100, being used in a [bitwise "OR" operation](../../Additional_Information/Bitwise_Operators.md).

[PointerPointer](Data_Types.htm#)

A pointer is a data type that "points" to a memory location. You cannot do operations on a pointer in GameMaker and it is used only for some very specific functions, like getting a texture or buffer address from memory for another function. For examples of functions that return a pointer you can see [buffer\_get\_address](../GML_Reference/Buffers/buffer_get_address.md) or [sprite\_get\_texture](../GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_texture.md).

There is also a function to check if a value is a pointer (see "**Checking Data Types**", below) and a function to convert a value into a pointer:

-   [ptr](../GML_Reference/Variable_Functions/ptr.md)

You may also use (and get returned) the following built-in constants when using pointers:

| Constant | Description |
| --- | --- |
| pointer_null | This constant indicates that the pointer is not pointing to anything meaningful (the same as NULL in C++ or null in C#). This value is falsy. |
| pointer_invalid | This constant simply means that the value is not a valid pointer |

[EnumEnum](Data_Types.htm#)

An enum is an "enumerator", and it essentially permits you to create your own limited data type with a list of constant values. Enums are explained in depth on the page for [Constants](Variables/Constants.md).

[UndefinedUndefined](Data_Types.htm#)

An undefined value (also known as a "null" value) is one where an expression doesn't have a correct value, although it is syntactically correct, and so must return _something_. For example, say you have a [DS Map](../GML_Reference/Data_Structures/DS_Maps/ds_map_create.md) and use the function [ds\_map\_find\_value](../GML_Reference/Data_Structures/DS_Maps/ds_map_find_value.md). Now, what happens when the map does not have the value being looked for? Well, since the function is correctly formatted, and the issue is that no such value exists, then it would return the constant undefined, and you can check for this constant as you would check for true or any other value.

var \_value = ds\_map\_find\_value(my\_map, "key");

if ([is\_undefined](../GML_Reference/Variable_Functions/is_undefined.md)(\_value)) {
    show\_debug\_message("The key does not exist!");
}

[NaNNaN](Data_Types.htm#)

NaN stands for "not a number", and is a constant that can be returned when the compiler cannot evaluate the results of an operation as a number. For example, 0/0 cannot be defined as a real number, and is therefore represented by NaN, or the square root of a negative number - which is considered an "imaginary" number - cannot be represented as a real number, and so is represented by NaN.

Note that since NaN is not a number, it cannot be compared to itself, so comparisons such as NaN == NaN will return false. Same goes for an array comparison such as this:

show\_debug\_message(array\_equals(\[NaN\], \[NaN\]));

// Output: 0 (false)

[InfinityInfinity](Data_Types.htm#)

The constant infinity refers to a number that is considered infinite, such as the result you would get when dividing any floating point value by zero, eg: 1.0/0.

Note that the infinity constant is equal to itself, so infinity == infinity will return true.

[AnyAny](Data_Types.htm#)

The "**Any**" data type can be found on many pages in the manual, e.g. [in the arguments,](../GML_Reference/Variable_Functions/is_string.md) or as a [return value](../GML_Reference/Variable_Functions/array_get.md). It indicates that _any type of value_ is accepted, or can be returned.

## Underscores in Literals

You can use underscores (\_) in numeric literals, such as real numbers, hexadecimal and binary values. These are ignored during compilation and only serve as visual separators. Here are a few examples:

var \_integer = 100\_000\_000; // same as 100000000
var \_float   = 3\_141.59; // same as 3141.59
var \_hexadec = 0xDEAD\_BEEF; // same as 0xDEADBEEF
var \_binary  = 0b01101000\_01101001; // same as 0b0110100001101001

All the underscores used in the literals shown above only make them easier to read, and don't change anything about their functionality.

## Related Pages

You can check the data type of any variable using the functions listed on the following the page:

-   [Variable Functions](../GML_Reference/Variable_Functions/Variable_Functions.md)

You can also find arithmetic type tables that show the results of different operations using mixed variable data types here:

-   [Type Tables](../../Additional_Information/Type_Tables.md)

Data types can be passed as a value or as a reference. The following page provides more information on this subject:

-   [Values and References](Values_And_References.md)