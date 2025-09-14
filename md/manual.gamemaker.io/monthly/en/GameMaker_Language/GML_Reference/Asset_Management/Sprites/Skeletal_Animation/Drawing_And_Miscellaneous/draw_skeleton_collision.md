---
title: "draw_skeleton_collision"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Drawing_And_Miscellaneous/draw_skeleton_collision.htm"
converted: "2025-09-14T03:59:40.916Z"
---

# draw\_skeleton\_collision

This function will draw the collision masks associated with the given skeletal animation. You supply the base sprite, the animation set to use and the frame to get the information from, and you can also set the transform properties to suit.

NOTE The bounding box of a Spine sprite is set up in Spine itself, not in GameMaker.

#### Syntax:

draw\_skeleton\_collision(sprite, animname, frame, x, y, xscale, yscale, rot, colour)

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The index of the sprite to draw. |
| animname | String | The name of the animation to get the frame from (a string). |
| frame | Real | The animation frame to draw (from 0 to image_number - 1). |
| x | Real | The x coordinate of where to draw the sprite. |
| y | Real | The y coordinate of where to draw the sprite. |
| xscale | Real | The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc... |
| yscale | Real | The vertical scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc... |
| rot | Real | The rotation of the sprite. 0=normal, 90=turned 90 degrees counter-clockwise etc. |
| colour | Colour | The colour with which to blend the sprite. |

#### Returns:

N/A

#### Example:

draw\_skeleton\_collision(sprite\_index, "jump", image\_index, x, y, image\_xscale, image\_yscale, image\_angle, c\_white);

The above code will draw the collision mask data for the current sprite, using the current transforms, for the animation set "jump".