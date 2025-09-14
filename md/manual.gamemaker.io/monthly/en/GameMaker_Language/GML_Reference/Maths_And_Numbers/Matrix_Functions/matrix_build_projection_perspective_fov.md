---
title: "matrix_build_projection_perspective_fov"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_projection_perspective_fov.htm"
converted: "2025-09-14T04:00:01.884Z"
---

# matrix\_build\_projection\_perspective\_fov

This function builds a perspective projection matrix based on field of view, using the specified parameters listed below.

#### Syntax:

matrix\_build\_projection\_perspective\_fov(fov\_y, aspect, znear, zfar);

| Argument | Type | Description |
| --- | --- | --- |
| fov_y | Real | The vertical angle of the field of view. |
| aspect | Real | The aspect ratio of the field of view. |
| znear | Real | The near clipping plane. |
| zfar | Real | The far clipping plane. |

#### Returns:

[Matrix](Matrix_Functions.md)

#### Example:

var \_projmat = matrix\_build\_projection\_perspective\_fov(60, 320/240, 1.0, 32000.0);
camera\_set\_proj\_mat(view\_camera\[0\], \_projmat);

The above code creates a field of view projection matrix which is then stored in a variable. This matrix is then used to set up the camera assigned to view port\[0\].