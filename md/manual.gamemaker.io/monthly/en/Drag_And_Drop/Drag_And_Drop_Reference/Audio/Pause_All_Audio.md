---
title: "Pause All Audio"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/Pause_All_Audio.htm"
converted: "2025-09-14T03:59:23.418Z"
---

# ![Pause All Audio Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_Pause_All_Audio.png) Pause All Audio

This action can be used to pause all sounds currently playing, but this will not pause any sounds played _after_ the action has been called. You can start them playing again using the action [Resume All Audio](Resume_All_Audio.md).

#### Action Syntax:

![Pause All Audio Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_Pause_All_Audio.png)

#### Example:

![Pause All Audio Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Pause_All_Audio.png)The above action block code will check a global variable and if it evaluates to true then all sound is paused, otherwise it is all resumed.