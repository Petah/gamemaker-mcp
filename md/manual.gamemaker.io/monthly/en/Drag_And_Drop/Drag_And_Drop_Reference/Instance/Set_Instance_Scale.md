---
title: "Set Instance Scale"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance/Set_Instance_Scale.htm"
converted: "2025-09-14T03:59:26.139Z"
---

# ![Set Instance Scale Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/i_Instance_Set_Scale.png) Set Instance Scale

This action block sets the [image\_xscale](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_xscale.md) and [image\_yscale](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_yscale.md) values for the instance. The input values here are modifiers which will be applied to the sprite assigned to the instance, where a scale of 1 (the default value) indicates no scaling (1:1), smaller values will scale down (0.5, for example, will halve the width of the sprite), and larger values will scale up. You can use negative values to flip the sprite and scale it unless the value used is exactly -1 (in which case the sprite is just flipped or mirrored about its origin with no scaling). You can choose to set the horizontal or vertical scale relative to the current values, in which case you will be adding or subtracting the new value from the current scale values.

NOTE Changing these values will also change how the instance detects collisions, unless you have supplied a separate [mask\_index](../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/mask_index.md) (collision mask) in [The Object Editor](../../../The_Asset_Editors/Objects.md). Please note that for changes in this variable to be visible, the instance should have either _no_ draw event (and so GameMaker will default draw the sprite) or be drawn using [Draw Self](../Drawing/Draw_Self.md) action.

![Examples of scaled sprites](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/sprite_scale.png)

#### Action Syntax:

![Set Instance Scale Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/a_Instance_Set_Scale.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Horizontal | The vertical scaling factor to use (default is 1). |
| Vertical | The horizontal scaling factor to use (default is 1). |

#### Example:

![Set Instance Scale Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/e_Instance_Set_Sprite.png)The above action block code sets a new sprite as well as a number of other properties for how that sprite is to be displayed, including setting it to scale to three quarters of its base size along both axis.