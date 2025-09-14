---
title: "network_connect"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Networking/network_connect.htm"
converted: "2025-09-14T04:00:03.862Z"
---

# network\_connect

This function sends a request to connect to a server.

It takes the [Network Socket ID](network_create_socket.md) to connect through (see [network\_create\_socket](network_create_socket.md)) and requires you to give the IP address to connect to (a string, can be IPv4 or IPv6) as well as the port to connect through. If the connection fails a value of less than 0 will be returned.

The connection uses a special protocol that ensures only GameMaker games connect to each other, however if you need to connect to a server that is not a GameMaker game, you can use [network\_connect\_raw](network_connect_raw.md).

Note that by default the function is synchronous, so your game may appear to "hang" as the connection is made. You can set a timeout value for connection, or alternatively make the creation asynchronous, using the function [network\_set\_config](network_set_config.md), or alternatively use the function [network\_connect\_async](network_connect_async.md) instead.

NOTE You cannot use this function on HTML5. For WebSockets, use the [Async function](network_connect_async.md).

NOTE This function uses a TCP-like socket (i.e. network\_socket\_tcp). It may work with other socket types as well, but this isn't guaranteed.

#### Syntax:

network\_connect(socket, url, port);

| Argument | Type | Description |
| --- | --- | --- |
| socket | Network Socket ID | The id of the socket to use. |
| url | String | The URL or IP to connect to (a string). |
| port | Real | The port to connect to. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md) or [Network Socket ID](network_create_socket.md)

#### Example:

client = network\_create\_socket(network\_socket\_tcp);
network\_connect(client, "192.134.0.1", 6510);

The above code will create a new TCP socket then attempt to connect through that to the given IP address on port 6510.