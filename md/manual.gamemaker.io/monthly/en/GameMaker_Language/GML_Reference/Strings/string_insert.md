---
title: "string_insert"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_insert.htm"
converted: "2025-09-14T04:00:07.607Z"
---

# string\_insert

With this function you can create a new string made up of two strings, where one has been inserted into the other at a given position. It can be useful, for example, to add a user name into a predefined text and so make the player of your game feel more involved in the action. Keep in mind when calculating the position to insert into that strings are indexed from 1, so the first character in a string is 1 and not 0 as you may expect.

#### Syntax:

string\_insert(substr, str, index);

| Argument | Type | Description |
| --- | --- | --- |
| substr | String | The substring to be inserted. |
| str | String | The string to be copied. |
| index | Real | The position in characters of the string to insert the substring. |

#### Returns:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

str2 = string\_insert(username, "Hello, , how are you?", 8);

This will insert the string in the "username" variable into the given phrase with the resulting string looking like this: "Hello, NAME, how are you?".