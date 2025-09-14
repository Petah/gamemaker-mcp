---
title: "Draw Healthbar"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Healthbar.htm"
converted: "2025-09-14T03:59:24.997Z"
---

# ![Draw Healthbar Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Healthbar.png) Draw Healthbar

With this action you can draw a coloured bar to show a graphic representation of a value. The amount to be displayed is a percentage value and must fall within the range of 0 - 100, however you can still uses larger values with the formula (CURRENT\_Value / MAXIMUM\_value) \* 100, so, for example, you can use this to display power, health, mana, time or anything else that would benefit from a bar display. Apart from the value to draw you can set the direction anchor for drawing the healthbar too (from left-to-right or right-to-left and top-to-bottom or bottom-to-top) as well as the position, either within the room or relative to the instance calling the action. Apart from the position you can also set the colour to be blended from each of the four corners of the healthbar, creating gradients from red to green (for example, but you can use any colours). Below you can see an image of how a simple healthbar looks with the different options:

![Different Healthbar Settings](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/Healthbars_Example.png)

NOTE This action is only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md), and will not draw anything if used elsewhere.

#### Action Syntax:

![Draw Healthbar Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Draw_Healthbar.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Direction | The direction to draw the healthbar contents |
| Value | The value (between 0 and 100) to use for the healthbar |
| Left | The position of the left side of the healthbar |
| Top | The position of the top of the healthbar |
| Right | The position of the right side of the healthbar |
| Bottom | The position of the bottom of the healthbar |
| Background | The colour to draw as the background on the healthbar |
| Outline | The colour to use to outline the healthbar |
| Min Colour | The colour to blend from the minimum value |
| Max Colour | The colour to blend from the maximum value |

#### Example:

![Draw Healthbar Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Healthbar.png)The above action block code draws a blue and yellow "mana" bar relative to the instance.