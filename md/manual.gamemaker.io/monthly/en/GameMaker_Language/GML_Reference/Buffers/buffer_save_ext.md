---
title: "buffer_save_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_save_ext.htm"
converted: "2025-09-14T03:59:43.805Z"
---

# buffer\_save\_ext

This function saves part of the contents of a buffer to a file, ready to be read back into memory using the [buffer\_load](buffer_load.md) function. This will save to the [game\_save\_id](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_save_id.md) location when a relative path is specified.

The "offset" defines the start position within the buffer for saving (in bytes), and the "size" is the size of the buffer area to be saved from that offset onwards (also in bytes).

#### Syntax:

buffer\_save\_ext(buffer, filename, offset, size);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to save. |
| filename | String | The name of the file to save as. |
| offset | Real | The offset within the buffer to save from (in bytes). |
| size | Real | The size of the buffer area to save (in bytes). |

#### Returns:

N/A

#### Example:

buffer\_save\_ext(buff, "Player\_Save.sav", 0, 16384);

This function saves part of the current contents of the buffer stored in the variable buff to a file.