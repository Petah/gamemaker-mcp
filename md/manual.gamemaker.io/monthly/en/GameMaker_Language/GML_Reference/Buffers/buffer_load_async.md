---
title: "buffer_load_async"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_load_async.htm"
converted: "2025-09-14T03:59:43.635Z"
---

# buffer\_load\_async

This function loads a file that you have created previously using the [buffer\_save](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_save.md) function (or any of the other functions for saving buffers) into a buffer.

The "offset" defines the start position within the buffer for loading (in bytes), and the "size" is the size of the buffer area to be loaded from that offset onwards (also in bytes). You can supply a value of -1 for the size argument to load the entire buffer. Note that the function will load from a "default" folder (unless you are using an [async group](buffer_async_group_begin.md), then the name of the group replaces "default"), which does _not_ need to be included as part of the file path you provide. This folder will be created if it doesn't exist or when you save a file using [buffer\_save\_async](buffer_save_async.md).

The function returns a unique ID value which can then be used in the [Save / Load Asynchronous event](../../../The_Asset_Editors/Object_Properties/Async_Events/Save_Load.md) to check the [async\_load](../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md)'s ID value, as shown in the extended example below. The [async\_load](../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map in the event will have the following two key/value pairs:

-   **"id":** the ID of the async function as returned by the save function.
-   **"status":** will return true if the data was loaded correctly, false otherwise.

NOTE On **HTML5**, this is the preferred method for loading a file if you are loading from a server and not local storage, as loading synchronously has been deprecated on most browsers and will eventually be obsoleted.

Please read the [buffer\_load](buffer_load.md) page for platform-specific notes.

#### Syntax:

buffer\_load\_async(buffer, filename, offset, size);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to load. |
| filename | String | The name of the file to load. |
| offset | Real | The offset within the buffer to load to (in bytes). |
| size | Real | The size of the buffer area to load (in bytes). |

#### Returns:

[Async Request ID](../Asynchronous_Functions/Asynchronous_Functions.md)

#### Example:

The buffer\_load\_async function can be called from any event, and since it's asynchronous the callback can be almost instantaneous or could take several seconds. Calling the function is simple and would look something like this:

loadid = buffer\_load\_async(buff, "Player\_Save.sav", 0, 16384);

The above code loads the contents of the file "_Player\_Save.sav_" to the given buffer, storing the ID of the function call in the variable loadid. When the load is complete, the asynchronous [Save / Load](../../../The_Asset_Editors/Object_Properties/Async_Events/Save_Load.md) event will be triggered and you can parse the [async\_load](../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map for the correct ID of the function, like this:

if (ds\_map\_find\_value(async\_load, "id") == loadid)
{
    if (ds\_map\_find\_value(async\_load, "status") == false)
    {
        show\_debug\_message("Load failed!");
    }
}

The above code will first check the ID of the DS map that has been created, then check the status of the callback, posting a debug message if there have been any issues.