---
title: "camera_set_view_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_view_size.htm"
converted: "2025-09-14T03:59:44.556Z"
---

# camera\_set\_view\_size

You can use this function to update the size of the given camera attached to a view within the room.

You give the unique camera ID value (as returned by the different [camera\_create()](camera_create.md) functions) and then give the width and height (in pixels) to set the camera to.

#### Syntax:

camera\_set\_view\_size(camera\_id, width, height)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera. |
| width | Real | The width of the camera view in pixels |
| height | Real | The height of the camera view in pixels |

#### Returns:

N/A

#### Example:

camera\_set\_view\_size(view\_camera\[0\], view\_wport\[0\], view\_hport\[0\]);

The above code will set the view camera size for the camera assigned to view port\[0\].