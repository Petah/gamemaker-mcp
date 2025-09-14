---
title: "Draw Ellipse"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Ellipse.htm"
converted: "2025-09-14T03:59:24.932Z"
---

# ![Draw Ellipse Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Ellipse.png) Draw Ellipse

This action will draw an ellipse at a given position within the room. You give the top left position and the bottom right position of the area that the ellipse is to "fit" into, and the ellipse will be drawn between them. The positions can either be an absolute position within the room, or a position relative to the instance calling the action, and you can also set whether the ellipse can be filled or outlined by checking the **fill** box at the bottom.

NOTE This action is only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md), and will not draw anything if used elsewhere.

#### Action Syntax:

![Draw Ellipse Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Draw_Ellipse.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Left | The left position to start drawing from |
| Top | The top position to start drawing from |
| Right | The right position to end drawing from |
| Bottom | The bottom position to end drawing from |

#### Example:

![Draw Ellipse Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Ellipse.png)The above action block code draws a series of outlined concentric ellipses at the instance position.