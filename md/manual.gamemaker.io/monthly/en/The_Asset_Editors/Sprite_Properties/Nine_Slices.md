---
title: "Nine Slice"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Sprite_Properties/Nine_Slices.htm"
converted: "2025-09-14T04:00:16.844Z"
---

# Nine Slice

Nine Slicing (also known as 9-slicing) is a technique used to scale rectangular images for preserving details, making them retain their original form after scaling.

This is achieved by dividing the image into nine separate parts or "slices". The corner slices are moved during scaling and drawn at the same scale, then the edge and centre slices are stretched or repeated (depending on your setting) to fill the space.

![](../../assets/Images/Asset_Editors/Nine_Slice_0_Preview.png)Four **guides** are placed on a sprite to divide the image into nine slices. The following visual demonstrates how the guides stay in place after the sprite is scaled using Nine Slice:

![](../../assets/Images/Asset_Editors/Nine_Slice_1_Guides.png)The **Tile Mode** of a slice determines how that slice is displayed when the sprite is scaled. It can only be set for the edge and centre slices (as corner slices are not scaled).

The following visual demonstrates each Tile Mode when applied to the centre slice:![](../../assets/Images/Asset_Editors/Nine_Slice_3_TileModes.png)If **Nine Slicing** is enabled for a sprite, it will be used for resizing the sprite wherever it appears, and will work in any existing places where the sprite was used without any other changes being required.

**NOTE**: Nine Slicing will not work with functions that draw only a part of the sprite or distort it, such as [draw\_sprite\_part()](../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_part.md) or [draw\_sprite\_pos()](../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_pos.md).

In conjunction with [Sequences](../Sequences.md), this feature can be used to build user interfaces, and can be used, for example, to create rectangular walls in a game level. Texture memory can also be saved using **Nine Slicing**, as a smaller image can be used to cover a larger area on-screen.

Nine Slicing can be enabled on Sprites in the IDE. For more information, see [The Sprite Editor](../Sprites.md).

For information on the Runtime functions available for Nine Slicing, see the following page:

-   [Nine Slice Functions](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Nine_Slice_Functions.md "Nine Slice Functions")