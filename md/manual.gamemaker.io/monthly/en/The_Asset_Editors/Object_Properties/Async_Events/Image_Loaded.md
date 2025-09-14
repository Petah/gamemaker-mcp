---
title: "Image Loaded"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/Image_Loaded.htm"
converted: "2025-09-14T04:00:15.607Z"
---

# Image Loaded

![Image Loaded Event](../../../assets/Images/Asset_Editors/Async_ImageLoaded.png)This event is triggered when you load an image into GameMaker either on HTML5, or through a URL. For example, say you want to load a sprite image, and only change the current sprite for the instance to the new one after it has loaded. You would have something like this in the Create event (or any other event):

var \_url = "http://www.angusgames.com/game/background1.png";
spr = sprite\_add(\_url, 0, false, false, 0, 0);

This will now start to load the image into the device or the browser, but it will not block GameMaker while it waits for the file to be loaded. Instead GameMaker will keep running as normal until the image is loaded and the callback triggers the **Image Loaded Event**, where a [DS Map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.md) is created and stored in the special variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md). The map contains the following information:

-   "filename": The complete path to the file you requested.
-   "id": The ID of the resource that you have loaded. This will be the same as the variable that you have assigned the resource to.
-   "status": Returns a value of less than 0 for an error.

You would then assign the newly loaded image to a sprite in this event. The following code example demonstrates how the returned information would be used:

if (ds\_map\_find\_value(async\_load, "id") == spr)
{
    if (ds\_map\_find\_value(async\_load, "status") >= 0)
    {
        sprite\_index = spr;
    }
}

The above code will first check the id of the DS map that has been created, then check the status of the callback. If the value is greater than or equal to 0 (signalling success) the result from the callback will then be used to set the sprite index to the newly loaded image.