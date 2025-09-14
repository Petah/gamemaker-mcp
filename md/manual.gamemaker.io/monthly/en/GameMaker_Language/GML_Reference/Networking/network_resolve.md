---
title: "network_resolve"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Networking/network_resolve.htm"
converted: "2025-09-14T04:00:04.025Z"
---

# network\_resolve

This function will return the IP address of the given URL.

#### Syntax:

network\_resolve(url);

| Argument | Type | Description |
| --- | --- | --- |
| url | String | The URL to get the IP of (a string). |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

game\_ip = network\_resolve("www.macsweeneygames.com");

The above code will return the IP address of the given URL and store it in the variable "game\_ip".