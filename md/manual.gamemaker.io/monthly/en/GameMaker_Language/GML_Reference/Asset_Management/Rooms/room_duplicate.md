---
title: "room_duplicate"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_duplicate.htm"
converted: "2025-09-14T03:59:38.958Z"
---

# room\_duplicate

This function duplicates a given room and returns the duplicate's index to be used in all further calls to reference the new room.

NOTE New rooms are not part of usual room ordering, so they do not have a "previous" or "next" room (meaning that the functions [room\_next](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_next.md) and [room\_previous](room_previous.md) will not work). To jump from the added room to another, you must use the index of the room itself.

#### Syntax:

room\_duplicate(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Room Asset | The original room to be duplicated. |

#### Returns:

[Room Asset](../../../../The_Asset_Editors/Rooms.md)

#### Example:

global.myroom = room\_duplicate(rm\_level);

This will duplicate the room rm\_level and assign the room index of this new room to the variable global.myroom.