---
title: "camera_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_create.htm"
converted: "2025-09-14T03:59:44.039Z"
---

# camera\_create

This function will create an "empty" camera, ie: a camera with no view or projection settings defined. Once you have created the camera you can then use the different [matrix functions](../../Maths_And_Numbers/Matrix_Functions/Matrix_Functions.md) to set the view and projection matrices. You can also use this function to create the camera and then use the different camera\_set\_\* functions to set up the view, however note that you _must_ provide at least a position and view size, otherwise the resulting camera will not be valid and give odd results if applied to a view port (if you do not set the object following, borders or move speed these will be set to the default values for a view camera in the Room Editor).

Note that cameras are like all dynamic resources and will occupy memory when created. This means that you need to take care not to create cameras unnecessarily and to destroy those that you don't need by calling the function [camera\_destroy()](camera_destroy.md). This also means that cameras will persist from room to room if assigned to a global variable (they will persist when assigned to instance or local variables too, but you can't access them after changing room, hence the memory leak), so that you can - for example - create a new camera, assign it to a global variable, and then at the start of each room set the required view and projection matrices and the view port you need to use.

#### Syntax:

camera\_create();

#### Returns:

[Camera ID](camera_create.md)

#### Example:

view\_camera\[0\] = camera\_create();
var viewmat = matrix\_build\_lookat(640, 240, -10, 640, 240, 0, 0, 1, 0);
var projmat = matrix\_build\_projection\_ortho(640, 480, 1.0, 32000.0);
camera\_set\_view\_mat(view\_camera\[0\], viewmat);
camera\_set\_proj\_mat(view\_camera\[0\], projmat);

The above code creates a new camera and assigns its ID to view\[0\]. The view and projection matrices are then created and stored in local variables before being used to set the camera.