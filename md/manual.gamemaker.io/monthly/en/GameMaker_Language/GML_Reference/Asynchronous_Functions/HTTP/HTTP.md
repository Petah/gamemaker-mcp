---
title: "HTTP"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/HTTP/HTTP.htm"
converted: "2025-09-14T03:59:42.940Z"
---

# HTTP

This section lists the different Asynchronous HTTP functions available in GameMaker.

HTTP stands for [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/HTTP), which is a protocol for communication on the World Wide Web. It is used when you browse the internet using a web browser, download files, log in to a website, interact with RESTful APIs, ... It has a variant named HTTPS (S indicating "Secure").

HTTP _requests_ are sent to a web server, which replies by sending back a _response_. A request uses one of several _methods_, of which GET and POST are the most common ones. Both the request and response may contain headers (a collection of key-value pairs) and a request body (the actual data to send). The response contains a status code indicating the status and can contain data (e.g. file contents).

GameMaker lets you create and send HTTP requests using the functions on this page. The response is returned in an [Asynchronous HTTP Event](../../../../The_Asset_Editors/Object_Properties/Async_Events/HTTP.md) in all instances that have it.

## Request Functions

The most general function is [http\_request](http_request.htm), which allows you to specify any request method as well as headers and data.

The other functions can be used for more specific requests:

-   [http\_get](http_get.htm) for a GET request
-   [http\_get\_file](http_get_file.htm) to download a file using GET
-   [http\_post\_string](http_post_string.htm) to make a HTTP request using POST

### URLs

All request functions take a URL. The URL string:

-   must include the protocol, e.g. "http://www.google.com" or "https://www.google.com".
-   can contain an IP address, e.g. "http://1.1.1.1".
-   can contain [query parameters](https://en.wikipedia.org/wiki/Query_string), e.g. "http://www.example.com/examples?example\_id={id}".

## Making Requests

Let's look at how a general HTTP request is handled from start to end:

Mouse Left Pressed Event

var \_map\_headers = ds\_map\_create();
request\_id = http\_request("http://www.google.com", "GET", \_map\_headers, "");
ds\_map\_destroy(\_map\_headers);

Async - HTTP Event

if (async\_load\[? "id"\] != request\_id) exit;

var \_status = async\_load\[? "status"\];
if (\_status < 0)
{
    // Error occurred

    exit;
}

if (\_status == 1)
{
    // Downloading

    exit;
}

if (\_status == 0)
{
    // Request completed!

    if (async\_load\[? "http\_status"\] == 200)
    {
        // Request was succesful

    }
}

In this example, a **Mouse Left Pressed** event calls the function [http\_request](http_request.htm). The request uses the "GET" method to retrieve a webpage. No headers are passed and the request body is set to an empty string "".

The [Async HTTP event](../../../../The_Asset_Editors/Object_Properties/Async_Events/HTTP.md) is then triggered one or more times. In this event, the [async\_load](../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md)'s "id" key is first checked to see if it matches the request\_id stored earlier. If not, this means the event was not triggered for the request made earlier and the code is exited. Next, the "status" key is checked. This can hold one of three values:

-   < 0 : error
-   0 : request completed
-   1 : content is being downloaded

While downloading content, the event will trigger multiple times, during which the "status" key will hold the value 1. Finally, it runs a last time and async\_load\[? "status"\] will hold 0 or < 0.

The last time the event triggers for this request, the "status" key will hold 0. This value indicates the request has completed. The HTTP status is then checked. If it is 200 (indicating "success"), the data can be found in async\_load\[? "result"\].

## Connection Timeout

The asynchronous HTTP functions send a request to a server, which might take some time to respond. If the server takes too long to respond, the connection may time out. In GameMaker this happens after 60000 ms by default.

The following two functions can be used to get and change this value:

-   [http\_get\_connect\_timeout](http_get_connect_timeout.htm)
-   [http\_set\_connect\_timeout](http_set_connect_timeout.htm)

NOTE The connection timeout isn't implemented on web platforms.

## Cross-Domain Issues

Please note that the above http\_\* functions may not function as expected due to **cross-domain security** issues. This means that requests to your server or attempts to load resources from across domains are blocked and may appear to return blank results or 404 errors.

For image load or HTTP requests where determining or setting their cross-origin type is important, the following functions exist:

-   [http\_get\_request\_crossorigin](http_get_request_crossorigin.htm)
-   [http\_set\_request\_crossorigin](http_set_request_crossorigin.htm)

In most cases these functions should not need to be used, but if the game is stored on a secured server - where certain assets may require basic authentication to be accessed and are generating security errors when loading - setting the cross-origin type for image requests to "use-credentials" may be necessary (as opposed to the default "anonymous" setting).

## Function Reference

### Requests

-   [http\_request](http_request.htm)
-   [http\_get](http_get.htm)
-   [http\_get\_file](http_get_file.htm)
-   [http\_post\_string](http_post_string.htm)

### Timeouts

-   [http\_get\_connect\_timeout](http_get_connect_timeout.htm)
-   [http\_set\_connect\_timeout](http_set_connect_timeout.htm)

### Cross-Domain

-   [http\_get\_request\_crossorigin](http_get_request_crossorigin.htm)
-   [http\_set\_request\_crossorigin](http_set_request_crossorigin.htm)