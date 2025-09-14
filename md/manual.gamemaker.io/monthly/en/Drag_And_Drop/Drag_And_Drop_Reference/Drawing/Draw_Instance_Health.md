---
title: "Draw Instance Health"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Instance_Health.htm"
converted: "2025-09-14T03:59:25.016Z"
---

# ![Draw Instance Health Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Instance_Health.png) Draw Instance Health

With this action you can draw a coloured bar to show a graphic representation of the instance variable health (when you use _any_ "health" action in GameMaker the instance that calls it will have a new instance scope variable called health added). The amount to be displayed is a percentage value that falls within the range of 0 - 100. You can set the direction anchor for drawing the healthbar (from left-to-right or right-to-left and top-to-bottom or bottom-to-top) as well as the position, either within the room or relative to the instance calling the action. You can also set the colour to be blended from each of the four corners of the healthbar, creating gradients from red to green (for example, but you can use any colours). Below you can see an image of how a simple healthbar looks with the different options:

**![Different Healthbar Settings](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/Healthbars_Example.png)**

NOTE This action is only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md), and will not draw anything if used elsewhere.

#### Action Syntax:

![Draw Instance Health Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Draw_Instance_Health.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Direction | The direction to draw the healthbar contents |
| Left | The position of the left side of the healthbar |
| Top | The position of the top of the healthbar |
| Right | The position of the right side of the healthbar |
| Bottom | The position of the bottom of the healthbar |
| Background | The colour to draw as the background on the healthbar |
| Outline | The colour to use to outline the healthbar |
| Min Colour | The colour to blend from the minimum value |
| Max Colour | The colour to blend from the maximum value |

#### Example:

![Draw Instance Health Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Instance_Health.png)The above action block code draws a healthbar in the top left of the screen.