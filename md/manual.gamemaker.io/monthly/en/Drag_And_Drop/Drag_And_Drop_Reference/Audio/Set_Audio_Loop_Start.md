---
title: "Set Audio Loop Start"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/Set_Audio_Loop_Start.htm"
converted: "2025-09-14T03:59:23.527Z"
---

# ![Set Audio Loop Start Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_Set_Audio_Loop_Start.png) Set Audio Loop Start

This action is used to set the loop start point of a sound.

#### Action Syntax:

![Set Audio Loop Start](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_Set_Audio_Loop_Start.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sound | The Sound Asset or sound instance |
| Offset | The track offset (0.0 is the start of the audio) |

#### Example:

![Set Audio Loop Start Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Loop_Setters.png)The above action block code plays a sound looped upon first pressing the Space key (vk\_space) and turns off looping of the sound the second time the key is pressed. If the sound reaches the end of the track, another press of the Space key plays another instance of the snd\_Loop [Sound Asset](../../../The_Asset_Editors/Sounds.md) looped.

The first action block checks for a key press of the Space key. The next block checks if any instances of the sound asset snd\_Loop are playing. If not (indicated by the Not checkbox _checked_), the loop start and end position (Offset) are first set for the snd\_Loop asset. The loop start offset is set to 3 seconds, the end offset to 8 seconds. A new instance of the sound is then played looped (Loop checked) using the [Play Audio](Play_Audio.md) action and its ID stored in an _instance_ variable ins\_snd\_loop (Target) of the calling instance.

When Space is pressed again, the [If Audio Is Playing](If_Audio_Is_Playing.md) block returns true and the part under the [Else](../Common/Else.md) block is executed. [Set Audio Loop State](Set_Audio_Loop_State.md) turns off looping for the playing sound ins\_snd\_loop so it will continue playing to the end when it reaches the loop end position.