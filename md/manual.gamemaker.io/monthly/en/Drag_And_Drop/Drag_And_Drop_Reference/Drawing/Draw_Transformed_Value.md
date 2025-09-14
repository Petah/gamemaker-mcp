---
title: "Draw Transformed Value"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Transformed_Value.htm"
converted: "2025-09-14T03:59:25.194Z"
---

# ![Draw Transformed Value Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Transformed_Value.png) Draw Transformed Value

With this action you can draw a string caption and/or a variable or value to the screen. The caption argument is a string that you wish to add preceding the value, and can be left blank if required, and the value can be a variable, a fixed value, or another string - in which case it should be enclosed in quotes, and can also be left blank if required. You then give the position where the string should be drawn, either as an absolute position or as a position relative to the instance drawing the text. Additionally you can set the scale of the text, stretching it either along the horizontal or vertical axis, as well as the rotation (angles for rotating text are anti-clockwise, so setting it to 90° will rotate it to the left and -90° to the right). Scaling is done by the factor given, so a scale of 0.5 will _half_ the width of the text and a scale of 2 will double the width, with 1 being the default value for no scaling. Note that how the text will look when drawn will depend on the font used, the colour used, and the alignment. All these things can be changed before drawing, as shown in the example below.

NOTE This action is only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md), and will not draw anything if used elsewhere.

#### Action Syntax:

![Draw Transformed Value Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Draw_Transformed_Value.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Caption | The caption to draw (a string), can be left blank |
| Value | The value to draw (real, variable or string) |
| x | The x position to draw at |
| y | The y position to draw at |
| xscale | The x (horizontal) scale factor, default is 1 |
| yscale | The y (vertical) scale factor, default is 1 |
| Rotation | The rotation angle for drawing the text |

#### Example:

![Draw Transformed Value Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Transformed_Value.png)The above action block code sets a colour, a font and then aligns the text to draw from the center before actually drawing the "current\_time" value along with the caption "TIME: ", scaled to be double the size and "vibrating" slightly due to the random angle change.