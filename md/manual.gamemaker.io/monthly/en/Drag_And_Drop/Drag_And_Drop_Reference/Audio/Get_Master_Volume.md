---
title: "Get Master Volume"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/Get_Master_Volume.htm"
converted: "2025-09-14T03:59:23.371Z"
---

# ![Get Master Volume Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_Get_Master_Volume.png) Get Master Volume

This action returns the master volume for the sound system. You give a target variable to return the volume value to (you can flag this as being a temporary local variable). The returned value will be between 0 and 1, where 0 is silent and 1 is full volume.

#### Action Syntax:

![Get Master Volume Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_Get_Master_Volume.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The target variable to store the returned volume |

#### Example:

![Get Master Volume Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Set_Master_Volume.png)The above action block code checks a global variable to see if it is true or false. If it is true then the master volume for the sound system is retrieved and stored in a temporary local variable. The value is then checked to see if it is not equal to 0.5, and if it is not, then the master volume of the sound system is set to 0.5. If the global variable evaluates to false, then the master volume is set to 1.