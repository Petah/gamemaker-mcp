---
title: "sprite_replace"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_replace.htm"
converted: "2025-09-14T03:59:42.198Z"
---

# sprite\_replace

This function works in almost the exact same manner as [sprite\_add](sprite_add.md), only instead of returning the handle of the sprite you are importing, it overwrites a previously created sprite index.

When using this function you should use a sprite index that has been created and stored in a variable using other functions like [sprite\_add](sprite_add.md) or [sprite\_create\_from\_surface](sprite_create_from_surface.md), or even [sprite\_duplicate](sprite_duplicate.md), rather than a resource tree sprite asset.

You _can_ replace a sprite from the game assets using this function, but doing so means that you will lose the reference ID for the sprite that you are replacing, regardless of whether you call [game\_restart](../../../General_Game_Control/game_restart.md) or not, and so this is not recommended.

Regardless of the sprite being replaced, this function will **create a new texture page for the sprite** and so care should be taken when using it as it may adversely affect performance by increasing the number of required texture swaps for rendering.

For information on the arguments, see [sprite\_add](sprite_add.md).

### Platform-specific notes

-   You should be aware that if you are using this function in your **HTML5** target game to load resources from an external server, then, due to XSS protection in browsers, attempts to load resources from across domains can be blocked and may appear to return blank results.

NOTE Depending on the target platform that is chosen you are limited as to where you can save and load files from. See [The File System](../../../../../Additional_Information/The_File_System.md) for more information.

#### Syntax:

sprite\_replace(ind, fname, imgnumb, removeback, smooth, xorig, yorig);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The sprite to permanently replace |
| fname | String | The name (a file path) of the file to add or a data URL with the image data embedded in the string (encoded in base64) |
| imgnumb | Real | The number of frames the sprite will be cut up into horizontally. Use 1 for one single image or *.gif |
| removeback | Boolean | Indicates whether to make all pixels with the background colour (left-bottom pixel) transparent |
| smooth | Boolean | Indicates whether to smooth the edges |
| xorig | Real | The x coordinate of the origin, relative to the sprite's top left corner |
| yorig | Real | The y coordinate of the origin, relative to the sprite's top left corner |

#### Returns

N/A

#### Example:

sprite\_replace(spr\_banner, "gravemaker.png", 1, false, false, 0, 0);

The above code will replace the image asset referenced in spr\_banner with another one loaded from an external source.