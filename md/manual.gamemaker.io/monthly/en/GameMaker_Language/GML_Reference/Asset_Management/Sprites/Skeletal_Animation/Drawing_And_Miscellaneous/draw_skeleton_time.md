---
title: "draw_skeleton_time"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Drawing_And_Miscellaneous/draw_skeleton_time.htm"
converted: "2025-09-14T03:59:40.952Z"
---

# draw\_skeleton\_time

This function will draw the given animation using the given skin at a specific time in the animation. The time value should be between 0 (the beginning) and the end duration of the animation, which you can find using the function [skeleton\_animation\_get\_duration()](../Animation/skeleton_animation_get_duration.md). You _can_ set the time value to values higher than the total duration of the animation and the animation will loop back to the beginning, but you run the risk of losing floating point accuracy as the accumulated time gets larger.

#### Syntax:

draw\_skeleton\_time(sprite, animname, skinname, time, x, y, xscale, yscale, rot, colour)

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The index of the sprite to draw. |
| animname | String | The name of the animation to get the frame from (a string). |
| skinname | String | The name of the skin to use for drawing (a string). |
| time | Real | The time-frame to draw the animation at (from 0 to the end duration, in seconds). |
| x | Real | The x coordinate of where to draw the sprite. |
| y | Real | The y coordinate of where to draw the sprite. |
| xscale | Real | The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc... |
| yscale | Real | The vertical scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc... |
| rot | Real | The rotation of the sprite. 0=normal, 90=turned 90 degrees counter-clockwise etc. |
| colour | Colour | The colour with which to blend the sprite. |

#### Returns:

N/A

#### Example:

var time += delta\_time / 1000000;
var d = skeleton\_animation\_get\_duration("walk");
if time > d time -= d;
draw\_skeleton\_time(sprite\_index, "walk", "skin1", time, x, y, image\_xscale, image\_yscale, image\_angle, c\_white);

The above code will draw the given skeletal animation sprite using delta-time to set the frame being drawn.