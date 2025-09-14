---
title: "skeleton_get_minmax"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Drawing_And_Miscellaneous/skeleton_get_minmax.htm"
converted: "2025-09-14T03:59:40.999Z"
---

# skeleton\_get\_minmax

This function will return an array with the total bounding box value for all the individual bounding boxes assigned to a skeleton animation sprite. The returned array will have 4 elements:

-   \[0\] - the minimum x position for all bounding boxes
-   \[1\] - the minimum y position for all bounding boxes
-   \[2\] - the maximum x position for all bounding boxes
-   \[3\] - the maximum y position for all bounding boxes

NOTE The bounding box of a Spine sprite is set up in Spine itself, not in GameMaker.

#### Syntax:

skeleton\_get\_minmax();

#### Returns:

[Array](../../../../../../../../../GameMaker_Language/GML_Overview/Arrays.md) (4 elements: xMin, yMin, xMax, yMax)

#### Example:

var frame = skeleton\_animation\_get\_frame(0);
if (frame > 0 && frame < 2)
{
    var box = skeleton\_get\_minmax();
    var ww = (box\[2\] - box\[0\]) / 2;
    var hh = (box\[3\] - box\[1\]) / 2;
    part\_particles\_create(global.p\_sys, box\[0\] + ww, box\[1\] + hh, global.Stars, 10);
}

The above code will check the current frame of the animation assigned to track 0 and then burst some particles from a point in the middle of the total bounding box for the sprite.