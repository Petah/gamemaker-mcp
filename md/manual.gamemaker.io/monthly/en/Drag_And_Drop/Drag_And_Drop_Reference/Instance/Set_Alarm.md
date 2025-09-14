---
title: "Set Alarm Countdown"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance/Set_Alarm.htm"
converted: "2025-09-14T03:59:26.052Z"
---

# ![Set Alarm Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/i_Instance_Set_Alarm.png) Set Alarm Countdown

This action block sets a given alarm to countdown, and when the alarm reaches zero the associated [Alarm Event](../../../The_Asset_Editors/Object_Properties/Object_Events.md) will be triggered. You supply the alarm number from 0 to 11, and then the value to set the alarm to. The value used is the number of "game steps" that you want to pass before the alarm event is triggered, and you can set this to be relative to the current alarm value (adding or subtracting to the current value). Note that the value must be an integer value, and you can set it to -1 to stop the alarm. Note that when an alarm counts down, the event is run when it reaches 0, but the alarm then counts down to -1 to show that it has finished. Setting an alarm to 0 will _not_ run the event, since it will then count down to -1 next step, so to run an alarm immediately it should be set to 1. Note that you can set additional alarms in the same action by clicking the plus icon ![Expand Arguments Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png) beside the action.

#### Action Syntax:

![Set Alarm Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/a_Instance_Set_Alarm.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Alarm | The alarm to set (the corresponding Alarm Event will be triggered when it reaches 0). |
| Countdown | The count down value in game steps. |

#### Example:

![Set Alarm Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/a_Instance_Set_Alarm.png)The above action block code creates a local (temporary) variable and stores the current value of the alarm\[0\]. This is then checked and if it is less than 0, the alarm is set to 60.