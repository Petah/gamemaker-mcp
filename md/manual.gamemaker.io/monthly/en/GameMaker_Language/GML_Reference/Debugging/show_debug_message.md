---
title: "show_debug_message"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/show_debug_message.htm"
converted: "2025-09-14T03:59:48.998Z"
---

# show\_debug\_message

This function shows a custom debug message in [The Output Window](../../../../../../Introduction/The_Output_Window.md) and [The Debug Overlay](The_Debug_Overlay.md) at runtime.

The syntax of this function is identical to that of the [string](../Strings/string.md) function; aside from a single argument it can also take a [Format String](../Strings/string.htm#h) with placeholders and additional arguments to replace the placeholders with.

Values of type [Real](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) that are an integer will have no decimal places in the string. Values of type [Real](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) that have a fractional part will have two decimal places in the string. If you need more decimal places in the output string you can use the function [string\_format](../Strings/string_format.md).

Values of type [Struct](../../../../../../GameMaker_Language/GML_Overview/Structs.md) or [Instance](../Asset_Management/Instances/Instances.md) will be converted to a string using that struct's or instance's [toString() Method](../Strings/Strings.htm#tostring_method) if one exists, or converted to a string implicitly.

Values of type [Handle](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) will be converted to a string that shows the handle info: "ref <type> <id>" or "ref <type> <name>".

Values of type [Array](../../../../../../GameMaker_Language/GML_Overview/Arrays.md) will be converted to a string of the format \[element1, element2, element3, element4, element5\], i.e. the concatenation of all elements in the array. If any of the elements in the array is a struct or an instance then its  will be called to convert it to a string.

Debug messages shown with this function will be shown in the [Compiler Output Window](../../../../../../Introduction/The_Output_Window.md) at the bottom of the IDE as well as in the [Graph View](../../../../../../IDE_Tools/The_Debugger.md) of the debugger when running the game in Debug Mode. If you only want to see messages in Debug Mode then you should probably be using [debug\_event()](debug_event.md) instead.

#### Syntax:

show\_debug\_message(value\_or\_format \[, value1, value2, ... max\_val\]);

| Argument | Type | Description |
| --- | --- | --- |
| value_or_format | Any (if value) or String (if format) | The value to be turned into a string. |
| [, value1, value2, ... max_val] | Any | OPTIONAL The values to be inserted at the placeholder positions. |

#### Returns:

N/A

#### **Example:**

if (!instance\_exists(obj\_Exit))
{
    show\_debug\_message("Exit not created!");
    show\_debug\_message("Error Num: {0}", global.error);
    game\_end();
}

The above code checks to see if an instance exists and if it does not, a debug message is shown in the compile window and the game is ended.