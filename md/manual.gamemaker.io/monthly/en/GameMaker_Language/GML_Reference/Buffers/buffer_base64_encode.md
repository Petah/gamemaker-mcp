---
title: "buffer_base64_encode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_base64_encode.htm"
converted: "2025-09-14T03:59:43.237Z"
---

# buffer\_base64\_encode

This function converts the data in the given buffer into a [base64](https://en.wikipedia.org/wiki/Base64) encoded string.

Base64 is a commonly used encoding scheme that is often used for any media that needs to be stored or transferred over the internet as text, and renders the output unreadable to the human eye.

To use this function you need to specify an already created buffer, the offset value (which is the point within the buffer at which you wish to start encoding) as well as the size, in bytes, of the buffer memory to encode.

#### Syntax:

buffer\_base64\_encode(buffer, offset, size);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to use |
| offset | Real | The data offset value |
| size | Real | The number of bytes, starting at the offset, to encode |

#### Returns:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example 1: Basic Use

var \_b\_str = buffer\_base64\_encode(buff, 0, buffer\_get\_size(buff));

The above code encodes the full data stored in the buffer stored in the variable buff and stores the returned string in a local variable \_b\_str.

#### Example 2: Converting an Image to a Data URL

var \_path = "player\_walk\_5.png";
var \_buff = buffer\_load(\_path);
var \_base64\_data = buffer\_base64\_encode(\_buff, 0, buffer\_get\_size(\_buff));
buffer\_delete(\_buff);
var \_data\_url = $"data:image/png;base64,{\_base64\_data}";
show\_debug\_message(\_data\_url);

The above code shows how to encode an image stored on disk as a data URL, which can be passed to [sprite\_add](../Asset_Management/Sprites/Sprite_Manipulation/sprite_add.md) or [sprite\_replace](../Asset_Management/Sprites/Sprite_Manipulation/sprite_replace.md).

First the path to the image is assigned to a variable. Next the image is loaded into a buffer using [buffer\_load](buffer_load.md) and the entire buffer's contents are encoded as a base64 string using buffer\_base64\_encode. The buffer is deleted after this as it is no longer needed. Finally, the data URL string is constructed using [template string](../Strings/Strings.htm#h4) syntax and the string is output in a debug message.