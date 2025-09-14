---
title: "Get Audio Loop End"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/Get_Audio_Loop_End.htm"
converted: "2025-09-14T03:59:23.289Z"
---

# ![Get Audio Loop End Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_Get_Audio_Loop_End.png) Get Audio Loop End

This action gets the loop end position of the given audio and stores it in a variable.

#### Action Syntax:

![Get Audio Loop End](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_Get_Audio_Loop_End.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sound | The sound asset or playing sound |
| Target | The name of the variable in which to store the loop end |
| Temp | Whether the target variable should be a temporary variable |

#### Example:

![Set Audio Pitch Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Loop_Getters.png)The above action block code first checks if the Space key (vk\_space) is pressed. If it is, and no instance of the existing sound asset snd\_Loop is playing yet, it is played using the [Play Audio](Play_Audio.md) action. It is played looped (Loop checked) and the sound instance's ID is stored in an instance variable ins\_snd\_loop.

Next all properties of the playing sound related to audio looping are stored in instance variables: looping, loop\_start and loop\_end.

Finally the [Show Debug Message](../Miscellaneous/Show_Debug_Message.md) action is used to output the values of each of these variables. If loop start and end of the sound asset haven't been changed, it will output:

1
0
0