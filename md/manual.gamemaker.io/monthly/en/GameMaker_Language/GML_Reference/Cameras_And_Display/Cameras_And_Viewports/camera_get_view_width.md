---
title: "camera_get_view_width"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_view_width.htm"
converted: "2025-09-14T03:59:44.371Z"
---

# camera\_get\_view\_width

This function can be used to retrieve the width (in pixels) of the given camera. Note that this function is _only_ valid for cameras created using [camera\_create\_view()](camera_create_view.md) or for those added in the room editor.

#### Syntax:

camera\_get\_view\_width(camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var vw = camera\_get\_view\_width(view\_camera\[0\]) / 2;
var vh = camera\_get\_view\_height(view\_camera\[0\]) / 2;
camera\_set\_view\_pos(view\_camera\[0\], x - vw, y - vh);

The above code retrieves the width and height of the camera assigned to view port\[0\] and then sets its position relative to the center.