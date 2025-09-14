---
title: "ds_map_secure_load_buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_secure_load_buffer.htm"
converted: "2025-09-14T03:59:47.402Z"
---

# ds\_map\_secure\_load\_buffer

This function will load a secure saved DS map from a buffer. You must previously have loaded the buffer into memory (using [buffer\_load](../../Buffers/buffer_load.md)) and then passing that into this function will return a DS map populated with the contents of the buffer. Note that the buffer must have been created using the function [ds\_map\_secure\_save\_buffer](ds_map_secure_save_buffer.md) for this to work correctly, and also note that if the DS map being loaded contained an array, this will be converted into a DS list instead on load.

NOTE This function is not supported on HTML5.

### Usage Notes

-   One of the features of a secure saved file is that it is locked to the device that it was created on, so you cannot load a file saved on one device into a project running on another device.
-   The buffer seek position should be at the start of the data. Use [buffer\_seek](../../Buffers/buffer_seek.md) to move it to the correct position where the data was written using [ds\_map\_secure\_save\_buffer](ds_map_secure_save_buffer.md).

#### Syntax:

ds\_map\_secure\_load\_buffer(buffer);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to load the map data from. |

#### Returns:

[DS Map](ds_map_create.md) or -1 in case the data couldn't be read correctly from the buffer

#### Example:

var \_buff = buffer\_load("save.dat");
map = ds\_map\_secure\_load\_buffer(\_buff);
buffer\_delete(\_buff);

The above code will load a securely saved DS map from a buffer and store its index value in a variable for future use.