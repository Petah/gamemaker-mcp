---
title: "network_send_packet"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Networking/network_send_packet.htm"
converted: "2025-09-14T04:00:04.061Z"
---

# network\_send\_packet

This function sends a data "packet" through the network.

The function takes the [Network Socket ID](network_create_socket.md) to connect through and then you supply the [Buffer](../Buffers/buffer_create.md) which contains the data to be sent (for more information on buffers see [Reference - Buffers](../Buffers/Buffers.md)) and finally the size (in bytes) of the data packet.

Packets sent with this function are formatted such that the GameMaker game receiving the data can "split" the packets correctly, and the function will return the number of bytes of data sent, or a number less than 0 if the send has failed. It is worth noting that the final size of the data being sent that is returned by this function will also include the GameMaker header information, which is an additional 12 bytes.

WARNING You must not mix the use of regular and raw functions in your game, as doing so will cause issues. This means for a connection made with [network\_connect](network_connect.md "Cross-reference [network_connect.htm]"), you must use [network\_send\_packet](network_send_packet.md "Cross-reference [network_send_packet.htm]"), and for [network\_connect\_raw](network_connect_raw.md "Cross-reference [network_connect_raw.htm]"), use [network\_send\_raw](network_send_raw.md "Cross-reference [network_send_raw.htm]").

NOTE This function uses a TCP-like socket (i.e. network\_socket\_tcp). It may work with other socket types as well, but this isn't guaranteed.

#### Syntax:

network\_send\_packet(socket, bufferid, size);

| Argument | Type | Description |
| --- | --- | --- |
| socket | Network Socket ID | The id of the socket to use. |
| bufferid | Buffer | The buffer to get the data from. |
| size | Real | The size (in bytes) of the data. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

buff = buffer\_load("player\_save.dat");
network\_send\_packet(sock, buff, buffer\_get\_size(buff));

The above code loads previously saved data into a buffer in memory and stores the newly created buffer in the variable buff. This complete buffer is then send as a packet over the network using the socket identified by the variable sock.