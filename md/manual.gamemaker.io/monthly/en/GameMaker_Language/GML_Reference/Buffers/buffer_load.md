---
title: "buffer_load"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_load.htm"
converted: "2025-09-14T03:59:43.612Z"
---

# buffer\_load

This function loads a buffer that was previously saved using the [buffer\_save](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_save.md) functions, as well as any [Included Files](../../../Settings/Included_Files.md) or other files stored externally.

It returns a new buffer which is created by the function as a "grow" buffer (see [here](buffer_create.md)) with a byte alignment of 1. The buffer should be stored in a variable and used in all further function calls to this buffer. If the load fails for whatever reason, the function will return an invalid handle (\-1) and a message will be shown in the compiler output window saying that the load has failed.

NOTE It's important that you remove any dynamically created resources like this from memory when you no longer need them to prevent memory leaks, so when you are finished with the buffer that you have created you should free it up again using [buffer\_delete](buffer_delete.md).

### Platform-specific notes

-   On HTML5, any buffers loaded from the **local storage** will be decoded using base64 (since they are saved as base64 strings), however, using this function on Included Files or any external files will not use base64 decoding, as they are not expected to be in a base64 format.
-   On HTML5, all Included Files are stored as UTF-8 encoded text, which may result in an increase in the size of the loaded buffer when compared to the original file, as the UTF-8 encoded version of the file may have a different size than your original one (due to the change in format).

#### Syntax:

buffer\_load(filename);

| Argument | Type | Description |
| --- | --- | --- |
| filename | String | The name of the file to load from. |

#### Returns:

[Buffer](buffer_create.md)

#### Example:

player\_buffer = buffer\_load("Player\_Save.sav");

The above code loads a previously saved buffer into memory, creating a new buffer. It is stored in a variable player\_buffer.