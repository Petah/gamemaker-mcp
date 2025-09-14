---
title: "nameof"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/nameof.htm"
converted: "2025-09-14T04:00:10.814Z"
---

# nameof

This function returns the name of the argument you pass to it as a [string.](../Strings/string.md)

More precisely, this function returns the name of the [identifier](https://en.wikipedia.org/wiki/Identifier_(computer_languages)) that you pass to it; any name to _identify_ something used in your GML code: an asset name, a variable name, a function name, the name of an enum (or of one of its members) or a macro name.

GameMaker resolves the values when [Compiling](../../../Introduction/Compiling.md) the game, i.e. at compile time.

#### Syntax:

nameof(name);

| Argument | Type | Description |
| --- | --- | --- |
| name | Any | The variable of which to get the name |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

show\_debug\_message("About to reveal internal names...");

show\_debug\_message($"The enemy object is called: {nameof(obj\_enemy)}");
show\_debug\_message($"{pi} is a special value, it is called {nameof(pi)}.");
show\_debug\_message($"The function to create a ds\_list is called: {nameof(ds\_list\_create)}, or even: {nameof(ds\_list\_create())}");

var \_a = 77, \_b = 66;
var \_c = \_a + \_b;
show\_debug\_message($"The sum of {nameof(\_a)} and {nameof(\_b)} is {nameof(\_c)}, or, using their values: {\_a} + {\_b} = {\_c}");

The code above shows a few examples on how to use the nameof function. The name of various variables and functions in GML is looked up using the function and output in the debug log using [show\_debug\_message](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md).