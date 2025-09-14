---
title: "Set Instance Alpha"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance/Set_Instance_Alpha.htm"
converted: "2025-09-14T03:59:26.085Z"
---

# ![Set Instance Alpha Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/i_Instance_Set_Alpha.png) Set Instance Alpha

This action block sets the [image\_alpha](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_alpha.md) value for the instance. The image alpha is the "transparency" value for drawing any sprite assigned to the instance and has a value between 0 and 1, where 0 would be fully transparent and 1 would be fully opaque. Note that if the sprite has transparent or semi-transparent pixels, then their transparency will be scaled by the amount, so if you have some 50% transparent pixels in the sprite and set the instance alpha to 0.5, the final alpha for the transparent pixels would be 25%. You can set this value to be a relative amount.

NOTE For changes in this variable to be visible, the instance should have either _no_ draw event (and so GameMaker will default draw the sprite) or be drawn using [Draw Self](../Drawing/Draw_Self.md) action.

#### Action Syntax:

![Set Instance Alpha Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/a_Instance_Alpha.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| alpha | The alpha value to set (from 0 to 1, default is 1). |

#### Example:

![Set Instance Alpha Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/e_Instance_Set_Sprite.png)The above action block code sets a new sprite as well as a number of other properties for how that sprite is to be displayed, including setting the image alpha to be 0.5.