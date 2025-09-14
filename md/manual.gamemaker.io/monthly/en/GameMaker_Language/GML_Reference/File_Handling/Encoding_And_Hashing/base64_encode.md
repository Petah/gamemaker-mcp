---
title: "base64_encode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/base64_encode.htm"
converted: "2025-09-14T03:59:55.773Z"
---

# base64\_encode

This function will convert a string into a base64 format encoded string. This is a commonly used encoding scheme that is often used for any media that needs to be stored or transferred over the internet as text, and renders the output unreadable to the human eye.

#### Syntax:

base64\_encode(string)

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to encode. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

var str, file;
str = base64\_encode(game\_data);
file = file\_text\_open\_write("save.txt");
file\_text\_write\_string(file, str);
file\_text\_close(file);

The above code will covert the string stored in "game\_data" into a base64 encoded string which is then stored in an external text file.