---
title: "string_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_delete.htm"
converted: "2025-09-14T04:00:07.465Z"
---

# string\_delete

This function is used to remove a part of the given string. You supply the input string, the starting position within that string to remove characters from (the index starts at 1) and the number of characters to remove. The function will return a new string without that part in it.

#### Syntax:

string\_delete(str, index, count);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to copy and delete from. |
| index | Real | The position of the first character to remove (from 1). Negative indices are supported and count from the end of the string, e.g. -1 indicates the last character. |
| count | Real | The number of characters to remove. A negative number means characters are deleted backwards. For example, -4 indicates the character at index and the 3 characters in front of it will be deleted. |

#### Returns:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example 1: Basic Use

str = "Helloo World";
str = string\_delete(str, 5, 1);

This will set str to "Hello World", as it removes the extra "o" from "Hello" (which is present at position 5).

#### Example 2: Negative Index and Count

str = "One, two, three, four!";

str = string\_delete(str, -2, -6);
show\_debug\_message(str);

This will set str to "One, two, three!", since the call to string\_delete removes the word "four" as well as the space and comma characters in front of it (a total of 6 characters starting at the one before last character).