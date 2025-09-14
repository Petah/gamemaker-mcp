---
title: "Get Draw Font"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Get_Draw_Font.htm"
converted: "2025-09-14T03:59:25.297Z"
---

# ![Get Font Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Get_Font.png) Get Draw Font

With this action you can get the font currently assigned for drawing. The value returned will be either a valid font handle (index >= 0) that represents a font constant from [The Asset Browser](../../../Introduction/The_Asset_Browser.md) or an invalid handle (index set to -1) for no font assigned. The return value will be stored in the **target variable** that you specify, which can have been created previously or can be a new temporary one (if you check the "Temp" check-box).

#### Action Syntax:

![Get Font Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Get_Font.png)

#### Example:

![Get Font Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Get_Font.png)The above action block code checks the current font being used for drawing, and if it's not the given asset, then it is set to that asset.