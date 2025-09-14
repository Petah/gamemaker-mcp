---
title: "Set Font"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Set_Font.htm"
converted: "2025-09-14T03:59:25.378Z"
---

# ![Set Font Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Set_Font.png) Set Font

With this action you can set the font to use for all subsequent draw text actions. Clicking the dialogue will open the following window where you can then select the font that you wish to use:

![Draw Set Font Example Fonts](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/Draw_Set_Font_Example.png)Note that this will set the font to use for _all_ subsequent draw text calls, and so can be called once at the beginning of the game - in any event, not just the Draw Event - and all draw text actions will use the set font. However if you require multiple fonts in your game, then you will need to call this action before drawing any text with the required font.

#### Action Syntax:

![Set Font Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Set_Font.png)

#### Example:

![Set Font Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Value.png)The above action block code sets the font, the draw colour, and the alignment for some text that is drawn.