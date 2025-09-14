---
title: "skeleton_animation_mix"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_mix.htm"
converted: "2025-09-14T03:59:40.491Z"
---

# skeleton\_animation\_mix

You can switch animation sets easily using the [skeleton\_animation\_set](../../../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_set.md) function, but this may cause a skip or stutter as one animation is swapped for another. To prevent this, you can set the mix value between two animation sets and the sprite will interpolate between them. Normally you would want to do this in the Create Event of the instance with the skeletal animation as it only needs to be set once, and GameMaker will interpolate all further changes to the sprite using the animation sets in that instance.

NOTE Spine 4.0 changes how rotational animation works, as it no longer interpolates rotation using the shortest route possible, but uses the absolute values in your keyframes for interpolation. This may cause unexpected behaviour if you are upgrading your Spine animation from an older version, and changes within your Spine project may be required for rotations to behave as required.

#### Syntax:

skeleton\_animation\_mix(animfrom, animto, duration);

| Argument | Type | Description |
| --- | --- | --- |
| animfrom | String | The name (a string) of the first animation set to interpolate from. |
| animto | String | The name (a string) of the second animation set to interpolate to. |
| duration | Real | The duration of the interpolation (in seconds) |

#### Returns:

N/A

#### Example:

skeleton\_animation\_set("walk");
skeleton\_animation\_mix("walk", "jump", 0.2);
skeleton\_animation\_mix("jump", "walk", 0.4);

The above code would go in the Create Event of an instance with a skeletal animation sprite and sets the animation mix duration for interpolating between the two animations sets "walk" and "jump".