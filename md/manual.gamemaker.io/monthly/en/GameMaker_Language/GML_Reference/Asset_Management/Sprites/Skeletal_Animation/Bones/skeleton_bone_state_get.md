---
title: "skeleton_bone_state_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Bones/skeleton_bone_state_get.htm"
converted: "2025-09-14T03:59:40.791Z"
---

# skeleton\_bone\_state\_get

Your skeletal animation is made up of a number of "bones", which you will have defined and given names to in your animation program, and this function can be used to get certain data for the named bone at any time. Note that this data refers to the **current** pose for the skeleton, depending on the animation set used, and the function requires a previously created [DS map](../../../../Data_Structures/DS_Maps/DS_Maps.md), which will then have the following keys and their equivalent values after calling the function:

-   **"x":** The local x position of the bone relative to the parent bone.
-   **"y":** The local y position of the bone relative to the parent bone.
-   **"angle":** The local rotation of the bone relative to the parent bone.
-   **"xscale":** The local horizontal scale of the bone, in reference to the parent bone.
-   **"yscale":** The local vertical scale of the bone, in reference to the parent bone.
-   **"worldScaleX":** The magnitude (always positive) of the world scale X (this is a _read only_ value).
-   **"worldScaleY":** The magnitude (always positive) of the world scale Y (this is a _read only_ value).
-   **"worldAngleX":** The world rotation for the X axis (this is a _read only_ value).
-   **"worldAngleY":** The world rotation for the Y axis (this is a _read only_ value).
-   **"worldX":** The world X position (this is a _read only_ value).
-   **"worldY":** The world Y position (this is a _read only_ value).
-   **"appliedAngle":** This is the local rotation used to pose the skeleton bones.
-   **"parent":** The name (a string) of the parent bone.

The map data returned is similar to that returned for the default pose when you use [skeleton\_bone\_data\_get()](skeleton_bone_state_get.md), only now you have the extra "world" keys. These refer to the position of the bone relative to the _root_ (origin) of the skeletal animation sprite, and the returned values do not take into consideration any scaling or rotation that has been done by setting the built-in sprite variables like image\_xscale or image\_angle. The world values are _read only_ and cannot be set.

This data is updated only after the skeletal sprite is drawn.

#### Syntax:

skeleton\_bone\_state\_get(bone, map);

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