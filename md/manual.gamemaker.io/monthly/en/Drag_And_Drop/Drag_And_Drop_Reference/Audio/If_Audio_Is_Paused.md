---
title: "If Audio Is Paused"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/If_Audio_Is_Paused.htm"
converted: "2025-09-14T03:59:23.388Z"
---

# ![If Audio Is Paused Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_If_Audio_Is_Paused.png) If Audio Is Paused

This action can be used to check whether an instance of any sound resource is currently paused in your game. You give the sound resource to check for from the asset explorer and the function will return true if it is paused and false if it is not, although if you check the "not" flag, this is reversed and the function will return true if the sound is _not_ paused and false otherwise.

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![If Audio Is Paused drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_If_Drop_Paused.png)These actions will now be run if the "if" evaluates to true, while any actions dropped elsewhere will be performed after the "if" block.

#### Action Syntax:

![If Audio Is Paused Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_If_Audio_Is_Paused.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sound | The sound resource to check |

#### Example:

![If Audio Is Paused Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_If_Audio_Is_Paused.png)The above action block code checks to see if the given sound is currently paused and if it is, it resumes playing it.