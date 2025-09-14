---
title: "argument"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/argument.htm"
converted: "2025-09-14T03:59:29.574Z"
---

# argument

This variable acts as an [array](../../Arrays.md) that is used along with the read-only variable [argument\_count](argument_count.md) in [script functions](../../Script_Functions.md) or [methods](../../Method_Variables.md). Each index holds an input value for the function and is specifically for use with _variable_ argument functions (i.e. where the number of arguments can vary between calls).

An argument that hasn't been passed in will be undefined.

Note that there are also a series of independent global scope variables that can also be used in user-defined functions to reference the different input arguments: argument0, argument1, argument2, etc. up to argument15.

NOTE This variable does not hold a real GML array, so you cannot run any [array functions](../../../GML_Reference/Variable_Functions/Array_Functions.md) on it or serialise it (convert it to a string). The only operation you can run on it is accessing a value at an index, with the argument\[index\] syntax.

#### Syntax:

argument\[n\]
argument1
argument2
...
argument15

#### Returns:

[Any](../../Data_Types.htm#variable) (can be of any data type supplied to the function)

#### Example:

function print()
{
    var \_str = "";
    for (var i = 0; i < argument\_count; i ++)
    {
        \_str += string(argument\[i\]);
    }
    show\_debug\_message(\_str);
}

// In an object
print("Player : ", current\_time, " : ", id, " : fired");

The above function joins all the arguments passed into the function into one string, and then prints that string to the output log.