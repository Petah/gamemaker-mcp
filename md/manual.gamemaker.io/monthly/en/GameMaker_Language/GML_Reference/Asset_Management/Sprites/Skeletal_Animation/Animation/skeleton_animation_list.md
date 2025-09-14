---
title: "skeleton_animation_list"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_list.htm"
converted: "2025-09-14T03:59:40.475Z"
---

# skeleton\_animation\_list

With this function you can populate a (pre-created) [DS list](../../../../Data_Structures/DS_Lists/DS_Lists.md) with all the names of the animations included as part of the skeletal animation sprite. The names will be strings and can then be used in the other animation functions for these types of sprite.

#### Syntax:

skeleton\_animation\_list(sprite, list);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite index of the Spine skeletal animation to get the list from. |
| list | DS List | The ID of the DS list to populate with the animation names. |

#### Returns:

N/A

#### Example:

var list = ds\_list\_create();
skeleton\_animation\_list(sprite\_index, list);

for (var i = 1; i < ds\_list\_size(list); i++;)
{
    skeleton\_animation\_mix(list\[| 0\], list\[| i\], 0.5);
}

ds\_list\_destroy(list);

The above code creates a DS list of all the animation names for the sprite being used by the instance. It then loops through these and sets the mix value for all of them with the first animation to 0.5.