---
title: "camera_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_destroy.htm"
converted: "2025-09-14T03:59:44.074Z"
---

# camera\_destroy

With this function you can destroy any camera. When calling the function you supply the unique camera ID value, which you get from the camera\_create\_\* functions or from the [view\_camera](view_camera.md) array if using the Room Editor to set up the view port and view. You should _never_ destroy a camera that is currently assigned to a visible view, unless you are assigning a new camera to that view in the same step, and you should _always_ destroy any cameras that you have created through code when no longer required by your game to prevent memory leaks, and you can also destroy the default cameras if you have any assigned in the Room Editor, but you should assign a new camera to the view port (or disable it) otherwise you will get odd results.

#### Syntax:

camera\_destroy(camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera. |

#### Returns:

N/A

#### Example:

camera\_destroy(view\_camera\[0\]);
view\_camera\[0\] = camera\_create\_view(0, 0, 640, 480, 0, obj\_Player, 5, 5, -1, -1);

The above code destroys the camera currently assigned to view port \[0\] then creates a new camera and assigns it to that port.