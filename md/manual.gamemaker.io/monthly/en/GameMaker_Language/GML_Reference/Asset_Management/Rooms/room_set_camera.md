---
title: "room_set_camera"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_set_camera.htm"
converted: "2025-09-14T03:59:39.335Z"
---

# room\_set\_camera

This function assigns a camera to a specific viewport in a room other than the current one.

You supply the room index, the view index (from 0 to 7) and then the index of the camera to use.

#### Syntax:

room\_set\_camera(rm, vind, camera);

| Argument | Type | Description |
| --- | --- | --- |
| rm | Room Asset | The room to set the view camera of |
| vind | Real | The index of the view port to assign the camera to |
| camera | Camera ID | The index of the camera to assign |

#### Returns:

N/A

#### Example:

global.myroom = room\_add();
room\_set\_camera(global.myroom, 0, global.MainCam);

The above code assigns a camera in a newly created room to view port \[0\].