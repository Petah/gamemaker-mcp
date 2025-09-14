---
title: "Get Health"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance_Vars/Get_Health.htm"
converted: "2025-09-14T03:59:26.189Z"
---

# ![Get Health Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/i_IV_Get_Health.png) Get Health

You can use this action to retrieve the value of the instance variable created for the "health" of the object. You supply the target variable to store the returned "health" value (which can be flagged as a temporary local variable), but note that if the variable has not been set previously (using [Set Health](Set_Health.md)) then the variable will be created for you and the action will return 0 (unlike regular instance variables which will give an error if you try to access them without having set them first).

#### Action Syntax:

![Get Health Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/a_IV_Get_Health.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The target variable to store the returned "health" value (can be flagged as a temporary local variable) |

#### Example:

![Get Health Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/e_IV_Get_Health.png)The above action block code will retrieve the value for "health" and store it in a temporary local variable. This variable is then used to draw a healthbar for the instance.