---
title: "http_post_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/HTTP/http_post_string.htm"
converted: "2025-09-14T03:59:43.028Z"
---

# http\_post\_string

This function posts a string using the HTTP POST method.

In computing, a **post** request is used when the client needs to send data to the server as part of the retrieval request, such as when uploading a file or submitting a completed form, and the same is true of this function in GameMaker. In contrast to the [http\_get](http_get.htm) request method where only a [URL](HTTP.htm#urls) is sent to the server, http\_post\_string also includes a string that is sent to the server and may result in the creation of a new resource on the server, the update of an existing one, or both.

NOTE You should be aware that due to XSS protection in browsers, requests to and attempts to load resources from across domains are blocked and may appear to return blank results. Please see the section on [Cross-Domain Issues](HTTP.md) for further details.

## Async Callback

This event will generate a "callback" which is picked up by any [HTTP Events](../../../../The_Asset_Editors/Object_Properties/Async_Events/HTTP.md), in which case it will generate a [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) (more commonly known as a "dictionary") that is exclusive to this event and is stored in the special variable [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md). This DS map will contain different values depending on whether there is data being returned or not. For example, if you have requested a file, the event will trigger multiple times as each packet of data is received so that you can show a progress bar, for example.

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

http\_post\_string(url, string);

| Argument | Type | Description |
| --- | --- | --- |
| url | String | The web address of the server that you wish to get information from. See URLs |
| string | String | The string you wish to send to the specified URL |

#### Returns:

[Async Request ID](../Asynchronous_Functions.md) (or -1 if something went wrong)

#### Example:

The http\_post\_string function can be called from any event, and since it is asynchronous the callback can be almost instantaneous or could take several seconds. Calling the function is simple and would look something like this:

var \_str = $"name={player\_name}&score={player\_score}";
request\_id = http\_post\_string("http://www.angusgames.com/game?game\_id={global.game\_id}", \_str);

The above code sends a retrieval request to the specified URL with the given parameters as well as sending the additional data (player name and score in URL-encoded form) stored in the variable \_str. This will trigger all defined asynchronous **Http Events** if a callback is received, and you can check the "id" returned against that stored in the variable request\_id to make sure that you run the correct code should you have used various http\_post\_string functions. The following example code shows how this would be done:

Async HTTP Event

var \_r\_str = "null";
if (async\_load\[? "id"\] == request\_id)
{
    if (async\_load\[? "status"\] == 0)
    {
        \_r\_str = async\_load\[? "result"\];
    }
}

The above code will first check the ID of the request, then check the status of the callback. If the value is equal to 0 (signalling completed) the result from the callback will then be stored in a variable for future use, otherwise the variable will simply hold a default value (in this case "null").