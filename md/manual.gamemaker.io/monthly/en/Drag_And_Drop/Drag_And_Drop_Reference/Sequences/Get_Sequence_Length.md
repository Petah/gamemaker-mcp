---
title: "Get Sequence Length"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Sequences/Get_Sequence_Length.htm"
converted: "2025-09-14T03:59:27.746Z"
---

# ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/i_sequence_get_length.png) Get Sequence Length

With this action you can retrieve the length (in frames) of the given sequence element in the room. You supply the sequence element ID (as returned by the action [Create Sequence](Create_Sequence_Element.md)), and this action will return its length in the target variable. This will be the number of frames that the Sequence runs for.

Note that the target variable can be flagged as temporary (local), which will be created for the action and can be used in all subsequent actions for the event the action is in.

#### Action Syntax:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/a_sequence_get_length.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Variable | The ID of the sequence element to get the length of. |
| Target | The target variable to hold the length. |

#### Example:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/e_sequence_length.png)

The above action block retrieves the length of the sequence element ID stored in the variable "seq\_id". That value is then used to set the head position of the same sequence element to 10 frames before its end.