---
title: "HTTP"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/HTTP.htm"
converted: "2025-09-14T04:00:15.577Z"
---

# HTTP

![HTTP Event](../../../assets/Images/Asset_Editors/Async_HTTP.png)The Async HTTP Event is triggered by the callback from one of the [http\_\*() functions](../../../GameMaker_Language/GML_Reference/Asynchronous_Functions/HTTP/HTTP.md), like [http\_post\_string](../../../GameMaker_Language/GML_Reference/Asynchronous_Functions/HTTP/http_post_string.md). It isn't triggered for every single data packet that is received, but rather updates within the main game loop during the download.

A [DS Map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.md) that is exclusive to this event is stored in the special variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) and can be accessed in this event (please see the individual functions for code examples that explain the use of this event in further detail).

The general structure for the DS map will be as follows:

-   **"id":** The ID which was returned from the command. If you fire off a series of http\_\* requests then you need to know which one you're getting the reply to, and so you would use this value to compare to the value you stored when you originally sent the request to find the right one.
-   **"status":** Holds a value of less than 0 for an error, 0 for complete and 1 for receiving packets (see below for more details).
-   **"result":** The data received (string only), the path to the file downloaded if you have used [http\_get\_file](../../../GameMaker_Language/GML_Reference/Asynchronous_Functions/HTTP/http_get_file.md) or the number of bytes written to the buffer using a buffer with the seek position at 0. You may only get this key if the status is 0, but that is platform-dependent.
-   **"url":** The complete URL you requested.
-   **"http\_status":** The raw HTTP status code (if available). This returns the standard web status code for most browsers, e.g.: 304 for "Not Modified", 204 for "No Content", etc.

If multiple packets are returned to your game, the callback "status" key will hold the value 1 and the DS map will have the following additional keys:

-   **"contentLength":** This is the size of file that the web server has said you should expect to receive (may be -1 if the server does not return this data).
-   **"sizeDownloaded":** The size of the data that has already been downloaded.

NOTE Currently this functionality is only available for regular Windows target platforms.