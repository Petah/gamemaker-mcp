---
title: "Save / Load"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/Save_Load.htm"
converted: "2025-09-14T04:00:15.665Z"
---

# Save / Load

![Save / Load Event](../../../assets/Images/Asset_Editors/Async_SaveLoad.png)This event will be triggered by the callback from certain functions related to loading and saving buffers to files, as well as when loading or unloading audio from memory. The event itself will contain the built-in [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) DS map which will be populated by the keys required for the specific function. These are listed in the sections below.

This event is also triggered for the [zip\_unzip\_async](../../../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/zip_unzip_async.md) and [zip\_save](../../../GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/zip_save.md) functions.

## Buffers

When you use the functions [buffer\_save\_async()](../../../GameMaker_Language/GML_Reference/Buffers/buffer_save_async.md) or [buffer\_load\_async()](../../../GameMaker_Language/GML_Reference/Buffers/buffer_load_async.md) an asynchronous event will be triggered when the data transfer has been completed. This event will populate the async\_load map with the following key/value pairs

-   "id": the ID of the async function as returned by the function used.
-   "status": will return true if the data was saved/loaded correctly, and false otherwise.

This permits you to poll the saving/loading progress and display a message or change rooms etc... when the process is complete.

## Audio Groups

When working with [Audio Groups](../../../Settings/Audio_Groups.md), you can load them an unload them from memory using the functions [audio\_group\_load()](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/audio_group_load.md) and [audio\_group\_unload()](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/audio_group_unload.md). When using the load function, it will trigger this event when the full set of audio files set for the group has been loaded into memory and will populate the map with the following key/value pairs:

-   "type": this tells us the type of event being called and will be "audiogroup\_load" for loading audio.
-   "group\_id": will return the ID of the audio group that has been loaded (as defined in the [Audio Group Editor](../../../Settings/Audio_Groups.md)).

When all audio has been loaded for a group, this event will trigger and it can then be used to change rooms, or play a music track etc...