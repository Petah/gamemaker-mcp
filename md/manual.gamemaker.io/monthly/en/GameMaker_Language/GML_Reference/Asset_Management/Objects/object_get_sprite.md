---
title: "object_get_sprite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_get_sprite.htm"
converted: "2025-09-14T03:59:34.405Z"
---

# object\_get\_sprite

This function will tell you whether the object you are checking has a sprite or not, and if it does then it will a handle to that sprite, or an invalid handle (-1) if it does not. Please note that this is not an instance function! You can have an object with no sprite while an instance of that same object can have one and vice versa, or they can even have different sprites. You can set an individual instance's sprite using the [sprite\_index](../Sprites/Sprite_Instance_Variables/sprite_index.md) instance variable.

#### Syntax:

object\_get\_sprite(obj);

| Argument | Type | Description |
| --- | --- | --- |
| obj | Object Asset | The object to check |

#### Returns:

[Sprite Asset](../../../../../../../The_Asset_Editors/Sprites.md)

#### Example:

var \_spr = object\_get\_sprite(object\_index);
if (sprite\_index != \_spr)
{
    sprite\_index = \_spr;
}

The above example will check the [sprite\_index](../Sprites/Sprite_Instance_Variables/sprite_index.md) of the instance against the sprite of the [object\_index](object_index.md) of the instance. If they are not the same, then it will assign the same sprite as that of the object index to the instance.