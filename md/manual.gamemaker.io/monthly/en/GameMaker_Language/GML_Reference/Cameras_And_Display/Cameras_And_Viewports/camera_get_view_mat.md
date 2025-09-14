---
title: "camera_get_view_mat"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_view_mat.htm"
converted: "2025-09-14T03:59:44.311Z"
---

# camera\_get\_view\_mat

This function can be used to retrieve the view matrix. The function returns the matrix which can then be used in other [matrix functions](../../Maths_And_Numbers/Matrix_Functions/Matrix_Functions.md) or to set the view matrix of another camera (using [camera\_set\_view\_mat()](camera_set_view_mat.md)). Note that this function is generally for use with cameras created using [camera\_create()](camera_create.md), but it can also be used on those created in the room editor (or with [camera\_create\_view()](camera_create_view.md)) - in which case the returned matrix will only be valid after the given camera is used in a view port for the first time.

#### Syntax:

camera\_get\_view\_mat(camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |

#### Returns:

[Matrix](../../Maths_And_Numbers/Matrix_Functions/Matrix_Functions.md)

#### Example:

mat = camera\_get\_view\_mat(camera\_view\[0\]);

The above code gets the view matrix for the camera assigned to view port\[0\].