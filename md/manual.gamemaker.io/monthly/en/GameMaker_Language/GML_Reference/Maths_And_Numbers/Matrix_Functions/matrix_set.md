---
title: "matrix_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_set.htm"
converted: "2025-09-14T04:00:02.047Z"
---

# matrix\_set

This function sets the current matrix of the given type to the given matrix.

The available matrix types are _world_, _view_, and _projection_, which are represented by the following constants:

| Constant | Description |
| --- | --- |
| matrix_world | The current world matrix |
| matrix_view | The current view matrix |
| matrix_projection | The current projection matrix |

You can create a matrix using the [matrix\_build\*](Matrix_Functions.htm#func_ref_building_matrices "Building Matrices") functions or simply build the array yourself and pass that into the function.

The built-in functions that you can use for the various types of matrices are:

-   World matrix: [matrix\_build](matrix_build.md), [matrix\_build\_identity](matrix_build_identity.md)
-   View matrix: [matrix\_build\_lookat](matrix_build_lookat.md)
-   Projection matrix: [matrix\_build\_projection\_ortho](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_projection_ortho.md), [matrix\_build\_projection\_perspective](matrix_build_projection_perspective.md), [matrix\_build\_projection\_perspective\_fov](matrix_build_projection_perspective_fov.md)

#### Syntax:

matrix\_set(type, matrix);

| Argument | Type | Description |
| --- | --- | --- |
| type | Matrix Type Constant | The type of matrix to get the values of (see the constants listed above) |
| matrix | Matrix | The matrix data as an array |

#### Returns:

N/A

#### Example:

Draw Event

var \_world\_matrix = matrix\_build(x, y, 0, 0, 0, image\_angle, 1, 1, 1);
matrix\_set(matrix\_world, \_world\_matrix);
draw\_sprite(sprite\_index, 0, 0, 0);
matrix\_set(matrix\_world, matrix\_build\_identity());

The above code draws an instance's sprite at its position by changing the world matrix.

First, a world matrix is created with [matrix\_build](matrix_build.md) which first does a rotation about [image\_angle](../../Asset_Management/Sprites/Sprite_Instance_Variables/image_angle.md) degrees and then moves to the position given by [x](../../Asset_Management/Instances/Instance_Variables/x.md) and [y](../../Asset_Management/Instances/Instance_Variables/y.md). Next, the world matrix is set to this matrix in a call to matrix\_set and the [sprite\_index](../../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_index.md) of the instance executing the Draw event is drawn with [draw\_sprite](../../Drawing/Sprites_And_Tiles/draw_sprite.md) (note that the x and y passed to this function must be 0, since it is the world matrix that moves the sprite to the instance's (x, y) position!). Finally, the world matrix is reset to an identity matrix in another call to matrix\_set.