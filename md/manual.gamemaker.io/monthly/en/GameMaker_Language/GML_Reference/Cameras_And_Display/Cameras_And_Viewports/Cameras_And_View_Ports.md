---
title: "Cameras And Viewports"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/Cameras_And_View_Ports.htm"
converted: "2025-09-14T03:59:43.994Z"
---

# Cameras And Viewports

When creating rooms in GameMaker you need to set up different **cameras and viewports** to control what is displayed to the player.

The _viewports_ are, basically, little windows into your game world that enable you to show the player parts of a room, either scaled or 1:1, and as such they are essential when your game room is larger than the display size. The _cameras_ are what define exactly what will be shown in each viewport.

GameMaker permits you 8 independent viewports (numbered from 0 - 7) and an unlimited number of cameras, of which only 8 can be _active_ at any one time - one assigned to each of the available ports - although normally you'll only need one or two viewports. Cameras can show different parts of the same room and can be activated and deactivated as well as assigned to viewports at any time, meaning that you can use cameras to draw HUD elements or to have split screen effects, or to create cutscenes for example. Essentially, you position a camera within a room and define the "view" (area) of the room that will be visible to it, and then this view is drawn to a _viewport_ - note that the viewport can be a different size to the camera view and as such you can distort and scale the camera view if it is a size other than 1:1 with the viewport.

IMPORTANT It's easy to get confused when talking about cameras, views and viewports, so to clarify:

-   **The Camera**: Placed at a point within the room and used to set how the room is displayed - typically with position, orientation, field of view and aspect ratio
-   **The View**: What the camera sees, based on the position, projection and rotation of the camera
-   **The Viewport**: The area of the screen where the camera view will be displayed

![Camera illustration](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/Camera_Example.png)If you are adding cameras through [The Room Editor](../../../../The_Asset_Editors/Rooms.md) then you can retrieve their _camera ID_ value using the [view\_camera](view_camera.md) variable. You can then manipulate the view using the functions below and you can even destroy the default cameras if required, although you will need to assign a new camera to the view otherwise you will get some very unpredictable behaviour. Cameras added to a viewport in the Room Editor are **global** in scope, meaning that they are created once when you start the game, and then as you enter each room they are set to the values set in the Room Editor, so if you destroy a default camera in _any_ room, it will cease to exist for _all rooms_.

Something to note about cameras and viewports is that the total area of the bounding box for _all active viewports in the first room of the game_ is what defines the **background canvas size** (or window size for macOS, Ubuntu (Linux) and Windows), and any areas that are not covered by a viewport will default to drawing using the window colour as illustrated by the image below:

![View Port Canvas](../../../../assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/viewport_canvas.png)

NOTE By default you need to select **Clear Display Buffer** in the Room Editor for the colour to be shown, and you can only set the colour using the function [window\_set\_colour](../The_Game_Window/window_set_colour.md). The application surface also cannot be drawn, so either [the application surface itself](../../Drawing/Surfaces/application_surface_enable.md "application_surface_enable") or [automatic drawing](../../Drawing/Surfaces/application_surface_draw_enable.md "application_surface_draw_enable") needs to be disabled. If you don't use [window\_set\_colour](../The_Game_Window/window_set_colour.md) the colour will default to black.

You should take care when using multiple cameras as the Draw event for all instances is called once for each visible view, so if you have three camera views active in one room, the Draw event will be run three times every step (basically doing three times the work) which can be a cause for slowdown if the game is large or complex. The [view\_current](view_current.md) variable can be used to help limit these draw calls, however, by checking which view is being drawn and only drawing items that are specific to a given viewport. Also be careful when creating your own cameras, as if you create one in a room and don't remove it using the [camera\_destroy](camera_destroy.md) function you can get a memory leak.

You can find an overview of all the available functions from the different sections below, but it's worth noting that some of these functions require the setting up and use of different matrices, so you may want to look at the section of the manual for the [Matrix Functions](../../Maths_And_Numbers/Matrix_Functions/Matrix_Functions.md). Also note that there are a few room functions that can be used to get and set cameras and viewport values in rooms other than the current one (see the section on [Rooms](../../Asset_Management/Rooms/Rooms.md)).

## Function Reference

### Create & Destroy

-   [camera\_create](camera_create.md)
-   [camera\_create\_view](camera_create_view.md)
-   [camera\_destroy](camera_destroy.md)
-   [camera\_apply](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_apply.md)
-   [camera\_copy\_transforms](camera_copy_transforms.md)

### Camera Information

-   [camera\_set\_view\_mat](camera_set_view_mat.md)
-   [camera\_set\_proj\_mat](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_proj_mat.md)
-   [camera\_set\_update\_script](camera_set_update_script.md)
-   [camera\_set\_begin\_script](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_begin_script.md)
-   [camera\_set\_end\_script](camera_set_end_script.md)
-   [camera\_set\_view\_pos](camera_set_view_pos.md)
-   [camera\_set\_view\_size](camera_set_view_size.md)
-   [camera\_set\_view\_speed](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_view_speed.md)
-   [camera\_set\_view\_border](camera_set_view_border.md)
-   [camera\_set\_view\_angle](camera_set_view_angle.md)
-   [camera\_set\_view\_target](camera_set_view_target.md)
-   [camera\_set\_default](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_default.md)
-   [camera\_get\_view\_mat](camera_get_view_mat.md)
-   [camera\_get\_proj\_mat](camera_get_proj_mat.md)
-   [camera\_get\_update\_script](camera_get_update_script.md)
-   [camera\_get\_begin\_script](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_begin_script.md)
-   [camera\_get\_end\_script](camera_get_end_script.md)
-   [camera\_get\_view\_x](camera_get_view_x.md)
-   [camera\_get\_view\_y](camera_get_view_y.md)
-   [camera\_get\_view\_width](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_view_width.md)
-   [camera\_get\_view\_height](camera_get_view_height.md)
-   [camera\_get\_view\_speed\_x](camera_get_view_speed_x.md)
-   [camera\_get\_view\_speed\_y](camera_get_view_speed_y.md)
-   [camera\_get\_view\_border\_x](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_view_border_x.md)
-   [camera\_get\_view\_border\_y](camera_get_view_border_y.md)
-   [camera\_get\_view\_angle](camera_get_view_angle.md)
-   [camera\_get\_view\_target](camera_get_view_target.md)
-   [camera\_get\_default](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_default.md)
-   [camera\_get\_active](camera_get_active.md)

### Views

When working with cameras, you have to assign them to a **viewport** for them to be "active" and display anything. These viewports are numbered from 0 to 7 and can be changed and positioned using different variable arrays and functions, and you can also check to see which one is currently drawing or which camera is currently attached to it.

The following [global scope](../../../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md) built-in variables are available:

-   [view\_camera](view_camera.md)
-   [view\_current](view_current.md)
-   [view\_enabled](view_enabled.md)
-   [view\_visible](view_visible.md)
-   [view\_xport](view_xport.md)
-   [view\_yport](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_yport.md)
-   [view\_wport](view_wport.md)
-   [view\_hport](view_hport.md)
-   [view\_surface\_id](view_surface_id.md)

The following functions are available:

-   [view\_get\_camera](view_get_camera.md)
-   [view\_get\_visible](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_get_visible.md)
-   [view\_get\_xport](view_get_xport.md)
-   [view\_get\_yport](view_get_yport.md)
-   [view\_get\_wport](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_get_wport.md)
-   [view\_get\_hport](view_get_hport.md)
-   [view\_get\_surface\_id](view_get_surface_id.md)
-   [view\_set\_camera](view_set_camera.md)
-   [view\_set\_visible](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_set_visible.md)
-   [view\_set\_xport](view_set_xport.md)
-   [view\_set\_yport](view_set_yport.md)
-   [view\_set\_wport](../../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_set_wport.md)
-   [view\_set\_hport](view_set_hport.md)
-   [view\_set\_surface\_id](view_set_surface_id.md)

### Frustum Culling

-   [gpu\_get\_sprite\_cull](../../Drawing/GPU_Control/gpu_get_sprite_cull.md)
-   [gpu\_set\_sprite\_cull](../../Drawing/GPU_Control/gpu_set_sprite_cull.md)