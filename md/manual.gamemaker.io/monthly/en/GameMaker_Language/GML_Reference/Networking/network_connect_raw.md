---
title: "network_connect_raw"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Networking/network_connect_raw.htm"
converted: "2025-09-14T04:00:03.900Z"
---

# network\_connect\_raw

This function sends a request to connect to a server.

It takes the _socket id_ to connect through (see [network\_create\_socket](network_create_socket.md)) and requires you to give the IP address to connect to (a string, can be IPv4 or IPv6) as well as the port to connect through. If the connection fails a value of less than 0 will be returned.

The difference between this function and [network\_connect](network_connect.md) is that this function can connect to any server and does nothing to the raw data, so you have to implement the protocols yourself at the server end.

Note that by default the function is synchronous, so your game may appear to "hang" as the connection is made. You can set a timeout value for connection, or alternatively make the creation asynchronous, using the function [network\_set\_config](network_set_config.md), or alternatively use the function [network\_connect\_raw\_async](network_connect_raw_async.md) instead.

NOTE You cannot use this function on HTML5. For WebSockets, use the [Async function](network_connect_raw_async.md).

NOTE This function uses a TCP-like socket (i.e. network\_socket\_tcp). It may work with other socket types as well, but this isn't guaranteed.

#### Syntax:

network\_connect\_raw(socket, url, port);

| Argument | Type | Description |
| --- | --- | --- |
| socket | Network Socket ID | The id of the socket to use. |
| url | String | The URL or IP to connect to (a string). |
| port | Real | The port to connect to. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md) or [Network Socket ID](network_create_socket.md)

#### Example:

client = network\_create\_socket(network\_socket\_tcp);
network\_connect\_raw(client, "www.macsweeneygames.com", 6510);

The above code will create a new TCP socket then attempt to create a "raw" connection through that to the given URL on port 6510.