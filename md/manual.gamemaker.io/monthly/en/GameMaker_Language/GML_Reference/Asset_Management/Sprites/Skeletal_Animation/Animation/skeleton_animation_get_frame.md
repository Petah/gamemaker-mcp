---
title: "skeleton_animation_get_frame"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_get_frame.htm"
converted: "2025-09-14T03:59:40.400Z"
---

# skeleton\_animation\_get\_frame

This function will return the frame number of the animation on the specified animation track. The function will return -1 if no animation is assigned to the specific track given.

#### Syntax:

skeleton\_animation\_get\_frame(track);

| Argument | Type | Description |
| --- | --- | --- |
| track | Real | The animation track to get the frame of. |

#### Returns:

[Real](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

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