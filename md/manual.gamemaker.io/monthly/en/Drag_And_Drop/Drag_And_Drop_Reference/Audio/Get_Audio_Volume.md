---
title: "Get Audio Volume"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/Get_Audio_Volume.htm"
converted: "2025-09-14T03:59:23.355Z"
---

# ![Get Audio Volume Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_Get_Audio_Volume.png) Get Audio Volume

This action returns the volume of the given sound. You pick the sound from the asset explorer and give a target variable to return the volume value to (you can flag this as being a temporary local variable). The returned value will be between 0 and 1, where 0 is silent and 1 is full volume.

#### Action Syntax:

![Get Audio Volume Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_Get_Audio_Volume.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sound | The sound resource to get the volume of |
| Target | The target variable to store the returned volume |

#### Example:

![Get Audio Volume Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Get_Audio_Volume.png)The above action block code checks a global variable to see if it is true or false. If it is true then the volume of the given sound is retrieved and stored in a temporary local variable. The value is then checked to see if it is not equal to 0.5, and if it is not, then the volume of the sound is set to 0.5. If the global variable evaluates to false, then the sound has its volume set to 1.