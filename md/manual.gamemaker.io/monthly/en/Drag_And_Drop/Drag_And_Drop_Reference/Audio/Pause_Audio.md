---
title: "Pause Audio"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/Pause_Audio.htm"
converted: "2025-09-14T03:59:23.431Z"
---

# ![Pause Audio Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_Pause_Audio.png) Pause Audio

This action can be used to pause the chosen sound if it is currently playing. Note if you have played multiple instances of the same sound, _all_ of them will be paused, and this does not pause any sounds played _after_ the action has been called. You can start a paused sound playing again using the action [Resume Audio](Resume_Audio.md).

#### Action Syntax:

![Pause Audio Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_Pause_Audio.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sound | The sound resource to pause |

#### Example:

![Pause Audio Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Pause_Audio.png)The above action block code will check a global variable and if it evaluates to true then the given sound is paused, otherwise it is resumed.