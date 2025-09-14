---
title: "sprite_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/sprite_index.htm"
converted: "2025-09-14T03:59:41.824Z"
---

# sprite\_index

This variable returns the current sprite set for the instance, or an invalid handle (\-1) if the instance has no sprite associated with it.

You can change it to give the instance a different sprite, by either giving it the reference of a sprite from [The Asset Browser](../../../../../Introduction/The_Asset_Browser.md) or by using a variable that has an [externally loaded sprite](../Sprite_Manipulation/sprite_add.md) indexed in it.

Changing the sprite does not change the index of the currently visible frame, given that there is a sub-image for the current frame in the new sprite. So if you change the sprite on frame number 3, the new sprite will be drawn with that frame visible. However, if the new sprite does _not_ contain a sub-image for the current frame, [image\_index](image_index.md) will reset to 0, displaying the first frame of the sprite instead.

#### Syntax:

sprite\_index

#### Returns:

[Sprite Asset](../../../../../The_Asset_Editors/Sprites.md)

#### Example:

with (obj\_check)
{
    if !collision\_line(x, y, other.x, other.y, obj\_wall, false, true)
    {
        sprite\_index = spr\_spotted;
    }
    else
    {
        sprite\_index = spr\_clear;
    }
}

The above code will loop through all instances of obj\_check checking for a collision line between them and the instance running the code. The sprite of those instances will be changed depending on the return value (true or false) for the collision line.