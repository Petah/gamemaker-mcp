---
title: "skeleton_animation_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_set.htm"
converted: "2025-09-14T03:59:40.508Z"
---

# skeleton\_animation\_set

Once you have assigned a skeletal animation sprite to your instance, you can then define which _animation set_ it should use at any given time with this function. When you created your sprite (in Spine) you will have defined multiple animations sets for different states and named each of them appropriately. These names are what you will use to tell GameMaker which animation set to use at any time in your game. For example, if your sprite is for a platform game, then you may have a "jump" set, a "run" set and an "idle" set all contained within the one sprite and you can switch between them in your game using this function.
The animation plays looped, which is the default.

Note that setting a new animation in this way will reset the [image\_index](../../Sprite_Instance_Variables/image_index.md) to 0, starting the new animation set from the beginning of its animation loop. If this is _not_ the desired behaviour, then you can set a "mix" value using [skeleton\_animation\_mix()](skeleton_animation_mix.md) and when you set a new animation it will be smoothly interpolated with the previous set. You should also make sure to have a keyframe at the beginning of every animation to prevent data from being held-over from previous animations, unless you plan on using separate animation tracks.

#### Syntax:

skeleton\_animation\_set(animname, \[loop\]);

| Argument | Type | Description |
| --- | --- | --- |
| animname | String | The name (a string) of the animation set to use. |
| loop | Boolean | OPTIONAL Whether the animation should loop or not (default is true) |

#### Returns:

N/A

#### Example:

if keyboard\_check\_pressed(vk\_space)
{
    if skeleton\_animation\_get() != "jump"
    {
        skeleton\_animation\_set("jump");
    }
}

The above code will change the animation set being used to the "jump" set when the space key is pressed, but only if the current set being used is not already "jump".