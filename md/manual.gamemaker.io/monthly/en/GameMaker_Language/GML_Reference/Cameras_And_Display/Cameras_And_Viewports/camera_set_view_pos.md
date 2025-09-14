---
title: "camera_set_view_pos"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_view_pos.htm"
converted: "2025-09-14T03:59:44.542Z"
---

# camera\_set\_view\_pos

You can use this function to update the position of the camera view within the room. You give the unique camera ID value (as returned by the different [camera\_create()](camera_create.md) functions) and then give the x and y positions to set the camera to.

#### Syntax:

camera\_set\_view\_pos(camera\_id, x, y)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera. |
| x | Real | The x position to place the view at (in the room) |
| y | Real | The y position to place the view at (in the room) |

#### Returns:

N/A

#### Example:

camera\_set\_view\_pos(view\_camera\[0\], x - (view\_wport\[0\] / 2), y - (view\_hport\[0\] / 2));

The above code will set the view camera position for the camera assigned to view port\[0\].