---
title: "view_get_camera"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_get_camera.htm"
converted: "2025-09-14T03:59:44.642Z"
---

# view\_get\_camera

This function can be used to retrieve the unique camera ID value for the camera assigned to the given view port (from 0 - 7). If no camera is assigned, the function will return -1.

#### Syntax:

view\_get\_camera(view\_port)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |

#### Returns:

[Camera ID](camera_create.md)

#### Example:

var cam = view\_get\_camera(0);
var cw = camera\_get\_view\_width(cam);
var ch = camera\_get\_view\_height(cam);
camera\_set\_view\_pos(cam, mouse\_x - (cw / 2), mouse\_y - (ch / 2));

The above code will retrieve the camera ID for the camera assigned to view port\[0\] and then change its position.