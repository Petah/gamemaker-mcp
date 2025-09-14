---
title: "matrix_build_lookat"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_lookat.htm"
converted: "2025-09-14T04:00:01.833Z"
---

# matrix\_build\_lookat

This function builds a "look-at" (view) matrix based on the specified parameters listed below.

Since this function modifies the view matrix and not the projection matrix, you should first initialise the projection matrix using the other matrix function [matrix\_build\_projection\_perspective](matrix_build_projection_perspective.md), then use this function to move the view camera around within the projection.

To set the view you first need to define the position you look _from_, which is indicated by the parameters (xfrom, yfrom, zfrom). Next you must specify the direction you look _at_ and this is done by giving a second point to look towards with the arguments (xto, yto, zto). Finally, you can still rotate the camera around the line from the viewpoint to the looking point, and to specify this we must give an "up" vector - the direction that is upwards in the camera. This is given by the last three arguments (xup, yup, zup).

#### Syntax:

matrix\_build\_lookat(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup);

| Argument | Type | Description |
| --- | --- | --- |
| xfrom | Real | The x coordinate of the position to look from. |
| yfrom | Real | The y coordinate of the position to look from. |
| zfrom | Real | The z coordinate of the position to look from. |
| xto | Real | The x coordinate of the position to look to. |
| yto | Real | The y coordinate of the position to look to. |
| zto | Real | The z coordinate of the position to look to. |
| xup | Real | The x coordinate of the "up" vector. |
| yup | Real | The y coordinate of the "up" vector. |
| zup | Real | The z coordinate of the "up" vector. |

#### Returns:

[Matrix](Matrix_Functions.md)

#### Example:

viewmat = matrix\_build\_lookat(640, 240, -10, 640, 240, 0, 0, 1, 0);
projmat = matrix\_build\_projection\_ortho(640, 480, 1.0, 32000.0);
camera\_set\_view\_mat(view\_camera\[0\], viewmat);
camera\_set\_proj\_mat(view\_camera\[0\], projmat);

The above code creates a new look-at matrix and orthographic projection matrix, stores them in variables and then uses them to set the view and projection matrices for the camera assigned to view port\[0\].