---
title: "http_set_connect_timeout"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/HTTP/http_set_connect_timeout.htm"
converted: "2025-09-14T03:59:43.068Z"
---

# http\_set\_connect\_timeout

This function sets the connection timeout used for HTTP requests. Any requests made after a call to this function will use this timeout.

When the connection times out, an async [HTTP](../../../../The_Asset_Editors/Object_Properties/Async_Events/HTTP.md) event will be triggered.

The default timeout value is 60000 ms, i.e. one minute.

NOTE The value set is only a guideline and requests may time out earlier or later depending on the network conditions and the operating system.

#### Syntax:

http\_set\_connect\_timeout(connect\_timeout\_ms);

| Argument | Type | Description |
| --- | --- | --- |
| connect_timeout_ms | Real | The connection timeout value to use for subsequent requests (in milliseconds) |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

Mouse Left Pressed Event

http\_set\_connect\_timeout(10000);
var \_map\_headers = ds\_map\_create();
request\_id = http\_request("https://www.google.com", "GET", \_map\_headers, "");

Async HTTP Event

if (async\_load\[? "id"\] != request\_id)
{
    show\_debug\_message("Not a response to our request...");
    exit;
}

var \_status = async\_load\[? "status"\];
var \_http\_status = async\_load\[? "http\_status"\];
show\_debug\_message($"Status: {\_status}, HTTP Status: {\_http\_status}");

The above code first sends an HTTP GET request in the Mouse Left Pressed event. Before the request, the HTTP timeout is first set to 10 seconds. In the async HTTP event the async ID is compared to the request ID returned by the call to [http\_request](http_request.htm). If the IDs are not the same, a debug message is shown and the event is exited. If the async ID equals the request ID, code execution continues and the values of the [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md)'s "status" and "http\_status" keys are shown in another debug message. The values of these variables should be checked to determine if an error occurred and, if so, which one.