---
title: "sprite_get_xoffset"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_xoffset.htm"
converted: "2025-09-14T03:59:41.589Z"
---

# sprite\_get\_xoffset

When you define a sprite in the sprite editor, you need to set the _origin_ for that sprite. This is the point at which the sprite will be "attached" or "drawn" when used with an instance. This function returns the relative offset for the x-axis of the origin based on the upper left corner being the 0,0 position, with a +x being right and a -x being left of this. The following image illustrates this:

![Sprite Offset Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Sprites/spr_xyoffset.png)

#### Syntax:

sprite\_get\_xoffset(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to find the xoffset of. |

#### Returns

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (x - sprite\_get\_xoffset(sprite\_index) < 0)
{
    x = sprite\_get\_xoffset(sprite\_index);
}

The above code will ensure that an instance is maintained within the room based on the sprite (so the sprite is always visible).