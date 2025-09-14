---
title: "The Path Editor"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Paths.htm"
converted: "2025-09-14T04:00:16.091Z"
---

# The Path Editor

![The Path Editor](../assets/Images/Asset_Editors/Editor_Paths.png)At some point while creating your games you may need one of your instances to follow a path through a level. Now, this can be done in code by simply creating an array of positions within the room and then having an instance move between them, but that can be a chore to set up and is difficult to change, test and adapt for different instances. For this reason GameMaker has path resources and a dedicated path editor.

The basic idea is rather simple - you define a path by drawing it in the path editor, then you can place an action (or code) in the creation event of an object to tell the instance to follow that particular path. You can also set the speed to follow the path and a number of other actions relating to the position and orientation of the path within the room. When you first create a path resource the path editor window will open with the following options:

[Path PropertiesPath Properties](Paths.htm#)

As with all resources in GameMaker you should give your new path a unique name as this is what will be used to identify it throughout the game you are making, and a good system that a lot of people use is to prefix (or suffix) the resource for easy recognition in code or actions (eg: path\_Enemy\_1 or PowerUp\_path).

Once you have named the path, you can start to define it by placing points in the main editor on the right, with each point being added to the list here along with its position and speed. The speed value for path points is defined by a percentage of the speed at which you make the instance move along the path (default is 100%). So if you start an instance at a speed of 2 (2 pixels per step) along a path and then one of the path points has a speed value of 50%, the instance will reduce speed as it approaches this points to a speed of 1 (50% of the path speed). Equally, you can set the speed to 150% and the instance will accelerate as it reaches the point. In this way you can create some nice dynamic looking movement without any code whatsoever.

It is worth noting that you can fast double click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on any of the defined points in the list to pan the editor to the selected point, or slow double click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on one of the values to edit it manually (x, y, or speed).

You can also specify the connection kind for the whole path and whether the path should be closed or not (a closed path will connect the last point on the path with the first). The connection kind can be either **straight line** or **smooth,** where a straight line connect simply connects the points of a path in a linear basis, with angular changes at each point, while a smooth connection will create a much softer path that may not pass directly through any of the points, but rather take an approximate line, creating nice curves using smooth interpolation. You can also specify the precision for the curves (default is 4) which can be from 1 to 8 with 8 being the smoothest. The image below shows an example of how these options affect the path:

![Path Editor Examples](../assets/Images/Asset_Editors/Editor_Paths_Examples.png)

[Path EditingPath Editing](Paths.htm#)

You can add points to the path clicking ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) anywhere in the edit window, and all subsequent clicks will add further points. Once placed in the editor a point can be moved by clicking ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and dragging on it or by changing the values presented to you on the left for the X and Y position and speed (see **Path Properties**, above). You can use ![CTRL Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and left click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on multiple points to select them together, and this group of points can then be dragged around and placed as you require. You can press ![Delete Key Icon](../assets/Images/Icons/Icon_Delete.png) to delete the selected point or points too.

There is an additional menu available to you in the editor window when you right click ![RMB Icon](../assets/Images/Icons/Icon_RMB.png), shown below:

![Path Editor RMB Menu](../assets/Images/Asset_Editors/Editor_Paths_Menu.png)Each of the items in this menu work as follows:

-   **Delete Points** - Delete the selected point or points.
-   **Pan To Path** - Pan the view in the editor to the center of the path.
-   **Reverse** - Reverse the order of the path points. This doesn't move them, but rather changes the order that they will be processed in so that the start becomes the end and vice versa.
-   **Flip** - Flip the path along the horizontal axis.
-   **Mirror** - Flip the path along the vertical axis.

[The ToolboxThe Toolbox](Paths.htm#)

The Toolbox buttons at the top-right are where you can control how things are drawn in the editor window. It contains the following parts:

-   **Toggle Canvas Grid** ![Toggle Canvas Grid Icon](../assets/Images/Icons/Icon_CanvasGrid.png): This will toggle on/off the canvas grid. This is a grid that GameMaker draws over the preview canvas to divide it into sections, and by default is set to 32x32px in size. If you click the Grid Menu icon ![Icon Grid Menu](../assets/Images/Icons/Icon_CanvasOptions.png) you will see the grid options:
    ![](../assets/Images/Asset_Editors/Editor_Sequences_GridControls.png)These options permit you to set the grid colour and alpha, as well as the cell values for the grid along the X and Y axis. You also have an option to enable or disable grid snapping here (disabled by default). You can use the keyboard shortcuts "G" and ![Shift Icon](../assets/Images/Icons/Icon_Shift.png) + "G" to toggle the grid visibility and grid snapping respectively.
-   **Canvas Zoom Controls** ![Canvas Zoom Controls Icons](../assets/Images/Icons/Icon_CanvasZoom.png): These buttons control the current canvas zoom level. You can zoom in or out and clicking the ![Zoom Reset Icon](../assets/Images/Icons/Icon_ZoomReset.png) button will reset the canvas to be 1:1 with the contents being edited. You can also click the Window Fit button ![Canvas Fit Icon](../assets/Images/Icons/Icon_CanvasFit.png) to make the entire canvas fit within the current editor workspace (this will zoom in/out as appropriate to make it fit). Note that you can also zoom in and out using the ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and the Mouse Wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png), and pressing ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![Enter Icon](../assets/Images/Icons/Icon_Enter.png) will set the canvas to be 1:1 with the display.

[Path PointsPath Points](Paths.htm#)

Paths are simply a collection of points joined together by a line. In the editor, you place these points by using the left mouse button ![LMB Icon](../assets/Images/Icons/Icon_LMB.png). You can add points anywhere in the room editor and they will be added to the point list consecutively to make a path. If you place a point near a connecting line or another node, the new point will be inserted in the path rather than added to it (you can set the detection distance for this in the [Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Spline_Editor.md)). You can press ![CTRL Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on already placed points to select them, and then any operations done on the path points like moving them, will be applied to all the selected points as a group. To remove a point or selection of points you can right-click ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) and select "Delete Point" or press the ![Delete Key Icon](../assets/Images/Icons/Icon_Delete.png) key.

Note that you can also use the following shortcuts to perform some extra operations that are not available through the right mouse button menu on the choose path point(s):

-   T + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png): Translate (move) the path points
-   R + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png): Rotate the path points
-   S + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png): Scale the path points