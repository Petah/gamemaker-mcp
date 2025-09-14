---
title: "handle_parse"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/handle.htm"
converted: "2025-09-14T04:00:10.371Z"
---

# handle\_parse

This function parses a string to create a [handle reference](../../GML_Overview/Data_Types.md).

A handle is represented in a string with this format: "ref <type> <id>" or "ref <type> <name>".

A handle can be invalid, in which case the index number it holds will be \-1, or \-4 ([noone](../../GML_Overview/Instance%20Keywords/noone.md)) for instance handles. All handles can be compared against their "invalid" value to check whether they're valid or not (i.e. if (handle != -1) { // do something } or if (handle != noone) { // do something }).

NOTE You can use [string](../Strings/string.md) to get the string representation of a handle and [real](real.md) to get the index number that it holds.

#### Syntax:

handle\_parse(value\_string);

| Argument | Type | Description |
| --- | --- | --- |
| value_string | String | The string representation of the handle, formatted as "ref <type> <id>" or "ref <type> <name>" |

#### Returns:

[Handle](../../GML_Overview/Data_Types.md) (or [undefined](../../GML_Overview/Data_Types.md) in case of an invalid handle type or an incorrectly formatted string)

#### Example:

sprite = spr\_player;
handle\_as\_string = string(sprite);
h = handle\_parse(handle\_as\_string);

show\_debug\_message($"{sprite} ({typeof(sprite)})");
show\_debug\_message($"{handle\_as\_string} ({typeof(handle\_as\_string)})");
show\_debug\_message($"{h} ({typeof(h)})");

The code above converts the handle of a sprite named spr\_player to its string representation (handle\_as\_string), and then back into a handle (h). It then outputs each of the created instance variables in a debug message, along with its type. This prints the following:

ref sprite 0 (ref)
ref sprite (string)
ref sprite 0 (ref)

You can see that the original reference is converted into a string, which is then parsed back as a reference, which can again be used in functions just like the original reference.

The values of the handle variables are implicitly converted to their string representation to display them.