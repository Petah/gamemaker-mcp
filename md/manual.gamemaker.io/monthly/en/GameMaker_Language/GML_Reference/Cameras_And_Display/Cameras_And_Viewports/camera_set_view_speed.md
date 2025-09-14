---
title: "camera_set_view_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_view_speed.htm"
converted: "2025-09-14T03:59:44.569Z"
---

# camera\_set\_view\_speed

You can use this function to update the speed of the camera within the room when following a target object. This is the speed the camera moves at when the [target instance](camera_set_view_target.md) is outside of the buffer zone. See: [Cameras And Viewports](../../../../../../../The_Asset_Editors/Room_Properties/Room_Properties.md)

You give the unique camera ID value (as returned by the different [camera\_create()](camera_create.md) functions) and then give the x and y (horizontal and vertical) speed that it should move when set to follow a given instance.

The speed is calculated as pixels per step and can be set to "-1" to make the camera move instantly, but if the camera is not set to follow any instance then the values set here will have no visible effect.

#### Syntax:

camera\_set\_view\_speed(camera, x\_speed, y\_speed)

| Argument | Type | Description |
| --- | --- | --- |
| camera | Camera ID | The unique camera ID value returned when you created the camera. |
| x_speed | Real | The speed (number of pixels per game frame) that the view should move on the horizontal (x) axis to catch up to the target |
| y_speed | Real | The speed (number of pixels per game frame) that the view should move on the vertical (y) axis to catch up to the target |

#### Returns:

N/A

#### Example:

camera\_set\_view\_speed(view\_camera\[0\], 5, 5);

The above code will set the view camera speed for the camera assigned to view port\[0\].