---
title: "async_load"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.htm"
converted: "2025-09-14T03:59:29.604Z"
---

# async\_load

This variable is **global** in scope and is used to hold a [DS Map](../../../GML_Reference/Data_Structures/DS_Maps/ds_map_create.md) when used in the [Asynchronous Events](../../../../The_Asset_Editors/Object_Properties/Async_Events.md), and an invalid [DS Map](../../../GML_Reference/Data_Structures/DS_Maps/ds_map_create.md) handle (-1) at all other times. The actual contents of the DS map will depend on the type of asynchronous event callback, as well as the function that was used to trigger the event, so refer to the individual pages for those events for full details of all the possible DS map contents.

#### Syntax:

async\_load

#### Returns:

[DS Map](../../../GML_Reference/Data_Structures/DS_Maps/ds_map_create.md)

#### Extended Example:

sprite =  sprite\_add("site.com/path/image.png", 16, true, true, 0, 0);

The above code would be called in an event to load a sprite from an external URL. This would then trigger the **Image Loaded** Asynchronous Event, where you would parse the async\_load map:

if (ds\_map\_find\_value(async\_load, "id") == sprite)
{
    if (ds\_map\_find\_value(async\_load, "status") >= 0)
    {
        sprite\_index = sprite;
    }
}

The above code will first check the ID of the async\_load map, then check the status of the callback. If the value is greater than or equal to 0 (signalling success) the result from the callback will then be used to set the sprite index of the instance to the newly loaded image.