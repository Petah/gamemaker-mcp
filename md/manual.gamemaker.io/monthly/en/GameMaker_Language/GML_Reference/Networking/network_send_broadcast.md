---
title: "network_send_broadcast"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Networking/network_send_broadcast.htm"
converted: "2025-09-14T04:00:04.041Z"
---

# network\_send\_broadcast

This function broadcasts the data from a buffer locally to a range of IP addresses (for more information on buffers see [Buffers](../Buffers/Buffers.md)).

The range is limited to that of the device running the server, such that if the device has an IP of 92.168.11.130, then the data will be broadcast over the range 92.168.11.\*. The function will return the number of bytes of data sent, or a number less than 0 if the send has failed.

NOTE This function will only work when used with UDP - your server needs to be UDP and your client needs to have a UDP client socket created with [network\_create\_socket\_ext](network_create_socket_ext.md) in order to receive any broadcasts sent from the server.

NOTE This function will not work when used in a project running on the HTML5 target.

IMPORTANT iOS 14 and later require that you request the multicast entitlement ([com.apple.developer.networking.multicast](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_networking_multicast)) and enable it in order to **send and receive** multicasts and broadcasts. To make GameMaker add this entitlement you should [enable broadcast networking](../../../Settings/Game_Options/iOS.htm#enable_broadcast_networking) in the [iOS Game Options](../../../Settings/Game_Options/iOS.md) / [tvOS Game Options](../../../Settings/Game_Options/tvOS.md) (not doing this will throw an error).
Moreover, iOS 14 does not show the consent modal dialog to the user until a packet is first sent. So the alert will not be shown if the UDP socket only receives. A way to work around this is to send an empty "dummy" packet so that the consent modal is triggered.

#### Syntax:

network\_send\_broadcast(socket, port, bufferid, size);

| Argument | Type | Description |
| --- | --- | --- |
| socket | Network Socket ID or Network Server ID | The ID of the socket to use. |
| port | Real | The port that the server will use. |
| bufferid | Buffer | The buffer to get the data from. |
| size | Real | The size (in bytes) of the data. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

buffer\_seek(broadcast\_buffer, buffer\_seek\_start, 0);
buffer\_write(broadcast\_buffer, buffer\_string, global.server\_name);
network\_send\_broadcast(server, 6511, broadcast\_buffer, buffer\_tell(broadcast\_buffer));

The above code writes the name string of the current server (stored in global.server\_name), then writes it to a buffer stored in broadcast\_buffer. This data is then broadcast locally to a range of IPs (the device IP is currently implied as the broadcast base range) to port 6511.