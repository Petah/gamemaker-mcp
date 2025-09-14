---
title: "Stop All Audio"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/Stop_All_Audio.htm"
converted: "2025-09-14T03:59:23.633Z"
---

# ![Stop All Audio Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_Stop_All_Audio.png) Stop All Audio

This action can be used to stop _all_ audio that is currently playing (note that even if audio is flagged as paused it will be stopped with this function and you cannot resume it again later).

#### Action Syntax:

![Stop All Audio Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_Stop_All_Audio.png)

#### Example:

![Stop All Audio Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Stop_All_Audio.png)The above action block code checks for a mouse button press and if one is detected it then checks a global variable to see if it is not true. If it is not true, then a sound is played and the global variable set to true, otherwise all sound is stopped and the global variable is set to false.