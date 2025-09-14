---
title: "Get Sequence Position"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Sequences/Get_Sequence_Position.htm"
converted: "2025-09-14T03:59:27.759Z"
---

# ![Get Sequence Position Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/i_sequence_position_get.png) Get Sequence Position

With this action you can retrieve the current position for the given sequence element in the room. You supply the sequence element ID (as returned by the action [Create Sequence](Create_Sequence_Element.md)), and this action will return its X and Y position in target variables. Note that the target variables can be flagged as temporary (local) variables, which will be created for the action and can be used in all subsequent actions for the event the action is in.

#### Action Syntax:

![Get Sequence Position Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/a_sequence_position_get.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Variable | The ID of the sequence element to get the position of. |
| Target X | The target variable to hold the x position. |
| Target Y | The target variable to hold the y position. |

#### Example:

![Get Sequence Position Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/e_sequence_position_get.png)The above action block code retrieves the current position of the sequence element ID stored in the variable "my\_seq". These values are then used to set the position of the sequence, moving it 10 pixels to the right.