---
title: "Resume Audio"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/Resume_Audio.htm"
converted: "2025-09-14T03:59:23.487Z"
---

# ![Resume Audio Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_Resume_Audio.png) Resume Audio

This action can be used to resume a previously paused sound. This can be used on any sound that has been paused using [Pause Audio](Pause_Audio.md) or [Pause All Audio](Pause_All_Audio.md), and will have no effect on those sounds that have not been paused previously.

#### Action Syntax:

![Resume Audio Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_Resume_Audio.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sound | The sound resource to resume playing |

#### Example:

![Resume Audio Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Pause_Audio.png)The above action block code will check a global variable and if it evaluates to true then the given sound is paused, otherwise it is resumed.