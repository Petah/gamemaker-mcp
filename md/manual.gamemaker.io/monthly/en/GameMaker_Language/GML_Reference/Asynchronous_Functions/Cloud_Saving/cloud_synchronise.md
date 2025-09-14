---
title: "cloud_synchronise"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/Cloud_Saving/cloud_synchronise.htm"
converted: "2025-09-14T03:59:42.775Z"
---

# cloud\_synchronise [OBSOLETE](Cloud_Saving.md)

This function would normally be called at the start of a new game and is used to retrieve the current status of the cloud service at game start up. The function returns a unique **id** value which would then be used in the [Asynchronous Cloud Event](../../../../The_Asset_Editors/Object_Properties/Async_Events/Cloud.md) to retrieve the relevant information from the DS map that is created.

This function will send off to the cloud for data, which will then trigger the appropriate asynchronous event. In this event, you can check the returned [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) DS map for the following values:

-   **"status":** This holds the status code, where a negative value denotes an error, a description of which will be contained in the "errorString". A value of 0 (or a positive value) indicates a success(see below for exact values), and the "resultString" will contain the returned data or a success message.
-   **"id":** The id which was returned from the called function. If you fire off a series of cloud\_ requests then you need to know which one you are getting the reply to, and so you would use this value to compare to the value you stored when you originally sent the request to find the right one.
-   **"description":** The description of the last uploaded file.
-   **"resultString":** This holds a string which is the data blob returned from the cloud.
-   **"errorString":** returns an Error String for any error.

The exact meaning of the returned "status" map entry is explained in the following table:

| Status Value | errorString / resultString | Description |
| --- | --- | --- |
| -1 | errorString = "Not logged in to <SERVICE>" | You have not successfully logged in to the given Cloud Service |
| 0 | resultString = recovered data | New game data downloaded from the cloud (following a cloud_synchronise call) |
| 1 | resultString = "AlreadySynchronized" | No new data since you last called cloud_synchronise |
| 2 | resultString = "ConflictDeferral" | A conflict was encountered, but the gamer chose to ignore it |
| 3 | resultString = "GameUploadSuccess" | data from cloud_string_save() or cloud_file_save() was successfully uploaded to the cloud |
| -n | errorString = Description of error | Any other negative number means a synchronisation failure |

#### Syntax:

cloud\_synchronise();

#### Returns:

[Async Request ID](../Asynchronous_Functions.md)

#### Extended Example:

This function would be called in an event like the **Game Start Event** or in an object that is placed in the first room of your game, with the idea being that you check the current data blob from the cloud server to see if it is up to date or not.

cloud\_check = cloud\_synchronise();

You would then want to check the returned DS Map in the asynchronous **Cloud Event** to get the status and the returned string, if there is one, with something like the following code:

if (ds\_map\_find\_value(async\_load, "id") == cloud\_check)
{
    if (ds\_map\_find\_value(async\_load, "status") < 0)
    {
        show\_message\_async("Cloud Services not available. Please check connectivity.");
    }
    else
    {
        if (ds\_map\_find\_value(async\_load, "status") == 0)
        {
            var file = file\_text\_open\_write("Save.txt");
            file\_text\_write\_string(file, ds\_map\_find\_value(async\_load, "resultString"));
            file\_text\_close(file);
        }
    }
}

The above code checks to make sure that the correct asynchronous function call is being revised, then goes on to get the status of the returned cloud DS map. if the status is a negative number, something has gone wrong and the user is informed, otherwise the code will continue and retrieve the synchronised data and write it to a text file for later use.