---
title: "string_ends_with"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_ends_with.htm"
converted: "2025-09-14T04:00:07.500Z"
---

# string\_ends\_with

This function checks if a string ends with a given substring. It returns true if it does, or false if it doesn't.

#### Syntax:

string\_ends\_with(str, substr);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to check for the occurrence of the given substring at the end |
| substr | String | The substring that the string should end with |

#### Returns:

[Boolean](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_message = "Hello World.";
if string\_ends\_with(\_message, ".") || string\_ends\_with(\_message, "?") || string\_ends\_with(\_message, "!")
{
    show\_debug\_message("The message is a valid sentence.");
}

The above code first defines a string and stores it in a temporary variable \_message. It then makes three calls to the function string\_ends\_with to check if the string ends with one of the following three punctuation marks: ".", "?" or "!". If the message ends in any of those, it shows a debug message.