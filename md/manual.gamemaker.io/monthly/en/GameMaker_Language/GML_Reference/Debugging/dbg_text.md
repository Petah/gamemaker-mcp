---
title: "dbg_text"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_text.htm"
converted: "2025-09-14T03:59:48.639Z"
---

# dbg\_text

This function creates a read-only text label within the current debug section. You can use this to explain surrounding controls.

Both a [String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) and a [Reference](../Variable_Functions/ref_create.md) to a variable containing a string can be passed to the function. The text can be multiline.

You can also pass an array containing items of either type. The function will create a label for each item in the array.

NOTE See [dbg\_text\_input](dbg_text_input.md) for a control that allows modifiable text.

NOTE This control takes up a single column and can be shown on the same line with another single-column control using [dbg\_same\_line](dbg_same_line.md).

#### Syntax:

dbg\_text(ref\_or\_string\_or\_array);

| Argument | Type | Description |
| --- | --- | --- |
| ref_or_string_or_array | Reference or String or Array | A string or a reference to a variable that can be converted to string, returned by ref_create, or an array containing strings or references. |

#### Returns:

N/A

#### Example:

Create Event

text = "text";
ref\_to\_text = ref\_create(self, "text");
dbg\_text(ref\_to\_text);
dbg\_text(text);
dbg\_text("More text");

The above code assigns some text to an [instance variable](../../../../../../GameMaker_Language/GML_Overview/Variables/Instance_Variables.md) text. It then creates a reference to that variable using [ref\_create](../Variable_Functions/ref_create.md) and stores it in ref\_to\_text. Next, it adds three text controls to a new debug view "Default" that will be created, under a new section "Default". The three calls to dbg\_text add a text entry in three different ways: the first provides the reference to the text variable, the second passes the variable text itself (which assigns the _value_ the variable currently has) and the last passes a string directly.