---
title: "buffer_save_async"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_save_async.htm"
converted: "2025-09-14T03:59:43.789Z"
---

# buffer\_save\_async

This function saves part of the contents of a buffer to a file asynchronously, ready to be read back into memory using any of the buffer\_load\_\* functions. This will save to the [game\_save\_id](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_save_id.md) location when a relative path is specified.

The "offset" defines the start position within the buffer for saving (in bytes), and the "size" is the size of the buffer area to be saved from that offset onwards (also in bytes). This function works asynchronously, and so the game will continue running while being saved.

All files saved using this function will be placed in a "default" folder (unless you are using an [async group](buffer_async_group_begin.md), then the name of the group replaces "default"). This folder does _not_ need to be included in the filename as it is added automatically by GameMaker. For example the filename path "Data\\Player\_Save.sav" would actually be saved to "default\\Data\\Player\_Save.sav". When you load the file using the function [buffer\_load\_async](buffer_load_async.md), you do not need to supply the "default" part of the path either (but any other file function _will_ require it, except on consoles Xbox, PlayStation and Nintendo Switch).

**NOTE** On HTML5 "default/" is not added automatically and you may have to account for this in your code.

NOTE "default/" is not added when saving a buffer to an absolute path by disabling the system sandbox on Desktop platforms.

The function will return a unique ID value and trigger an [Asynchronous Save/Load Event](../../../The_Asset_Editors/Object_Properties/Async_Events/Save_Load.md) where you can use the returned ID to check the [async\_load](../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md)'s ID value, as shown in the extended example below. The [async\_load](../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map in the event will have the following two key/value pairs:

-   **"id":** the ID of the async function as returned by the save function.
-   **"status":** will return true if the data was saved correctly, and false otherwise.

Note that you can save out multiple buffers in one by calling this function multiple times between calls to [buffer\_async\_group\_begin](buffer_async_group_begin.md) and [buffer\_async\_group\_end](buffer_async_group_end.md) (see those functions for further information on this).

NOTE On HTML5 the returned results are saved as base64 encoded strings when saved to a file.

#### Syntax:

buffer\_save\_async(buffer, filename, offset, size);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to save. |
| filename | String | The name of the file to save as. |
| offset | Real | The offset within the buffer to save from (in bytes). |
| size | Real | The size of the buffer area to save (in bytes). |

#### Returns:

[Async Request ID](../Asynchronous_Functions/Asynchronous_Functions.md)

#### Example:

The buffer\_save\_async function can be called from any event, and since it is asynchronous the callback can be almost instantaneous or could take several seconds. Calling the function is simple and would look something like this:

saveid = buffer\_save\_async(buff, "Player\_Save.sav", 0, 16384);

The above code saves the contents of the buffer buff to the given save file, storing the ID of the function call in a variable saveid. When the save is complete, the asynchronous [Save / Load](../../../The_Asset_Editors/Object_Properties/Async_Events/Save_Load.md) event will be triggered and you can parse the [async\_load](../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map for the correct ID of the function, like this:

if (ds\_map\_find\_value(async\_load, "id") == saveid)
{
    if (ds\_map\_find\_value(async\_load, "status") == false)
    {
        show\_debug\_message("Save failed!");
    }
}

The above code will first check the ID of the DS map that has been created, then check the status of the callback, posting a debug message if there have been any issues.