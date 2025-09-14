---
title: "Set View Variable"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Cameras/Set_View_Variable.htm"
converted: "2025-09-14T03:59:23.906Z"
---

# ![Set View Variable Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Cameras/i_Cameras_Set_View_Variable.png) Set View Variable

This action permits you to set certain built-in variables related to how the **view port** will display camera views of the room. You select the view port variable to edit, then give the view port to target (from 0 to 7) and finally the new value for the variable. The view port is the area of the screen that will be used to draw a given camera view (as set up in the room editor), and the different variables that you are able to set in this way are outlined in the table below:

| Variable | Description |
| --- | --- |
| Camera | This is for setting the viewport to show a different Camera View. You need to supply the unique ID value of the camera to change to (see here for more information). |
| Visibility | This is the visibility toggle for the view port and expects a value of true or false where setting it to true will make the view port visible (ie: it will draw to the screen), and a value of false will not draw anything to the screen. |
| View Port X Coordinate | This is the X position of the view port within the game window. Note though that is is only really required when more than one view port is active - for example to create a split screen effect - and if used when only one port is active you get unexpected results. |
| View Port Y Coordinate | This is the Y position of the view port within the game window. Note though that is is only really required when more than one view port is active - for example to create a split screen effect - and if used when only one port is active you get unexpected results. |
| View Port Width | This is the width (in pixels) of the view port. The width of the view port (or combined view ports if more than one are active) define the width of the game window or background canvas at the start of the game, so changing this value after the game has started will have no visible effect on the game window size unless called along with the GML function window_set_size(). Also note that if you have a larger or smaller port size than that assigned to the camera, then the camera view will be scaled down - or up - to fit. |
| View Port Height | This is the height (in pixels) of the view port. The height of the view port (or combined view ports if more than one are active) define the height of the game window or background canvas at the start of the game, so changing this value after the game has started will have no visible effect on the game window size unless called along with the GML function window_set_size(). Also note that if you have a larger or smaller port size than that assigned to the camera view, then the camera view will be scaled down - or up - to fit. |
| View Port Surface ID | With this variable you can set the contents of a given view port to draw to a surface, with the value you supply being that of the surface to use for drawing the view port to. For more information please see here. |

#### Action Syntax:

![Set View Variable Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Cameras/a_Cameras_Set_View_Variable.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Variable | The built-in view variable to set |
| View | The view port to target (from 0 - 7) |
| Value | The new value for the built-in variable |

#### Example:

![Set View Variable Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Cameras/e_Cameras_Set_View_Variable.png)The above action block code will check for a key press and if one is detected it will make the view port \[0\] visible, otherwise it will make it invisible.