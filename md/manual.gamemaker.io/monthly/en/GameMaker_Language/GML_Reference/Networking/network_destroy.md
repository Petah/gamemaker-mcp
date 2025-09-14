---
title: "network_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Networking/network_destroy.htm"
converted: "2025-09-14T04:00:04.011Z"
---

# network\_destroy

This function removes a network socket connection from your game and frees any memory associated with the socket. As such you must use this function when you no longer need a socket, otherwise unfreed sockets, as with any dynamic resource, will result in memory leaks.

#### Syntax:

network\_destroy(socket);

| Argument | Type | Description |
| --- | --- | --- |
| socket | Network Socket ID or Network Server ID | The id of the socket to remove. |

#### Returns:

N/A

#### Example:

if (!os\_is\_network\_connected())
{
    network\_destroy(sock);
}

The above code will check to see if there is a data connection and if none is found, destroy the socket with the id "sock".