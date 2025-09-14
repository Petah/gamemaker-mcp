---
title: "room_next"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_next.htm"
converted: "2025-09-14T03:59:39.275Z"
---

# room\_next

With this function you can retrieve the room _after_ the room input into the function.

For example, you can use the variable [room](room.md) to get the current room and then use this function to find the room that follows it, as listed in [The Room Manager](../../../../../../../Settings/The_Room_Manager.md).

If there is no room after the one you input then an invalid room handle (\-1) is returned.

NOTE This function will not recognise or take into consideration rooms that have been added dynamically using [room\_add](room_add.md) or [room\_duplicate](room_duplicate.md).

#### Syntax:

room\_next(numb);

| Argument | Type | Description |
| --- | --- | --- |
| numb | Room Asset | The room to get the next one after. |

#### Returns:

[Room Asset](../../../../../../../The_Asset_Editors/Rooms.md)

#### Example:

if (room\_next(room) != -1)
{
    room\_goto\_next();
}

The above code will check to see if the next room exists and if so, it will go to it.