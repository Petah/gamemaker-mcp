---
title: "Get Text Alignment"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Get_Text_Alignment.htm"
converted: "2025-09-14T03:59:25.330Z"
---

# ![Get Text Alignment Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Get_Text_Alignment.png) Get Text Alignment

This action will get the font alignment for all current draw text actions. You can choose whether to retrieve the horizontal or vertical alignment to check, and the action will return one of the following _constant_ values, that represent a different type of horizontal or vertical alignment:

|  | Text is horizontally aligned to the left |
| --- | --- |
|  | Text is horizontally aligned to the center |
|  | Text is horizontally aligned to the right |
|  | Text is vertically aligned to the top |
|  | Text is vertically aligned to the middle |
|  | Text is vertically aligned to the bottom |

The return constant will be stored in the **target variable** that you specify, which can have been created previously or can be a new temporary one (if you check the "Temp" check-box).

#### Action Syntax:

![Get Text Alignment Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Get_Text_Alignment.png)

#### Example:

![Get Text Alignment Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Get_Font_Alignment.png)The above action block code checks the horizontal text alignment and if it's not set to fa\_left, then it is set to that value.