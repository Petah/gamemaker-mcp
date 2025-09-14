---
title: "room_set_viewport"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_set_viewport.htm"
converted: "2025-09-14T03:59:39.396Z"
---

# room\_set\_viewport

This function sets the view port properties for any room in your game _except the current one_.

You supply the room index to set the view port in, the view port index (from 0 to 7) and then whether the view port should be visible at the start of the room or not (set to true to make the port visible, and false otherwise). After that you set the x and y coordinate (corresponding to the top left position of the view port) and then the width and height in pixels.

#### Syntax:

room\_set\_viewport(rm, vind, vis, xport, yport, wport, hport);

| Argument | Type | Description |
| --- | --- | --- |
| rm | Room Asset | The room to set |
| vind | Real | The index of the view port to set |
| vis | Boolean | The visibility of the view port (true is visible, false is invisible) |
| xport | Real | The x position of the view port in the room |
| yport | Real | The y position of the view port in the room |
| wport | Real | The width (in pixels) of the view port |
| hport | Real | The height (in pixels) of the view port |

#### Returns:

N/A

#### Example:

global.myroom = room\_add();
room\_set\_width(global.myroom, 640);
room\_set\_height(global.myroom, 480);
room\_set\_viewport(global.myroom, 0, true, 0, 0, 640, 480);

This will set the view port \[0\] properties in the room indexed in the variable global.myroom.