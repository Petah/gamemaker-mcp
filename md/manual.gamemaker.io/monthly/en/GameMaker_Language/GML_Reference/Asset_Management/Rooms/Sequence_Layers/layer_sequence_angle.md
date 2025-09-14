---
title: "layer_sequence_angle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_angle.htm"
converted: "2025-09-14T03:59:36.575Z"
---

# layer\_sequence\_angle

With this function you can set the angle of rotation for the given sequence element. You supply the sequence element ID as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) along with the new angle to set and the sequence will be rotated about its origin to the new position. Angles in GameMaker are calculated with 0º to the right, and go anti-clockwise - so 90º is up, 180º is left and 270º is down - and the default angle for a sequence would be 0º.

**IMPORTANT** If your sequence has any instances in it, these instances shouldn't change their [image\_xscale](../../Sprites/Sprite_Instance_Variables/image_xscale.md)  / [image\_yscale](../../Sprites/Sprite_Instance_Variables/image_yscale.md) / [image\_angle](../../Sprites/Sprite_Instance_Variables/image_angle.md) / [x](../../Instances/Instance_Variables/x.md) / [y](../../Instances/Instance_Variables/y.md) variables as they will be overwritten when the sequence updates each step after starting to be played. You can check [in\_sequence](../../Sequences/in_sequence.md) and only update the properties of such an instance when this variable is false.

#### Syntax:

layer\_sequence\_angle(sequence\_element\_id, angle)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |
| angle | Real | The new angle to rotate the sequence element to |

#### Returns:

N/A

#### Example:

if (current\_angle < 90)
{
    current\_angle += 1;
    layer\_sequence\_angle(my\_seq, current\_angle);
}

The above code checks the value held in the current\_angle variable, and if it is less than 90 then it adds to it then uses the value to set the angle of the sequence element referenced in the variable my\_seq.