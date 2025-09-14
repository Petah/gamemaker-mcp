---
title: "Cloud"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/Cloud.htm"
converted: "2025-09-14T04:00:15.541Z"
---

# Cloud

![Cloud Event](../../../assets/Images/Asset_Editors/Async_Cloud.png)The Cloud Event is one that is triggered by the call back from one of the [cloud\_\*()](../../../GameMaker_Language/GML_Reference/Asynchronous_Functions/Cloud_Saving/Cloud_Saving.md) functions, like [cloud\_synchronise()](../../../GameMaker_Language/GML_Reference/Asynchronous_Functions/Cloud_Saving/cloud_synchronise.md). It actually generates a DS map that is exclusive to this event and is stored in the special variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) (please see the individual functions for code examples that explain the use of this event in further detail). This DS map has the following structure:

-   "status": This holds the status code, where a negative value denotes an error, a description of which will be contained in the “errorString”. A value of 0 (or a positive value) indicates a success(see below for exact values), and the “resultString” will contain the returned data or a success message.
-   "id": The id which was returned from the called function. If you fire off a series of cloud\_ requests then you need to know which one you are getting the reply to, and so you would use this value to compare to the value you stored when you originally sent the request to find the right one.
-   "description": The description of the last uploaded file.
-   "resultString": This holds a string which is the data blob returned from the cloud.
-   "errorString": returns an Error String for any error.

The exact meaning of the returned "status" map entry is explained in the following table:

| Status Value | errorString / resultString | Description |
| --- | --- | --- |
| -1 | errorString = "Not logged in to <SERVICE>" | You have not successfully logged in to the given Cloud Service |
| 0 | resultString = recovered data | New game data downloaded from the cloud (following a cloud_synchronise() call) |
| 1 | resultString = "AlreadySynchronized" | No new data since you last called cloud_synchronise |
| 2 | resultString = "ConflictDeferral" | A conflict was encountered, but the gamer chose to ignore it |
| 3 | resultString = "GameUploadSuccess" | data from cloud_string_save() or cloud_file_save() was successfully uploaded to the cloud |
| -n | errorString = Description of error | Any other negative number means a synchronisation failure |