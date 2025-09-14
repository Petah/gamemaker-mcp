---
title: "network_connect_raw_async"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Networking/network_connect_raw_async.htm"
converted: "2025-09-14T04:00:03.919Z"
---

# network\_connect\_raw\_async

This function sends a request to connect to a server.

The function takes the [Network Socket ID](network_create_socket.md) to connect through (see [network\_create\_socket](network_create_socket.md)) and requires you to give the IP address to connect to (a string, can be IPv4 or IPv6) as well as the port to connect through. If the connection fails a value of less than 0 will be returned.

The difference between this function and [network\_connect\_async](network_connect_async.md) is that this function can connect to any server and does nothing to the raw data, meaning that you have to implement the protocols yourself at the server end. Note that this function is asynchronous, generating an [Asynchronous Networking](../../../The_Asset_Editors/Object_Properties/Async_Events/Networking.md) event of the type network\_type\_non\_blocking\_connect.

NOTE This function uses a TCP-like socket (i.e. network\_socket\_tcp). It may work with other socket types as well, but this isn't guaranteed.

#### Syntax:

network\_connect\_raw\_async(socket, url, port);

| Argument | Type | Description |
| --- | --- | --- |
| socket | Network Socket ID | The id of the socket to use. |
| url | String | The URL or IP to connect to (a string). |
| port | Real | The port to connect to. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

client = network\_create\_socket(network\_socket\_tcp);
network\_connect\_raw\_async(client, "www.macsweeneygames.com", 6510);

The above code will create a new TCP socket then attempt to create a "raw" asynchronous connection through that to the given URL on port 6510.