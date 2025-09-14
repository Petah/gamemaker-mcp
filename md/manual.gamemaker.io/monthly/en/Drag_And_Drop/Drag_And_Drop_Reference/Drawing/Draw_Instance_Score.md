---
title: "Draw Instance Score"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Instance_Score.htm"
converted: "2025-09-14T03:59:25.064Z"
---

# ![Draw Instance Score Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Instance_Score.png) Draw Instance Score

With this action you can draw the score value of the instance. When you use _any_ score action in GameMaker the instance that calls it will have a new instance scope variable called score added. This variable can then be checked and set as you would any other variable. In the case of this action, the variable will be drawn to the screen at the given position, along with any caption text that you wish to provide. Caption text will be drawn preceding the score value and if it is text it should be wrapped with "", and both will be formatted using the current draw font , colour and alignment.

NOTE This action is only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md), and will not draw anything if used elsewhere.

#### Action Syntax:

![Draw Instance Score Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Draw_Instance_Score.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Caption | The string to draw along with the score value (preceding and can be left blank) |
| x | The x position to draw the score at |
| y | The y position to draw the score at |

#### Example:

![Draw Instance Score Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Instance_Score.png)The above action block code draws the score using the given draw formatting.