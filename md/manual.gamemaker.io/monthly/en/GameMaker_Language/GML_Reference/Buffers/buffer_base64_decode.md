---
title: "buffer_base64_decode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_base64_decode.htm"
converted: "2025-09-14T03:59:43.203Z"
---

# buffer\_base64\_decode

This function decodes a base64 encoded string (created using the [buffer\_base64\_encode](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_base64_encode.md) function) into a new buffer.

The buffer is created as a 1 byte aligned "grow" buffer.

NOTE It's important that you remove any dynamically created resources like this from memory when you no longer need them to prevent memory leaks, so when you are finished with the buffer that you have created you should free it up again using [buffer\_delete](buffer_delete.md).

#### Syntax:

buffer\_base64\_decode(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The base64 encoded string to decode |

#### Returns:

[Buffer](buffer_create.md)

#### Example:

ini\_open("Save.ini");
buff = buffer\_base64\_decode(ini\_read\_string("Save", "Slot1", ""));
ini\_close();

The above code will open an INI file and then read a string from it into the buffer\_base64\_decode function. The function will return a buffer, which is stored in the variable buff, containing the data previously encoded and saved. The INI file is then closed.