---
title: "skeleton_animation_set_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_set_ext.htm"
converted: "2025-09-14T03:59:40.524Z"
---

# skeleton\_animation\_set\_ext

When you set an animation set for your skeletal animation sprite, it is assigned _track 0_ internally. However, you can assign further sets to further tracks (1 and above) and in this way have your sprite play two (or more) animations at the same time. Note that the sprite should have been designed in your animation program with this in mind, such that the "base" animation in track 0 only has keyframes for certain bones, while the next tracks have keyframes for the others. For example, if you have a "walk" animation and its keyframes only affect the legs of the sprite, you can then have a set of head animations and arm animations which you can set in tracks 1 and 2 respectively, permitting you to have a base movement and adapt on it in real-time while the game is being played.
The animation plays looped, which is the default.

#### Syntax:

skeleton\_animation\_set\_ext(animname, track, \[loop\]);

| Argument | Type | Description |
| --- | --- | --- |
| animname | String | The name (a string) of the animation set to use. |
| track | Real | The track for the animation set to use. |
| loop | Boolean | OPTIONAL Whether the animation should loop or not (default is true) |

#### Returns:

N/A

#### Example:

if (mouse\_check\_button(mb\_left))
{
    skeleton\_animation\_set\_ext("bodyfight", 1);
}
else
{
    skeleton\_animation\_set\_ext("bodywalk", 1);
}

The above code will change the animation set being used by track 1 to the "bodyfight" set or the "bodywalk" set when the left mouse button is pressed.