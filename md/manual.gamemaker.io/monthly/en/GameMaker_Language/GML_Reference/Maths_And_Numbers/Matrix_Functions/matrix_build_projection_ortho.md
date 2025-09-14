---
title: "matrix_build_projection_ortho"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_projection_ortho.htm"
converted: "2025-09-14T04:00:01.852Z"
---

# matrix\_build\_projection\_ortho

This function builds an orthographic projection matrix based on the specified parameters listed below (this is the default projection method used when you create a room in GameMaker without changing anything). Sometimes you need to switch from a perspective projection to an orthographic projection which is what this function is for. It is typically used to draw an overlay, for example, to show the score or other aspects as this gives a "flat" view of the elements drawn (i.e.: no perspective) in a 3D game. See the image below to get an idea of the difference between orthographic and perspective views.

NOTE You may also need to temporarily switch off hidden surface removal if you want the information to be drawn regardless of the current depth value.

![Ortho prjection matrix  example](../../../../assets/Images/Scripting_Reference/GML/Reference/Maths/ortho_persp_image.png)

#### Syntax:

matrix\_build\_projection\_ortho(width, height, znear, zfar);

| Argument | Type | Description |
| --- | --- | --- |
| width | Real | The width of the projection. |
| height | Real | The height of the projection. |
| znear | Real | The distance to the near clipping plane. |
| zfar | Real | The distance to the far clipping plane. |

#### Returns:

[Matrix](Matrix_Functions.md)

#### Example:

viewmat = matrix\_build\_lookat(640, 240, -10, 640, 240, 0, 0, 1, 0);
projmat = matrix\_build\_projection\_ortho(640, 480, 1.0, 32000.0);
camera\_set\_view\_mat(view\_camera\[0\], viewmat);
camera\_set\_proj\_mat(view\_camera\[0\], projmat);

The above code creates a new look-at matrix and orthographic matrix, stores their IDs in local variables and then uses them to set the view and projection matrices for the camera assigned to view port\[0\].