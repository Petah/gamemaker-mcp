---
title: "layer_sequence_xscale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_xscale.htm"
converted: "2025-09-14T03:59:36.918Z"
---

# layer\_sequence\_xscale

With this function you can set the X scale for the given sequence element. You supply the sequence element ID as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) along with the new scale to set on the X axis and the sequence will be scaled by this amount. A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the width of the sequence), larger values will scale up and negative values will mirror the sequence about its origin _and_ scale it unless the value used is exactly -1 (in which case the sequence is just mirrored about its origin with no scaling).

It is very important to note that applying _uneven_ scaling (e.g.: scaling the X axis by 3 and the Y axis by 2) to sequence elements that contain any instance which uses _rotation_, **may cause issues with the instance drawing, collisions, culling, and many other things**. Basically, if your sequence relies on _any_ instance properties then we do not recommend that you combine uneven scaling along with instance rotation.

**IMPORTANT** If your sequence has any instances in it, these instances shouldn't change their [image\_xscale](../../Sprites/Sprite_Instance_Variables/image_xscale.md)  / [image\_yscale](../../Sprites/Sprite_Instance_Variables/image_yscale.md) / [image\_angle](../../Sprites/Sprite_Instance_Variables/image_angle.md) / [x](../../Instances/Instance_Variables/x.md) / [y](../../Instances/Instance_Variables/y.md) variables as they will be overwritten when the sequence updates each step after starting to be played. You can check [in\_sequence](../../Sequences/in_sequence.md) and only update the properties of such an instance when this variable is false.

#### Syntax:

layer\_sequence\_xscale(sequence\_element\_id, xscale)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |
| xscale | Real | The new X axis scale value to apply to the sequence element |

#### Returns:

N/A

#### Example:

if (seq\_scale < 2)
{
    seq\_scale += 0.01;
    layer\_sequence\_xscale(my\_seq, seq\_scale);
    layer\_sequence\_yscale(my\_seq, seq\_scale);
}

The above code checks the value held in the seq\_scale variable, and if it is less than 2 then it adds to it then uses the value to set the X and Y scale of the sequence element referenced in the variable my\_seq.