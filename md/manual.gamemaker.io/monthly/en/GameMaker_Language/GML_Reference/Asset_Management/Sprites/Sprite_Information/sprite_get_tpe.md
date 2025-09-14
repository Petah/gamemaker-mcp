---
title: "sprite_get_tpe"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_tpe.htm"
converted: "2025-09-14T03:59:41.545Z"
---

# sprite\_get\_tpe

This function will return a special value that relates to the position of the given sprite and sub-image on the texture page used by your game. In this way you can pass the value to extensions for use outside of the compiled game, effectively bypassing the GameMaker drawing functions and permitting the sprite to be used in DOM content which can then be drawn anywhere within the window that contains the game canvas. This function is of particular interest to those that wish to create buttons and other interactive media outside of the GameMaker canvas element on their host page using the function [clickable\_add()](../../../Web_And_HTML5/clickable_add.md).

NOTE This function is for HTML5 only.

#### Syntax:

sprite\_get\_tpe(sprite, index);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The index of the sprite to find the texture page entry of. |
| index | Real | The image index of the sprite. |

#### Returns

[Texture Page Entry](sprite_get_tpe.md)

#### Example:

home\_but = clickable\_add(32, 32, sprite\_get\_tpe(spr\_MS\_Home, 0), "http://macsweeney\_games.com", "\_blank", "width=700, height=500, menubar=0, toolbar=0, scrollbars=0");

The above code creates a DOM button at the position (32, 32) of the page that the game canvas is running on. The button uses the sprite referenced from the texture page as "spr\_MS\_Home" and when clicked the button will open a new window for the specified URL and with the defined properties for that window.