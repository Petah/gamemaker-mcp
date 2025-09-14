---
title: "string_hash_to_newline"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_hash_to_newline.htm"
converted: "2025-09-14T04:00:07.565Z"
---

# string\_hash\_to\_newline

This function returns a string where the "#" symbol has been converted into a new line. So a string formatted as:

"Hello#World"

Would be printed to the screen as:

Hello
World

IMPORTANT This function is provided for import compatibility between GameMaker and previous versions of the software and as such this function should not be used except when necessary to replicate obsolete functionality. Instead you should be using the [Escape Characters](Strings.htm#h1) to mark a new line. For more information on import compatibility see the [Obsolete Functions](../../../../../../Additional_Information/Obsolete_Functions.md) page.

#### Syntax:

string\_hash\_to\_newline(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to convert over multiple lines |

#### Returns:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var str = string\_hash\_to\_newline("Hello#World");
draw\_text(32, 32, str);

The above code converts the string with the hash symbol into a string split over two lines then prints it to the screen.