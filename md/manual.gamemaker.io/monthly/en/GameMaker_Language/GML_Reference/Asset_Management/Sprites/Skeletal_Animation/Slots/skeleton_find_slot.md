---
title: "skeleton_find_slot"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Slots/skeleton_find_slot.htm"
converted: "2025-09-14T03:59:41.129Z"
---

# skeleton\_find\_slot

With this function you can find which slots are at a specified room-space position in the Spine sprite associated with the current instance. You create a [DS list](../../../../Data_Structures/DS_Lists/DS_Lists.md) and supply its ID along with an x/y position to check and the list will be populated with name string for each of the available attachment slots for the sprite (including any attachment modifications). Note that the list is always sorted in descending order starting from the top-most slot.

#### Syntax:

skeleton\_find\_slot(x, y, list);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position in the room to check. |
| y | Real | The y position in the room to check. |
| list | DS List | The ID of the DS list to populate with the DS maps. |

#### Returns:

N/A

#### Example:

slot\_list = ds\_list\_create();
skeleton\_find\_slot(mouse\_x, mouse\_y, slot\_list);

The above code creates a DS list and then populates it with the slot names found at the position of the mouse in the room.