---
title: "draw_texture_flush"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/draw_texture_flush.htm"
converted: "2025-09-14T03:59:54.950Z"
---

# draw\_texture\_flush

With this function you can remove all textures from video memory, and they will then be reloaded on first use. This is the only effective way to manage video memory when you have multiple texture pages for a game, and you should flush the texture memory between levels on your game and organise the graphics using the texture group feature to ensure that the minimum number of textures are used.

NOTE On all targets, texture pages will _by default_ only be loaded as they are required and you can use the various prefetch and flush functions for sprites (found [here](../../Asset_Management/Sprites/Sprite_Manipulation/Sprite_Manipulation.md)) to manage things as well as this function.

**WARNING** This will not work on HTML5 when WebGL is disabled or not supported by the browser. WebGL can be allowed or set to be required in the [HTML5 Game Options](../../../../../../../Settings/Game_Options/HTML5.md) under **Graphics**.

#### Syntax:

draw\_texture\_flush();

#### Returns:

N/A

#### Example:

Create Event

draw\_texture\_flush();

The above code flushes the video memory of texture data, and would probably be placed in the create event of the first instance of an object placed in the room.