---
title: "object_set_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_set_mask.htm"
converted: "2025-09-14T03:59:34.468Z"
---

# object\_set\_mask

With this function you can set the mask\_index of a specific object (for more information on masks see [The Object Editor](../../../../../../../The_Asset_Editors/Objects.md)). This means that all instances of this object that are created _after the mask has been changed_ will be created with this new mask, while instances that are already in the room may not be affected. You can set this to -1 to remove a mask sprite and so default to the mask defined for the sprite of the object (or no masks if no sprite has been chosen).

Please note that this is not an instance function! You can set the mask index of individual instances using the [mask\_index](../Sprites/Sprite_Instance_Variables/mask_index.md) variable and so have ten instances all with a different mask to the object they are created from, and even if you change the mask index of the object using this function, all instances that are currently in the room will remain as they were, and only instances created after calling the function will start with the new mask.

#### Syntax:

object\_set\_mask(index, spr);

| Argument | Type | Description |
| --- | --- | --- |
| index | Object Asset | The index of the object to change. |
| spr | Sprite Asset | The new sprite to use as the object's mask. |

#### Returns:

N/A

#### Example:

if (global.level == 10)
{
    object\_set\_mask(obj\_Platform, spr\_mask\_10);
}

The above code checks the value of global variable and then changes the mask index of the object "obj\_Platform" if it is equal to ten.