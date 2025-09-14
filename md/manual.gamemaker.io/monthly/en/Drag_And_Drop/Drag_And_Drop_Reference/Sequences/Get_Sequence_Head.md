---
title: "Get Sequence Head"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Sequences/Get_Sequence_Head.htm"
converted: "2025-09-14T03:59:27.732Z"
---

# ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/i_sequence_get_head.png) Get Sequence Head

With this action you can retrieve the current playhead position of the given sequence element in the room. You supply the sequence element ID (as returned by the action [Create Sequence](Create_Sequence_Element.md)), and this action will return the current frame that the sequence playhead is on, in the target variable. For information on the playhead, see [Using The Dope Sheet](../../../The_Asset_Editors/Sequence_Properties/Using_The_Dope_Sheet.md).

Note that the target variable can be flagged as temporary (local), which will be created for the action and can be used in all subsequent actions for the event the action is in.

#### Action Syntax:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/a_sequence_get_head.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Variable | The ID of the sequence element to get the head position of. |
| Target | The target variable to hold the head position. |

#### Example:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/e_sequence_head.png)The above action block retrieves the current head position of the sequence element ID stored in the variable "seq\_id". That value is then used to set the head position of the same sequence element, advancing it by 4 frames.