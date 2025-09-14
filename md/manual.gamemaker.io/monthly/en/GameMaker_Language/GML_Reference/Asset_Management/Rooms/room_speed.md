---
title: "room_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_speed.htm"
converted: "2025-09-14T03:59:39.429Z"
---

# room\_speed DEPRECATED

This variable holds the running speed of **all** rooms (and the game) in game frames per second. Note that this is _NOT_ the FPS (frames per second) but rather the number of game steps that GameMaker will try to maintain each second.

IMPORTANT This variable is maintained for Legacy Support only, and should not be used as it no longer sets the speed for a single room, but for ALL rooms in the game. To change game speed you should instead be using the function [game\_set\_speed()](../../General_Game_Control/game_set_speed.md).

#### Syntax:

room\_speed;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

alarm\[0\] = room\_speed \* 10;

The above code uses room\_speed to set an alarm to run for 10 seconds. Using the variable in this way will ensure that the alarm runs for 10 seconds, no matter what speed is set for the room.