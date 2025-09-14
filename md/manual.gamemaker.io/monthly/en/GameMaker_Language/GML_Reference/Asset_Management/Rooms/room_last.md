---
title: "room_last"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_last.htm"
converted: "2025-09-14T03:59:39.257Z"
---

# room\_last

This **read-only** variable holds the handle for the very last room in the game (this is defined by the order in which the rooms appear in [The Room Manager](../../../../Settings/The_Room_Manager.md) and _not_ by the order in which they were created).

NOTE This variable will not recognise or take into consideration rooms that have been added dynamically using [room\_add](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_add.md) or [room\_duplicate](room_duplicate.md).

#### Syntax:

room\_last

#### Returns:

[Room Asset](../../../../The_Asset_Editors/Rooms.md)

#### Example:

if (keyboard\_check\_pressed(ord("Q")))
{
    room\_goto(room\_last);
}

The above code checks to see if a key has been pressed and if so it goes to the last room in the game.