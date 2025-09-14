---
title: "If Sequence Exists"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Sequences/If_Sequence_Exists.htm"
converted: "2025-09-14T03:59:27.772Z"
---

# ![If Sequence Exists Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/i_sequence_exists.png) If Sequence Exists

This action can be used to check if the given sequence element exists in the game room. You give the element ID, as returned by the action [Create Sequence](Create_Sequence_Element.md), and if the sequence element exists in the room then the action will return true otherwise it will return false.

If you flag the "**Not**" argument, then the action will check to see if _no_ such sequence element exists and if none are found it will return true.

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![If Sequence Exists dropping actions example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/a_sequence_exists_drop.png)These actions will now be run if the "if" evaluates to true, while any actions dropped elsewhere will be performed after the "if" block.

#### Action Syntax:

![If Sequence Exists Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/a_sequence_exists.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sequence | The element ID of the sequence element to check. |

#### Example:

![If Sequence Exists Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/e_sequence_exists.png)The above action block code checks for to see if the sequence element stored in the variable "my\_seq" exists and if it does, it then destroys it.