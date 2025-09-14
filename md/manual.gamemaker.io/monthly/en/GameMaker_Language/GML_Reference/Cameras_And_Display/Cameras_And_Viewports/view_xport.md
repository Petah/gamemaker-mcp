---
title: "view_xport"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_xport.htm"
converted: "2025-09-14T03:59:44.926Z"
---

# view\_xport

With this built-in array you can get or set the x position of the given view port. The view port is the area on the screen where the view is drawn, and you can have up to 8 active at any one time (the array is values from 0 to 7 inclusive to give 8 ports). Now, the default for GameMaker is that the game window (or background canvas) is the same size as the room, however when you activate view ports and cameras, this behaviour changes and the _total size of the bounding box for all view ports_ is used. So, if you have two different view ports at two different positions, the total area that they cover defines the size of the game window. The following image illustrates this:

![Canvas with multiple view ports example](../../../../assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/viewport_canvas.png)If you only have _one_ view port setting the x or y value of the port can have some interesting effects but is not normally practical (see the image below) and so it is better to maintain the x and y position as (0,0).

![view_xport example](../../../../assets/Images/Scripting_Reference/GML/Reference/Cameras_Display/view_xyport.png)

#### Syntax:

view\_xport\[0 .. 7\]

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

view\_xport\[0\] = 0;
view\_yport\[0\] = 0;

The above code resets the position of view port\[0\] to the (0,0) position (top left hand corner) of the display.