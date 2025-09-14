---
title: "Get Audio Length"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/Get_Audio_Length.htm"
converted: "2025-09-14T03:59:23.267Z"
---

# ![Get Audio Length Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_Get_Audio_Length.png) Get Audio Length

This action can be used to retrieve the length of a sound in your game. You supply the sound resource to get the length of and a target variable to return the value too (or you can flag the target as a temp variable to have the action create the variable for use until the end of the event or script). The length will be returned to the target variable (which can be made temporary) in seconds and can be a decimal value.

#### Action Syntax:

![Get Audio Length Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_Get_Audio_Length.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sound | The sound resource to get the length of |
| Target | The target variable to store the return value |

#### Example:

![Get Audio Length Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Get_Audio_Length.png)The above action block code gets the playing length of the given sound resource and stores it in a temporary local variable. This is then used to generate a random value between 0 and the length of the sound, which is then stored in a different temporary local variable. This new random value is then used to set the start position for the sound and the sound is then played.