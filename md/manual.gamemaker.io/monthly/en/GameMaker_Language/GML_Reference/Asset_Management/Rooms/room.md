---
title: "room"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room.htm"
converted: "2025-09-14T03:59:38.908Z"
---

# room

This variable holds the handle for the current room that your game is running. This is _not_ a read-only variable, however changing this will not change the handle for the current room, but rather change the room to match the handle that you have set the variable to. Care should be taken when doing this as if the index you change the variable to is not valid the game will throw an error and close. In general it is much better practice to use [room\_goto](room_goto.md) to change rooms.

NOTE Room IDs are not based on their order in [The Asset Browser](../../../../Introduction/The_Asset_Browser.md) or [The Room Manager](../../../../Settings/The_Room_Manager.md), and so you should avoid supplying a number value directly. Instead, use the room constant for the asset you want to reference (which is simply its name) or retrieve it through a function.

#### Syntax:

room

#### Returns:

[Room Asset](../../../../The_Asset_Editors/Rooms.md)

#### Example:

if (room == rm\_level1)
{
    audio\_play\_sound(snd\_level1, 1, 1);
}

The above code will check if the current room is the first level, and in that case play that level's music.