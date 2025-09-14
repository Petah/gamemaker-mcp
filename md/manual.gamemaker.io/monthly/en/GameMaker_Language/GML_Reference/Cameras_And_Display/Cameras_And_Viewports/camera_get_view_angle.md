---
title: "camera_get_view_angle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_view_angle.htm"
converted: "2025-09-14T03:59:44.177Z"
---

# camera\_get\_view\_angle

This function can be used to retrieve the angle of the given camera. The return value will be between 0 and 360. Note that this function is _only_ valid for cameras created using [camera\_create\_view()](camera_create_view.md) or for those added in the room editor.

#### Syntax:

camera\_get\_view\_angle(camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var ang = camera\_get\_view\_angle(view\_camera\[0\]);
if (ang != 0)
{
    camera\_set\_view\_angle(view\_camera\[0\], 0);
}

The above code retrieves the angle of the camera assigned to view port\[0\] and then checks this to see if it matches the given value. If it does not then the view camera is set to that angle.