---
title: "room_set_persistent"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_set_persistent.htm"
converted: "2025-09-14T03:59:39.368Z"
---

# room\_set\_persistent

This function changes (or sets) the persistence of any room in your game _except the current one_.

A room with persistence flagged as true will maintain the state of all instances within that room if the player leaves and then returns, whereas if persistence is flagged as false it will be reset to the initial state every time. You should note that a persistent room uses considerably more memory than a normal room and it is not recommended to have too many of them in your game.

NOTE This function will **NOT** work to switch off persistence if the room has already been visited! A persistent room, once visited, is held in memory and to switch off persistence you should go to that room and set the [room\_persistent](room_persistent.md) variable to false and then exit the room again.

#### Syntax:

room\_set\_persistent(index, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | Room Asset | The room to set the persistence of. |
| val | Boolean | Whether the room should be persistent (true) or not (false). |

#### Returns:

N/A

#### Example:

global.myroom = room\_add();
room\_set\_width(global.myroom, 640);
room\_set\_height(global.myroom, 480);
room\_set\_persistent(global.myroom, true);

This will create a new room and store its index in the variable global.myroom. It will then set its width to 640 pixels, its height to 480 pixels and its persistence to true.