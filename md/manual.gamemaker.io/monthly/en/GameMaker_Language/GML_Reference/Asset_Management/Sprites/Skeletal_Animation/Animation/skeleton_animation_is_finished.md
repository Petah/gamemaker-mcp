---
title: "skeleton_animation_is_finished"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_is_finished.htm"
converted: "2025-09-14T03:59:40.446Z"
---

# skeleton\_animation\_is\_finished

With this function you can check if the current skeletal animation has finished playing on the given track.

NOTE This function will always return false if the animation is set to loop ([skeleton\_animation\_is\_looping](skeleton_animation_is_looping.md)), as an animation cannot have finished if it is still looping.

#### Syntax:

skeleton\_animation\_is\_finished(track);

| Argument | Data Type | Description |
| --- | --- | --- |
| track | Real | The index of the animation track |

#### Returns:

[Boolean](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_finished = skeleton\_animation\_is\_finished(1);
if (\_finished)
{
    show\_debug\_message("The animation has finished playing");
}

The above code first checks if the animation on track 1 has finished playing and stores the result in a local variable \_finished. It then shows a debug message in case the animation did finish playing.