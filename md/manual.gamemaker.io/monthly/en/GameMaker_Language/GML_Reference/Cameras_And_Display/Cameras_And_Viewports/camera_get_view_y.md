---
title: "camera_get_view_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_view_y.htm"
converted: "2025-09-14T03:59:44.400Z"
---

# camera\_get\_view\_y

This function can be used to retrieve the y position of the view for a given camera. Note that this function is _only_ valid for cameras created using [camera\_create\_view()](camera_create_view.md) or for those added in the room editor.

#### Syntax:

camera\_get\_view\_y(camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var vx = camera\_get\_view\_x(view\_camera\[0\]);
var vy = camera\_get\_view\_y(view\_camera\[0\]);
draw\_text(vx + 5, vy + 5, "SCORE" + string(score));

The above code retrieves the position of the camera assigned to view port\[0\] and then draws text relative to that position.