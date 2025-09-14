---
title: "If Audio Is Playing"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/If_Audio_Is_Playing.htm"
converted: "2025-09-14T03:59:23.404Z"
---

# ![If Audio Is Playing Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_If_Audio_Is_Playing.png) If Audio Is Playing

This action can be used to check whether an instance of any sound resource is currently playing in your game. You give the sound resource to check for from the asset explorer and the function will return true if it is playing and false if it is not, although if you check the "not" flag, this is reversed and the function will return true if the sound is _not_ playing and false otherwise.

Note that to add actions into the "if" block, they should be dropped to the side of the action, as shown in the image below:

![If Audio Is Playing drop actions](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_If_Drop.png)These actions will now be run if the "if" evaluates to true, while any actions dropped elsewhere will be performed after the "if" block.

#### Action Syntax:

![If Audio Is Playing Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_If_Audio_Is_Playing.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sound | The sound resource to check |

#### Example:

![If Audio Is Playing Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_If_Audio_Is_Playing.png)The above action block code checks to see if the given sound is currently being played and if it is, it stops it.