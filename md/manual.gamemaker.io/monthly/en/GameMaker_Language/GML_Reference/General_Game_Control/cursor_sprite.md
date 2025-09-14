---
title: "cursor_sprite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/cursor_sprite.htm"
converted: "2025-09-14T04:00:00.162Z"
---

# cursor\_sprite

Setting this variable will instruct GameMaker to use the designated sprite as a cursor (basically setting it to the current mouse x/y position every step).

The default value is an invalid sprite handle (-1) which is no sprite for the cursor, but you can assign any sprite from the game assets or one that has been imported from an external resource. Please note that there is no way to control the animation speed or image index, so if the sprite has sub-images, these will be cycled at the same speed as the game speed. To remove the cursor sprite, you can set this variable to -1.

NOTE This variable does _not_ replace the game window cursor, and that it will still be drawn as normal. To avoid this you can use the function [window\_set\_cursor](../Cameras_And_Display/The_Game_Window/window_set_cursor.md) and set it to the constant cr\_none which will make the standard cursor invisible.

#### Syntax:

cursor\_sprite

#### Returns:

[Sprite Asset](../../../The_Asset_Editors/Sprites.md)

#### Example:

cursor\_sprite = spr\_custom\_cursor;

The above code sets the sprite indexed in the variable spr\_custom\_cursor to be the cursor sprite for the game.