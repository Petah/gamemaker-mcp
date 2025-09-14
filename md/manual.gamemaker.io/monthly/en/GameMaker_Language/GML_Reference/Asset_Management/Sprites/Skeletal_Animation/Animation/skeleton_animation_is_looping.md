---
title: "skeleton_animation_is_looping"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_is_looping.htm"
converted: "2025-09-14T03:59:40.461Z"
---

# skeleton\_animation\_is\_looping

With this function you can check if the current animation on the given track is set to loop.

#### Syntax:

skeleton\_animation\_is\_looping(track);

| Argument | Type | Description |
| --- | --- | --- |
| track | Real | The index of the animation track |

#### Returns:

[Boolean](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if skeleton\_animation\_is\_looping(0)
{
    show\_debug\_message("Track 0 of the skeleton animation is looping");
}

The above code will check if the animation on track 0 is set to loop. If that is the case it shows a debug message.