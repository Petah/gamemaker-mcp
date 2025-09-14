---
title: "room_assign"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_assign.htm"
converted: "2025-09-14T03:59:38.941Z"
---

# room\_assign

This function copies one room to another, removing all instances, tiles, etc. from the room that is being copied to and replaces them completely with the new room's contents.

You supply the room to be copied to (either as defined in [The Asset Browser](../../../../Introduction/The_Asset_Browser.md) or as returned by the function [room\_add](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_add.md)) as well as the index of the source room.

NOTE Calling this function on a room asset created in [The Asset Browser](../../../../Introduction/The_Asset_Browser.md) **will permanently change the contents of the room**, and even calling [game\_restart](../../General_Game_Control/game_restart.md) will not return the room to its original state. Only ending the game and opening it again will start with the room in its original state again.

#### Syntax:

room\_assign(ind, source);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Room Asset | The room to be copied to. |
| source | Room Asset | The room to be copied from. |

#### Returns:

N/A

#### Example:

global.rm = room\_add();
room\_assign(global.rm, rm\_base);

The above code will add a new room to the game and then copy the contents of the room indexed as rm\_base into it.