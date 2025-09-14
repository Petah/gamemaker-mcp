---
title: "room_get_camera"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_get_camera.htm"
converted: "2025-09-14T03:59:39.022Z"
---

# room\_get\_camera

This function gets the unique index ID of the camera assigned to a specific view in a room other than the current one.

You give the room to use, the view port to use (from 0 to 7) and the function will return a camera index.

#### Syntax:

room\_get\_camera(rm, vind);

| Argument | Type | Description |
| --- | --- | --- |
| rm | Room Asset | The room to get the view camera of |
| vind | Real | The index of the view port to get the camera of |

#### Returns:

[Camera ID](../../Cameras_And_Display/Cameras_And_Viewports/camera_create.md)

#### Example:

var cam = room\_get\_camera(rm\_Game, 0);
if (cam != global.MainCam)
{
    room\_set\_camera(rm\_Game, 0, global.MainCam);
}

The above code assigns a camera in a newly created room to view port \[0\].