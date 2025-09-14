---
title: "Draw Value"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Value.htm"
converted: "2025-09-14T03:59:25.209Z"
---

# ![Draw Value Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Value.png) Draw Value

With this action you can draw a string caption and/or a variable or value to the screen. The caption argument is a string that you wish to add preceding the value, and can be left blank if required but if you wish to include text it should be wrapped in quotes, and the value can be a variable, a fixed value, or another string - in which case it should be enclosed in quotes too - but it cannot be left blank. You then give the position where the string should be drawn, either as an absolute position or as a position relative to the instance drawing the text. Note that how the text will look when drawn will depend on the font used, the colour used, and the alignment. All these things can be changed before drawing, as shown in the example below.

NOTE This action is only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md), and will not draw anything if used elsewhere.

#### Action Syntax:

![Draw Value Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Draw_Value.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Caption | The caption to draw (a string), can be left blank |
| Value | The value to draw (real, variable or string) |
| x | The x position to draw at |
| y | The y position to draw at |

#### Example:

![Draw Value Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Value.png)The above action block code sets a font, the font colour and then aligns the text to draw from the center before actually drawing the "level\_num" value along with the caption "Level: ".