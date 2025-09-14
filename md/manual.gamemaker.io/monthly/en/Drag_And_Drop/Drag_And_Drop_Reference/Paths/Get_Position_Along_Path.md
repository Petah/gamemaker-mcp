---
title: "Get Position Along Path"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Paths/Get_Position_Along_Path.htm"
converted: "2025-09-14T03:59:27.438Z"
---

# ![Get Position Along Path Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Paths/i_Paths_Get_Position_Along_Path.png) Get Position Along Path

This action will get the position of an instance along a path. The returned value is normalised from 0 - 1, so if you get a result of, for example, 0.5, the instance exactly in the middle of the path. Note that you must have called the [Start Following Path](Start_Following_Path.md) action to assign a path to the instance for this action to return a value other than 0. The returned value will be stored in the target variable you give, or you can flag the variable as a temporary local variable to create it and assign the value.

#### Action Syntax:

![Get Position Along Path Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Paths/a_Paths_Get_Position_Along_Path.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The target variable to hold the returned path position |

#### Example:

![Get Position Along Path Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Paths/e_Paths_Get_Position_Along_Path.png)The above action block code gets the current position on the assigned path for the instance and if it is less than 0.5 it is set to 0.5.