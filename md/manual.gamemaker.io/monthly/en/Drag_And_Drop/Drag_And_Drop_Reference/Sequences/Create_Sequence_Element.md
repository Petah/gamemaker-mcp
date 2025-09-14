---
title: "Create Sequence"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Sequences/Create_Sequence_Element.htm"
converted: "2025-09-14T03:59:27.706Z"
---

# ![Create Sequence Element Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/i_sequence_create.png) Create Sequence

With this action you can create a sequence element of any sequence from the Asset Browser. You give the name of the sequence and an x/y position within the room where it is to be created as well as the layer that it is to be created on (this layer must be an **asset layer**). You can tick the "relative" flags to position the sequence relative to the instance running the action code blocks. Whenever you create a sequence in the game in this way, it is given a unique **element ID** value with which you can then identify the sequence in further actions, therefore this action permits you to define a "target" variable to hold this ID value (as shown in the example below). Note that the target can be flagged as a temporary (local) variable, which will be created for the action and can be used in all subsequent actions for the event the action is in.

#### Action Syntax:

![Create Sequence Element Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/a_sequence_create.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sequence | The name of the sequence to create an element of. |
| x | The x position in the room to create the sequence (can be relative to the calling instance). |
| y | The y position in the room to create the sequence (can be relative to the calling instance). |
| layer | The name (a string) of the asset layer to create the sequence on. |
| Target | The variable to target for the return value. |

#### Example:

![Create Sequence Element Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Sequences/e_sequence_create.png)The above action block code creates a new sequence and stores its unique element ID value in a variable. This variable is then used to pause the sequence using the [Pause Sequence](Pause_Sequence.md) action.