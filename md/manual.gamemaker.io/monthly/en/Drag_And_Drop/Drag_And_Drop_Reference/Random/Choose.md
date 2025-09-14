---
title: "Choose"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Random/Choose.htm"
converted: "2025-09-14T03:59:27.533Z"
---

# ![Choose Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/i_Mathematics_Choose.png) Choose

With this action you can give a number of different options (this can be a real number, a string, resource ID or a constant) from which the action will choose one to return. You can add additional options by clicking the plus icon  ![Expand Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png)beside the action, and giving another value that could be returned. The returned value will then be stored in the target variable which can have been created previously or can be a new temporary local one (if you check the "Temp" check-box).

#### Action Syntax:

![Choose Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/a_Mathematics_Choose.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Option | The option that can be returned by the choose action. |

#### Example:

![Choose Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/e_Mathematics_Choose.png)The above action block code chooses one of four room resources and stores the returned ID in a temporary local variable. This is then used to change the room.