---
title: "sprite_get_yoffset"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_yoffset.htm"
converted: "2025-09-14T03:59:41.602Z"
---

# sprite\_get\_yoffset

When you define a sprite in the sprite editor, you need to set the _origin_ for that sprite. This is the point at which the sprite will be "attached" or "drawn" when used with an instance. This function returns the relative offset for the y-axis of the origin based on the upper left corner being the 0,0 position, with a +y being down and a -y being up from this. The following image illustrates this:

![Sprite Offset Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Sprites/spr_xyoffset.png)

#### Syntax:

sprite\_get\_yoffset(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to find the yoffset of. |

#### Returns

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (y - sprite\_get\_yoffset(sprite\_index) < 0)
{
    y = sprite\_get\_yoffset(sprite\_index);
}

The above code will ensure that an instance is maintained within the room based on the sprite (so the sprite is always visible).