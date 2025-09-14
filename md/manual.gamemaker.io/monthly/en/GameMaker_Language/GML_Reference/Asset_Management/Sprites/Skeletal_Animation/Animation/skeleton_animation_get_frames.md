---
title: "skeleton_animation_get_frames"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_get_frames.htm"
converted: "2025-09-14T03:59:40.414Z"
---

# skeleton\_animation\_get\_frames

This function can be used to retrieve the number of frames that any given skeleton animation has. You supply the skeleton animation name (as a string, as defined in the program used to make the animation, or as returned by using the function [skeleton\_animation\_get()](skeleton_animation_get.md)) and the function returns the frames that it has as an integer value. The function will return 0 if the specified animation does not exist.

#### Syntax:

skeleton\_animation\_get\_frames(anim\_name);

| Argument | Type | Description |
| --- | --- | --- |
| anim_name | String | The animation name to get the frames of. |

#### Returns:

[Real](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var num = skeleton\_animation\_get\_frames(skeleton\_animation\_get());
image\_index = num -1;
image\_speed = 0;

The above code will get the number of frames in the animation and then set the sprite to the last frame and stop animating.