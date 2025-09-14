---
title: "buffer_save"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_save.htm"
converted: "2025-09-14T03:59:43.769Z"
---

# buffer\_save

This function saves the contents of a buffer to a file, ready to be read back into memory using the [buffer\_load](buffer_load.md) function.

This will save to the [game\_save\_id](../General_Game_Control/game_save_id.md) location when a relative path is specified.

NOTE On HTML5 the contents of the buffer will be saved as base64 encoded strings when using this function.

#### Syntax:

buffer\_save(buffer, filename);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to save. |
| filename | String | The name of the file to save as. |

#### Returns:

N/A

#### Example:

buffer\_save(buff, "Player\_Save.sav");

The above code saves the current contents of the buffer stored in the variable buff to a file.