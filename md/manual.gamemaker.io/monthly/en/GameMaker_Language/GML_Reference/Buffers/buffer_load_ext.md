---
title: "buffer_load_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_load_ext.htm"
converted: "2025-09-14T03:59:43.649Z"
---

# buffer\_load\_ext

This function loads the buffer data that was previously saved using the [buffer\_save](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_save.md) function and related functions into an existing buffer.

You pass the previously created buffer to load into, then the saved buffer file to load, and finally the offset from the start of the buffer (in bytes) that you wish to load the data to.

Please read the [buffer\_load](buffer_load.md) page for platform-specific notes.

#### Syntax:

buffer\_load\_ext(buffer, filename, offset);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to load into. |
| filename | String | The name of the file to load from. |
| offset | Real | The offset within the buffer to load to (in bytes). |

#### Returns:

N/A

#### Example:

var \_pos = buffer\_seek(player\_buffer, buffer\_seek\_end, 0);
buffer\_load\_ext(player\_buffer, "Data\_Save.sav", \_pos);

The above code firsts get the position of the end of the buffer stored in the variable player\_buffer and then loads the data from the given file into that position (note that this example will only work with "grow" or "wrap" buffer types).