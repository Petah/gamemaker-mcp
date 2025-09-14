---
title: "Start Following Path"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Paths/Start_Following_Path.htm"
converted: "2025-09-14T03:59:27.505Z"
---

# ![Start Following Path Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Paths/i_Paths_Start_Following_Path.png) Start Following Path

This action will start an instance following along a path that has been created in the Asset Browser. You would then use this action to tell your instance which path to follow, what speed to follow the path (measured in pixels per game frame), how to behave when it reaches the end of the path, and whether to follow the absolute or relative path position. When setting the speed you can use negative values to signify that the instance should follow the path in reverse and it's worth noting that the speed you set here can be modified by the speed modifier set in the path editor for each path point, so if you set the path speed to 2 and in the path one of the points has a speed modifier of 200%, then the actual speed at that point will be 4 pixels per game frame.

Once you've set the initial path speed you can set how the instance should behave when it reaches the end of the path from the following options (note that when an instance reaches the end of a path this will also trigger an [Other - Path Ended Event](../../../The_Asset_Editors/Object_Properties/Other_Events.md)):

-   **Stop**: End the path, stopping the instance on the last path point.
-   **Restart**: Continue the path from the start, jumping to the start position again if the path is not marked as closed in the Path Editor.
-   **Loop**: Continue from the current position to run the path again.
-   **Reverse**: Go backwards along the path again (achieved by reversing the path follow speed), and when it reaches the start of the path, it will reverse again, etc...

Finally, you can flag the path as being _Absolute_ or not. By default the instance will start following the path from its current position (the relative position), but if you flag the _Absolute_ checkbox then it will start following the path exactly as you designed and placed it in the Path Editor (the absolute position). The image below illustrates this:

![Path Relative Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Paths/path_relative_image.png)As you can see in the image above, the two instances are following the _same_ path started with this action, but one of the instances is following the _absolute_ path while the other is following the _relative_ path. It should be noted that when _Absolute_ is flagged the instance will "jump" to the start of the path no matter where in the room it is placed.

#### Action Syntax:

![Path Start Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Paths/a_Paths_Start_Following_Path.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Path | The path asset to start following |
| Speed | The speed (in pixels per game frame) to follow the path |
| On End | The response to reaching the end of the path |
| Absolute | Whether to start at absolute or relative position |

#### Example:

![Path Start Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Paths/e_Paths_Start_Following_Path.png)The above action block will make the calling instance follow a path (starting at its absolute position and continuing at end) when a key is pressed.