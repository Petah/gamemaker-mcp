---
title: "view_camera"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_camera.htm"
converted: "2025-09-14T03:59:44.600Z"
---

# view\_camera

This array holds the unique camera ID assigned to the given view port, and can be set to a new camera or read to get the current camera, returning -1 if no camera is assigned. You can have up to 8 view ports active in a room (array values 0 through 7), and can assign a camera to any of them by simply setting this variable to the camera ID value (as returned by the functions [camera\_create()](camera_create.md) or [camera\_create\_view()](camera_create_view.md)). If you have set the camera to a view port through the Room Editor, this variable will hold the camera ID for that port.

#### Syntax:

view\_camera\[0 ... 7\]

#### Returns:

[Camera ID](camera_create.md) or -1 (if no camera is assigned)

#### Example:

if (view\_camera\[0\] == -1)
{
    view\_camera\[0\] = camera\_create\_view(0, 0, room\_width, room\_height);
}

The above code checks to see if the view port \[0\] has a camera attached to it and if it doesn't then one is created and set to it.