---
title: "camera_get_view_border_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_view_border_y.htm"
converted: "2025-09-14T03:59:44.211Z"
---

# camera\_get\_view\_border\_y

This function can be used to retrieve the y (vertical) border value set for the given camera, which can be set in the room properties (see [Cameras And Viewports](../../../../The_Asset_Editors/Room_Properties/Room_Properties.htm#h)) or via the function [camera\_set\_view\_border](camera_set_view_border.md)). The return value will be in pixels.

#### Syntax:

camera\_get\_view\_border\_y(camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var xb = camera\_get\_view\_border\_x(view\_camera\[0\]);
var yb = camera\_get\_view\_border\_y(view\_camera\[0\]);
if xb != 200 || yb != 200
{
    camera\_set\_view\_border(view\_camera\[0\], 200, 200);
}

The above code retrieves the xborder and yborder values of the camera assigned to view port\[0\] and then checks this to see if it matches the given value. If it does not then the view camera is set to the given value.