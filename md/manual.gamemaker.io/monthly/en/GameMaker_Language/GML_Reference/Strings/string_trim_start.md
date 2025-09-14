---
title: "string_trim_start"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_trim_start.htm"
converted: "2025-09-14T04:00:07.930Z"
---

# string\_trim\_start

This function returns a new string with all leading white-space characters removed (i.e. on the left side of the string).

Passing an array of strings as the second argument (substr) will make the function remove any of those substrings at the start of the string, instead of white-space. These substrings may be repeated at the start, in which case all continuous occurrences will be removed. See **Example 3** below.

NOTE The following characters are white-space characters: space (" "), tab ("\\t"), carriage return ("\\r"), newline ("\\n"), form feed ("\\f") and vertical tab ("\\v"). See [White-space Characters](../../../Additional_Information/Whitespace_Characters.md) for the full list, including Unicode characters.

#### Syntax:

string\_trim\_start(str, \[substr\]);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to trim |
| substr | Array of Strings | OPTIONAL An array containing strings to trim from the start of the string |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example 1:

var \_string\_with\_a\_bit\_of\_everything = "     \\t\\t\\t\\tHello World";
var \_trimmed\_string = string\_trim\_start(\_string\_with\_a\_bit\_of\_everything);
show\_debug\_message(\_trimmed\_string);

The above code first creates a temporary string named \_string\_with\_a\_bit\_of\_everything. This string contains a couple of leading spaces and tabs before the actual text. It then trims all whitespace from the start of the string by calling string\_trim\_start and the result is stored in a new temporary variable \_trimmed\_string. Finally this new string is shown in a debug message.

#### Example 2 (Using An Array):

var \_string = "ThisThis is an object I love"
var \_remove = \["This", "is", "love"\]
var \_trimmed = string\_trim\_start(\_string, \_remove);

show\_debug\_message(\_trimmed) // Prints " is an object I love"

This removes the word "This" from the start of the string. "This" appears twice at the start and is removed both times. The word "is" is not removed, because it's not at the very start of the string, and "love" is not removed as it's at the [end](string_trim_end.md).