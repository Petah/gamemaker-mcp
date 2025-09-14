---
title: "skeleton_animation_set_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_set_position.htm"
converted: "2025-09-14T03:59:40.555Z"
---

# skeleton\_animation\_set\_position

This function will set the animation assigned to the given track to the position you supply. The position should be a real value between 0 and 1. If you supply a value outside of this range, then the track position will be set to the fractional part of that value. Suppose you use a value of 0.4, a value of 1.4, a value of 2.4, ... These will all set the position to 0.4.

#### Syntax:

skeleton\_animation\_set\_position(track, position);

| Argument | Type | Description |
| --- | --- | --- |
| track | Real | The animation track to set the frame of. |
| position | Real | The new position for the animation frame. |

#### Returns:

N/A

#### Example:

skeleton\_animation\_set\_position(1, 0.25);

The above code will set the position for track 1 of the skeleton animation to 0.25 or, put differently, at 25% from the start of the animation.