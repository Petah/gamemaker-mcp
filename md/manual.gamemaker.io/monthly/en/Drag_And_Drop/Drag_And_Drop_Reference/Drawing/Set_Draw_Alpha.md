---
title: "Set Draw Alpha"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Set_Draw_Alpha.htm"
converted: "2025-09-14T03:59:25.350Z"
---

# ![Set Draw Alpha Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Set_Draw_Alpha.png) Set Draw Alpha

With this action you can set the alpha to use for any shapes (rectangle/ellipse/line) or for any text that is drawn subsequently. Note that this does not have to be called before every draw action, and can be set once only at the start of the game. Alpha is the setting that controls how "transparent" things will be drawn and is based on a scale of 0 to 1, where 0 is fully transparent and 1 is fully opaque.

#### Action Syntax:

![Set Draw Alpha Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Set_Draw_Alpha.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Alpha | The alpha value to use (from 0 to 1, default is 1) |

#### Example:

![Set Draw Alpha Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Set_Draw_Alpha.png)The above action block code sets the draw alpha to a random value between 0 and 1.