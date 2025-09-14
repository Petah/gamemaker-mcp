---
title: "dbg_text_input"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_text_input.htm"
converted: "2025-09-14T03:59:48.660Z"
---

# dbg\_text\_input

This function creates a text field within the current debug section.

By default, the text input modifies the variable referenced as a string variable. You can change this [data type](../../GML_Overview/Data_Types.md) by setting the optional type parameter to one of the following values:

-   "s" or "t": a string, for which [typeof](../Variable_Functions/typeof.md) returns "string"
-   "i" or "d": an integer, for which [typeof](../Variable_Functions/typeof.md) returns "int64"
-   "f", "r" or "g": a real number, for which [typeof](../Variable_Functions/typeof.md) returns "number"

The text field also accepts hexadecimal and binary as input for both integers and real numbers, i.e. 0xcafebabe or 0b1010101. It converts this input to the correct value for the given data type.

You can also pass an array in the first argument, in which case the function will create a text field for each reference in the array.

WARNING If the variable referenced stores a value of a different type than the type you provide to this function, any change you make to the text will change the referenced variable's type.

NOTE This debug control spans two columns.

NOTE On Android, editing a text field will bring up the on-screen keyboard.

#### Syntax:

dbg\_text\_input(ref\_or\_array, \[label, type\]);

| Argument | Type | Description |
| --- | --- | --- |
| ref_or_array | Reference or Array | A reference to a variable created using ref_create, or an array containing references |
| label | String | OPTIONAL The label to show next to the text input |
| type | String | OPTIONAL The type to store the value as in the variable that's referenced. This is indicated by a single letter: - string: "s" or "t" (default)- integer: "i" or "d"- real: "f", "r" or "g" |

#### Returns:

N/A

#### Example 1: Basic Use

Create Event

description = "This description can be changed";
var \_ref = ref\_create(self, "description");
dbg\_text\_input(\_ref, "Enter the description here:");

The above code first assigns some text to an instance variable description. It then creates a reference to this variable using [ref\_create](../Variable_Functions/ref_create.md). Next, it creates a text input control using dbg\_text\_input, the reference _links_ the control to the variable.

#### Example 2: Custom Data Types

Create Event

an\_integer = 5;
a\_real = 0.3583;
a\_string = "3289430";

ref\_to\_count = ref\_create(self, "an\_integer");
ref\_to\_some\_value = ref\_create(self, "a\_real");
ref\_to\_a\_string = ref\_create(self, "a\_string");

dbg\_text\_input(ref\_to\_count, "An Integer", "i");
dbg\_text\_input(ref\_to\_some\_value, "A Real", "f");
dbg\_text\_input(ref\_to\_a\_string, "A String", "s");

Draw Event

draw\_text(5, 600, $"An Integer ({typeof(an\_integer)}): {an\_integer}");
draw\_text(5, 620, $"A Real ({typeof(a\_real)}): {a\_real}");
draw\_text(5, 640, $"A String ({typeof(a\_string)}): {a\_string}");

This code example shows how to use custom data types with the text input debug control.

In the Create event of an object a couple of variables are first defined. They are assigned a real, another real and a string value. Then, a reference is created to each of these instance variables. After that, a text input is created using dbg\_text\_input to modify each of these variables through the reference to it. The function calls to dbg\_text\_input will bring up [The Debug Overlay](The_Debug_Overlay.md), so no call to [show\_debug\_overlay](show_debug_overlay.md) is required.

In the object's Draw event a line of text is displayed using [draw\_text](../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md) for each of the variables. Each line shows a descriptive text and the type of value between parentheses, followed by the value itself. Any change made in the text inputs will show in the drawn text.

Note that the type of the first variable changes immediately from "number" to "int64" as soon as you make a change in its text input control.