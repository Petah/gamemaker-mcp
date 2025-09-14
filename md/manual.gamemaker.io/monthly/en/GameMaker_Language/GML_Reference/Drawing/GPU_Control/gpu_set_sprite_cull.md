---
title: "gpu_set_sprite_cull"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_sprite_cull.htm"
converted: "2025-09-14T03:59:50.645Z"
---

# gpu\_set\_sprite\_cull

This function sets whether (frustum) culling of sprites and tile maps is enabled globally or not. It is enabled by default.

When enabled, sprites are checked against the view frustum on the CPU and _culled_ (i.e. removed) if they're fully outside. Sprites that are culled are not submitted to the GPU (i.e. drawn).

NOTE Sprite culling applies to all sprites that are drawn in your game, either manually using the draw\_sprite\_\* functions, as elements on asset layers or as part of sequences.

Tile maps are culled in a different way than sprites: only the tiles in the tile map that fall into a rectangle defined by the intersection of the room borders and the viewport rectangle are drawn.

### (View) Frustum Culling

The _view frustum_ is the region of the game world that a camera sees. It is determined by the camera's position and orientation in the game world as well as by the projection it has set:

-   in case of an [orthographic projection](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_projection_ortho.md "matrix_build_projection_ortho") it is a box shape.
-   in case of a [perspective](../../Maths_And_Numbers/Matrix_Functions/matrix_build_projection_perspective.md "matrix_build_projection_perspective") [projection](../../Maths_And_Numbers/Matrix_Functions/matrix_build_projection_perspective_fov.md "matrix_build_projection_perspective_fov") it is a truncated pyramid shape.

![](../../../../assets/Images/Asset_Editors/Camera_Example.png)

Any sprites that are fully outside of the Camera View (or Frustum) are culled, i.e. not submitted to the GPU for drawing

View frustum culling is one type of visibility culling, where the CPU checks if a shape is inside the view frustum or not.

To determine if a sprite is visible GameMaker calculates a sphere around the sprite and checks if this sphere is inside the view frustum. When the sphere is fully outside of it, the sprite must be, too, and is culled, i.e. not submitted for drawing.

![](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/sprite_cull_bounding_sphere.png)

NOTE The sprite's scale factor and the [world matrix](../../Maths_And_Numbers/Matrix_Functions/matrix_set.md "matrix_set()") are taken into account when performing sprite culling.

#### Syntax:

gpu\_set\_sprite\_cull(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Whether to enable sprite culling globally |

#### Returns:

N/A

#### Example:

Create Event

 gpu\_set\_sprite\_cull(true);

The above code enables sprite frustum culling in the Create event of an object.