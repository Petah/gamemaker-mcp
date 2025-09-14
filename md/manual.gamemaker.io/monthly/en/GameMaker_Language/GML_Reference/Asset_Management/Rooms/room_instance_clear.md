---
title: "room_instance_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_instance_clear.htm"
converted: "2025-09-14T03:59:39.246Z"
---

# room\_instance\_clear

This function will clear a room of all instances (no destroy events shall be called for the instances that are being removed).

NOTE Calling this function on a room asset created in [The Asset Browser](../../../../Introduction/The_Asset_Browser.md) **will permanently clear the room of instances**, and even calling [game\_restart](../../General_Game_Control/game_restart.md) will not return the room to its original state. Only ending the game and opening it again will start with the room in its original state again.

#### Syntax:

room\_instance\_clear(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Room Asset | The index of the room to clear all instances in. |

#### Returns:

N/A

#### Example:

global.rm = room\_add();
room\_assign(rm\_base, global.rm);
room\_instance\_clear(global.rm);

The above code will add a new room to the game and then copy the contents of the room indexed as rm\_base into it. It will then clear all instances from this new room.