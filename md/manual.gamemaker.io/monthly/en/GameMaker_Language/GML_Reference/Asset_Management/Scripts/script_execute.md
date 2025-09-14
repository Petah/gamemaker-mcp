---
title: "script_execute"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Scripts/script_execute.htm"
converted: "2025-09-14T03:59:39.475Z"
---

# script\_execute

This function calls a [Script Function](../../../GML_Overview/Script_Functions.md) or [Method](../../../GML_Overview/Method_Variables.md) with the given arguments.

It calls the script function or method you pass it in the context of the **calling instance or struct**. To call a method in its bound context, use [method\_call](../../Variable_Functions/method_call.md).

NOTE This function takes the call arguments as separate parameters. Use [script\_execute\_ext](script_execute_ext.md) to pass them as an array instead.

### Usage Notes

-   This function is slow compared to calling the function/method directly and using it a lot may adversely affect performance.
-   This function will accept a [Script Asset](../../../../The_Asset_Editors/Scripts.md) and simply calls the script function contained within the asset that must have the same name as the script asset itself.
-   This function can be used to call constructors from a struct's context from inside a [with](../../../GML_Overview/Language_Features/with.md) statement. The calling struct executes the constructor and becomes an instance of the constructor.

#### Syntax:

script\_execute(scr, arg0, arg1, arg2, etc.);

| Argument | Type | Description |
| --- | --- | --- |
| scr | Script Function or Method or Script Asset | The function/script or method that you want to call. See Script Functions vs. Methods |
| arg0, arg1, arg2, etc. | Any | OPTIONAL The different arguments that you want to pass through to the function/script |

#### Returns:

[Any](../../../GML_Overview/Data_Types.htm#variable) (Will depend on the return value from the script/function being called)

#### Example 1: Basic Use

script\_execute(choose(move\_up, move\_down, move\_left, move\_right), irandom(5));

The above code calls script\_execute to choose one of four user-defined functions (in this case related to movement) and passes a random integer to it as the first argument.

#### Example 2: Calling a Constructor Function

function StructA() constructor
{
    a = 1;
    b = 2;
    c = "Hello";
}
function StructB() constructor
{
    d = 3;
    e = 4;
    f = "!";
}

the\_struct = {};
with(the\_struct)
{
    script\_execute(StructA);
    script\_execute(StructB);
}
show\_debug\_message($"{instanceof(the\_struct)} -> {the\_struct}");

The above code shows how to call a constructor function using script\_execute.

First, two constructor functions are defined. Then an empty struct is created and stored in a variable the\_struct. The scope is then changed to that of the\_struct using a with statement and inside it script\_execute is called twice: once with StructA and once with StructB. After the two calls to script\_execute, the\_struct has the variables of StructA and StructB and is an instance of StructB.