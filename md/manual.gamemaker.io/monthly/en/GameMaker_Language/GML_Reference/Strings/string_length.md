---
title: "string_length"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_length.htm"
converted: "2025-09-14T04:00:07.683Z"
---

# string\_length

This function returns the number of characters comprising a given string. It can be useful for things like working out when to limit a custom text entry's character length (e.g.: capping a player's name to 10 characters). Remember that this is different to [string\_width()](string_width.md) in that it measures the number of _characters_ in the string, not its width as drawn on the screen in pixels.

#### Syntax:

string\_length(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to measure the number of characters of. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

if (string\_length(name) > 10)
{
    name = string\_copy(name, 1, 10);
}

This will check if the string of name is greater than ten characters and if it is, it will copy and use the first ten characters only.