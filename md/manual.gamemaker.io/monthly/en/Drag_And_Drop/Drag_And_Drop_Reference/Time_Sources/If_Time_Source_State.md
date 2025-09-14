---
title: "If Time Source State"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Time_Sources/If_Time_Source_State.htm"
converted: "2025-09-14T03:59:28.394Z"
---

# ![Assign Variable Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Icons/If_State.png) If \[Time Source\] State

This action allows you to control other actions based on the state of the given Time Source.

It checks if the [Time Source State Constant](../../../GameMaker_Language/GML_Reference/Time_Sources/Time_Source_States.md) given in "State" is (or isn't) the state of the Time Source given in "Time Source".

#### Action Syntax:

![Assign Variable Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Syntax/If_TS_State.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Time Source | The Time Source to check the state of |
| Not | Enable this to invert the condition |
| State | The Time Source State Constant to check against |

#### Example:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Examples/Eg_Pause_TS.png)
This code block would ideally run in a Key Press event.

It checks if the state of a Time Source is "active", and in that case, it pauses that Time Source.

However, if the state is "paused", it starts the Time Source again.