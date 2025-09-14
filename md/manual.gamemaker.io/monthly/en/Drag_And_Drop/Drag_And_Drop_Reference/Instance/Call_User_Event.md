---
title: "Call User Event"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance/Call_User_Event.htm"
converted: "2025-09-14T03:59:25.894Z"
---

# ![Call Use Event Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/i_Instance_Call_User_Event.png) Call User Event

With this action you can call any of the 12 available [Other - User Events](../../../The_Asset_Editors/Object_Properties/Object_Events.md). A User Event is one that you can add code or actions to, and then call at any time using this action, making them custom object events.

#### Action Syntax:

![Call Event Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/a_Instance_Call_User_Event.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Event | The number of the user event to call (0 - 11). |

#### Example:

![Call Event Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance/e_Instance_Call_User_Event.png)The above action block code checks a variable and then calls either User Event \[0\] or User Event \[1\] depending on whether the check evaluates to true or false.