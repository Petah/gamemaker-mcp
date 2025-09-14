---
title: "base64_decode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/base64_decode.htm"
converted: "2025-09-14T03:59:55.760Z"
---

# base64\_decode

This function will convert a string encoded previously using base64 format, into standard text. Base64 is a commonly used encoding scheme that is often used for any media that needs to be stored or transferred over the internet as text, and renders the output unreadable to the human eye.

NOTE To convert a base64 string into a sprite, use [sprite\_add](../../Asset_Management/Sprites/Sprite_Manipulation/sprite_add.md).

#### Syntax:

base64\_decode(string)

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to decode. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

var str, file;
str = base64\_encode(game\_data);
file = file\_text\_open\_read("save.txt");
str = file\_text\_read\_string(file); level\_data = base64\_decode(str);
file\_text\_close(file);

The above code will open a text file and read a string from it into the local variable "str". This string is then decoded and the result stored in the instance variable "level\_data".