---
title: "camera_set_view_border"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_view_border.htm"
converted: "2025-09-14T03:59:44.512Z"
---

# camera\_set\_view\_border

You can use this function to set the border size of the camera within the room.

These values will only be used when the view camera has been assigned an instance target to follow (either in the Room Editor - see [Cameras And Viewports](../../../../The_Asset_Editors/Room_Properties/Room_Properties.htm#h) - or using the function [camera\_set\_view\_target()](camera_set_view_target.md)) and relate to how far from the border of the view the instance needs to be before the view will update its position to follow.

The exact point that is checked against this buffer zone is the point at the [x](../../Asset_Management/Instances/Instance_Variables/x.md) and [y](../../Asset_Management/Instances/Instance_Variables/y.md) position for that instance, and it does not make use of its [mask](../../Asset_Management/Sprites/Sprite_Instance_Variables/mask_index.md).

You give the unique camera ID value (as returned by the different camera\_create functions) and then give the x border size and the y border size (horizontal and vertical).

#### Syntax:

camera\_set\_view\_border(camera\_id, x\_border, y\_border)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera. |
| x_border | Real | The border (in pixels) for the view camera along the horizontal axis |
| y_border | Real | The border (in pixels) for the view camera along the vertical axis |

#### Returns:

N/A

#### Example:

camera\_set\_view\_border(view\_camera\[0\], 64, 64);

The above code will set the view camera border for the camera assigned to view port\[0\].