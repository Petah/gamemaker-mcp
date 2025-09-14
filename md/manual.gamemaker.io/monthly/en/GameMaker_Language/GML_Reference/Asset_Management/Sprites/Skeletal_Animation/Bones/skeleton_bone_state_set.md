---
title: "skeleton_bone_state_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Bones/skeleton_bone_state_set.htm"
converted: "2025-09-14T03:59:40.818Z"
---

# skeleton\_bone\_state\_set

Your skeletal animation is made up of a number of "bones", which you will have defined and given names to in your animation program, and this function can be used to set certain data for the named bone at any time. Note that this data will set the **current** pose for the skeleton, depending on the animation set used, and the function requires a previously created [DS map](../../../../Data_Structures/DS_Maps/DS_Maps.md), which should have the following keys and their required values:

-   **"x":** The local x position of the bone relative to the parent bone.

-   **"y":** The local y position of the bone relative to the parent bone.

-   **"angle":** The local rotation of the bone relative to the parent bone.

-   **"xscale":** The local horizontal scale of the bone.

-   **"yscale":** The local vertical scale of the bone.

-   **"parent":** The name (a string) of the parent bone.

This function is provided so that you can "intercept" animation data and modify it before it is drawn on the screen, and as such you would want to use it in the [Other - Animation Update](../../../../../../../../../The_Asset_Editors/Object_Properties/Other_Events.md) event, since this event is triggered just before the Draw Events.

Note that you can use the same map you filled out using the [skeleton\_bone\_state\_get()](skeleton_bone_state_get.md) function, even though it contains the additional "World" keys and values. Since these refer to _read-only_ values, setting them with this function will have no affect.

#### Syntax:

skeleton\_bone\_state\_set(bone, map);

| Argument | Type | Description |
| --- | --- | --- |
| bone | String | The name (as a string) of the bone. |
| map | DS Map | The (previously created) DS map that stores the bone data. |

#### Returns:

N/A

#### Example:

var map = ds\_map\_create();
skeleton\_bone\_state\_get("head", map);
var xx = ds\_map\_find\_value(map, "worldX");
var yy = ds\_map\_find\_value(map, "worldY");
var deltax = mouse\_x - (x + xx);
var deltay = mouse\_y - (y + yy);
var angle = -radtodeg(arctan2(deltay, deltax));
ds\_map\_replace(map, "angle", angle);
skeleton\_bone\_state\_set("head", map);
ds\_map\_destroy(map);

The above code creates a DS map and then populates it with the data from the bone named "head". It then extracts the world position for the bone, and uses that data to set the "angle" of the bone to track the mouse position in the game.