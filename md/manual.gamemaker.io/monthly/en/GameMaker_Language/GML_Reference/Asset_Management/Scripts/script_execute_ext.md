---
title: "script_execute_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Scripts/script_execute_ext.htm"
converted: "2025-09-14T03:59:39.502Z"
---

# script\_execute\_ext

This function calls a [Script Function](../../../GML_Overview/Script_Functions.md) or [Method](../../../GML_Overview/Method_Variables.md), with the given arguments passed as an [Array](../../../GML_Overview/Arrays.md).

It calls the script function or method you pass it in the context of the **calling instance or struct**. To call a method in its bound context, use [method\_call](../../Variable_Functions/method_call.md).

You can also pass two optional arguments to the function to specify an offset into the array to get the arguments from, as well as the number of arguments num\_args to use from the array (this must be a maximum of array\_length(array\_args) - offset).

NOTE Use [script\_execute](script_execute.md) to pass the call arguments as individual parameters instead of an array.

### Usage Notes

-   This function is slow compared to calling the function/method directly and using it a lot may adversely affect performance.
-   This function will accept a [Script Asset](../../../../The_Asset_Editors/Scripts.md) and simply calls the script function contained within the asset that must have the same name as the script asset itself.
-   This function can be used to call constructors from a struct's context from inside a [with](../../../GML_Overview/Language_Features/with.md) statement. The calling struct executes the constructor and becomes an instance of the constructor.

#### Syntax:

script\_execute\_ext(scr, \[array\_args\], \[offset\], \[num\_args\]);

| Argument | Type | Description |
| --- | --- | --- |
| scr | Script Function or Method or Script Asset | The function/script or method that you want to call. See Script Functions vs. Methods |
| array_args | Array | OPTIONAL The array containing the arguments. Can be omitted if the function/script takes no arguments. |
| offset | Real | OPTIONAL The offset into the argument array. See Offset And Length |
| num_args | Real | OPTIONAL The number of arguments to use (from the offset onwards). See Offset And Length |

#### Returns:

[Any](../../../GML_Overview/Data_Types.htm#variable) (Will depend on the return value from the function/script being called)

#### Example 1: Basic Use

script\_execute\_ext(move\_inst, move\_array, floor(random(4)), 1);

The above code will use script\_execute\_ext to call the given function, supplying an array of four arguments, but only using one of them at random.

#### Example 2: Initialising Structs Using the Data in an Array

function Vector(\_x=0, \_y=0, \_z=0) constructor
{
    x = \_x;
    y = \_y;
    z = \_z;
}

num\_vectors = 100;
arr\_positions = array\_create\_ext(num\_vectors \* 3, function(\_index) { return random\_range(-4, 4); });

arr\_vectors = array\_create(num\_vectors);
var i = 0;
repeat(num\_vectors)
{
    arr\_vectors\[i\] = {};
    with(arr\_vectors\[i\])
    {
        script\_execute\_ext(Vector, other.arr\_positions, i \* 3, 3);
    }
    i++;
}

The code example above shows how script\_execute\_ext can be used to create an array of structs that take their parameters from the elements in an array.

First, a simple constructor function Vector is defined that accepts three parameters, one for each coordinate. Then, an array of 300 elements is created using [array\_create\_ext](../../Variable_Functions/array_create_ext.md) and filled with random values between -4 and 4. The resulting array is stored in a variable arr\_positions.  Each triplet of numbers in the array represents a position, i.e. elements 0, 1 and 2 hold the first x, y and z values, elements 3, 4 and 5 the second, elements 6, 7 and 8 the next ones, and so on.

Next, an array of 100 elements is created and stored in a variable arr\_vectors. Inside a [repeat](../../../GML_Overview/Language_Features/repeat.md) loop every element is then initialised to a new empty struct {}, the context is changed to that of the struct using a [with](../../../GML_Overview/Language_Features/with.md) statement and the constructor is called from that context using script\_execute\_ext. Every time the constructor is called it receives an (x, y, z) triplet as its parameters and turns the empty struct into a Vector struct which has its x, y and z set to the triplet's values.

After the code runs, the array arr\_vectors will contain 100 Vector structs initialised from the values in the arr\_positions array.