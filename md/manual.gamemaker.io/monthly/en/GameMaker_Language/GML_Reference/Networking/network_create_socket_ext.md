---
title: "network_create_socket_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Networking/network_create_socket_ext.htm"
converted: "2025-09-14T04:00:03.996Z"
---

# network\_create\_socket\_ext

This function creates a new client socket for your game to communicate over the network.

You must define the socket type (see the list of constants below) and give a port to use, and the function will return a unique _id_ which should be used in all further function calls for that socket, or a value of less than 0 if the connection fails. When you no longer need the socket, remove it from memory with [network\_destroy](network_destroy.md).

| Socket Type Constant |
| --- |
| Constant | Description |
| network_socket_tcp | Create a socket using TCP. |
| network_socket_udp | Create a socket using UDP. |
| network_socket_ws | Create a WebSocket using TCP. (NOTE: Use Async functions for connecting through WebSockets) |
| network_socket_wss * | Create a secure WebSocket using TCP. |

NOTE It is also possible to secure your simple WebSocket (network\_socket\_ws) by using the wss:// protocol in your URLs.

NOTE \* Secure WebSockets will not work on UWP and Xbox One when using the legacy XDK platform, however they will work on those targets when using GDK.

NOTE Websockets are not supported on Windows 7.

IMPORTANT iOS 14 and later require that you request the multicast entitlement ([com.apple.developer.networking.multicast](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_networking_multicast)) and enable it in order to **send and receive** multicasts and broadcasts. To make GameMaker add this entitlement you should [enable broadcast networking](../../../Settings/Game_Options/iOS.htm#enable_broadcast_networking) in the [iOS Game Options](../../../Settings/Game_Options/iOS.md) / [tvOS Game Options](../../../Settings/Game_Options/tvOS.md) (not doing this will throw an error).
Moreover, iOS 14 does not show the consent modal dialog to the user until a packet is first sent. So the alert will not be shown if the UDP socket only receives. A way to work around this is to send an empty "dummy" packet so that the consent modal is triggered.

#### Syntax:

network\_create\_socket\_ext(protocol, port);

| Argument | Type | Description |
| --- | --- | --- |
| protocol | Socket Type Constant | The network protocol to use |
| port | Real | The port to use |

#### Returns:

[Network Socket ID](network_create_socket.md)

#### Example:

client = network\_create\_socket\_ext(network\_socket\_udp, 6510);

The above code will create a new UDP socket on port 6510.