---
title: "camera_get_default"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_default.htm"
converted: "2025-09-14T03:59:44.117Z"
---

# camera\_get\_default

This function can be used to retrieve the unique camera ID value of the default camera (the camera that GameMaker uses when no camera views or ports are active in a game room).

#### Syntax:

camera\_get\_default()

#### Returns:

[Camera ID](camera_create.md)

#### Example:

var def = camera\_get\_default();
view\_camera\[0\] = def;

The above code gets the camera ID for the default camera and sets the view camera for port\[0\] to use it.