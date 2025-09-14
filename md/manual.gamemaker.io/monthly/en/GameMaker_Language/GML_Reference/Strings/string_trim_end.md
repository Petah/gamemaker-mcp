---
title: "string_trim_end"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_trim_end.htm"
converted: "2025-09-14T04:00:07.914Z"
---

# string\_trim\_end

This function returns a new string with all trailing white-space characters removed (i.e. on the right side of the string).

Passing an array of strings as the second argument (substr) will make the function remove any of those substrings at the end of the string, instead of white-space. These substrings may be repeated at the end, in which case all continuous occurrences will be removed. See **Example 3** below.

NOTE The following characters are white-space characters: space (" "), tab ("\\t"), carriage return ("\\r"), newline ("\\n"), form feed ("\\f") and vertical tab ("\\v"). See [White-space Characters](../../../Additional_Information/Whitespace_Characters.md) for the full list, including Unicode characters.

#### Syntax:

string\_trim\_end(str, \[substr\]);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to trim |
| substr | Array of Strings | OPTIONAL An array containing strings to trim from the end of the string |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example 1:

var \_the\_string = "A\\nB\\n\\C\\nD\\n\\n\\n\\n\\n\\n";
var \_clean\_string = string\_trim\_end(\_the\_string);

The above code first defines a string with many newlines at the end and stores it in a temporary variable \_the\_string. It then calls string\_trim\_end to remove all the newline characters at the end of the string (but _not_ the ones between the letters) and stores the result in another temporary variable \_clean\_string.

#### Example 2 (Using An Array):

var \_string = "This is an object I lovelove"
var \_remove = \["This", "I", "love"\]
var \_trimmed = string\_trim\_end(\_string, \_remove);

show\_debug\_message(\_trimmed) // Prints "This is an object I "

This removes the word "love" from the end of the string. "love" appears twice at the end and is removed both times. The word "I" is not removed, because it's not at the very end of the string, and "This" is not removed as it's at the [start](string_trim_start.md).