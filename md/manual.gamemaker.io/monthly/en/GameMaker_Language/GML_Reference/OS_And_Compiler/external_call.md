---
title: "external_call"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/external_call.htm"
converted: "2025-09-14T04:00:04.272Z"
---

# external\_call

If you have created an external function call to a dll or dylib using [external\_define()](external_define.md), you can use this function to then call it. You supply the name of the previously defined function as well as each of the arguments it requires (each argument must be of the correct type, either real or string) and the function returns the result of the external call.

#### Syntax:

external\_call(id, args\[0...15\]);

| Argument | Type | Description |
| --- | --- | --- |
| id | External Function | The name of the function that you want to call |
| args[0...10] | Real or String | The different arguments that you want to pass through to the external function |

#### Returns:

[Any](../../GML_Overview/Data_Types.htm#variable) (the type of value returned will depend on the defined function)

#### Example:

my\_function = external\_define("MyDLL.dll", "MyMin", dll\_cdecl, ty\_real, 2, ty\_real, ty\_real);
var \_a = external\_call(my\_function, x, y);

The above example code calls a previously defined external function and stores the returned value in a local variable.