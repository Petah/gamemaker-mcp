---
title: "network_create_server"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Networking/network_create_server.htm"
converted: "2025-09-14T04:00:03.940Z"
---

# network\_create\_server

This function creates a new network server for your game, using one of the permitted connection protocols (see the constants listed below).

You supply the server type, then give it a port to use, and finally the number of maximum connections that should be permitted at any one time to the server (note that this number is up to you, but too many connected clients will saturate the network or the device CPU won't be able to handle the processing of that number of players, so use with care). The function returns a unique _id_ which should be used stored in a variable and used to identify the server in all further network functions, or a value of less than 0 if the connection fails.

When you no longer need the server, remove it from memory with [network\_destroy](network_destroy.md).

| Socket Type Constant |
| --- |
| Constant | Description |
| network_socket_tcp | Create a socket using TCP. |
| network_socket_udp | Create a socket using UDP. |
| network_socket_ws | Create a WebSocket using TCP. (NOTE: Use Async functions for connecting through WebSockets) |

NOTE Secure WebSockets are not supported when creating a server, [only as a client](network_create_socket.md).

NOTE There is a maximum limit of 1024 sockets on Windows, macOS and Ubuntu, and 64 sockets on all other platforms.

#### Syntax:

network\_create\_server(type, port, max\_client);

| Argument | Type | Description |
| --- | --- | --- |
| type | Socket Type Constant | The type of server to create (see the constants listed above). |
| port | Real | The port that the server will use. |
| max_client | Real | The maximum number of clients that can connect at once. |

#### Returns:

[Network Server ID](network_create_server.md)

#### Example:

var port = 6510;
server = network\_create\_server(network\_socket\_tcp, port, 32);
while (server < 0 && port < 65535)
{
    port++
    server = network\_create\_server(network\_socket\_tcp, port, 32);
}

The above code will try and create a server using TCP through port 6510. If that port is unavailable, it will then loop through the ports to find one that is.