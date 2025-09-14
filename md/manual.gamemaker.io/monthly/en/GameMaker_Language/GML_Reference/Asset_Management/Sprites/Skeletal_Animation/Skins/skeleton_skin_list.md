---
title: "skeleton_skin_list"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Skins/skeleton_skin_list.htm"
converted: "2025-09-14T03:59:41.085Z"
---

# skeleton\_skin\_list

With this function you can populate a (pre-created) [DS list](../../../../Data_Structures/DS_Lists/DS_Lists.md) with all the names of the skins included as part of the skeletal animation sprite. The names will be strings and can then be used in the other skeleton animation skin functions for these types of sprite.

#### Syntax:

skeleton\_skin\_list(sprite, list);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite index of the Spine skeletal animation to get the list from. |
| list | DS List | The ID of the DS list to populate with the animation names. |

#### Returns:

N/A

#### Example:

var list = ds\_list\_create();
skeleton\_skin\_list(sprite\_index, list);
var num = ds\_list\_size(list);
skeleton\_skin\_set(list\[| irandom(num - 1));
ds\_list\_destroy(list);

The above code creates a DS list then populates it with the skin names. A random one is then chosen and applied to the instance before the list is destroyed.