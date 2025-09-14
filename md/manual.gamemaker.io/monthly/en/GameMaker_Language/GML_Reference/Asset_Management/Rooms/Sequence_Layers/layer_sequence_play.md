---
title: "layer_sequence_play"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_play.htm"
converted: "2025-09-14T03:59:36.874Z"
---

# layer\_sequence\_play

With this function you can start the playback of the given sequence. You supply the sequence element ID as returned by [layer\_sequence\_create](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) and the function will play the sequence, which you can then pause if required using the function [layer\_sequence\_pause](layer_sequence_pause.md).

**IMPORTANT** If your sequence has any instances in it, these instances shouldn't change their [image\_xscale](../../Sprites/Sprite_Instance_Variables/image_xscale.md)  / [image\_yscale](../../Sprites/Sprite_Instance_Variables/image_yscale.md) / [image\_angle](../../Sprites/Sprite_Instance_Variables/image_angle.md) / [x](../../Instances/Instance_Variables/x.md) / [y](../../Instances/Instance_Variables/y.md) variables as they will be overwritten when the sequence updates each step after starting to be played. You can check [in\_sequence](../../Sequences/in_sequence.md) and only update the properties of such an instance when this variable is false.

#### Syntax:

layer\_sequence\_play(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(ord("P")))
{
    global.Pause = !global.Pause;
    var a = layer\_get\_all\_elements(layer);
    for (var i = 0; i < array\_length(a); i++;)
    {
        if (layer\_get\_element\_type(a\[i\]) == layerelementtype\_sequence)
        {
            if (global.Pause)
            {
                layer\_sequence\_pause(a\[i\]);
            }
            else
            {
                layer\_sequence\_play(a\[i\]);
            }
        }
    }
}

The above code checks to see if the game has been paused or not when a key is pressed. If the game is paused, then it loops through all sequence elements on the current layer (the layer of the calling instance) and pauses their playback, and if the game is not paused, then the loop will start their playback again.