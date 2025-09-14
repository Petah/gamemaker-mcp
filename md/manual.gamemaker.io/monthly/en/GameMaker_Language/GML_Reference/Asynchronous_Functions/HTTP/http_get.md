---
title: "http_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/HTTP/http_get.htm"
converted: "2025-09-14T03:59:42.960Z"
---

# http\_get

This function sends a GET request to the specified URL in order to retrieve information.

This is an asynchronous function, so GameMaker will not block while waiting for a reply, but will keep on running unless it gets callback information. This information will be in the form of a string and will trigger an **Async HTTP Event** in any instance that has one defined in its object events.

NOTE You should be aware that due to XSS protection in browsers, requests to and attempts to load resources from across domains are blocked and may appear to return blank results. Please see the section on [Cross-Domain Issues](HTTP.md) for further details.

## Async Callback

This function will generate multiple "callbacks" which are picked up by any [HTTP Events](../../../../The_Asset_Editors/Object_Properties/Async_Events/HTTP.md). These will generate a [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) (more commonly known as a "dictionary") that is exclusive to this event and is stored in the special variable [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md). This DS map will contain different values depending on whether there is data being returned or not. For example, if you have requested a file, the event will trigger multiple times as each packet of data is received so that you can show a progress bar, for example.

The general structure for the DS map will be as follows:

-   **"id":** The ID which was returned from the command. If you fire off a series of http\_\* requests then you need to know which one you're getting the reply to, and so you would use this value to compare to the value you stored when you originally sent the request to find the right one.
-   **"status":** Holds a value of less than 0 for an error, 0 for complete and 1 for receiving packets (see below for more details).
-   **"result":** The data received (string only), the path to the file downloaded if you have used [http\_get\_file](http_get_file.htm) or the number of bytes written to the buffer using a buffer with the seek position at 0. You may only get this key if the status is 0, but that is platform-dependent.
-   **"url":** The complete URL you requested.
-   **"http\_status":** The raw HTTP status code (if available). This returns the standard web status code for most browsers, e.g.: 304 for "Not Modified", 204 for "No Content", etc.

If multiple packets are returned to your game, the callback "status" key will hold the value 1 and the DS map will have the following additional keys:

-   **"contentLength":** This is the size of file that the web server has said you should expect to receive (may be -1 if the server does not return this data).
-   **"sizeDownloaded":** The size of the data that has already been downloaded.

NOTE Currently this functionality is only available for regular Windows target platforms.

#### Syntax:

http\_get(url);

| Argument | Type | Description |
| --- | --- | --- |
| url | String | The web address of the server that you wish to get information from. See URLs |

#### Returns:

[Async Request ID](../Asynchronous_Functions.md) (or -1 if something went wrong)

#### Example:

The http\_get function can be called from any event, and since it's asynchronous the callback can be almost instantaneous or could take several seconds. Calling the function is simple and looks something like this:

request\_id = http\_get($"http://www.MacSweeneyGames.com/logon?username={name}");

The above code will pass the string held in the variable name to the given server as well as retrieve the data from that URL, triggering an Async Event which will contain the [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) DS map (the async\_load map index will be stored in the variable request\_id so you can check for the correct callback). The Async Event triggered would be the [HTTP](../../../../The_Asset_Editors/Object_Properties/Async_Events/HTTP.md) sub-event, and in that event you would have the following:

Async HTTP Event

if (async\_load\[? "id"\] == request\_id)
{
    var \_status = async\_load\[? "status"\];
    var \_r\_str = (\_status == 0) ? async\_load\[? "result"\] : "null";
}

The above code first checks the ID of the async request, then assigns a value to \_r\_str depending on the "status" of the callback. If the value is equal to 0 (signalling the request completed), the result from the callback is stored in a variable for future use, otherwise the variable is set to a default value (in this case "null").