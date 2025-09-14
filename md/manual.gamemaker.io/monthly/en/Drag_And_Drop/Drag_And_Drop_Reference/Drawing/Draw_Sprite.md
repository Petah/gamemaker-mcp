---
title: "Draw Sprite"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Drawing/Draw_Sprite.htm"
converted: "2025-09-14T03:59:25.139Z"
---

# ![Draw Sprite Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/i_Drawing_Draw_Sprite.png) Draw Sprite

This action will draw a sprite somewhere in the room. You specify the sprite, the position (either an absolute position within the room, or a relative position to the instance doing the drawing) and the animation frame of the sprite, if it has multiple frames (note that image frames are numbered from 0 upwards). If you have an animated sprite and you want it to draw the frames as if it was assigned to the object, then use -1 for the frame index or the built-in instance variable [image\_index](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_index.md), but note that if the instance has no sprite assigned then it will not animate, and if the sprite assigned has a different number of frames to the one being drawn then the sprite will be drawn with extra frames or missed frames.

**IMPORTANT** This action will not draw the sprite transformed, even if you have changed the image blend or scale. For that see the action [Draw Sprite Transformed](Draw_Sprite_Transformed.md).

NOTE This action is only for use in the various [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md), and will not draw anything if used elsewhere.

#### Action Syntax:

![Draw Sprite Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/a_Drawing_Draw_Sprite.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sprite | The sprite to draw |
| x | The x position to draw at |
| y | The y position to draw at |
| Frame Index | The frame index to draw |

#### Example:

![Draw Sprite Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Drawing/e_Drawing_Draw_Self.png)The above action block code draws a "shadow" sprite at the same relative position as the instance, then draws the instance sprite over the top.