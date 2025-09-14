---
title: "skeleton_animation_set_frame"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_set_frame.htm"
converted: "2025-09-14T03:59:40.541Z"
---

# skeleton\_animation\_set\_frame

This function will set the animation assigned to the given track to the frame you supply. The frame index should be an real value between 0 and the number of frames for the animation (which you can get using the function [skeleton\_animation\_get\_frames](skeleton_animation_get_frames.md)). If you supply a value outside of this range, the animation will be looped to make up the difference, for example if the animation has 5 frames and you set the frame to 8, the actual frame shown will be 3.

#### Syntax:

skeleton\_animation\_set\_frame(track, index);

| Argument | Type | Description |
| --- | --- | --- |
| track | Real | The animation track to set the frame of. |
| index | Real | The new index for the animation frame. |

#### Returns:

N/A

#### Example:

if (global.pause)
{
    skeleton\_animation\_set\_frame(0, -image\_speed);
}

The above code will set the frame index for the animation in track 0 to the negative image speed when the global "pause" variable is true (essentially pausing the animation).