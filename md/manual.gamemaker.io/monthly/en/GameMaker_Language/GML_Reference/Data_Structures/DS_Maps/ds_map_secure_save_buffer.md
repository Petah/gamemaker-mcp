---
title: "ds_map_secure_save_buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_secure_save_buffer.htm"
converted: "2025-09-14T03:59:47.441Z"
---

# ds\_map\_secure\_save\_buffer

This function will save a previously created DS map to a [buffer](../../Buffers/Buffers.md). You supply the DS map handle (as returned by the function [ds\_map\_create](ds_map_create.md)) and the buffer to write to (as returned by the function [buffer\_create](../../Buffers/buffer_create.md)). Note that if the DS map being saved contains an [array](../../../GML_Overview/Arrays.md), this will be converted into a DS list instead when saved.

NOTE This function is not supported on HTML5.

### Usage Notes

-   The secure saved DS map file can only be loaded on the device that created it, and if you try to load a file that was saved on a different device, then it will not work.
-   This function writes the DS map to the buffer at the current seek position (see [buffer\_tell](../../Buffers/buffer_tell.md)) and increments it by the number of bytes written.

#### Syntax:

ds\_map\_secure\_save\_buffer(filename);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS Map | The DS map handle. |
| buffer | Buffer | The buffer to save to. |

#### Returns:

N/A

#### Example:

buff = buffer\_create(128, buffer\_grow, 4);
var \_map = ds\_map\_create();
ds\_map\_add(\_map, "bob", "ajob");
ds\_map\_add(\_map, "money", 10);
ds\_map\_secure\_save\_buffer(\_map, buff);
ds\_map\_destroy(\_map);

The above code will create a buffer and a DS map, then populate the map with some values and write it to the buffer before deleting the map.