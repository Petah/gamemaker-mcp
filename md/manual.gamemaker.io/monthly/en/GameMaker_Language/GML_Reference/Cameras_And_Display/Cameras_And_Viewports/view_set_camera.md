---
title: "view_set_camera"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_set_camera.htm"
converted: "2025-09-14T03:59:44.767Z"
---

# view\_set\_camera

This function will set a camera to a specific view port. You give the view port to set (from 0 to 7), and supply the unique camera (as returned by the [camera\_create()](camera_create.md) functions or when you use [view\_get\_camera()](view_get_camera.md)). If you give a value of -1 as the camera ID then you are removing a camera from the view port and note that if that view port is enabled and visible you may get some unpredictable results.

#### Syntax:

view\_set\_camera(view\_port, camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |
| camera_id | Camera ID | The unique camera value returned when you created the camera |

#### Returns:

N/A

#### Example:

var cam = camera\_create\_view(0, 0, 640, 480, 0, obj\_Player, 5, 5, -1, -1);
view\_set\_camera(0, cam);

The above code will create a new camera and then assign it view port\[0\].