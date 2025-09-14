---
title: "Networking"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Networking/Networking.htm"
converted: "2025-09-14T04:00:03.848Z"
---

# Networking

The GameMaker networking functions are based on _sockets_, which is an industry standard on all platforms. With sockets, you have the ability to create both clients and servers using simple GML which allows you to create even a single player game using the client/server model (something which will allow multiplayer to be added easily later).

Basically, a socket is an object which can send, receive, connect and listen to _ports_ on the network. When using TCP, you connect one socket using an IP address (let's say 192.168.1.10) to another socket on another IP address (say 192.168.1.11). Once connected, these two sockets can send data back and forth using the network\_send\_\* functions (like [network\_send\_packet](network_send_packet.md)) and the dedicated asynchronous event that is triggered by them. This async event will generate a [DS map](../Data_Structures/DS_Maps/DS_Maps.md) containing the data received as well as other details, and you can find the complete details in the section on the [Network Async Event](../../../The_Asset_Editors/Object_Properties/Async_Events/Networking.md).

NOTE There is a maximum limit of 1024 sockets on Windows, macOS and Ubuntu, and 64 sockets on all other platforms.

The UDP protocol is connectionless, so you don't connect sockets, you instead send data to an IP address and port directly using [network\_send\_udp](network_send_udp.md). GameMaker also supports WebSockets.

NOTE GameMaker supports IPv4 and IPv6 addresses on all platforms excluding the Nintendo Switch, PlayStation 4 and PlayStation 5.

Instead of programs having to read and deal with every bit of network traffic coming into a machine, IP addresses also deal with ports, which are numbered from 0 to 65535. This allows each program to get only the packets of data that it's interested in, and not everything that has been sent by every program. This also saves considerable CPU time, as it seriously cuts down on data processing, so with GameMaker you can also “listen” to ports. So, a server will create a socket, and then bind it to a specific port to listen to. It will then get notified of connections, disconnections and data transfers from that socket.

The data "packets" themselves are made up of binary data taken from a buffer. This buffer can be created and manipulated using the GameMaker [Buffer functions](../Buffers/Buffers.md).

It is worth noting that if you are creating a project for the HTML5 target, then you will not be able to use the server create functions due to browser restrictions and will have to write your own server for this platform using something like **Electron** or **NodeJS**. Also note that if your game is cross-platform and you anticipate connecting to an HTML5 instance of the game from a server running on a mobile or desktop device, then your server can only communicate to the HTML5 instance using the Web Socket protocol (this is done using the constant network\_socket\_ws or network\_socket\_wss - see [network\_create\_server](network_create_server.md) for more information). This means that your server may have to create two sockets on different ports, one to connect to non HTML5 targets (Android, Windows, etc.) and one to connect to the HTML5 target.

## Raw Functions

Functions used for creating sockets, connecting to servers and sending data have raw alternatives, which you can see in the list below.

Packets/requests sent through regular networking functions (e.g. [network\_connect](network_connect.md)) include additional header data inserted by GameMaker, so only GameMaker games can talk to each other.

The raw functions (e.g. [network\_connect\_raw](network_connect_raw.md)) are used to connect with non-GameMaker servers/clients, e.g. if you want to connect to a server written in JavaScript, PHP, etc.

You must not mix the use of regular and raw functions in your game, as doing so will cause issues. This means for a connection made with [network\_connect](network_connect.md "Cross-reference [network_connect.htm]"), you must use [network\_send\_packet](network_send_packet.md "Cross-reference [network_send_packet.htm]"), and for [network\_connect\_raw](network_connect_raw.md "Cross-reference [network_connect_raw.htm]"), use [network\_send\_raw](network_send_raw.md "Cross-reference [network_send_raw.htm]").

### Packet Separation

When using raw TCP networking, multiple packets sent by one client may be received as a single packet by the receiving client, and the opposite may also happen where a single packet is split into multiple packets. Non-raw networking functions prevent this from happening as GameMaker inserts headers into each packet, allowing the receiving GameMaker client to separate or combine incoming packets to represent them as they were sent.

When using raw TCP functions, it will fall on the game to read the incoming packets and separate/combine them as they were sent.

When using UDP or WebSockets, packets will be delivered in the form that they were sent. Using the non-raw functions for these protocols only adds unnecessary overhead.

## Function Reference

-   [network\_create\_server](network_create_server.md)
-   [network\_create\_server\_raw](network_create_server_raw.md)
-   [network\_create\_socket](network_create_socket.md)
-   [network\_create\_socket\_ext](network_create_socket_ext.md)
-   [network\_connect](network_connect.md)
-   [network\_connect\_async](network_connect_async.md)
-   [network\_connect\_raw](network_connect_raw.md)
-   [network\_connect\_raw\_async](network_connect_raw_async.md)
-   [network\_resolve](network_resolve.md)
-   [network\_set\_config](network_set_config.md)
-   [network\_set\_timeout](network_set_timeout.md)
-   [network\_send\_broadcast](network_send_broadcast.md)
-   [network\_send\_packet](network_send_packet.md)
-   [network\_send\_raw](network_send_raw.md)
-   [network\_send\_udp](network_send_udp.md)
-   [network\_send\_udp\_raw](network_send_udp_raw.md)
-   [network\_destroy](network_destroy.md)