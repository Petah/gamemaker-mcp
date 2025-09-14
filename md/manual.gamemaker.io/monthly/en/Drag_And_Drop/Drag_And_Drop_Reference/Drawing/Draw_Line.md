---
title: "Draw Line"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Line.htm"
converted: "2025-09-14T03:59:25.097Z"
---

# ![Draw Line Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Line.png) Draw Line

This action will draw a line at a given position within the room. You give the initial x/y position and then the final x/y position and the line will be drawn between them using the current draw colour. The positions can either be an absolute position within the room, or a position relative to the instance calling the action.

NOTE This action is only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md), and will not draw anything if used elsewhere.

#### Action Syntax:

![Draw Line Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Draw_Line.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| x | The starting x position |
| y | The starting y position |
| x2 | The finishing x position |
| y2 | The finishing y position |

#### Example:

![Draw Line Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Line.png)The above action block code draws a pink line across the top of the room.