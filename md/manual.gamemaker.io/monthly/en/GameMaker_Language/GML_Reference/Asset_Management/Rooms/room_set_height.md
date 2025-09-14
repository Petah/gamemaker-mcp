---
title: "room_set_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_set_height.htm"
converted: "2025-09-14T03:59:39.348Z"
---

# room\_set\_height

This function changes (or sets) the height of any room in your game _except the current one_.

#### Syntax:

room\_set\_height(index, h);

| Argument | Type | Description |
| --- | --- | --- |
| index | Room Asset | The room to set the height of. |
| h | Real | The new height of the room in pixels. |

#### Returns:

N/A

#### Example:

global.myroom = room\_add();
room\_set\_width(global.myroom, 640);
room\_set\_height(global.myroom, 480);
room\_set\_persistent(global.myroom, false);

This will create a new room and store its index in the variable global.myroom. It will then set its width to 640 pixels, its height to 480 pixels, its caption to and its persistence to false.