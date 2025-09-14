---
title: "dbg_text_separator"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_text_separator.htm"
converted: "2025-09-14T03:59:48.680Z"
---

# dbg\_text\_separator

This function adds a horizontal text separator between controls.

The text can be multiline and is either taken from a string or from a reference to a variable that holds a value that can be converted to string. You can also pass an array containing items of either type. The function will then create a separator for each item in the array.

The text is left-aligned by default though an optional parameter allows you to change this.

NOTE This control takes up a single column and cannot be shown on the same line with another single-column control.

#### Syntax:

dbg\_text\_separator(ref\_or\_string\_or\_array, \[align\]);

| Argument | Type | Description |
| --- | --- | --- |
| ref_or_string_or_array | Reference or String or Array | A string or a reference to a variable that can be converted to string, returned by ref_create, or an array containing references or strings |
| align | Real | OPTIONAL The alignment of the text separator (0=left, 1=centre, 2=right). The default is left alignment. |

#### Returns:

N/A

#### Example:

Create Event

separator\_text = "Separating Concerns";
a\_variable = "The Last Separator";
a\_number = 1;
dbg\_section("A long list of debug controls");
dbg\_text\_separator("The First Separator\\n(spans multiple lines)");
repeat(4) { dbg\_text(string(a\_number++)); }
dbg\_text\_separator(separator\_text, 1);
repeat(4) { dbg\_text(string(a\_number++)); }
dbg\_text\_separator(ref\_create(self, "a\_variable"), 2);
repeat(4) { dbg\_text(string(a\_number++)); }

The above code first defines two strings and stores them in the variables separator\_text and a\_variable and also defines a counter variable that it stores in a\_number. It then adds a debug section with three text separators underneath it, created using dbg\_text\_separator, each of them followed by four simple debug controls (added using [dbg\_text](../../../../../../GameMaker_Language/GML_Reference/Debugging/dbg_text.md)).