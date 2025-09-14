---
title: "Strip Images"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Sprite_Properties/Sprite_Strips.htm"
converted: "2025-09-14T04:00:16.857Z"
---

# Strip Images

You can use "strip images" to easily import animated sprites into GameMaker.

A strip image contains multiple frames, laid out horizontally, starting from the left. The name of a strip image file must end with "**\_stripN**", where "**N**" is the number of frames in the animation.

![](https://manual.gamemaker.io/monthly/en/assets/Images/Asset_Editors/PlayerSprite_strip5.png)The above strip image contains 5 frames. Its filename is PlayerSprite**\_strip5**.png, indicating it has 5 frames, which GameMaker uses to divide it into separate sub-images.

You can save this image and drag it into GameMaker right now, and it will be imported as an animation:

![](../../assets/Images/Asset_Editors/Sprite_Strip_Imported.png)You can import a strip image via the "Import" button in the [Sprite Editor](../Sprites.md), by dragging it into the IDE, or loading it at runtime with [sprite\_add()](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add.md).

After importing, GameMaker will remove the "\_stripN" part from the name of the sprite.

The width of the final sprite will be equal to the **total width of the strip image** divided by the **number of frames** in its filename. For example, a 250px-wide strip with 5 frames will result in a 50px-wide image.

## Fonts

You can create a strip image to be used as a font, where each character is a frame in the strip image.

Such a strip image can be loaded at runtime using [font\_add\_sprite()](../../GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_add_sprite.md).

## Saving Strip Images

You can save a sprite as a strip image file at runtime using [sprite\_save\_strip()](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_save_strip.md). This sprite may have previously been loaded via the IDE, at runtime with [sprite\_add()](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add.md), or [built from a surface](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add_from_surface.md).