---
title: "buffer_async_group_end"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_async_group_end.htm"
converted: "2025-09-14T03:59:43.173Z"
---

# buffer\_async\_group\_end

This function finishes the definition of a buffer async group.

You must have previously called the function [buffer\_async\_group\_begin](buffer_async_group_begin.md) to initiate the group, then call the function [buffer\_save\_async](buffer_save_async.md) for each file that you wish to save out (or [buffer\_load\_async](buffer_load_async.md) to load buffers). Finally you call this function, which will start the saving of the files. The function will return a unique ID value for the save, which can then be used in the [Asynchronous Save / Load event](../../../The_Asset_Editors/Object_Properties/Async_Events/Save_Load.md) to parse the results from the [async\_load](../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) DS map.

#### Syntax:

buffer\_async\_group\_end();

#### Returns:

[Async Request ID](../Asynchronous_Functions/Asynchronous_Functions.md)

#### Example:

The buffer\_async\_group\_end function can be called from any event, and since it is asynchronous the callback can be almost instantaneous or could take several seconds. Calling the function is simple and would look something like this:

buffer\_async\_group\_begin("SaveGame");
save1 = buffer\_save\_async(buff1, "Player\_Save1.sav", 0, 16384);
save2 = buffer\_save\_async(buff2, "Player\_Save2.sav", 0, 16384);
save3 = buffer\_save\_async(buff3, "Player\_Save3.sav", 0, 16384);
save4 = buffer\_save\_async(buff4, "Player\_Save4.sav", 0, 16384);
save\_id = buffer\_async\_group\_end();

The above code starts a buffer group then sets it to save out 4 files asynchronously. The group definition is then ended (at which point saving will begin), storing the ID of the function call in the variable save\_id. When the save is complete, the asynchronous [Save / Load](../../../The_Asset_Editors/Object_Properties/Async_Events/Save_Load.md) event will be triggered and you can parse the [async\_load](../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map for the correct ID of the function, like this:

if (ds\_map\_find\_value(async\_load, "id") == saveid)
{
    if (ds\_map\_find\_value(async\_load, "status") == false)
    {
        show\_debug\_message("Save failed!");
    }
}

The above code first checks if the ID in the [async\_load](../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) DS map is the same as the one returned by the call to buffer\_async\_group\_end, then checks the status of the callback and posts a debug message if there have been any issues.