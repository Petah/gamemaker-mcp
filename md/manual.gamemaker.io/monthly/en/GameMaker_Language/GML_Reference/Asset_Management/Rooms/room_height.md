---
title: "room_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_height.htm"
converted: "2025-09-14T03:59:39.212Z"
---

# room\_height

This variable holds the height of the current room in pixels. You can change this variable to change the height of the room at any time, and changes will be applied to the bottom of the room, as the origin is considered to be the top left corner. So, for example, if the room is 480px in height and you set it to 640px, the room will be expanded downwards with an extra 180px added to the bottom.

#### Syntax:

room\_height;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (bbox\_bottom > room\_height)
{
    y += room\_height - bbox\_bottom;
}

The above code checks to see if the current instance's sprite bounding box is greater than the height of the room, and if it is it moves the instance up.