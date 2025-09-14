---
title: "room_first"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_first.htm"
converted: "2025-09-14T03:59:39.008Z"
---

# room\_first

This **read-only** variable returns the index of the very first room in the game (this is defined by the order in which the rooms appear in the [Room Manager](../../../../Settings/The_Room_Manager.md) and _not_ by the order in which they were created).

#### Syntax:

room\_first

#### Returns:

[Room Asset](../../../../The_Asset_Editors/Rooms.md)

#### Example:

if (lives < 1)
{
    room\_goto(room\_first);
}

The above code will check the "lives" variable and if it is less than 1 go to the first room in the game.