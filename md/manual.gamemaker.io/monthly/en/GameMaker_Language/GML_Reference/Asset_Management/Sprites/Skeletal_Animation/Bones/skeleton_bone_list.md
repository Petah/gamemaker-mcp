---
title: "skeleton_bone_list"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Bones/skeleton_bone_list.htm"
converted: "2025-09-14T03:59:40.772Z"
---

# skeleton\_bone\_list

With this function you can populate a (pre-created) [DS list](../../../../Data_Structures/DS_Lists/DS_Lists.md) with all the names of the bones used as part of the skeletal animation sprite. The names will be strings and can then be used in the other skeleton animation bone functions for these types of sprite.

#### Syntax:

skeleton\_bone\_list(sprite, list);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite index of the Spine skeletal animation to get the list from. |
| list | DS List | The ID of the DS list to populate with the bone names. |

#### Returns:

N/A

#### Example:

bone\_list = ds\_list\_create();
skeleton\_bone\_list(sprite\_index, bone\_list);

The above code creates a DS list then populates it with the bone names for later use.