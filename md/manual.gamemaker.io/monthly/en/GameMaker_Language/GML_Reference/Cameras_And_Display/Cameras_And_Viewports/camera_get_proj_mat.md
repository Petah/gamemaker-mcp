---
title: "camera_get_proj_mat"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_proj_mat.htm"
converted: "2025-09-14T03:59:44.149Z"
---

# camera\_get\_proj\_mat

This function can be used to retrieve the projection matrix. The function returns the matrix which can then be used in other [matrix functions](../../Maths_And_Numbers/Matrix_Functions/Matrix_Functions.md) or to set the projection matrix of another camera (using [camera\_set\_proj\_mat()](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_proj_mat.md)).

#### Syntax:

camera\_get\_proj\_mat(camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |

#### Returns:

[Matrix](../../Maths_And_Numbers/Matrix_Functions/Matrix_Functions.md)

#### Example:

mat = camera\_get\_proj\_mat(camera\_view\[0\]);

The above code gets the projection matrix for the camera assigned to view port\[0\].