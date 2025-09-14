---
title: "buffer_load_partial"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_load_partial.htm"
converted: "2025-09-14T03:59:43.667Z"
---

# buffer\_load\_partial

This function loads some of the buffer data that was previously saved using the [buffer\_save](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_save.md) functions into an existing buffer.

You provide the previously created buffer to load into, the path to the file to load and the offset from the start of the buffer (in bytes) that you wish to start writing the data. The following arguments are for setting the length of the buffer data (in bytes) from the initial offset point that you wish to load and the offset point to load the data to in the buffer (again, in bytes).

Please read the [buffer\_load](buffer_load.md) page for platform-specific notes.

#### Syntax:

buffer\_load\_partial(buffer, filename, offset, src\_len, dest\_offset);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to load into (destination). |
| filename | String | The name of the file to load from (source). |
| offset | Real | The offset within the destination buffer to load to (in bytes). |
| src_len | Real | The length of the part of the source buffer to load (in bytes). |
| dest_offset | Real | The offset where to start putting the partial data in the destination buffer (in bytes). |

#### Returns:

N/A

#### Example:

buff = buffer\_create(256, buffer\_grow, 1);
var \_file = "save.dat";
var \_so = 6;
var \_sl = 5;
var \_do = 0;
buffer\_load\_partial(buff, \_file, \_so, \_sl, \_do);

The above code will create a new "grow" buffer and then load in a part of the data saved in the file "save.dat" to it.