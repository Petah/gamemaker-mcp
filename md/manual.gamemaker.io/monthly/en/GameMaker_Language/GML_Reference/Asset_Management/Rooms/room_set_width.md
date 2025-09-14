---
title: "room_set_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_set_width.htm"
converted: "2025-09-14T03:59:39.415Z"
---

# room\_set\_width

This function changes (or sets) the width of any room in your game _except the current one_.

#### Syntax:

room\_set\_width(index, w);

| Argument | Type | Description |
| --- | --- | --- |
| index | Room Asset | The room to set the width of. |
| w | Real | The new width of the room in pixels. |

#### Returns:

N/A

#### Example:

global.myroom = room\_add();
room\_set\_width(global.myroom, 640);
room\_set\_height(global.myroom, 480);
room\_set\_persistent(global.myroom, false);

This will create a new room and store its index in the variable global.myroom. It will then set its width to 640 pixels, its height to 480 pixels and its persistence to false.