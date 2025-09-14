---
title: "string_trim"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_trim.htm"
converted: "2025-09-14T04:00:07.898Z"
---

# string\_trim

This function returns a new string with all leading and trailing white-space characters removed.

Passing an array of strings as the second argument (substr) will make the function remove any of those substrings at the start and end of the string, instead of white-space. These substrings may be repeated at either ends of the string, in which case all continuous occurrences will be removed. See **Example 3** below.

NOTE The following characters are white-space characters: space (" "), tab ("\\t"), carriage return ("\\r"), newline ("\\n"), form feed ("\\f") and vertical tab ("\\v"). See [White-space Characters](../../../Additional_Information/Whitespace_Characters.md) for the full list, including Unicode characters.

#### Syntax:

string\_trim(str, \[substr\]);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to trim |
| substr | Array of Strings | OPTIONAL An array containing strings to trim from the string |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example 1 (Trimming Spaces):

clean\_string = string\_trim("     Text somewhere in the middle.    ");

The above code calls the function string\_trim on a string that contains both leading and trailing spaces. The result is assigned to a local variable named clean\_string.

#### Example 2 (Trimming Newlines):

var \_string\_from\_literal = @"
The first line
is followed by the second line
";
clean\_string = string\_trim(\_string\_literal);

The above code first defines a string literal that contains newlines by prefixing it with the [@](Strings.htm#@) character. It assigns the new string to the temporary variable \_string\_from\_literal. This string is then trimmed using string\_trim and the result is stored in a new variable clean\_string.

#### Example 3 (Using An Array):

var \_string = "ThisThis is an object I love"
var \_remove = \["This", "is", "love"\]
var \_trimmed = string\_trim(\_string, \_remove);

show\_debug\_message(\_trimmed) // Prints " is an object I "

This removes the words "This" and "love" from both ends of the string. "This" appears twice at the start and is removed both times. The word "is" is not removed, because it's not at either end of the string.