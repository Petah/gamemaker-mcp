---
title: "http_get_file"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/HTTP/http_get_file.htm"
converted: "2025-09-14T03:59:42.994Z"
---

# http\_get\_file

This function connects to the specified URL in order to retrieve information in the form of a file.

As this is an asynchronous function, GameMaker will not block while waiting for a reply, but will keep on running unless it gets callback information. This information will be in the form of a string and will trigger an **Async HTTP Event** in any instance that has one defined in their object events.

NOTE You should be aware that due to XSS protection in browsers, requests to and attempts to load resources from across domains are blocked and may appear to return blank results. Please see the section on [Cross-Domain Issues](HTTP.md) for further details.

## Async Callback

This event will generate a "callback" which is picked up by any [HTTP Events](../../../../The_Asset_Editors/Object_Properties/Async_Events/HTTP.md), in which case it will generate a [DS Map](../../Data_Structures/DS_Maps/ds_map_create.md) (more commonly known as a "dictionary") that is exclusive to this event and is stored in the special variable [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md). This DS map will contain different values depending on the data being returned, i.e.: the event will trigger multiple times as each packet of data is received so that you can show a progress bar, for example.

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

http\_get\_file(url, local\_target);

| Argument | Type | Description |
| --- | --- | --- |
| url | String | The web address of the server that you wish to get the file from. See URLs |
| local_target | String | The local storage path to save the file to |

#### Returns:

[Async Request ID](../Asynchronous_Functions.md) (or -1 if something went wrong)

#### Example:

The http\_get\_file function can be called from any event, and since it is asynchronous the callback can be almost instantaneous or could take several seconds. Calling the function is simple and would look something like this:

request\_id = http\_get\_file("http://www.macsweeneygames.com/downloads/upgrade.zip", "\\Downloads\\Upgrade.zip");

The above code will request a file from the given URL and set it to be downloaded to the local storage area (as specified in the HTML5 Game Options), in a directory "Downloads" with the given file name (this does not have to be the same as the source file name, but should use the same file extension). The [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map's "id" will be stored in the variable request\_id so you can check for the correct callback in the Asynchronous Event, and if the save directory does not exist, it will be created. The Asynchronous Event triggered would be the [HTTP](../../../../The_Asset_Editors/Object_Properties/Async_Events/HTTP.md) sub-event, and in that event you would have something like the following:

Async HTTP Event

if (async\_load\[? "id"\] == request\_id)
{
    var \_status = async\_load\[? "status"\];
    if (\_status == 0)
    {
        var \_path = async\_load\[? "result"\];
        var \_files = zip\_unzip(path, "/NewContent/");
        if (\_files > 0)
        {
            global.extra\_content = true;
        }
    }
}

The above code will first check the "id" of the request, then check the status of the request. If the value is equal to 0 (signalling completed), the result will then be used along with the [zip\_unzip](../../File_Handling/Encoding_And_Hashing/zip_unzip.md) function to unzip the downloaded file to the given directory. If the unzip succeeds a global variable is set to true.