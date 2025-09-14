---
title: "object_set_sprite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_set_sprite.htm"
converted: "2025-09-14T03:59:34.512Z"
---

# object\_set\_sprite

With this function you can set the sprite index of a specific object. This means that all instances of this object that are created _after the sprite\_index has been changed_ will be created with this new sprite\_index, while instances that are already in the room may not be affected.

Please note that this is not an instance function! You can set the sprite index of individual instances using the [sprite\_index](../Sprites/Sprite_Instance_Variables/sprite_index.md) variable and so have ten instances all with a different sprite to the object they are created from, and even if you change the sprite index of the object using this function, all instances that are currently in the room will remain as they were, and only instances created after calling the function will start with the new sprite.

#### Syntax:

object\_set\_sprite( index, spr );

| Argument | Type | Description |
| --- | --- | --- |
| index | Object Asset | The index of the object to change. |
| spr | Sprite Asset | The sprite to assign to the object. |

#### Returns:

N/A

#### Example:

switch (room)
{
    case rm\_start: object\_set\_sprite(obj\_Player, spr\_uniform); break;
    case rm\_middle: object\_set\_sprite(obj\_Player, spr\_swimsuit); break;
    case rm\_end: object\_set\_sprite(obj\_Player, spr\_casual); break;
}
instance\_create\_layer(32, 32, "Instances", obj\_Player);

The above code will set the object "obj\_Player" sprite index to different values depending on the room that the instance running the code is currently in. It then creates an instance of "obj\_Player".