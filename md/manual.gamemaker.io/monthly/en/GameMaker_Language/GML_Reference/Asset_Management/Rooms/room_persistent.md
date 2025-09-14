---
title: "room_persistent"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_persistent.htm"
converted: "2025-09-14T03:59:39.287Z"
---

# room\_persistent

This variable can be used to get and to set the persistent flag for the current room. If set to true the room is considered persistent, in which case each time you leave the room and come back again the state of the instances within that room will have been maintained. However if it is flagged as false, each time you return to the room it will be reset to its initial state. You should note that a persistent room uses considerably more memory than a normal room and it is not recommended to have too many of them in your game.

#### Syntax:

room\_persistent;

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (lives < 1)
{
    room\_persistent = false;
    room\_goto(rm\_start);
}

The above code checks the variable "lives" and if it is less than 1, it will set the room persistence to false and then change rooms.