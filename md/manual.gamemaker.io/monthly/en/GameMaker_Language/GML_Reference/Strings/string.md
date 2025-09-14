---
title: "string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string.htm"
converted: "2025-09-14T04:00:07.342Z"
---

# string

This function creates a new string from a variety of data types.

When only one argument is provided to the function, this argument is considered to be a value, which will be converted to a string from its original [data type](../../GML_Overview/Data_Types.md). When more than one argument is given, the first argument is considered a [Format String](string.htm#h) and the arguments that follow it are considered the values to insert into the format string.

## Conversion From Non-String Types

Values of type [Real](../../GML_Overview/Data_Types.md) that are an integer will have no decimal places in the string. Values of type [Real](../../GML_Overview/Data_Types.md) that have a fractional part will have two decimal places in the string. If you need more decimal places in the output string you can use the function [string\_format](string_format.md).

Values of type [Struct](../../GML_Overview/Structs.md) or [Instance](../Asset_Management/Instances/Instances.md) will be converted to a string using that struct's or instance's [toString() Method](Strings.htm#tostring_method) if one exists, or converted to a string implicitly.

Values of type [Handle](../../GML_Overview/Data_Types.md) will be converted to a string that shows the handle info: "ref <type> <id>" or "ref <type> <name>".

Values of type [Array](../../GML_Overview/Arrays.md) will be converted to a string of the format \[element1, element2, element3, element4, element5\], i.e. the concatenation of all elements in the array. If any of the elements in the array is a struct or an instance then its  will be called to convert it to a string.

## Format String

When you pass more than one argument to the string function, the first argument will be treated as a _format string_. In a format string you can use _placeholders_ of the form "{0}", "{1}", "{2}", etc.

These placeholders will be replaced with the arguments at the positions they refer to, i.e. "{0}" will be replaced with the second argument, "{1}" will be replaced with the third argument, "{2}" will be replaced with the fourth argument, and so on.

string\_variable = string("This is a string with two placeholders that will be replaced. They are {0} and {1}.", "this", "that");

// Results in:
// "This is a string with two placeholders that will be replaced. They are this and that."

Any curly braces { } with text written between them that doesn't refer to a valid argument index won't represent a placeholder and are preserved, for example string("{Not} {1} has been replaced.", "") becomes "{Not} {1} has been replaced.". Curly braces in a format string can be doubled to escape them: {{ and }}.

If you only pass a single argument to the function, then this argument will not be considered a format string. If you add placeholders of the kind "{0}" in this case, then they will be output as normal text as there are no values to replace them with:

string\_variable = string("This is a string with two placeholders that won't be replaced. They are {0} and {1}.");

// Results in:
// "This is a string with two placeholders that won't be replaced. They are {0} and {1}."

NOTE You can also use [Template Strings](Strings.htm#h4) to insert variables and expressions into strings.

#### Syntax:

string(value\_or\_format \[, value1, value2, ...\]);

| Argument | Type | Description |
| --- | --- | --- |
| value_or_format | Any (if value) or String (if format) | The value to be turned into a string. |
| [, value1, value2, ...] | Any | OPTIONAL The values to be inserted at the placeholder positions. |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example 1:

draw\_text(100, 100, "Score: " + string(score) + " / Health: " + string(health));

The above code uses the string function to draw both real numbers and strings together, as [draw\_text()](../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md) will only accept _either_ a string _or_ a real, but not both, so we convert the non-strings into strings.

#### Example 2:

draw\_text(100, 100, string("Score: {0} / Health: {1}", score, health));

In this code the string function is used in a slightly different way to achieve the same result as in Example 1. Here the function is called with a format string as the first argument, in which "{0}" is replaced with the value of [score](../../GML_Overview/Variables/Builtin_Global_Variables/score.md) and "{1}" is replaced with the value of [health](../../GML_Overview/Variables/Builtin_Global_Variables/health.md).