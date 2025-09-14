---
title: "clickable_change"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Web_And_HTML5/clickable_change.htm"
converted: "2025-09-14T04:00:11.537Z"
---

# clickable\_change

With this function you can change the sprite and position of a clickable icon previously created with [clickable\_add()](clickable_add.md). Please note that the position is based on the window, _not_ the canvas, (0,0) position and that the sprite must be referenced directly from the texture page (see: [sprite\_get\_tpe()](../Asset_Management/Sprites/Sprite_Information/sprite_get_tpe.md)).

#### Syntax:

clickable\_change(index, tpe, x, y)

| Argument | Type | Description |
| --- | --- | --- |
| index | Clickable ID | The index of the clickable icon to change. |
| tpe | Texture Page Entry | The texture page entry for the sprite to be used. |
| x | Real | The new x position within the window. |
| y | Real | The new y position within the window. |

#### Returns:

N/A

#### Example:

switch (room)
{
    case rm\_Menu: clickable\_change(global.Help\_Icon, sprite\_get\_tpe(spr\_MS\_Help, 1), 32, 32); break;
    case rm\_Game: clickable\_change(global.Help\_Icon, sprite\_get\_tpe(spr\_MS\_Help, 0), 200, 32); break;
}

The above code will change the image index and position of the clickable icon indexed in the variable "global.Help" depending on the current room.