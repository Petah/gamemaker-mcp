---
title: "camera_get_active"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_active.htm"
converted: "2025-09-14T03:59:44.093Z"
---

# camera\_get\_active

This function can be used to retrieve the unique camera ID value of the currently active camera.

#### Syntax:

camera\_get\_active()

#### Returns:

[Camera ID](camera_create.md)

#### Example:

var active = camera\_get\_active();
if active != view\_camera\[0\]
{
    view\_camera\[0\] = active;
}

The above code gets the camera ID for the active camera and sets the view camera for port\[0\] to use it.