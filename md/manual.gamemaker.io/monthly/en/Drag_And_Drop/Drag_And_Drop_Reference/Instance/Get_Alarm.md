---
title: "Get Alarm Countdown"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance/Get_Alarm.htm"
converted: "2025-09-14T03:59:25.962Z"
---

# ![Get ALarm Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/i_Instance_Get_Alarm.png) Get Alarm Countdown

This action block retrieves the value of an alarm countdown and stores it in the given target variable. If you flag the target variable as "Temp" then this will create a new temporary (local) variable to hold the return value for you, as shown in the example below.

#### Action Syntax:

![Get Alarm Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/a_Instance_Get_Alarm.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Alarm | The alarm to get. |
| Target | The target variable to use to store the alarm value. |

#### Example:

![Get Alarm Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/e_Instance_Get_Alarm.png)The above action block code creates a local (temporary) variable and stores the current value of the alarm\[0\]. This is then checked and if it is less than 0, the alarm is set to 60.