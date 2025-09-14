---
title: "Destroy Time Source"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Time_Sources/Destroy_Time_Source.htm"
converted: "2025-09-14T03:59:28.236Z"
---

# ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Icons/Destroy_Time_Source.png) Destroy Time Source

This action destroys the given Time Source.

You cannot destroy a Time Source if it has existing [children](Get_Children.md). Destroy the child Time Sources first before destroying a parent ([example](Get_Children.md)).

#### Action Syntax:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Syntax/Destroy_Time_Source.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Time Source | The Time Source to destroy |

#### Example:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Examples/Eg_Destroy_TS.png)
This checks if a Time Source exists, and if it does, it destroys it.