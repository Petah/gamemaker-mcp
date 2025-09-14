---
title: "layer_sequence_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_y.htm"
converted: "2025-09-14T03:59:36.948Z"
---

# layer\_sequence\_y

With this function you can set the position along the Y (vertical) axis of the room for the given sequence element. You supply the sequence element ID as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) along with the Y position to set and the sequence will be moved to the new position.

#### Syntax:

layer\_sequence\_y(sequence\_element\_id, pos\_y)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |
| pos_y | Real | The Y position to move the sequence element to |

#### Returns:

N/A

#### Example:

if (layer\_sequence\_exists(my\_seq))
{
    layer\_sequence\_x(my\_seq, x);
    layer\_sequence\_y(my\_seq, y);
}

The above code checks to see if the sequence element referenced in the variable "my\_seq" exists, and if it does it sets the x/y position to the that of the instance running the code.