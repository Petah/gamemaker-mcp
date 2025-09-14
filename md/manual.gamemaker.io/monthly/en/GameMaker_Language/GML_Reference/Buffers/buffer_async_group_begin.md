---
title: "buffer_async_group_begin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_async_group_begin.htm"
converted: "2025-09-14T03:59:43.157Z"
---

# buffer\_async\_group\_begin

This function is called when you want to begin the saving out of multiple buffers to multiple files (or loading multiple buffers).

The groupname is a string and will be used as the directory name for where the files are saved, and should be used as part of the file path when loading the files back from outside an async group (using any of the [buffer\_load](buffer_load.md) functions). This function is _only_ for use with the [buffer\_save\_async](buffer_save_async.md) and [buffer\_load\_async](buffer_load_async.md) functions and you must also end the async group by calling [buffer\_async\_group\_end](buffer_async_group_end.md) function otherwise the files will not be saved/loaded.

NOTE For the console platforms (like PS4 for example), the groupname will be used as the save slot description, and using this function can help you avoid having the UI show for every file that is being saved out.

#### Syntax:

buffer\_async\_group\_begin(groupname);

| Argument | Type | Description |
| --- | --- | --- |
| groupname | String | The name of the group |

#### Returns:

N/A

#### Example:

buffer\_async\_group\_begin("SaveGame");
save1 = buffer\_save\_async(buff1, "Player\_Save1.sav", 0, 16384);
save2 = buffer\_save\_async(buff2, "Player\_Save2.sav", 0, 16384);
save3 = buffer\_save\_async(buff3, "Player\_Save3.sav", 0, 16384);
save4 = buffer\_save\_async(buff4, "Player\_Save4.sav", 0, 16384);
buffer\_async\_group\_end();

The above code starts a buffer group then sets it to save out 4 files asynchronously. The group definition is then ended (at which point saving will begin).