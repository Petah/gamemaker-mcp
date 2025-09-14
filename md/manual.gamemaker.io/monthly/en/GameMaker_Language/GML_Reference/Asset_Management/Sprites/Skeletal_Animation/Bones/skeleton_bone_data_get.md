---
title: "skeleton_bone_data_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Bones/skeleton_bone_data_get.htm"
converted: "2025-09-14T03:59:40.740Z"
---

# skeleton\_bone\_data\_get

Your skeletal animation is made up of a number of "bones", which you will have defined and given names to in your animation program. This function can be used to get information on the named bone at any time and store the data in an empty [DS map](../../../../Data_Structures/DS_Maps/DS_Maps.md), which you must have created previously. Note that this data refers to the **default** pose for the skeleton, and not the current pose that is being drawn. If you need the data from the **current** pose, use [skeleton\_bone\_state\_get()](skeleton_bone_state_get.md).

When you call this function the map will be populated with the following keys:

-   **"x":** The local x position of the bone relative to the parent bone.
-   **"y":** The local y position of the bone relative to the parent bone.
-   **"angle":** The local rotation of the bone relative to the parent bone.
-   **"xscale":** The local horizontal scale of the bone, in reference to the parent bone.
-   **"yscale":** The local vertical scale of the bone, in reference to the parent bone.
-   **"parent":** The name (a string) of the parent bone.

#### Syntax:

skeleton\_bone\_data\_get(bone, map);

| Argument | Type | Description |
| --- | --- | --- |
| bone | String | The name (as a string) of the bone. |
| map | DS Map | The (previously created) DS map that will get the bone data. |

#### Returns:

N/A

#### Example:

bone\_map = ds\_map\_create();
skeleton\_bone\_data\_get("leftarm", bone\_map);

The above code creates a DS map and then populates it with the data from the bone named "leftarm".