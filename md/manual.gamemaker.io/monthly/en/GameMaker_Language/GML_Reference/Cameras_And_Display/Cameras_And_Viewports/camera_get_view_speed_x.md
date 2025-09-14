---
title: "camera_get_view_speed_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_view_speed_x.htm"
converted: "2025-09-14T03:59:44.324Z"
---

# camera\_get\_view\_speed\_x

This function can be used to retrieve the movement speed of the given camera along the x axis (horizontal movement), which can be set in the room properties (see [Cameras And Viewports](../../../../The_Asset_Editors/Room_Properties/Room_Properties.htm#h)) or via the function [camera\_set\_view\_speed](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_view_speed.md)). The return value will be in pixels per game frame.

#### Syntax:

camera\_get\_view\_speed\_x(camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var xs = camera\_get\_view\_speed\_x(view\_camera\[0\]);
var ys = camera\_get\_view\_speed\_y(view\_camera\[0\]);
if xs != 5 || ys != 5
{
    camera\_set\_view\_speed(view\_camera\[0\], 5, 5);
}

The above code retrieves the xspeed and yspeed of the camera assigned to view port\[0\] and then checks this to see if it matches the given value. If it does not then the view camera is set to that speed.