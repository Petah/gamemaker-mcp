---
title: "clickable_change_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Web_And_HTML5/clickable_change_ext.htm"
converted: "2025-09-14T04:00:11.552Z"
---

# clickable\_change\_ext

With this function you can change the sprite and position of a clickable icon previously created with [clickable\_add()](clickable_add.md). Bear in mind that the position is based on the window, _not_ the canvas, (0,0) position and that the sprite must be referenced directly from the texture page (see: [sprite\_get\_tpe()](../Asset_Management/Sprites/Sprite_Information/sprite_get_tpe.md)). This function also permits you to change the scale of the sprite used (as a multiplier so that 1 is the default, 0.5 would be half and 2 would be double) and the alpha value from 0 (fully transparent) to 1 (fully opaque) for the final icon on the screen.

#### Syntax:

clickable\_change\_ext(index, tpe, x, y, alpha, scale)

| Argument | Type | Description |
| --- | --- | --- |
| index | Clickable ID | The index of the clickable icon to change. |
| tpe | Texture Page Entry | The texture page entry for the sprite to be used |
| x | Real | The new x position within the window. |
| y | Real | The new y position within the window. |
| scale | Real | The scale of the icon (default 1). |
| alpha | Real | The image alpha of the icon (default 1). |

#### Returns:

N/A

#### Example:

switch (room)
{
    case rm\_Menu: clickable\_change\_ext(global.Help\_Icon, sprite\_get\_tpe(spr\_MS\_Help, 1), 32, 32, 2, 1); break;
    case rm\_Game: clickable\_change\_ext(global.Help\_Icon, sprite\_get\_tpe(spr\_MS\_Help, 0), 200, 32, 1, 0.5); break;
}

The above code will change the image index and position of the clickable icon indexed in the variable "global.Help" depending on the current room, changing the icon scale and alpha too.