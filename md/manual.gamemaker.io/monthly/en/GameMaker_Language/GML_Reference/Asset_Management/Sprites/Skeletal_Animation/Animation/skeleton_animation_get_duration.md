---
title: "skeleton_animation_get_duration"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_get_duration.htm"
converted: "2025-09-14T03:59:40.353Z"
---

# skeleton\_animation\_get\_duration

This function will return the time required for the given animation set to run before looping back to the beginning. The return value is in seconds.

#### Syntax:

skeleton\_animation\_get\_duration(animname);

| Argument | Type | Description |
| --- | --- | --- |
| animname | String | The name (a string) of the animation set to use. |

#### Returns:

[Real](../../../../../GML_Overview/Data_Types.md)

#### Example1:

time += delta\_time / 1000000;
var duration = skeleton\_animation\_get\_duration(skeleton\_animation\_get());
var frame = floor((image\_number \* (mTime / duration)) + 0.5) % image\_number;
image\_index = frame;
draw\_self();

The above code will set the image\_index to the correct value for the currently assigned skeletal animation sprite.

#### Example2:

time += delta\_time / 1000000;
var d = skeleton\_animation\_get\_duration("walk");
if time > d time -= d;
draw\_skeleton\_time(sprite\_index, "walk", "skin1", time, x, y, image\_xscale, image\_yscale, image\_angle, c\_white);

The above code will draw the given skeletal animation sprite using delta-time to set the frame being drawn.