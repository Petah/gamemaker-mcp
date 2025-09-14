---
title: "Destroy Sequence"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Sequences/Destroy_Sequence_Element.htm"
converted: "2025-09-14T03:59:27.718Z"
---

# ![Destroy Sequence Element Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/i_sequence_destroy.png) Destroy Sequence

You can call this action whenever you wish to "destroy" a previously created sequence element. You give the element ID, as returned by the action [Create Sequence Element](Create_Sequence_Element.md), and this action will destroy it, removing it from the room.

#### Action Syntax:

![Destroy Sequence Element Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/a_sequence_destroy.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Variable | The ID of the sequence element to destroy. |

#### Example:

![Destroy Sequence Element Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/e_sequence_exists.png)The above action block code checks for to see if the sequence element stored in the variable "my\_seq" exists and if it does, it then destroys it.