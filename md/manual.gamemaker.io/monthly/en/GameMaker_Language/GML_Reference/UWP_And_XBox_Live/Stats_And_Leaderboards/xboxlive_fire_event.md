---
title: "xboxlive_fire_event"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/UWP_And_XBox_Live/Stats_And_Leaderboards/xboxlive_fire_event.htm"
converted: "2025-09-14T04:00:08.754Z"
---

# xboxlive\_fire\_event

This function can be used to fire a stat event. The "event\_name" argument is the name of the event to be fired as defined in the XDP console for your game, and the following additional parameters will also depend on what you have a set up for the stat. The function will return 0 if the event was sent (and should be received/processed by the server) or -1 if there was an error (ie: your event was not setup as the event manifest file included in the project says another number).

#### Syntax:

xboxlive\_fire\_event(event\_name, \[stat\_parameters...\]);

| Argument | Type | Description |
| --- | --- | --- |
| event_name | String | The name of the event to fire. |
| stat_parameters | Any | OPTIONAL Additional parameters to add to the event. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_user = xboxlive\_get\_user(0);
var \_uid = xboxlive\_user\_id\_for\_user(\_user);
result = xboxlive\_fire\_event("PlayerSessionStart", \_uid, global.guid\_str, 0, 42, 42);

The above code gets some information about the user then fires off a stat event along with this (and additional) data.