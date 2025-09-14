---
title: "room_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_exists.htm"
converted: "2025-09-14T03:59:38.984Z"
---

# room\_exists

This function checks whether the given room exists or not.

It takes the room _index_ (a real number) and **not** the room name (a string).

This function is most useful when you are creating rooms dynamically using the function [room\_add](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_add.md), but you can also use the **read-only** variables [room\_first](room_first.md) and [room\_last](room_last.md) or the functions [room\_next](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_next.md) and [room\_previous](room_previous.md) to get a specific room index, or provide a variable that has stored the index of any other room in your game.

#### Syntax:

room\_exists(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Room Asset | The room to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if room\_exists(global.rm\[0\])
{
    room\_goto(global.rm\[0\]);
}

The above code checks to see if the room indexed in the array global.rm exists and if it does it then goes to that room.