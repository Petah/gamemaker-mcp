---
title: "network_send_udp"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Networking/network_send_udp.htm"
converted: "2025-09-14T04:00:04.097Z"
---

# network\_send\_udp

This function sends data over the network using UDP to a server.

The function takes the [Network Socket ID](network_create_socket.md) to connect through, the URL to connect to and the port to use. You must then supply the [Buffer](../Buffers/buffer_create.md) which contains the data to be sent (for more information on buffers see [Reference - Buffers](../Buffers/Buffers.md)) and finally the size (in bytes) of the data.

The function will return the number of bytes of data sent, or a number less than 0 if the send has failed. It is worth noting that the final size of the data being sent that is returned by this function will also include the GameMaker header information, which is an additional 12 bytes.

UDP is "connectionless" in that you don't actually do a connect, you just send a packet directly to an IP, and the server gets incoming data from an IP address and has to deal with it "as is".

NOTE This function will not work when used in a project running on the HTML5 target, and neither will HTML5 projects be able to receive UDP.

NOTE This function uses a UDP-like socket (i.e. network\_socket\_udp). It may work with other socket types as well, but this isn't guaranteed.

#### Syntax:

network\_send\_udp(socket, url, port, bufferid, size);

| Argument | Type | Description |
| --- | --- | --- |
| socket | Network Socket ID or Network Server ID | The id of the socket to use. |
| url | String | The URL or IP to connect to (a string, can be IPv4 or IPv6). |
| port | Real | The port to connect to. |
| bufferid | Buffer | The buffer to get the data from. |
| size | Real | The size (in bytes) of the data. |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

network\_send\_udp(sock, "www.macsweeneygames.com", 6510, buff, buffer\_tell(buff));

The above code will send a UDP packet to the server defined by the URL on the port 6510. The data is taken from the buffer in the variable buff.