---
title: "Get Score"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance_Vars/Get_Score.htm"
converted: "2025-09-14T03:59:26.216Z"
---

# ![Get Score Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/i_IV_Get_Score.png) Get Score

You can use this action to retrieve the value of the instance variable created for the "score". You supply the target variable to store the returned "score" value (which can be flagged as a temporary local variable), but note that if the variable has not been set previously (using [Set Score](Set_Score.md)) then the variable will be created for you and the action will return 0 (unlike regular instance variables which will give an error if you try to access them without having set them first).

#### Action Syntax:

![Get Score Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/a_IV_Get_Score.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The target variable to store the returned "score" value (can be flagged as a temporary local variable) |

#### Example:

![Get Score Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/e_IV_Get_Score.png)The above action block code will retrieve the current score value and store it in a temporary local variable. This variable is then converted into a string and stored in another temporary local variable before being drawn to the screen.