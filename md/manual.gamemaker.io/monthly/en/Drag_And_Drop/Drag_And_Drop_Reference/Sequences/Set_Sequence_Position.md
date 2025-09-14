---
title: "Set Sequence Position "
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Sequences/Set_Sequence_Position.htm"
converted: "2025-09-14T03:59:27.849Z"
---

# ![Set Sequence Position Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/i_sequence_position.png) Set Sequence Position

With this action you can set the position for the given sequence element in the room. You supply the sequence element ID (as returned by the action [Create Sequence](Create_Sequence_Element.md)), and then the new X and Y position. If you tick the "relative" checkbox, then the values given for X and Y will be added to the current sequence position, otherwise they will be an absolute position.

#### Action Syntax:

![Set Sequence Position Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/a_sequence_position.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Variable | The ID of the sequence element to set the position of. |
| X | The new x position in the room for the sequence. |
| Y | The new y position in the room for the sequence. |

#### Example:

![Set Sequence Position Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/e_sequence_position_get.png)The above action block code retrieves the current position of the sequence element ID stored in the variable "my\_seq". These values are then used to set the position of the sequence, moving it 10 pixels to the right.