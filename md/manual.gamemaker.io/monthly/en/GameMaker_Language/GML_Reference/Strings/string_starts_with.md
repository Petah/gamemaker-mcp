---
title: "string_starts_with"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_starts_with.htm"
converted: "2025-09-14T04:00:07.877Z"
---

# string\_starts\_with

This function checks if a string starts with the given substring. It returns true if it does, or false if it doesn't.

#### Syntax:

string\_starts\_with(str, substr);

| Argument | Type | Description |
| --- | --- | --- |
| str | String | The string to check for the occurrence of the given substring at the start |
| substr | String | The substring that the string should start with |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

var \_message = "Hello world";
if string\_starts\_with(\_message, "Hello")
{
    show\_debug\_message("Greeting successful!");
}

The above code first creates a string and stores it in a temporary variable \_message. It then checks if the string starts with the string "Hello" and shows a debug message if that is the case.