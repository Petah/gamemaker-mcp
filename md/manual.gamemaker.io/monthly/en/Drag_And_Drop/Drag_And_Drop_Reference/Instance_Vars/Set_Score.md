---
title: "Set Score"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance_Vars/Set_Score.htm"
converted: "2025-09-14T03:59:26.323Z"
---

# ![Set Score Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/i_IV_Set_Score.png) Set Score

With this action you can create or set an instance variable for score. You supply the value to either set the score variable to or to add to the score variable (if you tick the _relative_ checkbox then the value will be added to the current "score" value). Note that unlike regular instance variables the variable name for "score" is stored internally so to retrieve the score value you need to use the action [Get Score](Get_Score.md).

#### Action Syntax:

![Set Score Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/a_IV_Set_Score.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Score | The amount to set the score to (or to add on to the score if relative is checked) |

#### Example:

![Set Score Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/e_IV_Set_Score.png)The above action block code will check to see if the room is the first in the game and if it is it sets up "score", "lives" and "health" variables for the instance.