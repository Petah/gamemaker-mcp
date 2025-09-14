---
title: "room_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_width.htm"
converted: "2025-09-14T03:59:39.439Z"
---

# room\_width

This variable holds the width of the current room in pixels. You can change this variable to change the width of the room at any time.

#### Syntax:

room\_width;

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (bbox\_right > room\_width)
{
    x += room\_width - bbox\_right;
}

The above code checks to see if the current instance's sprite bounding box is greater than the width of the room, and if it is it moves the instance up.