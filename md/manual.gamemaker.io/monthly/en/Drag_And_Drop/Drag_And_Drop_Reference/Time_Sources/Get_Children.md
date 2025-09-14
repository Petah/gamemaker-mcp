---
title: "Get Children"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Time_Sources/Get_Children.htm"
converted: "2025-09-14T03:59:28.249Z"
---

# ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Icons/Get_Children.png) Get Children

This action returns an array containing all the child Time Sources for the given Time Source.

The resulting array is stored in the Target variable.

#### Action Syntax:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Syntax/Get_Children.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Time Source | The Time Source to get the children of |
| Target | The variable to store the array |
| Temp | Whether the variable should be created as a temporary variable |

#### Example:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Examples/Eg_Get_Children.png)
This gets the children for a Time Source, and loops through the array to destroy each child Time Source.

At the end it destroys the parent Time Source.