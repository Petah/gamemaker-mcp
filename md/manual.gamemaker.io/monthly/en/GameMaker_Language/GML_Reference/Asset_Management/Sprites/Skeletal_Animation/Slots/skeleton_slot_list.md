---
title: "skeleton_slot_list"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Slots/skeleton_slot_list.htm"
converted: "2025-09-14T03:59:41.222Z"
---

# skeleton\_slot\_list

With this function you can populate a (pre-created) DS list with all the names of the slots created as part of the skeletal animation sprite. The names will be strings and can then be used in the other skeleton animation slot functions for these types of sprite.

#### Syntax:

skeleton\_slot\_list(sprite, list);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite index of the Spine skeletal animation to get the list from. |
| list | DS List | The ID of the DS list to populate with the bone names. |

#### Returns:

N/A

#### Example:

bone\_list = ds\_list\_create();
skeleton\_slot\_list(sprite\_index, bone\_list);

The above code creates a DS list then populates it with the slot names for later use.