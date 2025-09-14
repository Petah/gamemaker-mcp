---
title: "show_debug_message_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/show_debug_message_ext.htm"
converted: "2025-09-14T04:00:07.323Z"
---

# show\_debug\_message\_ext

This function shows a custom debug message in [The Output Window](../../../Introduction/The_Output_Window.md) and [The Debug Overlay](../Debugging/The_Debug_Overlay.md) at runtime.

The syntax of this function is identical to that of the [string\_ext](string_ext.md) function; aside from a single argument it can also take a [Format String](string.htm#h) with placeholders and and array with additional arguments to replace the placeholders with.

Values of type [Real](../../GML_Overview/Data_Types.md) that are an integer will have no decimal places in the string. Values of type [Real](../../GML_Overview/Data_Types.md) that have a fractional part will have two decimal places in the string. If you need more decimal places in the output string you can use the function [string\_format](string_format.md).

Values of type [Struct](../../GML_Overview/Structs.md) or [Instance](../Asset_Management/Instances/Instances.md) will be converted to a string using that struct's or instance's [toString() Method](Strings.htm#tostring_method) if one exists, or converted to a string implicitly.

Values of type [Handle](../../GML_Overview/Data_Types.md) will be converted to a string that shows the handle info: "ref <type> <id>" or "ref <type> <name>".

Values of type [Array](../../GML_Overview/Arrays.md) will be converted to a string of the format \[element1, element2, element3, element4, element5\], i.e. the concatenation of all elements in the array. If any of the elements in the array is a struct or an instance then its  will be called to convert it to a string.

#### Syntax:

show\_debug\_message\_ext(value\_or\_format, values\_array);

| Argument | Type | Description |
| --- | --- | --- |
| value_or_format | Any (if value) or String (if format) | The value to be turned into a string. |
| values_array | Array of Any | OPTIONAL An array containing the values to be inserted at the placeholder positions. |

#### Returns:

N/A

#### Example 1:

show\_debug\_message\_ext("{0} - {1}", \[1, "First item"\]);

#### Example 2:

numbers = \[59, 23, 656, 8, 54\];
array\_sort(numbers, true);

show\_debug\_message\_ext("The three lowest numbers are: {0}, {1} and {2}", numbers);

The above code first defines an array with some numbers, and sorts them in an ascending order. It then uses that array in a show\_debug\_message\_ext() to call to insert its first three numbers into a format string, and then print the resulting string to the Output Log.