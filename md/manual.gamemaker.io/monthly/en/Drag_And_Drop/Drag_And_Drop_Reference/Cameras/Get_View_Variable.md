---
title: "Get View Variable"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Cameras/Get_View_Variable.htm"
converted: "2025-09-14T03:59:23.878Z"
---

# ![Get View Variable Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Cameras/i_Cameras_Get_View_Variable.png) Get View Variable

This action permits you to get the value of certain built-in variables related to a given **view port**. You select the view port variable to retrieve, then give the view port to target (from 0 to 7) and finally the target variable to hold the returned value (this can be flagged as being a temporary local variable). The view port is the area of the screen that will be used to draw a given camera view (as set up in [The Room Editor](../../../The_Asset_Editors/Rooms.md)), and the different variables that you are able to get in this way are outlined in the table below:

| Variable | Description |
| --- | --- |
| Camera | The value returned will be the unique ID value of the camera to assigned to the port (see here for more information). |
| Visibility | This will return a value of true or false where true is that the view port is visible (i.e.: it being drawn to the screen), and false meaning that nothing is being drawn. |
| View Port X Coordinate | This is the X position of the view port within the game window. |
| View Port Y Coordinate | This is the Y position of the view port within the game window. |
| View Port Width | This is the width (in pixels) of the view port. |
| View Port Height | This is the height (in pixels) of the view port. |
| View Port Surface ID | This will return the handle for the surface assigned to the view port or an invalid handle (-1) if no surface has been assigned. |

#### Action Syntax:

![Get View Variable Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Cameras/a_Cameras_Get_View_Variable.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Variable | The built-in view variable to get |
| View | The view port to target (from 0 - 7) |
| Target | The target variable to hold the returned value (can be flagged as a temporary local variable) |

#### Example:

![Get View Variable Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Cameras/e_Cameras_Get_View_Variable.png)The above action block code gets the current camera ID assigned to view port \[0\] and then checks to see if it is the same as the one stored in a global variable. If it is not, the camera is set to the new one.