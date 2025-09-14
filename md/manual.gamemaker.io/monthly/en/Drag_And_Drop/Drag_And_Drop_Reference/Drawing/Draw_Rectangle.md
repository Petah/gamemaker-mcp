---
title: "Draw Rectangle"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Rectangle.htm"
converted: "2025-09-14T03:59:25.111Z"
---

# ![Draw Rectangle Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Rectangle.png) Draw Rectangle

This action will draw a rectangle at a given position within the room. You give the top left position and the bottom right position and the rectangle will be drawn between them, and the position can either be an absolute position within the room, or a position relative to the instance calling the action. You can also set whether the rectangle can be filled or outlined by checking the **fill** box at the bottom.

NOTE This action is only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md), and will not draw anything if used elsewhere.

#### Action Syntax:

![Draw Rectangle Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Draw_Rectangle.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Left | The left position to start drawing from |
| Top | The top position to start drawing from |
| Right | The right position to end drawing from |
| Bottom | The bottom position to end drawing from |

#### Example:

![Draw Rectangle Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Rectangle.png)The above action block code draws two rectangles, one green and filled, and one yellow and outline only, at a position relative to the instance calling the actions.