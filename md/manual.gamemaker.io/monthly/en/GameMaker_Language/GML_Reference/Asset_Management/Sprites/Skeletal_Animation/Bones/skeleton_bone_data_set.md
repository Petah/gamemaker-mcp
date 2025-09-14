---
title: "skeleton_bone_data_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Bones/skeleton_bone_data_set.htm"
converted: "2025-09-14T03:59:40.759Z"
---

# skeleton\_bone\_data\_set

Your skeletal animation is made up of a number of "bones", which you will have defined and given names to in your animation program, and this function can be used to set certain data for the named bone at any time. Note that this data refers to the **default** pose for the skeleton, and _not_ the current pose that is being drawn (for that use the function [skeleton\_bone\_state\_set()](skeleton_bone_state_set.md)), and must be set from a previously created [DS map](../../../../Data_Structures/DS_Maps/DS_Maps.md), which should have the following keys and their equivalent values:

-   **"x":** The local x position of the bone relative to the parent bone.
-   **"y":** The local y position of the bone relative to the parent bone.
-   **"angle":** The local rotation of the bone relative to the parent bone.
-   **"xscale":** The local horizontal scale of the bone.
-   **"yscale":** The local vertical scale of the bone.
-   **"parent":** The name (a string) of the parent bone.

#### Syntax:

skeleton\_bone\_data\_set(bone, map);

| Argument | Type | Description |
| --- | --- | --- |
| bone | String | The name (as a string) of the bone. |
| map | DS Map | The (previously created) DS map that stores the bone data. |

#### Returns:

N/A

#### Example:

var bone\_map = ds\_map\_create();
skeleton\_bone\_data\_get("head", bone\_map);
ds\_map\_replace(bone\_map, "parent", "body");
skeleton\_bone\_data\_set("head", bone\_map);
ds\_map\_destroy(bone\_map);

The above code creates a DS map and then populates it with the data from the bone named "head". It then replaces the "parent" bone key in the map with a new value and sets the "head" bone again with the new set of data.