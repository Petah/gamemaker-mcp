---
title: "Pause Time Source"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Time_Sources/Pause_Time_Source.htm"
converted: "2025-09-14T03:59:28.423Z"
---

# ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Icons/Pause_Time_Source.png) Pause Time Source

This action pauses the given Time Source.

You can resume it later using [Start Time Source](Start_Time_Source.md).

#### Action Syntax:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Syntax/Pause_Time_Source.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Time Source | The Time Source to pause |

#### Example:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Examples/Eg_Pause_TS.png)
This code block would ideally run in a Key Press event.

It checks if the state of a Time Source is "active", and in that case, it pauses that Time Source.

However, if the state is "paused", it resumes the Time Source.