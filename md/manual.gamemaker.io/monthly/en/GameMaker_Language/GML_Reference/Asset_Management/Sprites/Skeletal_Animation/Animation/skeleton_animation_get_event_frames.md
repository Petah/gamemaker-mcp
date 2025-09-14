---
title: "skeleton_animation_get_event_frames"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_get_event_frames.htm"
converted: "2025-09-14T03:59:40.370Z"
---

# skeleton\_animation\_get\_event\_frames

This function can be used to retrieve all the frames for the given event, in the given animation. You supply the skeleton animation name (as a string, as defined in the program used to make the animation, or as returned by using the function [skeleton\_animation\_get()](skeleton_animation_get.md)) and an event name. The function returns an array with the frames for that event.

If the specified event name does not exist, the function will return an array with **\-1** as its first (and only) element.

#### Syntax:

skeleton\_animation\_get\_event\_frames(anim\_name, event\_name);

| Argument | Type | Description |
| --- | --- | --- |
| anim_name | String | The animation name to get the frames of. |
| event_name | String | The event name to get the frames for. |

#### Returns:

[Array](../../../../../../../../../GameMaker_Language/GML_Overview/Arrays.md) of [Real](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)s

#### Example:

var \_frames = skeleton\_animation\_get\_event\_frames(skeleton\_animation\_get(), "Footstep");

if (\_frames\[0\] != -1)
{
    var \_count = array\_length(\_frames);
    var \_current\_frame = skeleton\_animation\_get\_frame(0);

    for (var i = 0; i < \_count; i ++)
    {
        if (\_frames\[i\] == \_current\_frame)
        {
            audio\_play\_sound(snd\_footstep, 1, false);
            break;
        }
    }
}

The above code gets the frames for the "Footstep" event. If it returned an array with the valid frames, it loops through it, and checks if the current frame is equal to any of the frames in the array. In that case it plays the footstep sound effect and breaks (stops) the loop.