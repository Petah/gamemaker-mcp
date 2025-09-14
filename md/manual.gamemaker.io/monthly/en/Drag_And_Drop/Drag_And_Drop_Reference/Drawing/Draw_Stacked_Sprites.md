---
title: "Draw Stacked Sprites"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Stacked_Sprites.htm"
converted: "2025-09-14T03:59:25.173Z"
---

# ![Draw Stacked Sprites Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Stacked_Sprites.png) Draw Stacked Sprites

This action will draw a sprite a given number of times one after another at a given position within the room. You give the sprite to draw and the stack order, which can be either **Horizontal** (horizontally, left to right), or **Vertical** (vertically, top to bottom), as well as the number of sprites to draw and the position. The position can be an absolute position within the room, or one relative to the position of the instance doing the drawing, and the spacing between images will be based on the width or height of the sprite. Note that this simply draws a static image - the initial single image (frame 0) of the given sprite - and any further frames will be ignored, as will any transforms that have been added through changing the [instance variables](../Instance/Set_Instance_Variable.md) (like [image\_xscale](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_xscale.md) or [image\_blend](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_blend.md)).

NOTE This action is only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md), and will not draw anything if used elsewhere.

#### Action Syntax:

![Draw Stacked Sprites Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Draw_Stacked_Sprites.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sprite | The sprite to draw |
| Stack Order | The order to draw in (either Horizontal or Vertical) |
| Number | The number of sprites to draw |
| x | The x position to draw at |
| y | The y position to draw at |

#### Example:

![Draw Stacked Sprites Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Stacked_Sprites.png)The above action block code gets the number of instances of the object obj\_Player and then uses this to draw a number of marker sprites to the screen.