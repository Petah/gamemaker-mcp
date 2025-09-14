---
title: "layer_sequence_get_angle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_get_angle.htm"
converted: "2025-09-14T03:59:36.634Z"
---

# layer\_sequence\_get\_angle

With this function you supply the sequence element ID - as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) - and it will return the current angle of the sequence element in the game room. Note that angles are returned in degrees, and 0º is to the right, 90º is up, 180º is to the left and 270º is down.

#### Syntax:

layer\_sequence\_get\_angle(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_ang = layer\_sequence\_get\_angle(title\_sequence)
if (\_ang > 0)
{
    \_ang -= 1;
    layer\_sequence\_angle(title\_sequence, \_ang);
}

The above code retrieves the current angle of the sequence element with the ID stored in the variable "title\_sequence", and if it's not 0, then 1 is subtracted form the current angle.