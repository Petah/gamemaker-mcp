---
title: "is_callable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_callable.htm"
converted: "2025-09-14T04:00:10.452Z"
---

# is\_callable

This function returns whether the given argument is _callable_, i.e. is a [method](../../GML_Overview/Method_Variables.md) or refers to an index of a function.

A function index can refer to either a [built-in function](../../GML_Overview/Runtime_Functions.md), a [Script Function](../../GML_Overview/Script_Functions.md) or a [Script Asset](../../../The_Asset_Editors/Scripts.md).

NOTE To only check if a value is a method, see [is\_method](is_method.md).

#### Syntax:

is\_callable(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Any | The value to check |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

function my\_function()
{
    return random(10);
}
my\_method = function()
{
    return "Hello World!";
}

show\_debug\_message(is\_callable(my\_function));
show\_debug\_message(is\_callable(my\_method));
show\_debug\_message(is\_callable(draw\_text));

The above code first defines a function my\_function and a method my\_method. It then shows three debug messages. Each shows the result of calling is\_callable: the first on my\_function, the second on my\_method and the third on the built-in [draw\_text](../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md). All three debug messages will show 1, as all three are callable.