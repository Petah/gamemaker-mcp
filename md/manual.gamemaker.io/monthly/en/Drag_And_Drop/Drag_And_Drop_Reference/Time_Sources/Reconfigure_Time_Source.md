---
title: "Reconfigure Time Source"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Time_Sources/Reconfigure_Time_Source.htm"
converted: "2025-09-14T03:59:28.439Z"
---

# ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Icons/Reconfigure_Time_Source.png) Reconfigure Time Source

This action allows you to change the settings for an existing Time Source, specified in the "Time Source" field.

The settings supplied here are the same as [Create Time Source](Create_Time_Source.md), except for the parent.

It will reset and deactivate the Time Source so you have to start it again.

#### Action Syntax:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Syntax/Reconfig_TS.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Time Source | The Time Source to reconfigure |
| Period | The period length of the Time Source, how long it takes to expire |
| Units | The units that the period is expressed in (seconds or frames) |
| Callback | The method to call when the Time Source expires |
| Arguments | OPTIONAL An array containing the arguments to pass into the callback function |
| Repetitions | OPTIONAL How many times the Time Source should run in total, or -1 for indefinite repetition |
| Expiry Type | OPTIONAL The expiry type for the Time Source |