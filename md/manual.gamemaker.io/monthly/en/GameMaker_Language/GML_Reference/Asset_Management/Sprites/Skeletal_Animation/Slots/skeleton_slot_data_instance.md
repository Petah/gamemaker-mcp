---
title: "skeleton_slot_data_instance"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Slots/skeleton_slot_data_instance.htm"
converted: "2025-09-14T03:59:41.209Z"
---

# skeleton\_slot\_data\_instance

With this function you can populate a (pre-created) [DS list](../../../../Data_Structures/DS_Lists/DS_Lists.md) with data for each of the available attachment slots for the Spine sprite associated with the current instance (including any attachment modifications). This data is returned in the forum of a [DS map](../../../../Data_Structures/DS_Maps/DS_Maps.md) which contains the following key/value pairs:

-   **"name":** The name of the slot.
-   **"bone":** The name of the bone.
-   **"attachment":** The name of the attachment if one is used or "(none)" if there isn't one assigned.

The values for each key will be strings and can then be used in the other skeleton attachment functions for these types of sprite. Note that the DS Map created are _not_ destroyed so you will need to loop through the DS list and destroy each of the created maps yourself.

#### Syntax:

skeleton\_slot\_data\_instance(list);

| Argument | Type | Description |
| --- | --- | --- |
| list | DS List | The ID of the DS list to populate with the DS maps. |

#### Returns:

N/A

#### Example:

var list = ds\_list\_create();
var open = true;
slot\_name = "";
skeleton\_slot\_data\_instance(list);
for (var i = 0; i < ds\_list\_size(list); i++)
{
    var map = list\[| i\];
    if open
    {
        if map\[? "attachment"\] == "(none)"
        {
            open = false;
            slot\_name = map\[? "name"\];
        }
    }

    ds\_map\_destroy(map);
}

ds\_list\_destroy(list);

The above code creates a DS list and then populates it with the slot data for the instance sprite. This data is then parsed to extract the individual DS maps with the slot data. This is then checked to see if there is an empty slot, and if so the variable "slot\_name" is assigned the empty slot name before the DS map is destroyed. Finally we destroy the DS list as it is no longer required.